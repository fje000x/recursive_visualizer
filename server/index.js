require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

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
`);

// ── Middleware ──
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// CORS — allow your frontend
const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://algoflowz.com',
  'http://localhost:8765',
  'http://127.0.0.1:8765',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:5501',
  'http://127.0.0.1:5501',
  'http://localhost:3000'
];
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

// ── Email transporter ──
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  // Verify connection
  transporter.verify().then(() => {
    console.log('✓ Email transporter ready');
  }).catch(err => {
    console.warn('⚠ Email transporter failed to verify:', err.message);
    console.warn('  Reports will still be saved to the database.');
  });
} else {
  console.warn('⚠ No EMAIL_USER/EMAIL_PASS set. Email notifications disabled.');
  console.warn('  Reports will still be saved to the database.');
}

// ── Helper: send notification email ──
async function sendNotification(subject, html) {
  if (!transporter) return;
  try {
    await transporter.sendMail({
      from: `"AlgoFlowz" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject,
      html
    });
  } catch (err) {
    console.error('Email send failed:', err.message);
  }
}

// ── Routes ──

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
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
  console.log(`   POST /api/report  — submit bug/feedback`);
  console.log(`   POST /api/signup  — email signup`);
  console.log(`   GET  /api/health  — health check`);
  console.log(`   GET  /api/stats   — report/signup counts\n`);
});
