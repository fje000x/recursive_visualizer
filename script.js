const problemDB = {
    "1": {
        name: "Shortest Path in Binary Tree",
        alias: "Minimum Depth of Binary Tree",
        leetcodeNum: "111",
        inspiredBy: "Inspired by LeetCode Problem #111",
        sourceUrl: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        difficulty: "easy",
        topics: ["tree", "recursion", "bfs", "dfs"],
        interview150: true,
        tree: {
            v: 5, id: 'n5', x: 0, y: -160,
            left: { v: 2, id: 'n2', x: -180, y: -20, left: null, right: null },
            right: { 
                v: 8, id: 'n8', x: 180, y: -20,
                left: { v: 6, id: 'n6', x: 80, y: 120, left: null, right: null },
                right: { v: 11, id: 'n11', x: 280, y: 120, left: null, right: null }
            }
        },
        algorithms: {
            recursive: {
                name: "Recursive DFS",
                code: [
                    "def shortestPath(node):",
                    "    if node is None: return 0",
                    "    if not node.left and not node.right:",
                    "        return 1",
                    "    if node.left is None:",
                    "        return shortestPath(node.right) + 1",
                    "    if node.right is None:",
                    "        return shortestPath(node.left) + 1",
                    "    l_depth = shortestPath(node.left)",
                    "    r_depth = shortestPath(node.right)",
                    "    return min(l_depth, r_depth) + 1"
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
                    "def shortestPath(node):",
                    "    if node is None: return 0",
                    "    q = deque([(node, 1)])",
                    "    while q:",
                    "        curr, lvl = q.popleft()",
                    "        if not curr.left and not curr.right:",
                    "            return lvl",
                    "        if curr.left:",
                    "            q.append((curr.left, lvl + 1))",
                    "        if curr.right:",
                    "            q.append((curr.right, lvl + 1))"
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
                    "def shortestPath(node):",
                    "    if node is None: return 0",
                    "    stk = [(node, 1)]",
                    "    shortest = float('inf')",
                    "    while stk:",
                    "        curr, lvl = stk.pop()",
                    "        if not curr.left and not curr.right:",
                    "            shortest = min(shortest, lvl)",
                    "        if curr.left:",
                    "            stk.append((curr.left, lvl + 1))",
                    "        if curr.right:",
                    "            stk.append((curr.right, lvl + 1))",
                    "    return shortest"
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
    "2": {
        name: "Longest Path in Binary Tree",
        alias: "Maximum Depth of Binary Tree",
        leetcodeNum: "104",
        inspiredBy: "Inspired by LeetCode Problem #104",
        sourceUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        difficulty: "easy",
        topics: ["tree", "recursion", "bfs", "dfs"],
        interview150: true,
        tree: {
            v: 10, id: 'n10', x: 0, y: -160,
            left: { v: 4, id: 'n4', x: -180, y: -20, left: null, right: null },
            right: { 
                v: 17, id: 'n17', x: 180, y: -20,
                left: { v: 12, id: 'n12', x: 80, y: 120, left: null, right: null },
                right: { v: 22, id: 'n22', x: 280, y: 120, left: null, right: null }
            }
        },
        algorithms: {
            recursive: {
                name: "Recursive DFS",
                code: [
                    "def longestPath(node):",
                    "    if node is None:",
                    "        return 0",
                    "    l = longestPath(node.left)",
                    "    r = longestPath(node.right)",
                    "    return max(l, r) + 1"
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
                    "def longestPath(node):",
                    "    if node is None: return 0",
                    "    q = deque([node])",
                    "    levels = 0",
                    "    while q:",
                    "        levels += 1",
                    "        size = len(q)",
                    "        for _ in range(size):",
                    "            curr = q.popleft()",
                    "            if curr.left:",
                    "                q.append(curr.left)",
                    "            if curr.right:",
                    "                q.append(curr.right)",
                    "    return levels"
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
                    "def longestPath(node):",
                    "    if node is None: return 0",
                    "    stk = [(node, 1)]",
                    "    deepest = 0",
                    "    while stk:",
                    "        curr, lvl = stk.pop()",
                    "        deepest = max(deepest, lvl)",
                    "        if curr.left:",
                    "            stk.append((curr.left, lvl + 1))",
                    "        if curr.right:",
                    "            stk.append((curr.right, lvl + 1))",
                    "    return deepest"
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
    "3": {
        name: "Merge Two Sorted Lists",
        alias: "Merge Sorted Array",
        leetcodeNum: "88",
        inspiredBy: "Inspired by LeetCode Problem #88",
        sourceUrl: "https://leetcode.com/problems/merge-sorted-array/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        interview150: true,
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers (Optimal)",
                code: [
                    "def mergeSorted(arr1, m, arr2, n):",
                    "    i = m - 1",
                    "    j = n - 1", 
                    "    k = m + n - 1",
                    "    ",
                    "    while i >= 0 and j >= 0:",
                    "        if arr1[i] > arr2[j]:",
                    "            arr1[k] = arr1[i]",
                    "            i -= 1",
                    "        else:",
                    "            arr1[k] = arr2[j]",
                    "            j -= 1",
                    "        k -= 1",
                    "    ",
                    "    while j >= 0:",
                    "        arr1[k] = arr2[j]",
                    "        j -= 1",
                    "        k -= 1"
                ],
                indentation: [0, 1, 1, 1, 0, 1, 2, 3, 3, 2, 3, 3, 2, 0, 1, 2, 2, 2],
                timeComplexity: "O(m + n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateMergeSortedArrayHistory();
                }
            }
        }
    },
    "4": {
        name: "Remove Element",
        alias: "Remove Element",
        leetcodeNum: "27",
        inspiredBy: "Inspired by LeetCode Problem #27",
        sourceUrl: "https://leetcode.com/problems/remove-element/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        interview150: true,
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def removeElement(nums, val):",
                    "    k = 0",
                    "    for i in range(len(nums)):",
                    "        if nums[i] != val:",
                    "            nums[k] = nums[i]",
                    "            k += 1",
                    "    return k"
                ],
                indentation: [0, 1, 1, 2, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateRemoveElementHistory();
                }
            }
        }
    },
    "5": {
        name: "Remove Duplicates from Sorted Array",
        alias: "Remove Duplicates",
        leetcodeNum: "26",
        inspiredBy: "Inspired by LeetCode Problem #26",
        sourceUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        interview150: true,
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def removeDuplicates(nums):",
                    "    if len(nums) == 0: return 0",
                    "    k = 1",
                    "    for i in range(1, len(nums)):",
                    "        if nums[i] != nums[k - 1]:",
                    "            nums[k] = nums[i]",
                    "            k += 1",
                    "    return k"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateRemoveDuplicatesHistory();
                }
            }
        }
    }
};

