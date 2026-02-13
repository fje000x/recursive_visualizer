const problemDB = {
    "111": {
        name: "Minimum Depth of Binary Tree",
        tree: {
            v: 3, id: 'n3', x: 0, y: -160,
            left: { v: 9, id: 'n9', x: -180, y: -20, left: null, right: null },
            right: { 
                v: 20, id: 'n20', x: 180, y: -20,
                left: { v: 15, id: 'n15', x: 80, y: 120, left: null, right: null },
                right: { v: 7, id: 'n7', x: 280, y: 120, left: null, right: null }
            }
        },
        algorithms: {
            recursive: {
                name: "Recursive DFS",
                code: [
                    "def minDepth(root):",
                    "    if not root: return 0",
                    "    if not root.left and not root.right:",
                    "        return 1",
                    "    if not root.left:",
                    "        return minDepth(root.right) + 1",
                    "    if not root.right:",
                    "        return minDepth(root.left) + 1",
                    "    left = minDepth(root.left)",
                    "    right = minDepth(root.right)",
                    "    return min(left, right) + 1"
                ],
                indentation: [0, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)",
                generateHistory: function(tree) {
                    return generateRecursiveHistory(tree, true);
                }
            },
            bfs: {
                name: "BFS Queue",
                code: [
                    "def minDepth(root):",
                    "    if not root: return 0",
                    "    queue = [(root, 1)]",
                    "    while queue:",
                    "        node, depth = queue.pop(0)",
                    "        if not node.left and not node.right:",
                    "            return depth",
                    "        if node.left:",
                    "            queue.append((node.left, depth + 1))",
                    "        if node.right:",
                    "            queue.append((node.right, depth + 1))"
                ],
                indentation: [0, 1, 1, 1, 2, 2, 3, 2, 3, 2, 3],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function(tree, isMin) {
                    return generateBFSHistory(tree, true);
                }
            },
            iterative: {
                name: "Iterative DFS",
                code: [
                    "def minDepth(root):",
                    "    if not root: return 0",
                    "    stack = [(root, 1)]",
                    "    min_depth = float('inf')",
                    "    while stack:",
                    "        node, depth = stack.pop()",
                    "        if not node.left and not node.right:",
                    "            min_depth = min(min_depth, depth)",
                    "        if node.left:",
                    "            stack.append((node.left, depth + 1))",
                    "        if node.right:",
                    "            stack.append((node.right, depth + 1))",
                    "    return min_depth"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 3, 2, 3, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function(tree) {
                    return generateIterativeHistory(tree, true);
                }
            }
        }
    },
    "104": {
        name: "Maximum Depth of Binary Tree",
        tree: {
            v: 3, id: 'n3', x: 0, y: -160,
            left: { v: 9, id: 'n9', x: -180, y: -20, left: null, right: null },
            right: { 
                v: 20, id: 'n20', x: 180, y: -20,
                left: { v: 15, id: 'n15', x: 80, y: 120, left: null, right: null },
                right: { v: 7, id: 'n7', x: 280, y: 120, left: null, right: null }
            }
        },
        algorithms: {
            recursive: {
                name: "Recursive DFS",
                code: [
                    "def maxDepth(root):",
                    "    if not root:",
                    "        return 0",
                    "    left_depth = maxDepth(root.left)",
                    "    right_depth = maxDepth(root.right)",
                    "    return max(left_depth, right_depth) + 1"
                ],
                indentation: [0, 1, 2, 1, 1, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)",
                generateHistory: function(tree) {
                    return generateMaxDepthRecursiveHistory(tree);
                }
            },
            bfs: {
                name: "BFS Level Order",
                code: [
                    "def maxDepth(root):",
                    "    if not root: return 0",
                    "    queue = [root]",
                    "    depth = 0",
                    "    while queue:",
                    "        depth += 1",
                    "        level_size = len(queue)",
                    "        for _ in range(level_size):",
                    "            node = queue.pop(0)",
                    "            if node.left:",
                    "                queue.append(node.left)",
                    "            if node.right:",
                    "                queue.append(node.right)",
                    "    return depth"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function(tree) {
                    return generateMaxDepthBFSHistory(tree);
                }
            },
            iterative: {
                name: "Iterative DFS",
                code: [
                    "def maxDepth(root):",
                    "    if not root: return 0",
                    "    stack = [(root, 1)]",
                    "    max_depth = 0",
                    "    while stack:",
                    "        node, depth = stack.pop()",
                    "        max_depth = max(max_depth, depth)",
                    "        if node.left:",
                    "            stack.append((node.left, depth + 1))",
                    "        if node.right:",
                    "            stack.append((node.right, depth + 1))",
                    "    return max_depth"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 2, 3, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function(tree) {
                    return generateMaxDepthIterativeHistory(tree);
                }
            }
        }
    }
};

let currentProbId = "111";
let currentAlgorithm = "recursive";
let history = [];
let currentStep = 0;
let autoPlayInterval = null;
let autoPlaySpeed = 250;
let baseCasesCount = 0;


const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const videoCache = {};
const CACHE_DURATION = 5 * 60 * 1000;
let isFetching = false;
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 5000;

// YouTube Modal Functions
function openYouTubeModal() {
    const modal = document.getElementById('youtubeModal');
    modal.classList.add('show');
    getYouTubeRecommendations();
}

function closeYouTubeModal() {
    const modal = document.getElementById('youtubeModal');
    modal.classList.remove('show');
}

function showLoadingRecommendations() {
    const youtubeContent = document.getElementById('youtubeContent');
    youtubeContent.innerHTML = `
        <div class="youtube-loading">
            <div class="loading-spinner"></div>
            <p>Finding relevant YouTube videos...</p>
        </div>
    `;
}

// Search & Problem List Functions
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchDropdown = document.getElementById('searchDropdown');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            searchDropdown.style.display = 'none';
            return;
        }
        
        const results = Object.entries(problemDB).filter(([id, prob]) => 
            prob.name.toLowerCase().includes(query) || id.includes(query)
        );
        
        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="search-result">No problems found</div>';
            searchDropdown.style.display = 'block';
            return;
        }
        
        searchDropdown.innerHTML = results.map(([id, prob]) => `
            <div class="search-result" onclick="selectProblem('${id}')">
                <div class="search-result-title">${prob.name}</div>
                <div class="search-result-id">#${id}</div>
            </div>
        `).join('');
        searchDropdown.style.display = 'block';
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar-wrapper')) {
            searchDropdown.style.display = 'none';
        }
    });
}

