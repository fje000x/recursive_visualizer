require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy — required on Render (behind a reverse proxy)
app.set('trust proxy', 1);

// JWT secret — use env var or generate a persistent one
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
const JWT_EXPIRES_IN = '7d';
if (!process.env.JWT_SECRET) {
  console.warn('⚠ No JWT_SECRET env var set. Using random secret (tokens won\'t survive restarts).');
}

// ── Database setup (SQLite — zero config, file-based) ──
const db = new Database(path.join(__dirname, 'data.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL CHECK(type IN ('bug', 'feedback', 'feature', 'problem-request')),
    email TEXT,
    problem_id TEXT,
    message TEXT NOT NULL,
    user_agent TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS signups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE COLLATE NOCASE,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    display_name TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );
`);

// ── Middleware ──
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// CORS — allow your frontend
const allowedOrigins = [
  'https://algoflowz.com',
  'https://www.algoflowz.com',
  'https://fje000x.github.io',
  process.env.FRONTEND_URL,
  'http://localhost:8765',
  'http://127.0.0.1:8765',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:5501',
  'http://127.0.0.1:5501',
  'http://localhost:3000',
  'http://localhost:8080'
].filter(Boolean);
app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (curl, Postman, server-to-server)
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    // Reject silently instead of throwing (prevents server crash)
    console.warn(`⚠ CORS blocked origin: ${origin}`);
    cb(null, false);
  }
}));

// Rate limiting — 10 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Try again in a minute.' }
});
app.use('/api', limiter);

// ── Email via Resend API (HTTP-based, works on Render free tier) ──
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_TO = process.env.EMAIL_TO;
if (!RESEND_API_KEY) {
  console.warn('⚠ No RESEND_API_KEY set. Email notifications disabled.');
  console.warn('  Reports will still be saved to the database.');
} else {
  console.log('✓ Resend API key detected — email notifications enabled');
}

// ── Helper: send notification email via Resend ──
async function sendNotification(subject, html) {
  if (!RESEND_API_KEY) return;
  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'AlgoFlowz <onboarding@resend.dev>',
        to: [EMAIL_TO || 'delivered@resend.dev'],
        subject,
        html
      })
    });
    if (!resp.ok) {
      const errBody = await resp.text();
      console.error('Resend API error:', resp.status, errBody);
    }
  } catch (err) {
    console.error('Email send failed:', err.message);
  }
}

// ── Auth rate limiter (stricter: 5 attempts per 15 min) ──
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts. Try again in 15 minutes.' }
});

// ── JWT helper: generate token ──
function generateToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// ── Auth middleware: verify JWT ──
function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required.' });
  }
  try {
    const decoded = jwt.verify(header.slice(7), JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

// ── Routes ──

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Auth Routes ──

// POST /api/auth/signup — create a new account
app.post('/api/auth/signup', authLimiter, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate username
    if (!username || typeof username !== 'string' || username.trim().length < 3) {
      return res.status(400).json({ error: 'Username must be at least 3 characters.' });
    }
    if (username.trim().length > 30) {
      return res.status(400).json({ error: 'Username must be 30 characters or less.' });
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
      return res.status(400).json({ error: 'Username can only contain letters, numbers, and underscores.' });
    }

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email required.' });
    }

    // Validate password
    if (!password || password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }
    if (password.length > 128) {
      return res.status(400).json({ error: 'Password must be 128 characters or less.' });
    }

    // Check if username or email already taken
    const existing = db.prepare(
      'SELECT id FROM users WHERE username = ? OR email = ?'
    ).get(username.trim().toLowerCase(), email.trim().toLowerCase());

    if (existing) {
      return res.status(409).json({ error: 'Username or email already taken.' });
    }

    // Hash password with argon2
    const passwordHash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 65536,  // 64 MB
      timeCost: 3,
      parallelism: 1
    });

    // Insert user
    const stmt = db.prepare(
      'INSERT INTO users (username, email, password_hash, display_name) VALUES (?, ?, ?, ?)'
    );
    const result = stmt.run(
      username.trim().toLowerCase(),
      email.trim().toLowerCase(),
      passwordHash,
      username.trim()  // display_name defaults to username
    );

    const user = { id: result.lastInsertRowid, username: username.trim().toLowerCase(), email: email.trim().toLowerCase() };
    const token = generateToken(user);

    // Notify
    sendNotification(
      '[AlgoFlowz] New User Signup',
      `<p>New user: <b>${username}</b> (${email})</p>`
    );

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: username.trim()
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// POST /api/auth/login — log in with username/email + password
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { login, password } = req.body;

    // login can be username or email
    if (!login || !password) {
      return res.status(400).json({ error: 'Username/email and password required.' });
    }

    // Find user by username or email
    const user = db.prepare(
      'SELECT * FROM users WHERE username = ? OR email = ?'
    ).get(login.trim().toLowerCase(), login.trim().toLowerCase());

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Verify password
    const valid = await argon2.verify(user.password_hash, password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = generateToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: user.display_name
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// GET /api/auth/me — get current user (requires auth)
app.get('/api/auth/me', authenticate, (req, res) => {
  const user = db.prepare(
    'SELECT id, username, email, display_name, created_at FROM users WHERE id = ?'
  ).get(req.user.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  res.json({
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      displayName: user.display_name,
      createdAt: user.created_at
    }
  });
});

// POST /api/report — submit a bug report / feedback
app.post('/api/report', (req, res) => {
  const { type, email, problemId, message } = req.body;

  // Validate
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return res.status(400).json({ error: 'Message must be at least 5 characters.' });
  }
  if (!['bug', 'feedback', 'feature', 'problem-request'].includes(type)) {
    return res.status(400).json({ error: 'Type must be bug, feedback, feature, or problem-request.' });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars).' });
  }

  // Save to DB
  const stmt = db.prepare(
    'INSERT INTO reports (type, email, problem_id, message, user_agent) VALUES (?, ?, ?, ?, ?)'
  );
  const result = stmt.run(
    type,
    email || null,
    problemId || null,
    message.trim(),
    req.headers['user-agent'] || null
  );

  // Send email notification
  sendNotification(
    `[AlgoFlowz ${type.toUpperCase()}] ${problemId ? 'Problem #' + problemId : 'General'}`,
    `
      <h3>${type.toUpperCase()} Report</h3>
      <p><b>Problem:</b> ${problemId || 'N/A'}</p>
      <p><b>From:</b> ${email || 'anonymous'}</p>
      <p><b>Message:</b></p>
      <blockquote style="background:#f5f5f5;padding:12px;border-left:4px solid #3b82f6;margin:8px 0;">
        ${message.trim().replace(/\n/g, '<br>')}
      </blockquote>
      <p style="color:#888;font-size:12px;">Report #${result.lastInsertRowid}</p>
    `
  );

  res.status(201).json({ success: true, id: result.lastInsertRowid });
});

// POST /api/signup — email signup (for updates, newsletter, etc.)
app.post('/api/signup', (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required.' });
  }

  try {
    const stmt = db.prepare('INSERT INTO signups (email) VALUES (?)');
    stmt.run(email.trim().toLowerCase());

    sendNotification(
      '[AlgoFlowz] New Signup',
      `<p>New email signup: <b>${email}</b></p>`
    );

    res.status(201).json({ success: true });
  } catch (err) {
    if (err.message.includes('UNIQUE constraint')) {
      return res.json({ success: true, message: 'Already signed up!' });
    }
    throw err;
  }
});

// GET /api/stats — basic counts (optional, for your dashboard)
app.get('/api/stats', (req, res) => {
  const reports = db.prepare('SELECT COUNT(*) as count FROM reports').get();
  const signups = db.prepare('SELECT COUNT(*) as count FROM signups').get();
  const byType = db.prepare(
    "SELECT type, COUNT(*) as count FROM reports GROUP BY type"
  ).all();
  res.json({
    totalReports: reports.count,
    totalSignups: signups.count,
    reportsByType: byType
  });
});

// ── Error handler ──
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong.' });
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`\n🚀 AlgoFlowz API running on http://localhost:${PORT}`);
  console.log(`   POST /api/auth/signup  — create account`);
  console.log(`   POST /api/auth/login   — log in`);
  console.log(`   GET  /api/auth/me      — current user`);
  console.log(`   POST /api/report       — submit bug/feedback`);
  console.log(`   POST /api/signup       — email signup`);
  console.log(`   GET  /api/health       — health check`);
  console.log(`   GET  /api/stats        — report/signup counts\n`);
});