let currentProbId = "1";
let currentAlgorithm = "recursive";
let history = [];
let currentStep = 0;
let autoPlayInterval = null;
let autoPlaySpeed = 2000;
let baseCasesCount = 0;


const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const videoCache = {};
const CACHE_DURATION = 5 * 60 * 1000;
let isFetching = false;
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 5000;

// YouTube Modal Functions
function openYouTubeModal() {
    // Pause autoplay if running
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        updatePlayButtons(false);
    }
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
    const searchWrapper = document.querySelector('.search-bar-wrapper');
    
    // Handle collapsed search icon click (at zoomed-in breakpoints)
    searchWrapper.addEventListener('click', (e) => {
        if (!searchWrapper.classList.contains('expanded') && window.innerWidth <= 840) {
            e.stopPropagation();
            searchWrapper.classList.add('expanded');
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            searchDropdown.style.display = 'none';
            return;
        }
        
        const results = Object.entries(problemDB).filter(([id, prob]) => 
            prob.name.toLowerCase().includes(query) || id.includes(query) || (prob.alias && prob.alias.toLowerCase().includes(query)) || (prob.leetcodeNum && prob.leetcodeNum.includes(query))
        );
        
        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="search-result">No problems found</div>';
            searchDropdown.style.display = 'block';
            return;
        }
        
        searchDropdown.innerHTML = results.map(([id, prob]) => `
            <div class="search-result" onclick="selectProblem('${id}')">
                <div class="search-result-title">${prob.name}</div>
                ${prob.alias ? `<div class="search-result-alias">LeetCode: ${prob.alias}</div>` : ''}
                <div class="search-result-id">#${id}</div>
            </div>
        `).join('');
        searchDropdown.style.display = 'block';
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar-wrapper')) {
            searchDropdown.style.display = 'none';
            // Collapse search back to icon at zoomed breakpoints
            if (searchWrapper.classList.contains('expanded')) {
                searchWrapper.classList.remove('expanded');
                searchInput.value = '';
            }
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
    document.body.classList.add('problem-page-active');
    // Reset search
    currentSearchQuery = '';
    const searchInput = document.getElementById('problemSearchInput');
    if (searchInput) searchInput.value = '';
    // Stop autoplay when modal opens
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        updatePlayButtons(false);
    }
    renderProblemList();
    // Focus search bar
    if (searchInput) setTimeout(() => searchInput.focus(), 100);
    // Update filter scroll arrows
    const filterArea = document.getElementById('filterScrollArea');
    if (filterArea) {
        filterArea.scrollLeft = 0;
        setTimeout(() => {
            const leftBtn = document.getElementById('filterScrollLeft');
            const rightBtn = document.getElementById('filterScrollRight');
            if (leftBtn) leftBtn.classList.toggle('hidden', true);
            if (rightBtn) rightBtn.classList.toggle('hidden', filterArea.scrollWidth <= filterArea.clientWidth + 4);
        }, 100);
    }
}

function closeProblemModal() {
    const modal = document.getElementById('problemModal');
    modal.classList.remove('show');
    document.body.classList.remove('problem-page-active');
}

function updateFilterCounts() {
    const allProblems = Object.entries(problemDB);
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const f = btn.dataset.filter;
        let count;
        if (f === 'all') {
            count = allProblems.length;
        } else if (f === 'interview150') {
            count = allProblems.filter(([, p]) => p.interview150 === true).length;
        } else {
            count = allProblems.filter(([, p]) => p.topics && p.topics.includes(f)).length;
        }
        // Get label text without any existing count
        const label = btn.dataset.label || btn.textContent.replace(/\s*\(\d+\)/, '').trim();
        btn.dataset.label = label;
        btn.textContent = `${label} (${count})`;
    });
}

let currentFilter = 'all';
let currentSearchQuery = '';