function selectProblem(probId) {
    currentProbId = probId;
    currentAlgorithm = 'recursive';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchDropdown').style.display = 'none';
    init();
}

function openProblemModal() {
    const modal = document.getElementById('problemModal');
    modal.classList.add('show');
    renderProblemList();
}

function closeProblemModal() {
    const modal = document.getElementById('problemModal');
    modal.classList.remove('show');
}

function renderProblemList() {
    const problemList = document.getElementById('problemList');
    problemList.innerHTML = Object.entries(problemDB).map(([id, prob]) => `
        <div class="problem-item" onclick="selectProblem('${id}'); closeProblemModal();">
            <div class="problem-item-left">
                <div class="problem-item-id">#${id}</div>
                <div class="problem-item-name">${prob.name}</div>
            </div>
            <div class="problem-item-right">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
}

// History Generation for Maximum Depth (Different from Minimum Depth)
function generateMaxDepthRecursiveHistory(tree) {
    const h = [];
    let stack = [];
    let doneMap = {};
    let callId = 0;
    
    function record(node, line, msg, currentTask = null, extra = {}) {
        h.push({ 
            nodeId: node?.id || null, 
            line, 
            stack: JSON.parse(JSON.stringify(stack)), 
            done: JSON.parse(JSON.stringify(doneMap)), 
            msg, 
            currentTask, 
            ...extra 
        });
    }

    function dfs(node, parent) {
        if (!node) {
            record(null, 2, `Node is None, returning 0`, null, { frameId: ++callId });
            return 0;
        }
        
        const frameId = ++callId;
        doneMap[node.id] = { L: false, R: false };
        const frame = { 
            id: frameId,
            v: node.v, 
            l: "PENDING", 
            r: "PENDING", 
            nodeId: node.id,
            status: "ACTIVE",
            parentId: parent?.id || null
        };
        stack.push(frame);
        
        record(node, 1, `Entering maxDepth(${node.v})`, null, { frameId });

        // Base case: leaf node
        if (!node.left && !node.right) {
            doneMap[node.id].L = true; 
            doneMap[node.id].R = true;
            frame.l = "LEAF";
            frame.r = "LEAF";
            frame.status = "COMPLETED";
            record(node, 2, `✓ Leaf node ${node.v} found, returning 1`, null, { 
                isBase: true,
                baseCaseValue: 1,
                frameId
            });
            stack.pop();
            return 1;
        }
        
        // Process left subtree
        record(node, 3, `Calculating left subtree depth...`, 'L', { frameId });
        doneMap[node.id].L = true;
        frame.l = "PROCESSING";
        const leftDepth = dfs(node.left, node);
        frame.l = leftDepth;
        
        // Process right subtree
        record(node, 4, `Calculating right subtree depth...`, 'R', { frameId });
        doneMap[node.id].R = true;
        frame.r = "PROCESSING";
        const rightDepth = dfs(node.right, node);
        frame.r = rightDepth;
        
        const result = Math.max(leftDepth, rightDepth) + 1;
        
        record(node, 5, `max(${leftDepth}, ${rightDepth}) + 1 = ${result}`, null, { frameId });
        
        frame.status = "COMPLETED";
        stack.pop();
        
        if (parent) {
            record(node, 5, `↑ Returning depth ${result} to parent node ${parent.v}`, null, { 
                arrowTo: parent, 
                val: result,
                returnValue: result,
                frameId
            });
        }
        return result;
    }
    
    const result = dfs(tree, null);
    
    h.push({
        nodeId: null,
        line: -1,
        stack: [],
        done: {},
        msg: `✓ Algorithm complete! Maximum depth is ${result}`,
        isComplete: true
    });
    
    return h;
}

function generateMaxDepthBFSHistory(tree) {
    const h = [];
    let queue = [tree];
    let depth = 0;
    let visited = new Set();
    let step = 0;
    
    function record(node, line, msg, extra = {}) {
        h.push({
            nodeId: node?.id || null,
            line,
            queue: JSON.parse(JSON.stringify(queue.map(q => q.v))),
            visited: [...visited],
            currentDepth: depth,
            msg,
            ...extra
        });
    }
    
    record(null, 1, `Initializing BFS for maximum depth calculation...`);
    
    if (!tree) {
        record(null, 2, `Tree is empty, returning 0`);
        return h;
    }
    
    record(null, 3, `Queue initialized with root node ${tree.v}`);
    
    while (queue.length > 0 && step < 50) {
        step++;
        depth++;
        
        record(null, 5, `Processing level ${depth} with ${queue.length} node(s)`);
        
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            record(node, 8, `Processing node ${node.v} at level ${depth}`, {
                currentQueueItem: node.id,
                levelIndex: i + 1,
                levelTotal: levelSize
            });
            
            visited.add(node.id);
            
            if (node.left) {
                queue.push(node.left);
                record(node, 11, `→ Adding left child ${node.left.v} to queue for next level`);
            }
            
            if (node.right) {
                queue.push(node.right);
                record(node, 13, `→ Adding right child ${node.right.v} to queue for next level`);
            }
        }
        
        record(null, 6, `Completed level ${depth}. Queue size for next level: ${queue.length}`);
    }
    
    record(null, 15, `✓ All levels processed. Maximum depth is ${depth}`);
    
    h.push({
        nodeId: null,
        line: -1,
        queue: [],
        visited: [...visited],
        currentDepth: depth,
        msg: `✓ BFS complete! Maximum depth is ${depth}.`,
        isComplete: true
    });
    
    return h;
}

function generateMaxDepthIterativeHistory(tree) {
    const h = [];
    let stack = [{node: tree, depth: 1}];
    let visited = new Set();
    let maxDepth = 0;
    let step = 0;
    
    function record(node, line, msg, extra = {}) {
        h.push({
            nodeId: node?.id || null,
            line,
            stack: JSON.parse(JSON.stringify(stack.map(s => ({v: s.node.v, depth: s.depth})))),
            visited: [...visited],
            maxDepth: maxDepth,
            msg,
            ...extra
        });
    }
    
    record(null, 1, `Initializing iterative DFS for maximum depth...`);
    
    if (!tree) {
        record(null, 2, `Tree is empty, returning 0`);
        return h;
    }
    
    while (stack.length > 0 && step < 50) {
        step++;
        const {node, depth} = stack.pop();
        
        record(node, 6, `Processing node ${node.v} at depth ${depth}`, {
            currentStackItem: node.id
        });
        
        visited.add(node.id);
        
        maxDepth = Math.max(maxDepth, depth);
        record(node, 7, `Updated maximum depth to ${maxDepth}`);
        
        if (node.right) {
            stack.push({node: node.right, depth: depth + 1});
            record(node, 10, `→ Adding right child ${node.right.v} to stack (depth: ${depth + 1})`);
        }
        
        if (node.left) {
            stack.push({node: node.left, depth: depth + 1});
            record(node, 12, `→ Adding left child ${node.left.v} to stack (depth: ${depth + 1})`);
        }
    }
    
    record(null, 14, `✓ DFS complete! Maximum depth is ${maxDepth}`);
    
    h.push({
        nodeId: null,
        line: -1,
        stack: [],
        visited: [...visited],
        maxDepth: maxDepth,
        msg: `✓ Iterative DFS complete! Maximum depth is ${maxDepth}.`,
        isComplete: true
    });
    
    return h;
}

// Existing history functions for Minimum Depth
function generateRecursiveHistory(tree, isMin = true) {
    const h = [];
    let stack = [];
    let doneMap = {};
    let callId = 0;
    
    function record(node, line, msg, currentTask = null, extra = {}) {
        h.push({ 
            nodeId: node?.id || null, 
            line, 
            stack: JSON.parse(JSON.stringify(stack)), 
            done: JSON.parse(JSON.stringify(doneMap)), 
            msg, 
            currentTask, 
            ...extra 
        });
    }

    function dfs(node, parent) {
        if (!node) return 0;
        
        const frameId = ++callId;
        doneMap[node.id] = { L: false, R: false };
        const frame = { 
            id: frameId,
            v: node.v, 
            l: "PENDING", 
            r: "PENDING", 
            nodeId: node.id,
            status: "ACTIVE",
            parentId: parent?.id || null
        };
        stack.push(frame);
        
        record(node, isMin ? 1 : 0, `Entering minDepth(${node.v})`, null, { frameId });

        let res;
        if (!node.left && !node.right) {
            doneMap[node.id].L = true; 
            doneMap[node.id].R = true;
            frame.l = "LEAF";
            frame.r = "LEAF";
            frame.status = "COMPLETED";
            record(node, 3, `✓ Leaf node ${node.v} found, returning 1`, null, { 
                isBase: true,
                baseCaseValue: 1,
                frameId
            });
            res = 1;
        } else if (!node.left) {
            doneMap[node.id].L = true;
            frame.l = "NONE";
            record(node, 5, `→ Left child is null. Processing right subtree...`, 'R', { frameId });
            res = dfs(node.right, node) + 1;
        } else if (!node.right) {
            doneMap[node.id].R = true;
            frame.r = "NONE";
            record(node, 7, `→ Right child is null. Processing left subtree...`, 'L', { frameId });
            res = dfs(node.left, node) + 1;
        } else {
            record(node, 9, `→ Both children present. Processing left branch first...`, 'L', { frameId });
            doneMap[node.id].L = true;
            frame.l = "PROCESSING";
            const lVal = dfs(node.left, node);
            frame.l = lVal;
            
            record(node, 10, `← Left branch returned ${lVal}. Now processing right branch...`, 'R', { frameId });
            doneMap[node.id].R = true;
            frame.r = "PROCESSING";
            const rVal = dfs(node.right, node);
            frame.r = rVal;
            
            res = Math.min(lVal, rVal) + 1;
            record(node, 11, `✓ min(${lVal}, ${rVal}) + 1 = ${res}`, null, { frameId });
        }
        
        frame.status = "COMPLETED";
        stack.pop();
        if (parent) {
            record(node, 11, `↑ Returning depth ${res} to parent node ${parent.v}`, null, { 
                arrowTo: parent, 
                val: res,
                returnValue: res,
                frameId
            });
        }
        return res;
    }
    
    dfs(tree, null);
    
    h.push({
        nodeId: null,
        line: -1,
        stack: [],
        done: {},
        msg: `✓ Algorithm complete! Minimum depth calculated successfully.`,
        isComplete: true
    });
    
    return h;
}

function generateBFSHistory(tree, isMin = true) {
    const h = [];
    let queue = [{node: tree, depth: 1}];
    let visited = new Set();
    let step = 0;
    
    function record(node, line, msg, extra = {}) {
        h.push({
            nodeId: node?.id || null,
            line,
            queue: JSON.parse(JSON.stringify(queue.map(q => ({v: q.node.v, depth: q.depth})))),
            visited: [...visited],
            msg,
            ...extra
        });
    }
    
    record(null, 1, `Initializing BFS for minimum depth...`);
    
    while (queue.length > 0 && step < 50) {
        step++;
        const current = queue[0];
        
        record(current.node, 5, `Processing node ${current.node.v} at depth ${current.depth}...`, {
            currentQueueItem: current.node.id
        });
        
        if (!current.node.left && !current.node.right) {
            record(current.node, 7, `✓ Leaf node found! Minimum depth is ${current.depth}`, {
                isBase: true,
                baseCaseValue: current.depth
            });
            break;
        }
        
        visited.add(current.node.id);
        queue.shift();
        
        if (current.node.left) {
            queue.push({node: current.node.left, depth: current.depth + 1});
            record(current.node, 9, `→ Adding left child ${current.node.left.v} to queue (depth: ${current.depth + 1})`);
        }
        
        if (current.node.right) {
            queue.push({node: current.node.right, depth: current.depth + 1});
            record(current.node, 11, `→ Adding right child ${current.node.right.v} to queue (depth: ${current.depth + 1})`);
        }
    }
    
    h.push({
        nodeId: null,
        line: -1,
        queue: [],
        visited: [...visited],
        msg: `✓ BFS complete! Minimum depth found.`,
        isComplete: true
    });
    
    return h;
}

function generateIterativeHistory(tree, isMin = true) {
    const h = [];
    let stack = [{node: tree, depth: 1}];
    let visited = new Set();
    let bestDepth = isMin ? Infinity : 0;
    let step = 0;
    
    function record(node, line, msg, extra = {}) {
        h.push({
            nodeId: node?.id || null,
            line,
            stack: JSON.parse(JSON.stringify(stack.map(s => ({v: s.node.v, depth: s.depth})))),
            visited: [...visited],
            bestDepth: bestDepth,
            msg,
            ...extra
        });
    }
    
    record(null, 1, `Initializing iterative DFS for minimum depth...`);
    
    while (stack.length > 0 && step < 50) {
        step++;
        const {node, depth} = stack.pop();
        
        record(node, 6, `Processing node ${node.v} at depth ${depth}...`, {
            currentStackItem: node.id
        });
        
        visited.add(node.id);
        
        if (!node.left && !node.right) {
            bestDepth = Math.min(bestDepth, depth);
            record(node, 9, `✓ Leaf node! Current best depth: ${bestDepth}`, {
                isBase: true,
                baseCaseValue: depth
            });
        }
        
        if (node.right) {
            stack.push({node: node.right, depth: depth + 1});
            record(node, 12, `→ Adding right child ${node.right.v} to stack (depth: ${depth + 1})`);
        }
        
        if (node.left) {
            stack.push({node: node.left, depth: depth + 1});
            record(node, 14, `→ Adding left child ${node.left.v} to stack (depth: ${depth + 1})`);
        }
    }
    
    record(null, 17, `✓ DFS complete! Minimum depth is ${bestDepth}`);
    
    h.push({
        nodeId: null,
        line: -1,
        stack: [],
        visited: [...visited],
        bestDepth: bestDepth,
        msg: `✓ Iterative DFS complete! Minimum depth is ${bestDepth}.`,
        isComplete: true
    });
    
    return h;
}

// YouTube Recommendation Functions (simplified)
async function getYouTubeRecommendations() {
    const youtubeContent = document.getElementById('youtubeContent');
    youtubeContent.innerHTML = `
        <div class="youtube-loading">
            <div class="loading-spinner"></div>
            <p>Finding relevant YouTube videos...</p>
        </div>
    `;
    
    // Simulate API call delay
    setTimeout(() => {
        const problem = problemDB[currentProbId];
        const algorithm = problem.algorithms[currentAlgorithm];
        const isMinDepth = problem.name.includes('Minimum');
        
        const videos = [
            {
                title: "Binary Tree Algorithms for Technical Interviews - freeCodeCamp",
                url: "https://www.youtube.com/watch?v=fAAZixBzIAI",
                reason: "Comprehensive guide to binary tree algorithms and traversal methods"
            },
            {
                title: "Tree Data Structure | Illustrated Data Structures - Gaurav Sen",
                url: "https://www.youtube.com/watch?v=qH6yxkw0u78",
                reason: "Builds fundamental understanding of tree properties and operations"
            }
        ];
        
        if (algorithm.name.includes('DFS')) {
            videos.push({
                title: "Recursion for Beginners - CS Dojo",
                url: "https://www.youtube.com/watch?v=B0NtAFf4bvU",
                reason: "Essential for understanding DFS tree traversal and recursion"
            });
        }
        
        if (algorithm.name.includes('BFS')) {
            videos.push({
                title: "Breadth First Search - Computerphile",
                url: "https://www.youtube.com/watch?v=uOlJDhRPfpa",
                reason: "Excellent explanation of BFS algorithm with visual examples"
            });
        }
        
        if (isMinDepth) {
            videos.push({
                title: "Minimum Depth of Binary Tree - NeetCode",
                url: "https://www.youtube.com/watch?v=QaaclTlZqAY",
                reason: "Direct solution explanation and walkthrough for minimum depth problem"
            });
        } else {
            videos.push({
                title: "Maximum Depth of Binary Tree - take U forward",
                url: "https://www.youtube.com/watch?v=eD3tmO66aBA",
                reason: "Step-by-step explanation of maximum depth problem with code walkthrough"
            });
        }
        
        displayYouTubeVideos(videos);
    }, 1000);
}

function displayYouTubeVideos(videos) {
    const youtubeContent = document.getElementById('youtubeContent');
    
    let videosHTML = '<div class="video-grid">';
    
    videos.forEach((video) => {
        let videoUrl = video.url || `https://www.youtube.com/results?search_query=${encodeURIComponent(video.title || problemDB[currentProbId].name)}`;
        if (!videoUrl.startsWith('http')) {
            videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(video.title || problemDB[currentProbId].name)}`;
        }
        
        const displayUrl = videoUrl.replace('https://', '').replace('http://', '');
        
        videosHTML += `
            <div class="video-card">
                <div class="video-card-header">
                    <i class="fab fa-youtube"></i>
                    <h4 class="video-title">${video.title || "Untitled Video"}</h4>
                </div>
                <div class="video-card-body">
                    <div class="video-reason">${video.reason || "Helpful for learning this topic"}</div>
                    <div class="video-url">
                        <a href="${videoUrl}" target="_blank" class="video-link">
                            <i class="fas fa-external-link-alt"></i> ${displayUrl}
                        </a>
                    </div>
                </div>
                <div class="video-card-footer">
                    <button onclick="window.open('${videoUrl}', '_blank')" class="watch-now-btn">
                        <i class="fas fa-play"></i> Watch Now
                    </button>
                </div>
            </div>
        `;
    });
    
    videosHTML += '</div>';
    youtubeContent.innerHTML = videosHTML;
}

// Rendering Function
function render() {
    const state = history[currentStep];
    const engine = document.querySelector('.render-engine');
    
    // Highlight code lines
    document.querySelectorAll('.line').forEach((lineEl, index) => {
        lineEl.classList.remove('active', 'base-hit');
        if (state.line === index) {
            lineEl.classList.add(state.isBase ? 'base-hit' : 'active');
        }
    });
    
    // Update node states
    document.querySelectorAll('.node').forEach(nodeEl => {
        nodeEl.classList.remove('active', 'is-base', 'visited');
        if (nodeEl.id === state.nodeId) {
            nodeEl.classList.add('active');
            if (state.isBase) {
                nodeEl.classList.add('is-base');
                // Just the shaking animation, no modal
            }
        }
        if (state.visited?.includes(nodeEl.id)) {
            nodeEl.classList.add('visited');
        }
    });
    
    // Update console
    const consoleEl = document.getElementById('console');
    consoleEl.innerHTML = `<div class="console-line">${state.msg}</div>`;
    
    // Draw return arrows for recursive
    const svg = document.getElementById('svgLines');
    svg.querySelectorAll('.return-arrow, .return-val').forEach(el => el.remove());
    
    if (state.arrowTo) {
        const fromEl = document.getElementById(state.nodeId);
        const toEl = document.getElementById(state.arrowTo.id);
        
        if (fromEl && toEl) {
            const fx = parseFloat(fromEl.style.left) + 30;
            const fy = parseFloat(fromEl.style.top) + 30;
            const tx = parseFloat(toEl.style.left) + 30;
            const ty = parseFloat(toEl.style.top) + 30;
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const midX = (fx + tx) / 2;
            const midY = (fy + ty) / 2;
            const curve = 50;
            
            path.setAttribute("d", `M ${fx} ${fy} Q ${midX + curve} ${midY} ${tx} ${ty}`);
            path.setAttribute("class", "return-arrow");
            svg.appendChild(path);
            
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", midX + curve + 10);
            text.setAttribute("y", midY);
            text.setAttribute("class", "return-val");
            text.textContent = `${state.val} →`;
            svg.appendChild(text);
        }
    }
    
    // Update task labels for recursive
    document.querySelectorAll('.task-label span').forEach(span => {
        span.classList.remove('done', 'active-task');
    });
    
    if (state.done) {
        for (const [nodeId, tasks] of Object.entries(state.done)) {
            const leftSpan = document.getElementById(`L-${nodeId}`);
            const rightSpan = document.getElementById(`R-${nodeId}`);
            
            if (tasks.L && leftSpan) leftSpan.classList.add('done');
            if (tasks.R && rightSpan) rightSpan.classList.add('done');
            
            if (nodeId === state.nodeId) {
                if (state.currentTask === 'L' && leftSpan) leftSpan.classList.add('active-task');
                if (state.currentTask === 'R' && rightSpan) rightSpan.classList.add('active-task');
            }
        }
    }
    
    // Update queue visualization for BFS
    const queueContainer = document.getElementById('queueContainer');
    if (state.queue && state.queue.length > 0) {
        queueContainer.style.display = 'flex';
        queueContainer.innerHTML = `<span class="queue-label">Queue:</span>`;
        
        state.queue.forEach((item, index) => {
            const queueItem = document.createElement('div');
            queueItem.className = 'queue-item';
            queueItem.textContent = typeof item === 'object' ? `${item.v || item}${item.depth ? ` (d:${item.depth})` : ''}` : item;
            
            if (item.v === state.currentQueueItem || item === state.currentQueueItem) {
                queueItem.classList.add('current');
            }
            
            queueContainer.appendChild(queueItem);
        });
    } else {
        queueContainer.style.display = 'none';
        queueContainer.innerHTML = '';
    }
    
    // Update stack visualization
    updateStackVisualization(state);
    
    // Update stats
    updateStats(state);
    
    // Update progress
    const progress = ((currentStep + 1) / history.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('stepCounter').innerHTML = `
        <span class="step-label">STEP</span>
        <span class="step-numbers">${currentStep + 1}/${history.length}</span>
    `;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentStep === 0;
    document.getElementById('nextBtn').disabled = currentStep === history.length - 1;
}

function updateStackVisualization(state) {
    const stackList = document.getElementById('stackList');
    
    if (currentAlgorithm === 'recursive') {
        if (state.stack && state.stack.length > 0) {
            document.getElementById('stackLabel').textContent = 'CALL STACK & STATE';
            document.getElementById('activeCallsLabel').textContent = 'Active Calls:';
            document.getElementById('stackLegend').style.display = 'flex';
            
            stackList.innerHTML = '';
            
            [...state.stack].reverse().forEach(frame => {
                const div = document.createElement('div');
                div.className = 'stack-item';
                
                if (frame.status === "COMPLETED") {
                    div.classList.add('completed');
                } else if (frame.nodeId === state.nodeId) {
                    div.classList.add('active');
                }
                
                const leftStatus = getStatusDisplay(frame.l, frame.nodeId === state.nodeId && state.currentTask === 'L');
                const rightStatus = getStatusDisplay(frame.r, frame.nodeId === state.nodeId && state.currentTask === 'R');
                
                div.innerHTML = `
                    <div class="stack-header-row">
                        <div class="stack-function-name">${currentProbId === '111' ? 'minDepth' : 'maxDepth'}(node)</div>
                        <div class="stack-node-value">Value: ${frame.v}</div>
                    </div>
                    <div class="stack-details">
                        <div class="stack-detail">
                            <div class="detail-label">Left Child</div>
                            <div class="detail-value ${getStatusClass(frame.l)}">${leftStatus}</div>
                        </div>
                        <div class="stack-detail">
                            <div class="detail-label">Right Child</div>
                            <div class="detail-value ${getStatusClass(frame.r)}">${rightStatus}</div>
                        </div>
                    </div>
                `;
                
                stackList.appendChild(div);
            });
        } else {
            stackList.innerHTML = `
                <div class="empty-stack">
                    <div class="empty-state">
                        <div class="empty-icon">📭</div>
                        <div class="empty-text">Call stack is empty</div>
                        <div class="empty-subtext">Start stepping through to see function calls</div>
                    </div>
                </div>
            `;
        }
    } else if (currentAlgorithm === 'bfs') {
        document.getElementById('stackLabel').textContent = 'BFS QUEUE';
        document.getElementById('activeCallsLabel').textContent = 'Queue Size:';
        document.getElementById('stackLegend').style.display = 'none';
        
        if (state.queue && state.queue.length > 0) {
            stackList.innerHTML = '';
            
            state.queue.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'stack-item';
                
                if (item.v === state.currentQueueItem || item === state.currentQueueItem) {
                    div.classList.add('active');
                }
                
                const depth = item.depth || 'N/A';
                div.innerHTML = `
                    <div class="stack-header-row">
                        <div class="stack-function-name">Node ${typeof item === 'object' ? item.v : item}</div>
                        <div class="stack-node-value">Depth: ${depth}</div>
                    </div>
                    <div class="stack-details">
                        <div class="stack-detail">
                            <div class="detail-label">Status</div>
                            <div class="detail-value ${index === 0 ? 'processing' : 'pending'}">
                                ${index === 0 ? 'Processing...' : 'Waiting'}
                            </div>
                        </div>
                        <div class="stack-detail">
                            <div class="detail-label">Position</div>
                            <div class="detail-value">${index + 1}/${state.queue.length}</div>
                        </div>
                    </div>
                `;
                
                stackList.appendChild(div);
            });
        } else {
            stackList.innerHTML = `
                <div class="empty-stack">
                    <div class="empty-state">
                        <div class="empty-icon">📬</div>
                        <div class="empty-text">Queue is empty</div>
                        <div class="empty-subtext">Start stepping through to see queue operations</div>
                    </div>
                </div>
            `;
        }
    } else if (currentAlgorithm === 'iterative') {
        document.getElementById('stackLabel').textContent = 'DFS STACK';
        document.getElementById('activeCallsLabel').textContent = 'Stack Size:';
        document.getElementById('stackLegend').style.display = 'none';
        
        if (state.stack && state.stack.length > 0) {
            stackList.innerHTML = '';
            
            [...state.stack].reverse().forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'stack-item';
                
                if (item.node?.v === state.currentStackItem) {
                    div.classList.add('active');
                }
                
                div.innerHTML = `
                    <div class="stack-header-row">
                        <div class="stack-function-name">Node ${item.node?.v || 'N/A'}</div>
                        <div class="stack-node-value">Depth: ${item.depth || 'N/A'}</div>
                    </div>
                    <div class="stack-details">
                        <div class="stack-detail">
                            <div class="detail-label">Status</div>
                            <div class="detail-value ${index === 0 ? 'processing' : 'pending'}">
                                ${index === 0 ? 'Processing...' : 'Waiting'}
                            </div>
                        </div>
                        <div class="stack-detail">
                            <div class="detail-label">Best Depth</div>
                            <div class="detail-value">${state.bestDepth !== undefined ? state.bestDepth : state.maxDepth !== undefined ? state.maxDepth : 'N/A'}</div>
                        </div>
                    </div>
                `;
                
                stackList.appendChild(div);
            });
        } else {
            stackList.innerHTML = `
                <div class="empty-stack">
                    <div class="empty-state">
                        <div class="empty-icon">📚</div>
                        <div class="empty-text">Stack is empty</div>
                        <div class="empty-subtext">Start stepping through to see stack operations</div>
                    </div>
                </div>
            `;
        }
    }
}

function updateStats(state) {
    const activeCalls = currentAlgorithm === 'recursive' ? (state.stack?.length || 0) :
                      currentAlgorithm === 'bfs' ? (state.queue?.length || 0) :
                      (state.stack?.length || 0);
    
    document.getElementById('activeCalls').textContent = activeCalls;
    
    if (currentAlgorithm === 'recursive') {
        document.getElementById('stackDepth').textContent = `Depth: ${state.stack?.length || 0}`;
        const maxDepth = Math.max(...history.map(h => h.stack?.length || 0));
        document.getElementById('maxDepth').textContent = maxDepth;
    } else {
        document.getElementById('stackDepth').textContent = `Nodes Visited: ${state.visited?.length || 0}`;
        const maxVisited = Math.max(...history.map(h => h.visited?.length || 0));
        document.getElementById('maxDepth').textContent = maxVisited;
    }
}

function getStatusDisplay(value, isActive) {
    if (value === "PENDING") return "Waiting";
    if (value === "PROCESSING") return isActive ? "Processing..." : "In Progress";
    if (value === "LEAF") return "Leaf ✓";
    if (value === "NONE") return "None";
    return value;
}

function getStatusClass(value) {
    if (value === "PENDING") return "pending";
    if (value === "PROCESSING") return "processing";
    if (value === "LEAF" || value === "NONE" || typeof value === 'number') return "completed";
    return "";
}

// Initialization
function init() {
    const prob = problemDB[currentProbId];
    const algorithm = prob.algorithms[currentAlgorithm];
    const engine = document.querySelector('.render-engine');
    const centerX = engine.clientWidth / 2;
    const centerY = engine.clientHeight / 2;
    
    baseCasesCount = 0;
    
    // Update algorithm selector
    const algorithmSelect = document.getElementById('algorithmSelect');
    algorithmSelect.innerHTML = '';
    
    Object.keys(prob.algorithms).forEach(algoKey => {
        const option = document.createElement('option');
        option.value = algoKey;
        option.textContent = prob.algorithms[algoKey].name;
        if (algoKey === currentAlgorithm) {
            option.selected = true;
        }
        algorithmSelect.appendChild(option);
    });
    
    // Update code editor with proper indentation
    const codeEditor = document.getElementById('codeEditor');
    codeEditor.innerHTML = '';
    
    algorithm.code.forEach((line, index) => {
        const lineEl = document.createElement('div');
        lineEl.className = 'line';
        lineEl.textContent = line;
        lineEl.setAttribute('data-line', index);
        
        // Apply indentation
        if (algorithm.indentation && algorithm.indentation[index] !== undefined) {
            lineEl.setAttribute('data-indent', algorithm.indentation[index]);
        }
        
        codeEditor.appendChild(lineEl);
    });
    
    // Update complexity
    document.getElementById('timeComplexity').textContent = algorithm.timeComplexity;
    document.getElementById('spaceComplexity').textContent = algorithm.spaceComplexity;
    
    // Clear and draw tree
    const nodesContainer = document.getElementById('nodesContainer');
    nodesContainer.innerHTML = '';
    const svg = document.getElementById('svgLines');

    // ensure svg has the correct drawing surface size and coordinate system
    if (svg) {
        const w = engine.clientWidth || 800;
        const h = engine.clientHeight || 600;
        svg.setAttribute('width', w);
        svg.setAttribute('height', h);
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        svg.innerHTML = `
            <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                </marker>
            </defs>
        `;
    }
    
    function drawTree(node) {
        if (!node) return;
        
        const nx = centerX + node.x;
        const ny = centerY + node.y;
        
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node';
        nodeEl.id = node.id;
        nodeEl.textContent = node.v;
        nodeEl.style.left = (nx - 30) + 'px';
        nodeEl.style.top = (ny - 30) + 'px';
        nodesContainer.appendChild(nodeEl);
        
        if (currentAlgorithm === 'recursive') {
            const labelEl = document.createElement('div');
            labelEl.className = 'task-label';
            labelEl.style.left = (nx + 40) + 'px';
            labelEl.style.top = (ny - 30) + 'px';
            labelEl.innerHTML = `
                <span id="L-${node.id}">L ↓</span>
                <span id="R-${node.id}">R ↓</span>
            `;
            nodesContainer.appendChild(labelEl);
        }
        
        if (node.left && svg) {
            const x2 = centerX + node.left.x;
            const y2 = centerY + node.left.y;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", nx);
            line.setAttribute("y1", ny);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("class", "tree-edge");
            svg.appendChild(line);
            drawTree(node.left);
        }
        
        if (node.right && svg) {
            const x2 = centerX + node.right.x;
            const y2 = centerY + node.right.y;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", nx);
            line.setAttribute("y1", ny);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("class", "tree-edge");
            svg.appendChild(line);
            drawTree(node.right);
        }
    }
    
    drawTree(prob.tree);
    
    // Generate history based on algorithm
    history = algorithm.generateHistory(prob.tree);
    currentStep = 0;
    render();
    
    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Add search and problem list listeners
    initSearch();
    
    const problemListBtn = document.getElementById('problemListBtn');
    if (problemListBtn) problemListBtn.addEventListener('click', openProblemModal);
    
    const problemModalClose = document.getElementById('problemModalClose');
    if (problemModalClose) problemModalClose.addEventListener('click', closeProblemModal);
    
    document.getElementById('algorithmSelect').addEventListener('change', (e) => {
        currentAlgorithm = e.target.value;
        init();
    });
    
    document.getElementById('youtubeBtn').addEventListener('click', openYouTubeModal);
    document.getElementById('youtubeModalClose').addEventListener('click', closeYouTubeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeStep(-1);
        if (e.key === 'ArrowRight') changeStep(1);
        if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay();
        }
        if (e.key === 'Escape') {
            closeYouTubeModal();
            closeProblemModal();
        }
        if (e.key === 'y' || e.key === 'Y') {
            e.preventDefault();
            openYouTubeModal();
        }
    });
    
    document.getElementById('youtubeModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('youtubeModal')) {
            closeYouTubeModal();
        }
    });
    
    document.getElementById('problemModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('problemModal')) {
            closeProblemModal();
        }
    });
}

// ...rest of existing code...

function changeStep(delta) {
    const newStep = currentStep + delta;
    if (newStep >= 0 && newStep < history.length) {
        currentStep = newStep;
        render();
    }
}

function toggleAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    } else {
        autoPlayInterval = setInterval(() => {
            if (currentStep < history.length - 1) {
                changeStep(1);
            } else {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }, autoPlaySpeed);
    }
}

function resetVisualization() {
    currentStep = 0;
    baseCasesCount = 0;
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
    init();
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', init);