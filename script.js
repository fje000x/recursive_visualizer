const problemDB = {
    "111": {
        name: "Minimum Depth of Binary Tree",
        leetcodeUrl: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        difficulty: "easy",
        topics: ["tree", "recursion", "bfs", "dfs"],
        leetcode150: true,
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
        leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        difficulty: "easy",
        topics: ["tree", "recursion", "bfs", "dfs"],
        leetcode150: true,
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
    },
    "88": {
        name: "Merge Sorted Array",
        leetcodeUrl: "https://leetcode.com/problems/merge-sorted-array/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        leetcode150: true,
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers (Optimal)",
                code: [
                    "def merge(nums1, m, nums2, n):",
                    "    p1 = m - 1",
                    "    p2 = n - 1", 
                    "    p = m + n - 1",
                    "    ",
                    "    while p1 >= 0 and p2 >= 0:",
                    "        if nums1[p1] > nums2[p2]:",
                    "            nums1[p] = nums1[p1]",
                    "            p1 -= 1",
                    "        else:",
                    "            nums1[p] = nums2[p2]",
                    "            p2 -= 1",
                    "        p -= 1",
                    "    ",
                    "    while p2 >= 0:",
                    "        nums1[p] = nums2[p2]",
                    "        p2 -= 1",
                    "        p -= 1"
                ],
                indentation: [0, 1, 1, 1, 0, 1, 2, 3, 3, 2, 3, 3, 2, 0, 1, 2, 2, 2],
                timeComplexity: "O(m + n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateMergeSortedArrayHistory();
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
let autoPlaySpeed = 1000;
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
    const prob = problemDB[probId];
    currentAlgorithm = Object.keys(prob.algorithms)[0]; // Get first algorithm
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

let currentFilter = 'all';

function renderProblemList(filter) {
    if (filter !== undefined) currentFilter = filter;
    const problemList = document.getElementById('problemList');
    
    const filtered = Object.entries(problemDB).filter(([id, prob]) => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'leetcode150') return prob.leetcode150 === true;
        return prob.topics && prob.topics.includes(currentFilter);
    });

    if (filtered.length === 0) {
        problemList.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">No problems found for this filter.</div>`;
        return;
    }

    problemList.innerHTML = filtered.map(([id, prob]) => `
        <div class="problem-item" onclick="selectProblem('${id}'); closeProblemModal();">
            <div class="problem-item-left">
                <div class="problem-item-id">#${id}</div>
                <div class="problem-item-name">${prob.name}</div>
                <div class="problem-item-tags">${prob.difficulty ? `<span class="difficulty-badge difficulty-${prob.difficulty}">${prob.difficulty}</span>` : ''}${prob.topics ? prob.topics.map(t => `<span class="problem-tag">${t}</span>`).join('') : ''}${prob.leetcode150 ? '<span class="problem-tag leetcode150">LC 150</span>' : ''}</div>
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
            if (parent) {
                record(null, 2, `↑ Returning depth 0 to parent node ${parent.v}`, null, {
                    arrowTo: parent,
                    val: 0,
                    returnValue: 0,
                    frameId: callId
                });
            }
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

            // Add return arrow for the parent
            if (parent) {
                record(node, 2, `↑ Returning depth 1 to parent node ${parent.v}`, null, {
                    arrowTo: parent,
                    val: 1,
                    returnValue: 1,
                    frameId
                });
            }
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

        // Add return arrow for the parent
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
            queue: JSON.parse(JSON.stringify(queue.map(q => ({v: q.v, id: q.id})))),
            visited: [...visited],
            currentDepth: depth,
            msg,
            ...extra
        });
    }
    
    // line 0: def maxDepth(root):
    // line 1: if not root: return 0
    // line 2: queue = [root]
    // line 3: depth = 0
    // line 4: while queue:
    // line 5:     depth += 1
    // line 6:     level_size = len(queue)
    // line 7:     for _ in range(level_size):
    // line 8:         node = queue.pop(0)
    // line 9:         if node.left:
    // line 10:            queue.append(node.left)
    // line 11:        if node.right:
    // line 12:            queue.append(node.right)
    // line 13: return depth (index 13 in array, but array only has 14 items, index 0-13)

    record(null, 2, `Initializing BFS — queue = [root=${tree.v}]`);
    
    if (!tree) {
        record(null, 1, `Tree is empty, returning 0`);
        return h;
    }
    
    while (queue.length > 0 && step < 50) {
        step++;
        depth++;
        
        record(null, 5, `Level ${depth}: processing ${queue.length} node(s)`);
        
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            record(node, 8, `Dequeue node ${node.v} (level ${depth}, ${i + 1}/${levelSize})`, {
                currentQueueItem: node.v
            });
            
            visited.add(node.id);
            
            if (node.left) {
                queue.push(node.left);
                record(node, 10, `→ Enqueue left child ${node.left.v}`, {
                    currentQueueItem: node.v
                });
            }
            
            if (node.right) {
                queue.push(node.right);
                record(node, 12, `→ Enqueue right child ${node.right.v}`, {
                    currentQueueItem: node.v
                });
            }
        }
    }
    
    record(null, 13, `✓ All levels processed. Maximum depth is ${depth}`);
    
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
            stack: JSON.parse(JSON.stringify(stack.map(s => ({v: s.node.v, depth: s.depth, id: s.node.id})))),
            visited: [...visited],
            maxDepth: maxDepth,
            bestDepth: maxDepth,
            msg,
            ...extra
        });
    }
    
    // line 0: def maxDepth(root):
    // line 1: if not root: return 0
    // line 2: stack = [(root, 1)]
    // line 3: max_depth = 0
    // line 4: while stack:
    // line 5:     node, depth = stack.pop()
    // line 6:     max_depth = max(max_depth, depth)
    // line 7:     if node.left:
    // line 8:         stack.append((node.left, depth + 1))
    // line 9:     if node.right:
    // line 10:        stack.append((node.right, depth + 1))
    // line 11: return max_depth

    record(null, 2, `Initializing iterative DFS — stack = [(root=${tree.v}, depth=1)]`);
    
    if (!tree) {
        record(null, 1, `Tree is empty, returning 0`);
        return h;
    }
    
    while (stack.length > 0 && step < 50) {
        step++;
        const {node, depth} = stack.pop();
        
        record(node, 5, `Pop node ${node.v} at depth ${depth}`, {
            currentStackItem: node.v
        });
        
        visited.add(node.id);
        
        maxDepth = Math.max(maxDepth, depth);
        record(node, 6, `max_depth = max(${maxDepth}, ${depth}) = ${maxDepth}`, {
            currentStackItem: node.v
        });
        
        if (node.left) {
            stack.push({node: node.left, depth: depth + 1});
            record(node, 8, `→ Push left child ${node.left.v} (depth: ${depth + 1})`, {
                currentStackItem: node.v
            });
        }
        
        if (node.right) {
            stack.push({node: node.right, depth: depth + 1});
            record(node, 10, `→ Push right child ${node.right.v} (depth: ${depth + 1})`, {
                currentStackItem: node.v
            });
        }
    }
    
    record(null, 11, `✓ DFS complete! Maximum depth is ${maxDepth}`);
    
    h.push({
        nodeId: null,
        line: -1,
        stack: [],
        visited: [...visited],
        maxDepth: maxDepth,
        bestDepth: maxDepth,
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
            queue: JSON.parse(JSON.stringify(queue.map(q => ({v: q.node.v, depth: q.depth, id: q.node.id})))),
            visited: [...visited],
            msg,
            ...extra
        });
    }
    
    // line 0: def minDepth(root):
    // line 1: if not root: return 0
    // line 2: queue = [(root, 1)]
    // line 3: while queue:
    // line 4: node, depth = queue.pop(0)
    // line 5: if not node.left and not node.right:
    // line 6:     return depth
    // line 7: if node.left:
    // line 8:     queue.append((node.left, depth + 1))
    // line 9: if node.right:
    // line 10:    queue.append((node.right, depth + 1))

    record(null, 2, `Initializing BFS — queue = [(root=${tree.v}, depth=1)]`);
    
    while (queue.length > 0 && step < 50) {
        step++;
        const current = queue[0];
        
        // Highlight "node, depth = queue.pop(0)" — line index 4
        record(current.node, 4, `Dequeue node ${current.node.v} at depth ${current.depth}`, {
            currentQueueItem: current.node.v
        });
        
        // Check leaf — line index 5
        if (!current.node.left && !current.node.right) {
            record(current.node, 6, `✓ Leaf node found! Minimum depth is ${current.depth}`, {
                isBase: true,
                baseCaseValue: current.depth,
                currentQueueItem: current.node.v
            });
            break;
        }
        
        visited.add(current.node.id);
        queue.shift();
        
        if (current.node.left) {
            queue.push({node: current.node.left, depth: current.depth + 1});
            // Highlight "queue.append((node.left, ...))" — line index 8
            record(current.node, 8, `→ Enqueue left child ${current.node.left.v} (depth: ${current.depth + 1})`, {
                currentQueueItem: current.node.v
            });
        }
        
        if (current.node.right) {
            queue.push({node: current.node.right, depth: current.depth + 1});
            // Highlight "queue.append((node.right, ...))" — line index 10
            record(current.node, 10, `→ Enqueue right child ${current.node.right.v} (depth: ${current.depth + 1})`, {
                currentQueueItem: current.node.v
            });
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
            stack: JSON.parse(JSON.stringify(stack.map(s => ({v: s.node.v, depth: s.depth, id: s.node.id})))),
            visited: [...visited],
            bestDepth: bestDepth,
            msg,
            ...extra
        });
    }
    
    // line 0: def minDepth(root):
    // line 1: if not root: return 0
    // line 2: stack = [(root, 1)]
    // line 3: min_depth = float('inf')
    // line 4: while stack:
    // line 5: node, depth = stack.pop()
    // line 6: if not node.left and not node.right:
    // line 7:     min_depth = min(min_depth, depth)
    // line 8: if node.right:
    // line 9:     stack.append((node.right, depth+1))
    // line 10: if node.left:
    // line 11:     stack.append((node.left, depth+1))
    // line 12: return min_depth

    record(null, 2, `Initializing iterative DFS — stack = [(root=${tree.v}, depth=1)]`);
    
    while (stack.length > 0 && step < 50) {
        step++;
        const {node, depth} = stack.pop();
        
        record(node, 5, `Pop node ${node.v} at depth ${depth}`, {
            currentStackItem: node.v
        });
        
        visited.add(node.id);
        
        if (!node.left && !node.right) {
            bestDepth = Math.min(bestDepth, depth);
            record(node, 7, `✓ Leaf node! min_depth = min(${bestDepth === depth ? depth : bestDepth + ', ' + depth}) = ${bestDepth}`, {
                isBase: true,
                baseCaseValue: depth,
                currentStackItem: node.v
            });
        }
        
        if (node.right) {
            stack.push({node: node.right, depth: depth + 1});
            record(node, 9, `→ Push right child ${node.right.v} (depth: ${depth + 1})`, {
                currentStackItem: node.v
            });
        }
        
        if (node.left) {
            stack.push({node: node.left, depth: depth + 1});
            record(node, 11, `→ Push left child ${node.left.v} (depth: ${depth + 1})`, {
                currentStackItem: node.v
            });
        }
    }
    
    record(null, 12, `✓ DFS complete! Minimum depth is ${bestDepth}`);
    
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

// Add this function before init()

function generateMergeSortedArrayHistory() {
    // More complex test case that exercises both loops
    const nums1 = [4, 5, 6, 0, 0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3, 7, 8, 9];
    const n = 6;
    
    const h = [];
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    let step = 0;
    const merged = [...nums1];
    
    function record(msg, pointers = {}, isComparison = false, isComplete = false) {
        h.push({
            msg,
            line: step,
            pointers: { ...pointers, p1, p2, p },
            nums1: [...merged],
            nums2: [...nums2],
            isComparison,
            isComplete,
            step: h.length
        });
    }
    
    record(`Initializing merge. nums1=[${nums1}], nums2=[${nums2}]`, {}, false);
    step = 1;
    
    record(`Setting pointers: p1=${p1}, p2=${p2}, p=${p}`, {}, false);
    step = 5;
    
    let comparisonCount = 0;
    
    // First loop: comparing both arrays
    while (p1 >= 0 && p2 >= 0) {
        step = 6;
        record(`Comparing nums1[${p1}]=${nums1[p1]} vs nums2[${p2}]=${nums2[p2]}`, { comparing: true }, true);
        comparisonCount++;
        
        if (nums1[p1] > nums2[p2]) {
            step = 7;
            record(`✓ nums1[${p1}]=${nums1[p1]} > nums2[${p2}]=${nums2[p2]}, placing ${nums1[p1]} at position ${p}`, {}, false);
            
            merged[p] = nums1[p1];
            step = 8;
            record(`Placed ${nums1[p1]} at merged[${p}]`, {}, false);
            
            p1--;
            step = 9;
            record(`Moved p1 to ${p1}`, {}, false);
        } else {
            step = 10;
            record(`✓ nums2[${p2}]=${nums2[p2]} >= nums1[${p1}]=${nums1[p1]}, placing ${nums2[p2]} at position ${p}`, {}, false);
            
            merged[p] = nums2[p2];
            step = 11;
            record(`Placed ${nums2[p2]} at merged[${p}]`, {}, false);
            
            p2--;
            step = 12;
            record(`Moved p2 to ${p2}`, {}, false);
        }
        
        p--;
        step = 13;
        record(`Moved p to ${p}`, {}, false);
    }
    
    step = 14;
    record(`First loop complete. p1=${p1}, p2=${p2}. Checking remaining elements...`, {}, false);
    
    // Second loop: handle remaining elements from nums2
    if (p2 >= 0) {
        record(`⚠️ nums1 exhausted! Remaining elements in nums2 (from index 0 to ${p2})`, {}, false);
    }
    
    while (p2 >= 0) {
        step = 15;
        record(`Remaining elements in nums2. Placing nums2[${p2}]=${nums2[p2]} at position ${p}`, {}, false);
        
        merged[p] = nums2[p2];
        step = 16;
        record(`Placed ${nums2[p2]} at merged[${p}]`, {}, false);
        
        p2--;
        step = 17;
        record(`Moved p2 to ${p2}`, {}, false);
        
        p--;
        step = 13;
        record(`Moved p to ${p}`, {}, false);
    }
    
    if (p1 >= 0) {
        record(`✓ All nums2 elements placed. nums1 elements already in correct position!`, {}, false);
    }
    
    h.push({
        msg: `✓ Merge complete! Result: [${merged}]`,
        line: -1,
        pointers: { p1, p2, p },
        nums1: merged,
        nums2: nums2,
        isComplete: true,
        step: h.length
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
        
        let videos = [];
        
        // Problem 88 - Merge Sorted Array
        if (currentProbId === '88') {
            videos = [
                {
                    title: "Merge Sorted Array - Two Pointer Technique - LeetCode 88",
                    url: "https://www.youtube.com/watch?v=P1Ic41zsoldQ",
                    reason: "Step-by-step walkthrough of the two-pointer approach for merging sorted arrays"
                },
                {
                    title: "Two Pointer Technique Explained - GeeksforGeeks",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Comprehensive guide to the two-pointer technique and when to use it"
                },
                {
                    title: "Array Interview Questions - Two Pointers - Coding Interview",
                    url: "https://www.youtube.com/watch?v=9oZIKdLm1I8",
                    reason: "Multiple array problems solved using two-pointer approach"
                },
                {
                    title: "Merge Sorted Array - Optimal Solution - NeetCode",
                    url: "https://www.youtube.com/watch?v=P1Ic41zsoldQ",
                    reason: "Optimal O(m+n) time and O(1) space solution with detailed explanation"
                },
                {
                    title: "Two Pointers - Easy to Hard - Abdul Bari",
                    url: "https://www.youtube.com/watch?v=ypu9QXI-8S8",
                    reason: "Progressive learning from basic to advanced two-pointer problems"
                }
            ];
        }
        // Problem 111 - Minimum Depth
        else if (currentProbId === '111') {
            videos = [
                {
                    title: "Minimum Depth of Binary Tree - LeetCode 111 - NeetCode",
                    url: "https://www.youtube.com/watch?v=hWQjewDsO1c",
                    reason: "Direct solution explanation for minimum depth problem with multiple approaches"
                },
                {
                    title: "Binary Tree DFS Traversal - Complete Tutorial",
                    url: "https://www.youtube.com/watch?v=wcIRwqJ6KDo",
                    reason: "Master depth-first search in binary trees with visual examples"
                },
                {
                    title: "Tree Recursion - In Depth Tutorial - CS Dojo",
                    url: "https://www.youtube.com/watch?v=B0NtAFf4bvU",
                    reason: "Essential fundamentals of recursion on binary trees"
                },
                {
                    title: "BFS vs DFS - Binary Tree Level Order Traversal",
                    url: "https://www.youtube.com/watch?v=60OdZHN12DE",
                    reason: "Compare BFS and DFS approaches for solving minimum depth"
                },
                {
                    title: "Leetcode 111 - Minimum Depth of Binary Tree - Kevin Naughton Jr",
                    url: "https://www.youtube.com/watch?v=hWQjewDsO1c",
                    reason: "Full code walkthrough and explanation of edge cases"
                }
            ];
        }
        // Problem 104 - Maximum Depth
        else if (currentProbId === '104') {
            videos = [
                {
                    title: "Maximum Depth of Binary Tree - LeetCode 104 - NeetCode",
                    url: "https://www.youtube.com/watch?v=BhuvNBP4cjU",
                    reason: "Complete walkthrough of maximum depth with recursive and iterative solutions"
                },
                {
                    title: "Binary Tree Traversal Algorithms - Full Tutorial",
                    url: "https://www.youtube.com/watch?v=9RHaS00qXs8",
                    reason: "Learn all major tree traversal techniques including DFS and BFS"
                },
                {
                    title: "Tree Height and Depth - Visual Explanation - Abdul Bari",
                    url: "https://www.youtube.com/watch?v=_pPXW84kC8Q",
                    reason: "Clear visual explanation of height, depth, and how to calculate them"
                },
                {
                    title: "Recursive Problem Solving on Trees - Coding Interview",
                    url: "https://www.youtube.com/watch?v=gm8DW8rg97w",
                    reason: "Master recursive approaches to tree problems with examples"
                },
                {
                    title: "LeetCode 104 Maximum Depth - Multiple Solutions",
                    url: "https://www.youtube.com/watch?v=BhuvNBP4cjU",
                    reason: "Compare recursive DFS, iterative DFS, and BFS approaches"
                }
            ];
        }
        // Fallback for unknown problems
        else {
            videos = [
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
            const halfNode = 24; // half of --node-size (48px)
            const fx = parseFloat(fromEl.style.left) + halfNode;
            const fy = parseFloat(fromEl.style.top) + halfNode;
            const tx = parseFloat(toEl.style.left) + halfNode;
            const ty = parseFloat(toEl.style.top) + halfNode;
            
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
    if (currentAlgorithm === 'bfs' && state.queue && state.queue.length > 0) {
        queueContainer.style.display = 'flex';
        queueContainer.innerHTML = '';

        // "Front" label
        const frontLabel = document.createElement('span');
        frontLabel.className = 'queue-label';
        frontLabel.textContent = 'Front →';
        queueContainer.appendChild(frontLabel);

        state.queue.forEach((item, index) => {
            const queueItem = document.createElement('div');
            queueItem.className = 'queue-item';

            // Show value + depth if available
            const val = typeof item === 'object' ? item.v : item;
            const depth = typeof item === 'object' && item.depth ? item.depth : null;
            queueItem.innerHTML = depth
                ? `<span class="qi-val">${val}</span><span class="qi-depth">d:${depth}</span>`
                : `${val}`;

            // Highlight the front item being processed
            if (index === 0) {
                queueItem.classList.add('queue-front');
            }

            if (item.v === state.currentQueueItem || item === state.currentQueueItem) {
                queueItem.classList.add('current');
            }

            queueContainer.appendChild(queueItem);
        });

        // "Back" label
        const backLabel = document.createElement('span');
        backLabel.className = 'queue-label queue-back-label';
        backLabel.textContent = '← Back';
        queueContainer.appendChild(backLabel);
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
    
    // Sync mobile nav buttons
    const mobilePrev = document.getElementById('mobilePrevBtn');
    const mobileNext = document.getElementById('mobileNextBtn');
    if (mobilePrev) mobilePrev.disabled = currentStep === 0;
    if (mobileNext) mobileNext.disabled = currentStep === history.length - 1;
    
    // Array visualization for merge sorted arrays
    if (currentProbId === '88') {
        const engine = document.querySelector('.render-engine');
        
        let arrayContainer = document.getElementById('arrayContainer');
        if (!arrayContainer) {
            arrayContainer = document.createElement('div');
            arrayContainer.id = 'arrayContainer';
            arrayContainer.className = 'array-container';
            engine.appendChild(arrayContainer);
        }
        
        if (state.nums1 && state.nums2) {
            const p1 = state.pointers?.p1 ?? -1;
            const p2 = state.pointers?.p2 ?? -1;
            const pMerge = state.pointers?.p ?? -1;
            
            let html = `<div class="array-inner">`; 
            html += `
                <div class="array-section">
                    <div class="array-label">nums1 (merged array)</div>
                    <div class="array-visualization">
            `;
            
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabel = '';
                
                if (idx === p1) {
                    classes += ' pointer-1';
                    pointerLabel = `<div class="pointer-label p1">p1</div>`;
                }
                if (idx === pMerge) {
                    classes += ' pointer-merge';
                    pointerLabel = `<div class="pointer-label p-merge">p</div>`;
                }
                if (val === 0 && idx >= 3) {
                    classes += ' empty';
                }
                
                html += `
                    <div class="${classes}">
                        ${val}
                        ${pointerLabel}
                        <div class="array-index">${idx}</div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
                <div class="array-section">
                    <div class="array-label">nums2 (second array)</div>
                    <div class="array-visualization">
            `;
            
            state.nums2.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabel = '';
                
                if (idx === p2) {
                    classes += ' pointer-2';
                    pointerLabel = `<div class="pointer-label p2">p2</div>`;
                }
                
                html += `
                    <div class="${classes}">
                        ${val}
                        ${pointerLabel}
                        <div class="array-index">${idx}</div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">p1 (nums1 pointer)</div>
                        <div class="pointer-detail-value p1">${p1 >= 0 ? p1 : 'Done'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">p2 (nums2 pointer)</div>
                        <div class="pointer-detail-value p2">${p2 >= 0 ? p2 : 'Done'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">p (merge pointer)</div>
                        <div class="pointer-detail-value p-merge">${pMerge >= 0 ? pMerge : 'Done'}</div>
                    </div>
                </div>
            `;
            html += `</div>`; // close array-inner
            
            arrayContainer.innerHTML = html;
        }
        return;
    }
}

// Stack Visualization
function updateStackVisualization(state) {
    const stackList = document.getElementById('stackList');
    
    if (currentAlgorithm === 'recursive') {
        if (state.stack && state.stack.length > 0) {
            document.getElementById('stackLabel').textContent = 'CALL STACK';
            document.getElementById('activeCallsLabel').textContent = 'Active';
            document.getElementById('depthLabel').textContent = 'Depth';
            document.getElementById('maxLabel').textContent = 'Max';
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
        document.getElementById('activeCallsLabel').textContent = 'Queue';
        document.getElementById('depthLabel').textContent = 'Visited';
        document.getElementById('maxLabel').textContent = 'Total';
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
        document.getElementById('activeCallsLabel').textContent = 'Stack';
        document.getElementById('depthLabel').textContent = 'Visited';
        document.getElementById('maxLabel').textContent = 'Total';
        document.getElementById('stackLegend').style.display = 'none';
        
        if (state.stack && state.stack.length > 0) {
            stackList.innerHTML = '';
            
            [...state.stack].reverse().forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'stack-item';
                
                if (item.v === state.currentStackItem) {
                    div.classList.add('active');
                }
                
                div.innerHTML = `
                    <div class="stack-header-row">
                        <div class="stack-function-name">Node ${item.v || 'N/A'}</div>
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
        document.getElementById('stackDepth').textContent = state.stack?.length || 0;
        const maxDepth = Math.max(...history.map(h => h.stack?.length || 0));
        document.getElementById('maxDepth').textContent = maxDepth;
    } else {
        document.getElementById('stackDepth').textContent = state.visited?.length || 0;
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
    
    baseCasesCount = 0;
    
    // REMOVE ARRAY CONTAINER COMPLETELY FIRST
    const existingArrayContainer = document.getElementById('arrayContainer');
    if (existingArrayContainer) {
        existingArrayContainer.remove();
    }
    
    // RESET LAYOUT - Remove inline styles and use CSS classes
    const appLayout = document.querySelector('.app-layout');
    const stackModule = document.querySelector('.stack-module');
    const stackToggleBtn = document.getElementById('stackToggleBtn');
    
    if (appLayout) {
        appLayout.style.gridTemplateColumns = ''; // Clear inline style
    }
    
    const isArrayProblem = currentProbId === '88';
    const isBFS = currentAlgorithm === 'bfs';

    if (isArrayProblem || isBFS) {
        // Array problems & BFS: hide right panel
        // BFS shows the queue inline at bottom of canvas
        if (appLayout) appLayout.classList.add('hide-right-panel');
        if (stackModule) {
            stackModule.style.display = 'none';
            stackModule.classList.remove('mobile-visible');
        }
        if (stackToggleBtn) {
            stackToggleBtn.style.display = 'none';
        }
    } else {
        // Recursive & Iterative DFS: show the right panel (call stack / DFS stack)
        if (appLayout) {
            appLayout.classList.remove('hide-right-panel');
        }
        if (stackModule) {
            stackModule.style.display = '';
        }
        if (stackToggleBtn) {
            stackToggleBtn.style.display = '';
        }
    }
    
    // Update "All Problems" button to show current problem
    const problemListBtn = document.getElementById('problemListBtn');
    if (problemListBtn) {
        const diffClass = prob.difficulty ? `difficulty-${prob.difficulty}` : '';
        const diffLabel = prob.difficulty ? prob.difficulty.charAt(0).toUpperCase() + prob.difficulty.slice(1) : '';
        problemListBtn.innerHTML = `<i class="fas fa-list"></i> #${currentProbId} ${prob.name} ${prob.difficulty ? `<span class="difficulty-badge ${diffClass}">${diffLabel}</span>` : ''}`;
    }

    // Update LeetCode link
    const leetcodeLink = document.getElementById('leetcodeLink');
    if (leetcodeLink && prob.leetcodeUrl) {
        leetcodeLink.href = prob.leetcodeUrl;
    }

    // Update algorithm selector (desktop + mobile)
    const algorithmSelect = document.getElementById('algorithmSelect');
    const mobileAlgorithmSelect = document.getElementById('mobileAlgorithmSelect');
    algorithmSelect.innerHTML = '';
    if (mobileAlgorithmSelect) mobileAlgorithmSelect.innerHTML = '';
    
    Object.keys(prob.algorithms).forEach(algoKey => {
        const option = document.createElement('option');
        option.value = algoKey;
        option.textContent = prob.algorithms[algoKey].name;
        if (algoKey === currentAlgorithm) {
            option.selected = true;
        }
        algorithmSelect.appendChild(option);

        // Clone for mobile
        if (mobileAlgorithmSelect) {
            mobileAlgorithmSelect.appendChild(option.cloneNode(true));
        }
    });

    // Explicitly set the value on both selects
    algorithmSelect.value = currentAlgorithm;
    if (mobileAlgorithmSelect) mobileAlgorithmSelect.value = currentAlgorithm;
    
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
    
    // Handle array visualization for problem 88
    if (currentProbId === '88') {
        const nodesContainer = document.getElementById('nodesContainer');
        nodesContainer.innerHTML = '';
        
        // Clear SVG lines
        const svg = document.getElementById('svgLines');
        if (svg) {
            svg.innerHTML = '';
        }
        
        // Don't draw tree for array problems
        history = algorithm.generateHistory();
        currentStep = 0;
        render();
        setupEventListeners();
        return;
    }
    
    // Clear and draw tree
    const nodesContainer = document.getElementById('nodesContainer');
    nodesContainer.innerHTML = '';
    const svg = document.getElementById('svgLines');
    const treeCanvas = document.getElementById('treeCanvas');

    // The canvas is a fixed 800×600 coordinate space.
    // We scale the whole .tree-canvas div via CSS transform to fit the container.
    const canvasW = 800;
    const canvasH = 600;

    // Compute bounding box of all tree nodes to auto-center
    function getBounds(node) {
        if (!node) return { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
        const left = getBounds(node.left);
        const right = getBounds(node.right);
        return {
            minX: Math.min(node.x, left.minX, right.minX),
            maxX: Math.max(node.x, left.maxX, right.maxX),
            minY: Math.min(node.y, left.minY, right.minY),
            maxY: Math.max(node.y, left.maxY, right.maxY)
        };
    }
    const bounds = getBounds(prob.tree);
    // Offset to shift tree center to canvas center
    const treeCenterX = (bounds.minX + bounds.maxX) / 2;
    const treeCenterY = (bounds.minY + bounds.maxY) / 2;
    const centerX = canvasW / 2 - treeCenterX;
    const centerY = canvasH / 2 - treeCenterY;

    // Compute uniform scale to fit the canvas inside the render-engine
    // Use a 1.15x boost so the tree fills the space better
    const containerW = engine.clientWidth || canvasW;
    const containerH = engine.clientHeight || canvasH;
    const fitScale = Math.min(containerW / canvasW, containerH / canvasH) * 1.15;
    treeCanvas.style.transform = `translate(-50%, -50%) scale(${fitScale})`;

    // ensure svg has the correct drawing surface size and coordinate system
    if (svg) {
        svg.setAttribute('width', canvasW);
        svg.setAttribute('height', canvasH);
        svg.setAttribute('viewBox', `0 0 ${canvasW} ${canvasH}`);
        svg.innerHTML = `
            <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                </marker>
            </defs>
        `;
    }
    
    const halfNode = 24; // half of --node-size (48px)

    function drawTree(node) {
        if (!node) return;
        
        const nx = centerX + node.x;
        const ny = centerY + node.y;
        
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node';
        nodeEl.id = node.id;
        nodeEl.textContent = node.v;
        nodeEl.style.left = (nx - halfNode) + 'px';
        nodeEl.style.top = (ny - halfNode) + 'px';
        nodesContainer.appendChild(nodeEl);
        
        if (currentAlgorithm === 'recursive') {
            const labelEl = document.createElement('div');
            labelEl.className = 'task-label';
            labelEl.style.left = (nx + halfNode + 10) + 'px';
            labelEl.style.top = (ny - halfNode - 10) + 'px';
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

// Code panel toggle
function toggleCodePanel() {
    const appLayout = document.querySelector('.app-layout');
    const toggleBtn = document.getElementById('codeToggleBtn');
    const codeModule = document.querySelector('.code-module');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Mobile: toggle split visibility (code takes top half, viz shrinks)
        const nowVisible = codeModule.classList.toggle('mobile-visible');
        toggleBtn.classList.toggle('collapsed', nowVisible);
    } else {
        // Desktop: toggle grid column collapse
        const isCollapsed = appLayout.classList.toggle('hide-code-panel');
        toggleBtn.classList.toggle('collapsed', isCollapsed);
    }

    // Re-scale tree canvas after layout transition completes
    setTimeout(() => {
        const engine = document.querySelector('.render-engine');
        const treeCanvas = document.getElementById('treeCanvas');
        if (engine && treeCanvas) {
            const containerW = engine.clientWidth || 800;
            const containerH = engine.clientHeight || 600;
            const fitScale = Math.min(containerW / 800, containerH / 600) * 1.15;
            treeCanvas.style.transform = `translate(-50%, -50%) scale(${fitScale})`;
        }
    }, 350);
}

// Stack panel toggle (mobile only)
function toggleStackPanel() {
    const toggleBtn = document.getElementById('stackToggleBtn');
    const stackModule = document.querySelector('.stack-module');
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) return; // only works on mobile

    const nowVisible = stackModule.classList.toggle('mobile-visible');
    toggleBtn.classList.toggle('collapsed', nowVisible);

    // Re-scale tree canvas after layout transition completes
    setTimeout(() => {
        const engine = document.querySelector('.render-engine');
        const treeCanvas = document.getElementById('treeCanvas');
        if (engine && treeCanvas) {
            const containerW = engine.clientWidth || 800;
            const containerH = engine.clientHeight || 600;
            const fitScale = Math.min(containerW / 800, containerH / 600) * 1.15;
            treeCanvas.style.transform = `translate(-50%, -50%) scale(${fitScale})`;
        }
    }, 350);
}

function setupEventListeners() {
    // Add search and problem list listeners
    initSearch();

    // Code toggle button
    const codeToggleBtn = document.getElementById('codeToggleBtn');
    if (codeToggleBtn) {
        codeToggleBtn.removeEventListener('click', toggleCodePanel);
        codeToggleBtn.addEventListener('click', toggleCodePanel);
    }

    // Stack toggle button
    const stackToggleBtn = document.getElementById('stackToggleBtn');
    if (stackToggleBtn) {
        stackToggleBtn.removeEventListener('click', toggleStackPanel);
        stackToggleBtn.addEventListener('click', toggleStackPanel);
    }
    
    const problemListBtn = document.getElementById('problemListBtn');
    if (problemListBtn) problemListBtn.addEventListener('click', openProblemModal);
    
    const problemModalClose = document.getElementById('problemModalClose');
    if (problemModalClose) problemModalClose.addEventListener('click', closeProblemModal);

    // Filter buttons in problem modal
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProblemList(btn.dataset.filter);
        });
    });
    
    document.getElementById('algorithmSelect').addEventListener('change', (e) => {
        currentAlgorithm = e.target.value;
        // Sync mobile selector
        const mobileSelect = document.getElementById('mobileAlgorithmSelect');
        if (mobileSelect) mobileSelect.value = currentAlgorithm;
        init();
    });

    const mobileAlgoSelect = document.getElementById('mobileAlgorithmSelect');
    if (mobileAlgoSelect) {
        mobileAlgoSelect.addEventListener('change', (e) => {
            currentAlgorithm = e.target.value;
            // Sync desktop selector
            document.getElementById('algorithmSelect').value = currentAlgorithm;
            init();
        });
    }
    
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

function changeStep(delta) {
    const ytModal = document.getElementById('youtubeModal');
    if (ytModal && ytModal.classList.contains('show')) {
        closeYouTubeModal();
        return;
    }
    const newStep = currentStep + delta;
    if (newStep >= 0 && newStep < history.length) {
        currentStep = newStep;
        render();
    }
}

function toggleAutoPlay() {
    const ytModal = document.getElementById('youtubeModal');
    if (ytModal && ytModal.classList.contains('show')) {
        closeYouTubeModal();
        return;
    }
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    } else {
        // If we're at the end, restart from the beginning
        if (currentStep >= history.length - 1) {
            currentStep = 0;
            render();
        }
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
    const ytModal = document.getElementById('youtubeModal');
    if (ytModal && ytModal.classList.contains('show')) {
        closeYouTubeModal();
        return;
    }
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

// Debounced resize: only re-layout the tree canvas scale, not full init
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Just re-scale the tree canvas to fit the new container size
        const engine = document.querySelector('.render-engine');
        const treeCanvas = document.getElementById('treeCanvas');
        if (engine && treeCanvas) {
            const containerW = engine.clientWidth || 800;
            const containerH = engine.clientHeight || 600;
            const fitScale = Math.min(containerW / 800, containerH / 600) * 1.15;
            treeCanvas.style.transform = `translate(-50%, -50%) scale(${fitScale})`;
        }
    }, 150);
});