function renderProblemList(filter) {
    if (filter !== undefined) currentFilter = filter;
    const problemList = document.getElementById('problemList');
    
    const filtered = Object.entries(problemDB).filter(([id, prob]) => {
        // Apply topic filter
        if (currentFilter !== 'all') {
            if (currentFilter === 'interview150') {
                if (prob.interview150 !== true) return false;
            } else {
                if (!prob.topics || !prob.topics.includes(currentFilter)) return false;
            }
        }
        // Apply search filter
        if (currentSearchQuery) {
            const q = currentSearchQuery.toLowerCase();
            const nameMatch = prob.name && prob.name.toLowerCase().includes(q);
            const idMatch = id.toString().includes(q);
            const aliasMatch = prob.alias && prob.alias.toLowerCase().includes(q);
            const lcNumMatch = prob.leetcodeNum && prob.leetcodeNum.includes(q);
            if (!nameMatch && !idMatch && !aliasMatch && !lcNumMatch) return false;
        }
        return true;
    });

    // Update filter counts
    updateFilterCounts();

    if (filtered.length === 0) {
        problemList.innerHTML = `<div class="problem-empty-state">
            <p>No problems match your filters</p>
            <span>Try adjusting your search or filter criteria</span>
        </div>`;
        return;
    }

    problemList.innerHTML = filtered.map(([id, prob]) => {
        return `
        <div class="problem-card" onclick="selectProblem('${id}'); closeProblemModal();">
            <div class="problem-card-inner">
                <div class="problem-card-top">
                    <div class="problem-card-info">
                        <div class="problem-card-name">${id}. ${prob.name}</div>
                        <div class="problem-card-meta">
                            ${prob.difficulty ? `<span class="difficulty-badge difficulty-${prob.difficulty}">${prob.difficulty}</span>` : ''}
                            ${prob.inspiredBy ? `<span class="problem-card-inspired">${prob.inspiredBy}</span>` : ''}
                            ${prob.topics ? `<span class="problem-card-tags-inline">${prob.topics.join(' · ')}</span>` : ''}
                        </div>
                    </div>
                    <div class="problem-card-right">
                        <div class="problem-card-arrow">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
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

        record(node, 1, `Entering longestPath(${node.v})`, null, { frameId });

        // Base case: leaf node
        if (!node.left && !node.right) {
            doneMap[node.id].L = true;
            frame.l = "LEAF";
            record(node, 3, `→ Left child is null`, 'L', { frameId });

            doneMap[node.id].R = true;
            frame.r = "LEAF";
            record(node, 3, `→ Right child is null`, 'R', { frameId });

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
    
    // line 0: def longestPath(root):
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
    
    // line 0: def longestPath(root):
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
        
        record(node, isMin ? 1 : 0, `Entering shortestPath(${node.v})`, null, { frameId });

        let res;
        if (!node.left && !node.right) {
            doneMap[node.id].L = true;
            frame.l = "LEAF";
            record(node, 3, `→ Left child is null`, 'L', { frameId });

            doneMap[node.id].R = true;
            frame.r = "LEAF";
            record(node, 3, `→ Right child is null`, 'R', { frameId });

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
    
    // line 0: def shortestPath(root):
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
    
    // line 0: def shortestPath(root):
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

// Remove Element — Two Pointers History
function generateRemoveElementHistory() {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const h = [];
    let k = 0;
    const arr = [...nums];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...arr],
            nums2: [],
            arrayMeta: { val, k, originalLength: nums.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call removeElement(nums=[${nums}], val=${val}). Goal: remove all ${val}s in-place and return the new length.`);
    record(1, `Initialize write pointer k = 0. Everything before index k will be "kept" values. Read pointer i will scan every element.`, { k });

    for (let i = 0; i < arr.length; i++) {
        record(2, `Move read pointer → i = ${i}. Now reading nums[${i}] = ${arr[i]}. Write pointer k is still at ${k}.`, { i, k });

        if (arr[i] !== val) {
            record(3, `nums[${i}] = ${arr[i]} ≠ ${val} → not the target value, so we keep it.`, { i, k }, { isComparison: true });
            const prevK = k;
            arr[k] = arr[i];
            record(4, `Execute nums[k] = nums[i] → nums[${prevK}] = nums[${i}] = ${arr[prevK]}. Array: [${arr}].`, { i, k });
            k++;
            record(5, `k++ → k = ${k}. Kept ${k} so far: [${arr.slice(0, k)}]. i will move to ${i + 1} next.`, { i, k });
        } else {
            record(3, `nums[${i}] = ${arr[i]} == ${val} → matches target! Skip — k stays at ${k}, i moves to ${i + 1}.`, { i, k }, { isComparison: true, isSkip: true });
        }
    }

    record(6, `✓ Done! i finished scanning all ${nums.length} elements. Returned k = ${k}. Result: first ${k} elements [${arr.slice(0, k)}] — all ${val}s removed.`, { k }, { isComplete: true });
    return h;
}

// Remove Duplicates from Sorted Array — Two Pointers History
function generateRemoveDuplicatesHistory() {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const h = [];
    const arr = [...nums];
    let k = 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...arr],
            nums2: [],
            arrayMeta: { k, originalLength: nums.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call removeDuplicates(nums=[${nums}]). Goal: remove duplicates in-place from this sorted array and return the count of unique elements.`);

    if (arr.length === 0) {
        record(1, `Array is empty — nothing to deduplicate. Return 0.`, {}, { isComplete: true });
        return h;
    }

    record(1, `Array is not empty (length = ${arr.length}) — skip the empty check.`);
    record(2, `Initialize k = 1. nums[0] = ${arr[0]} is always unique, so k starts past it. Read pointer i will scan from index 1.`, { k });

    for (let i = 1; i < arr.length; i++) {
        record(3, `Move read pointer → i = ${i}. Reading nums[${i}] = ${arr[i]}. Comparing against last placed unique value nums[${k - 1}] = ${arr[k - 1]}.`, { i, k });

        if (arr[i] !== arr[k - 1]) {
            record(4, `nums[${i}] = ${arr[i]} ≠ nums[${k - 1}] = ${arr[k - 1]} → new unique value found!`, { i, k }, { isComparison: true });
            const prevK = k;
            arr[k] = arr[i];
            record(5, `Execute nums[k] = nums[i] → nums[${prevK}] = nums[${i}] = ${arr[prevK]}. Array: [${arr}].`, { i, k });
            k++;
            record(6, `k++ → k = ${k}. Found ${k} unique so far: [${arr.slice(0, k)}]. i will move to ${i + 1} next.`, { i, k });
        } else {
            record(4, `nums[${i}] = ${arr[i]} == nums[${k - 1}] = ${arr[k - 1]} → duplicate! Skip — k stays at ${k}, i moves to ${i + 1}.`, { i, k }, { isComparison: true, isSkip: true });
        }
    }

    record(7, `✓ Done! i finished scanning all ${nums.length} elements. Returned k = ${k}. Result: [${arr.slice(0, k)}] — ${k} unique values in sorted order.`, { k }, { isComplete: true });
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
        
        // Problem 4 - Remove Element
        if (currentProbId === '4') {
            videos = [
                {
                    title: "Remove Element — LeetCode 27 — NeetCode",
                    url: "https://www.youtube.com/watch?v=Pcd1ii9P9ZI",
                    reason: "Clear walkthrough of the two-pointer in-place removal approach"
                },
                {
                    title: "Two Pointer Technique Explained — GeeksforGeeks",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Comprehensive guide to the two-pointer technique and when to use it"
                },
                {
                    title: "Array In-Place Operations — Interview Essentials",
                    url: "https://www.youtube.com/watch?v=9oZIKdLm1I8",
                    reason: "Master in-place array modifications with O(1) space"
                }
            ];
        }
        // Problem 5 - Remove Duplicates from Sorted Array
        else if (currentProbId === '5') {
            videos = [
                {
                    title: "Remove Duplicates from Sorted Array — LeetCode 26 — NeetCode",
                    url: "https://www.youtube.com/watch?v=DEJAZBq0FDA",
                    reason: "Step-by-step explanation of the two-pointer approach for deduplication"
                },
                {
                    title: "Two Pointer Technique Explained — GeeksforGeeks",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Comprehensive guide to the two-pointer technique and when to use it"
                },
                {
                    title: "Array Interview Questions — Two Pointers",
                    url: "https://www.youtube.com/watch?v=9oZIKdLm1I8",
                    reason: "Multiple array problems solved using two-pointer approach"
                }
            ];
        }
        // Problem 3 - Merge Two Sorted Lists
        else if (currentProbId === '3') {
            videos = [
                {
                    title: "Merging Sorted Arrays — Two Pointer Technique",
                    url: "https://www.youtube.com/watch?v=P1Ic41zsoldQ",
                    reason: "Step-by-step walkthrough of the two-pointer approach for merging sorted arrays"
                },
                {
                    title: "Two Pointer Technique Explained — GeeksforGeeks",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Comprehensive guide to the two-pointer technique and when to use it"
                },
                {
                    title: "Array Interview Questions — Two Pointers",
                    url: "https://www.youtube.com/watch?v=9oZIKdLm1I8",
                    reason: "Multiple array problems solved using two-pointer approach"
                },
                {
                    title: "Merging Sorted Arrays — Optimal Solution — NeetCode",
                    url: "https://www.youtube.com/watch?v=P1Ic41zsoldQ",
                    reason: "Optimal O(m+n) time and O(1) space solution with detailed explanation"
                },
                {
                    title: "Two Pointers — Easy to Hard — Abdul Bari",
                    url: "https://www.youtube.com/watch?v=ypu9QXI-8S8",
                    reason: "Progressive learning from basic to advanced two-pointer problems"
                }
            ];
        }
        // Problem 1 - Shortest Path
        else if (currentProbId === '1') {
            videos = [
                {
                    title: "Shortest Path in Binary Tree — NeetCode",
                    url: "https://www.youtube.com/watch?v=hWQjewDsO1c",
                    reason: "Direct solution explanation for minimum depth problem with multiple approaches"
                },
                {
                    title: "Binary Tree DFS Traversal — Complete Tutorial",
                    url: "https://www.youtube.com/watch?v=wcIRwqJ6KDo",
                    reason: "Master depth-first search in binary trees with visual examples"
                },
                {
                    title: "Tree Recursion — In Depth Tutorial — CS Dojo",
                    url: "https://www.youtube.com/watch?v=B0NtAFf4bvU",
                    reason: "Essential fundamentals of recursion on binary trees"
                },
                {
                    title: "BFS vs DFS — Binary Tree Level Order Traversal",
                    url: "https://www.youtube.com/watch?v=60OdZHN12DE",
                    reason: "Compare BFS and DFS approaches for solving minimum depth"
                },
                {
                    title: "Shortest Path in Binary Tree — Kevin Naughton Jr",
                    url: "https://www.youtube.com/watch?v=hWQjewDsO1c",
                    reason: "Full code walkthrough and explanation of edge cases"
                }
            ];
        }
        // Problem 2 - Longest Path
        else if (currentProbId === '2') {
            videos = [
                {
                    title: "Longest Path in Binary Tree — NeetCode",
                    url: "https://www.youtube.com/watch?v=BhuvNBP4cjU",
                    reason: "Complete walkthrough of maximum depth with recursive and iterative solutions"
                },
                {
                    title: "Binary Tree Traversal Algorithms — Full Tutorial",
                    url: "https://www.youtube.com/watch?v=9RHaS00qXs8",
                    reason: "Learn all major tree traversal techniques including DFS and BFS"
                },
                {
                    title: "Tree Height and Depth — Visual Explanation — Abdul Bari",
                    url: "https://www.youtube.com/watch?v=_pPXW84kC8Q",
                    reason: "Clear visual explanation of height, depth, and how to calculate them"
                },
                {
                    title: "Recursive Problem Solving on Trees — Coding Interview",
                    url: "https://www.youtube.com/watch?v=gm8DW8rg97w",
                    reason: "Master recursive approaches to tree problems with examples"
                },
                {
                    title: "Longest Path in Binary Tree — Multiple Solutions",
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
    
    let videosHTML = '<h4 class="video-section-title">Learn More</h4><div class="video-grid">';
    
    videos.forEach((video) => {
        let videoUrl = video.url || `https://www.youtube.com/results?search_query=${encodeURIComponent(video.title || problemDB[currentProbId].name)}`;
        if (!videoUrl.startsWith('http')) {
            videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(video.title || problemDB[currentProbId].name)}`;
        }
        
        videosHTML += `
            <a href="${videoUrl}" target="_blank" class="video-card" style="text-decoration:none;">
                <div class="video-card-left">
                    <div class="video-card-icon">
                        <i class="fab fa-youtube"></i> YouTube
                    </div>
                    <h4 class="video-title">${video.title || "Untitled Video"}</h4>
                    <div class="video-reason">${video.reason || "Helpful for learning this topic"}</div>
                </div>
                <span class="video-action"><i class="fas fa-external-link-alt"></i></span>
            </a>
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
    
    // Update edge states
    document.querySelectorAll('.tree-edge').forEach(edgeEl => {
        edgeEl.classList.remove('edge-active', 'edge-visited', 'edge-base');
        const from = edgeEl.getAttribute('data-from');
        const to = edgeEl.getAttribute('data-to');
        // Active edge: currently visiting this edge's child
        if (to === state.nodeId) {
            edgeEl.classList.add(state.isBase ? 'edge-base' : 'edge-active');
        }
        // Visited edges: both endpoints have been visited
        if (state.visited?.includes(from) && state.visited?.includes(to)) {
            edgeEl.classList.add('edge-visited');
        }
    });
    
    // Update console
    const consoleEl = document.getElementById('console');
    if (state.isComplete) {
        consoleEl.innerHTML = `<div class="console-line console-answer">${state.msg}</div>`;
    } else {
        consoleEl.innerHTML = `<div class="console-line">${state.msg}</div>`;
    }
    
    // Draw return arrows for recursive
    const svg = document.getElementById('svgLines');
    svg.querySelectorAll('.return-arrow, .return-val').forEach(el => el.remove());
    
    if (state.arrowTo) {
        const fromEl = document.getElementById(state.nodeId);
        const toEl = document.getElementById(state.arrowTo.id);
        
        if (fromEl && toEl) {
            const halfNode = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--node-size')) / 2 || 24;
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
        // Reset text back to default
        if (span.id.startsWith('L-')) span.textContent = 'L ↓';
        if (span.id.startsWith('R-')) span.textContent = 'R ↓';
    });
    
    // Build a lookup from nodeId -> frame for returned values
    const frameLookup = {};
    if (state.stack) {
        state.stack.forEach(frame => {
            frameLookup[frame.nodeId] = frame;
        });
    }

    if (state.done) {
        for (const [nodeId, tasks] of Object.entries(state.done)) {
            const leftSpan = document.getElementById(`L-${nodeId}`);
            const rightSpan = document.getElementById(`R-${nodeId}`);
            const frame = frameLookup[nodeId];
            
            if (tasks.L && leftSpan) {
                leftSpan.classList.add('done');
                if (frame && typeof frame.l === 'number') {
                    leftSpan.textContent = `L:${frame.l}`;
                } else if (frame && (frame.l === 'LEAF' || frame.l === 'NONE')) {
                    leftSpan.textContent = 'L:∅';
                }
            }
            if (tasks.R && rightSpan) {
                rightSpan.classList.add('done');
                if (frame && typeof frame.r === 'number') {
                    rightSpan.textContent = `R:${frame.r}`;
                } else if (frame && (frame.r === 'LEAF' || frame.r === 'NONE')) {
                    rightSpan.textContent = 'R:∅';
                }
            }
            
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
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentStep === 0;
    document.getElementById('nextBtn').disabled = currentStep === history.length - 1;
    
    // Sync mobile nav buttons
    const mobilePrev = document.getElementById('mobilePrevBtn');
    const mobileNext = document.getElementById('mobileNextBtn');
    if (mobilePrev) mobilePrev.disabled = currentStep === 0;
    if (mobileNext) mobileNext.disabled = currentStep === history.length - 1;
    
    // Array visualization for array problems
    if (['3','4','5'].includes(currentProbId)) {
        const engine = document.querySelector('.render-engine');
        
        let arrayContainer = document.getElementById('arrayContainer');
        if (!arrayContainer) {
            arrayContainer = document.createElement('div');
            arrayContainer.id = 'arrayContainer';
            arrayContainer.className = 'array-container';
            engine.appendChild(arrayContainer);
        }
        
        // Problem 3: Merge Sorted Array (two arrays, three pointers)
        if (currentProbId === '3' && state.nums1 && state.nums2) {
            const p1 = state.pointers?.p1 ?? -1;
            const p2 = state.pointers?.p2 ?? -1;
            const pMerge = state.pointers?.p ?? -1;
            
            const itemCount = state.nums1.length;
            const denseClass = itemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${denseClass}">`; 
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
        
        // Problems 4 & 5: Single-array two-pointer (Remove Element / Remove Duplicates)
        if (['4','5'].includes(currentProbId) && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const kPtr = state.pointers?.k ?? -1;
            const meta = state.arrayMeta || {};
            const kVal = meta.k ?? kPtr;
            const isComplete = state.isComplete || false;
            
            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            
            // Problem title context
            if (currentProbId === '4') {
                html += `<div class="array-label">nums — remove all instances of val = ${meta.val ?? '?'}</div>`;
            } else {
                html += `<div class="array-label">nums — remove duplicates in-place</div>`;
            }
            
            html += `<div class="array-visualization">`;
            
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                
                // Highlight the "kept" region (indices < k)
                if (isComplete && idx < kVal) {
                    classes += ' pointer-merge'; // reuse merge style (orange accent)
                }
                
                // Active pointers
                if (idx === iPtr && idx === kPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">i</div><div class="pointer-label p2 pair-right">k</div></div>`;
                } else if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                } else if (idx === kPtr) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">k</div>`;
                }
                
                // Dim cells beyond k when complete
                if (isComplete && idx >= kVal) {
                    classes += ' empty';
                }
                
                html += `
                    <div class="${classes}">
                        ${val}
                        ${pointerLabels}
                        <div class="array-index">${idx}</div>
                    </div>
                `;
            });
            
            html += `</div>`; // close array-visualization
            
            // Pointer info bar
            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (read pointer)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? iPtr : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">k (write pointer)</div>
                        <div class="pointer-detail-value p2">${kVal}</div>
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
                        <div class="stack-function-name">${currentProbId === '1' ? 'shortestPath' : 'longestPath'}(${frame.v})</div>
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
    if (value === "LEAF") return "null ✓";
    if (value === "NONE") return "null";
    if (typeof value === 'number') return `returned ${value}`;
    return value;
}

function getStatusClass(value) {
    if (value === "PENDING") return "pending";
    if (value === "PROCESSING") return "processing";
    if (value === "LEAF" || value === "NONE" || typeof value === 'number') return "completed";
    return "";
}

// Python syntax highlighting — single-pass tokenizer to avoid regex conflicts
function highlightPython(code) {
    const keywords = new Set(['def', 'if', 'else', 'elif', 'while', 'for', 'in', 'return', 'not', 'and', 'or', 'True', 'False', 'None', 'class', 'import', 'from', 'pass', 'break', 'continue', 'is', 'lambda', 'with', 'as', 'try', 'except', 'finally', 'raise', 'yield']);
    const builtins = new Set(['print', 'len', 'range', 'max', 'min', 'abs', 'sum', 'sorted', 'list', 'dict', 'set', 'tuple', 'int', 'str', 'float', 'bool', 'enumerate', 'zip', 'map', 'filter', 'isinstance', 'type', 'append', 'pop', 'extend', 'insert', 'remove', 'reverse', 'sort']);

    // Tokenize with a single regex — order matters (strings/comments first)
    const tokenPattern = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(#.*$)|(\b\d+\.?\d*\b)|(\b[a-zA-Z_]\w*\b)|([^\s\w]|\s)/gm;

    let result = '';
    let match;
    while ((match = tokenPattern.exec(code)) !== null) {
        const [full, str, comment, num, word, other] = match;

        if (str) {
            result += '<span class="syn-str">' + str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
        } else if (comment) {
            result += '<span class="syn-comment">' + comment.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
        } else if (num) {
            result += '<span class="syn-num">' + num + '</span>';
        } else if (word) {
            if (word === 'self' || word === 'cls') {
                result += '<span class="syn-self">' + word + '</span>';
            } else if (word === 'def') {
                // Peek ahead for function name
                result += '<span class="syn-kw">def</span>';
                const ahead = code.slice(tokenPattern.lastIndex);
                const fnMatch = ahead.match(/^(\s+)([a-zA-Z_]\w*)/);
                if (fnMatch) {
                    result += fnMatch[1] + '<span class="syn-fn">' + fnMatch[2] + '</span>';
                    tokenPattern.lastIndex += fnMatch[0].length;
                }
            } else if (keywords.has(word)) {
                result += '<span class="syn-kw">' + word + '</span>';
            } else {
                // Check if it's a function call (next non-space char is '(')
                const rest = code.slice(tokenPattern.lastIndex);
                const isCall = /^\s*\(/.test(rest);
                if (builtins.has(word) && isCall) {
                    result += '<span class="syn-builtin">' + word + '</span>';
                } else if (isCall) {
                    result += '<span class="syn-fn">' + word + '</span>';
                } else if (builtins.has(word)) {
                    result += '<span class="syn-builtin">' + word + '</span>';
                } else {
                    result += word;
                }
            }
        } else if (other) {
            result += other.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
    }
    return result;
}

// Initialization
function init() {
    const prob = problemDB[currentProbId];
    const algorithm = prob.algorithms[currentAlgorithm];
    const engine = document.querySelector('.render-engine');
    
    baseCasesCount = 0;

    // Stop any autoplay
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        updatePlayButtons(false);
    }

    // Reset code & stack panels to hidden on mobile
    const codeModule = document.querySelector('.code-module');
    const codeToggleBtn = document.getElementById('codeToggleBtn');
    if (codeModule) codeModule.classList.remove('mobile-visible');

    // Desktop: start with code panel collapsed
    const appLayout = document.querySelector('.app-layout');
    if (appLayout) appLayout.classList.add('hide-code-panel');
    if (codeToggleBtn) codeToggleBtn.classList.add('collapsed');
    
    // REMOVE ARRAY CONTAINER COMPLETELY FIRST
    const existingArrayContainer = document.getElementById('arrayContainer');
    if (existingArrayContainer) {
        existingArrayContainer.remove();
    }
    
    // RESET LAYOUT - Remove inline styles and use CSS classes
    const stackModule = document.querySelector('.stack-module');
    const stackToggleBtn = document.getElementById('stackToggleBtn');
    
    if (appLayout) {
        appLayout.style.gridTemplateColumns = ''; // Clear inline style
    }

    // Reset stack panel on mobile
    if (stackModule) stackModule.classList.remove('mobile-visible');
    if (stackToggleBtn) stackToggleBtn.classList.remove('collapsed');
    
    const isArrayProblem = ['3','4','5'].includes(currentProbId);
    const isBFS = currentAlgorithm === 'bfs';
    const isTrueMobile = window.matchMedia('(pointer: coarse)').matches;

    if (isArrayProblem) {
        // Array problems: hide right panel entirely
        if (appLayout) appLayout.classList.add('hide-right-panel');
        if (stackModule) {
            stackModule.style.display = 'none';
            stackModule.classList.remove('mobile-visible');
        }
        if (stackToggleBtn) {
            stackToggleBtn.style.display = 'none';
        }
    } else if (isBFS && isTrueMobile) {
        // BFS on mobile: hide right panel, queue shows as floating overlay
        if (appLayout) appLayout.classList.add('hide-right-panel');
        if (stackModule) {
            stackModule.style.display = 'none';
            stackModule.classList.remove('mobile-visible');
        }
        if (stackToggleBtn) {
            stackToggleBtn.style.display = 'none';
        }
    } else {
        // Recursive, Iterative DFS, and BFS on desktop: show right panel
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
        problemListBtn.innerHTML = `<i class="fas fa-list"></i> #${currentProbId} ${prob.name}`;
    }

    // Update "Inspired by" attribution in nav
    const inspiredByEl = document.getElementById('inspiredBy');
    const inspiredByLink = document.getElementById('inspiredByLink');
    if (inspiredByEl && inspiredByLink && prob.inspiredBy) {
        inspiredByLink.textContent = prob.inspiredBy;
        inspiredByLink.href = prob.sourceUrl || '#';
        inspiredByEl.style.display = '';
    } else if (inspiredByEl) {
        inspiredByEl.style.display = 'none';
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
        lineEl.innerHTML = highlightPython(line);
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
    
    // Handle array visualization for array problems
    if (['3','4','5'].includes(currentProbId)) {
        const nodesContainer = document.getElementById('nodesContainer');
        nodesContainer.innerHTML = '';
        
        // Clear SVG lines
        const svg = document.getElementById('svgLines');
        if (svg) {
            svg.innerHTML = '';
        }
        
        // Hide tree-canvas so it doesn't interfere with array layout
        const treeCanvas = document.getElementById('treeCanvas');
        if (treeCanvas) {
            treeCanvas.style.display = 'none';
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

    // Ensure tree-canvas is visible (may have been hidden for array problems)
    if (treeCanvas) {
        treeCanvas.style.display = '';
    }

    // Remove array container if switching from array problem
    const oldArrayContainer = document.getElementById('arrayContainer');
    if (oldArrayContainer) oldArrayContainer.remove();

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
    
    const halfNode = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--node-size')) / 2 || 24;

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
            line.setAttribute("data-from", node.id);
            line.setAttribute("data-to", node.left.id);
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
            line.setAttribute("data-from", node.id);
            line.setAttribute("data-to", node.right.id);
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
    // True mobile = touch device, not just narrow viewport from zoom
    const isTrueMobile = window.matchMedia('(pointer: coarse)').matches;

    if (isTrueMobile) {
        // Mobile: toggle split visibility (code takes top half, viz shrinks)
        const nowVisible = codeModule.classList.toggle('mobile-visible');
        toggleBtn.classList.toggle('collapsed', nowVisible);
    } else {
        // Desktop: toggle grid column collapse (even at high zoom)
        const isCollapsed = appLayout.classList.toggle('hide-code-panel');
        toggleBtn.classList.toggle('collapsed', isCollapsed);
    }

    // Re-scale tree canvas after layout transition completes
    setTimeout(() => {
        if (['3','4','5'].includes(currentProbId)) return; // array problem, no tree to scale
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
    const isTrueMobile = window.matchMedia('(pointer: coarse)').matches;

    if (!isTrueMobile) return; // only works on mobile

    const nowVisible = stackModule.classList.toggle('mobile-visible');
    toggleBtn.classList.toggle('collapsed', nowVisible);

    // Re-scale tree canvas after layout transition completes
    setTimeout(() => {
        if (['3','4','5'].includes(currentProbId)) return; // array problem, no tree to scale
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

    // Filter buttons in problem modal
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProblemList(btn.dataset.filter);
        });
    });

    // Filter scroll arrows
    const filterScrollArea = document.getElementById('filterScrollArea');
    const filterScrollLeft = document.getElementById('filterScrollLeft');
    const filterScrollRight = document.getElementById('filterScrollRight');
    if (filterScrollArea && filterScrollLeft && filterScrollRight) {
        const updateFilterArrows = () => {
            const { scrollLeft, scrollWidth, clientWidth } = filterScrollArea;
            filterScrollLeft.classList.toggle('hidden', scrollLeft <= 4);
            filterScrollRight.classList.toggle('hidden', scrollLeft + clientWidth >= scrollWidth - 4);
        };
        filterScrollLeft.addEventListener('click', () => {
            filterScrollArea.scrollBy({ left: -150, behavior: 'smooth' });
        });
        filterScrollRight.addEventListener('click', () => {
            filterScrollArea.scrollBy({ left: 150, behavior: 'smooth' });
        });
        filterScrollArea.addEventListener('scroll', updateFilterArrows);
        // Initial check after modal opens
        setTimeout(updateFilterArrows, 200);
    }

    // Search input in problem modal
    const problemSearchInput = document.getElementById('problemSearchInput');
    if (problemSearchInput) {
        problemSearchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            renderProblemList();
        });
    }
    
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
    const problemModal = document.getElementById('problemModal');
    if (problemModal && problemModal.classList.contains('show')) return;
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

function updatePlayButtons(isPlaying) {
    const mobileBtn = document.getElementById('mobilePlayBtn');
    const desktopBtn = document.getElementById('desktopPlayBtn');
    if (mobileBtn) {
        mobileBtn.querySelector('i').className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        mobileBtn.querySelector('span').textContent = isPlaying ? 'Pause' : 'Play';
    }
    if (desktopBtn) {
        desktopBtn.querySelector('i').className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        desktopBtn.querySelector('span').textContent = isPlaying ? 'Pause' : 'Play';
    }
}

function toggleAutoPlay() {
    const problemModal = document.getElementById('problemModal');
    if (problemModal && problemModal.classList.contains('show')) {
        closeProblemModal();
        return;
    }
    const ytModal = document.getElementById('youtubeModal');
    if (ytModal && ytModal.classList.contains('show')) {
        closeYouTubeModal();
        return;
    }
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        updatePlayButtons(false);
    } else {
        // If we're at the end, restart from the beginning
        if (currentStep >= history.length - 1) {
            currentStep = 0;
            render();
        }
        updatePlayButtons(true);
        autoPlayInterval = setInterval(() => {
            if (currentStep < history.length - 1) {
                changeStep(1);
            } else {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
                updatePlayButtons(false);
                // Auto-reset after a pause so user can see the final answer
                setTimeout(() => {
                    currentStep = 0;
                    render();
                }, 3000);
            }
        }, autoPlaySpeed);
    }
}

function resetVisualization() {
    const problemModal = document.getElementById('problemModal');
    if (problemModal && problemModal.classList.contains('show')) return;
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
    updatePlayButtons(false);
    init();
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);

// Debounced resize: re-render tree to pick up new --node-size and scale
let resizeTimer;
let lastNodeSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--node-size')) || 48;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const currentNodeSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--node-size')) || 48;
        if (currentNodeSize !== lastNodeSize) {
            // Node size changed (e.g. crossed mobile breakpoint) — full re-render
            lastNodeSize = currentNodeSize;
            init();
        } else if (currentProbId !== '3') {
            // Just re-scale the tree canvas to fit the new container size
            const engine = document.querySelector('.render-engine');
            const treeCanvas = document.getElementById('treeCanvas');
            if (engine && treeCanvas) {
                const containerW = engine.clientWidth || 800;
                const containerH = engine.clientHeight || 600;
                const fitScale = Math.min(containerW / 800, containerH / 600) * 1.15;
                treeCanvas.style.transform = `translate(-50%, -50%) scale(${fitScale})`;
            }
        }
    }, 150);
});