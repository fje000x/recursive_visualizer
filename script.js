// ===== Theme Toggle (Light / Dark) — disabled for v1 =====
// Kept for future use. Toggle buttons hidden via CSS.
// (function initTheme() {
//     const saved = localStorage.getItem('algoflowz-theme');
//     if (saved === 'light') {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// })();
// Clear any stale light-mode setting
localStorage.removeItem('algoflowz-theme');
document.documentElement.removeAttribute('data-theme');

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
        testCaseLabels: { normal: "Balanced Tree", edge: "Skewed Line" },
        tree: {
            v: 5, id: 'n5', x: 0, y: -160,
            left: { v: 2, id: 'n2', x: -180, y: -20, left: null, right: null },
            right: { 
                v: 8, id: 'n8', x: 180, y: -20,
                left: { v: 6, id: 'n6', x: 80, y: 120, left: null, right: null },
                right: { v: 11, id: 'n11', x: 280, y: 120, left: null, right: null }
            }
        },
        edgeCaseTree: {
            v: 1, id: 'n1', x: 0, y: -160,
            left: null,
            right: {
                v: 2, id: 'n2', x: 100, y: -20,
                left: null,
                right: {
                    v: 3, id: 'n3', x: 200, y: 120,
                    left: null,
                    right: null
                }
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
        testCaseLabels: { normal: "Balanced Tree", edge: "Single Node" },
        tree: {
            v: 10, id: 'n10', x: 0, y: -160,
            left: { v: 4, id: 'n4', x: -180, y: -20, left: null, right: null },
            right: { 
                v: 17, id: 'n17', x: 180, y: -20,
                left: { v: 12, id: 'n12', x: 80, y: 120, left: null, right: null },
                right: { v: 22, id: 'n22', x: 280, y: 120, left: null, right: null }
            }
        },
        edgeCaseTree: {
            v: 7, id: 'n7', x: 0, y: -160,
            left: null,
            right: null
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
        name: "Merge Two Sorted Arrays",
        alias: "Merge Sorted Array",
        leetcodeNum: "88",
        inspiredBy: "Inspired by LeetCode Problem #88",
        sourceUrl: "https://leetcode.com/problems/merge-sorted-array/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        interview150: true,
        testCaseLabels: { normal: "Both Non-Empty", edge: "Empty Second Array" },
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
                },
                generateEdgeCaseHistory: function() {
                    return generateMergeSortedArrayEdgeHistory();
                }
            }
        }
    },
    "4": {
        name: "Filter Values In Place",
        alias: "Remove Element",
        leetcodeNum: "27",
        inspiredBy: "Inspired by LeetCode Problem #27",
        sourceUrl: "https://leetcode.com/problems/remove-element/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        interview150: true,
        testCaseLabels: { normal: "Mixed Values", edge: "All Match Target" },
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
                },
                generateEdgeCaseHistory: function() {
                    return generateRemoveElementEdgeHistory();
                }
            }
        }
    },
    "5": {
        name: "Deduplicate Sorted Array",
        alias: "Remove Duplicates",
        leetcodeNum: "26",
        inspiredBy: "Inspired by LeetCode Problem #26",
        sourceUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        difficulty: "easy",
        topics: ["array", "two-pointers"],
        interview150: true,
        testCaseLabels: { normal: "Has Duplicates", edge: "Already Unique" },
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
                },
                generateEdgeCaseHistory: function() {
                    return generateRemoveDuplicatesEdgeHistory();
                }
            }
        }
    },
    "6": {
        name: "Trim Excess Duplicates",
        alias: "Remove Duplicates from Sorted Array II",
        leetcodeNum: "80",
        inspiredBy: "Inspired by LeetCode Problem #80",
        sourceUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        difficulty: "medium",
        topics: ["array", "two-pointers"],
        interview150: true,
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def trimDuplicates(nums):",
                    "    if len(nums) <= 2: return len(nums)",
                    "    k = 2",
                    "    for i in range(2, len(nums)):",
                    "        if nums[i] != nums[k - 2]:",
                    "            nums[k] = nums[i]",
                    "            k += 1",
                    "    return k"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateTrimExcessDuplicatesHistory();
                }
            }
        }
    },
    "7": {
        name: "Find the Dominant Element",
        alias: "Majority Element",
        leetcodeNum: "169",
        inspiredBy: "Inspired by LeetCode Problem #169",
        sourceUrl: "https://leetcode.com/problems/majority-element/",
        difficulty: "easy",
        topics: ["array", "voting-algorithm"],
        interview150: true,
        testCaseLabels: { normal: "Mixed Votes", edge: "Unanimous [1,1,1,1,1]" },
        tree: null,
        algorithms: {
            boyerMoore: {
                name: "Boyer-Moore Voting",
                code: [
                    "def findDominant(nums):",
                    "    candidate = nums[0]",
                    "    count = 1",
                    "    for i in range(1, len(nums)):",
                    "        if count == 0:",
                    "            candidate = nums[i]",
                    "            count = 1",
                    "        elif nums[i] == candidate:",
                    "            count += 1",
                    "        else:",
                    "            count -= 1",
                    "    return candidate"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 3, 2, 3, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateDominantElementHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateDominantElementEdgeHistory();
                }
            }
        }
    },
    "8": {
        name: "Cycle Array Elements",
        alias: "Rotate Array",
        leetcodeNum: "189",
        inspiredBy: "Inspired by LeetCode Problem #189",
        sourceUrl: "https://leetcode.com/problems/rotate-array/",
        difficulty: "medium",
        topics: ["array", "math"],
        interview150: true,
        testCaseLabels: { normal: "Rotate by 3", edge: "k = 0 (No Rotation)" },
        tree: null,
        algorithms: {
            reverse: {
                name: "Reverse Three Times",
                code: [
                    "def cycleElements(nums, k):",
                    "    n = len(nums)",
                    "    k = k % n",
                    "    reverse(nums, 0, n - 1)",
                    "    reverse(nums, 0, k - 1)",
                    "    reverse(nums, k, n - 1)",
                    "",
                    "def reverse(nums, lo, hi):",
                    "    while lo < hi:",
                    "        nums[lo], nums[hi] = nums[hi], nums[lo]",
                    "        lo += 1",
                    "        hi -= 1"
                ],
                indentation: [0, 1, 1, 1, 1, 1, 0, 0, 1, 2, 2, 2],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateCycleArrayHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateCycleArrayEdgeHistory();
                }
            }
        }
    },
    "9": {
        name: "Best Moment to Trade",
        alias: "Best Time to Buy and Sell Stock",
        leetcodeNum: "121",
        inspiredBy: "Inspired by LeetCode Problem #121",
        sourceUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        difficulty: "easy",
        topics: ["array", "dynamic-programming"],
        interview150: true,
        testCaseLabels: { normal: "Profit Possible", edge: "Only Drops [7,6,4,3,1]" },
        tree: null,
        algorithms: {
            onePass: {
                name: "Single Pass",
                code: [
                    "def bestTrade(prices):",
                    "    minPrice = prices[0]",
                    "    maxProfit = 0",
                    "    for i in range(1, len(prices)):",
                    "        if prices[i] < minPrice:",
                    "            minPrice = prices[i]",
                    "        else:",
                    "            profit = prices[i] - minPrice",
                    "            maxProfit = max(maxProfit, profit)",
                    "    return maxProfit"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 2, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateBestTradeHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateBestTradeEdgeHistory();
                }
            }
        }
    },
    "10": {
        name: "Best Moment to Trade II",
        alias: "Best Time to Buy and Sell Stock II",
        leetcodeNum: "122",
        inspiredBy: "Inspired by LeetCode Problem #122",
        sourceUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        difficulty: "medium",
        topics: ["array", "greedy"],
        interview150: true,
        testCaseLabels: { normal: "Mixed Trends", edge: "Flat Prices [3,3,3,3,3]" },
        tree: null,
        algorithms: {
            greedy: {
                name: "Greedy (Collect Every Gain)",
                code: [
                    "def bestTrades(prices):",
                    "    totalProfit = 0",
                    "    for i in range(1, len(prices)):",
                    "        if prices[i] > prices[i - 1]:",
                    "            totalProfit += prices[i] - prices[i - 1]",
                    "    return totalProfit"
                ],
                indentation: [0, 1, 1, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateBestTradesHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateBestTradesEdgeHistory();
                }
            }
        }
    },
    "11": {
        name: "Can You Reach the End?",
        alias: "Jump Game",
        leetcodeNum: "55",
        inspiredBy: "Inspired by LeetCode Problem #55",
        sourceUrl: "https://leetcode.com/problems/jump-game/",
        difficulty: "medium",
        topics: ["array", "greedy"],
        interview150: true,
        testCaseLabels: { normal: "Reachable ✓", edge: "Stuck at Zero ✗" },
        tree: null,
        algorithms: {
            greedy: {
                name: "Greedy (Track Farthest)",
                code: [
                    "def canReachEnd(nums):",
                    "    farthest = 0",
                    "    for i in range(len(nums)):",
                    "        if i > farthest:",
                    "            return False",
                    "        farthest = max(farthest, i + nums[i])",
                    "    return True"
                ],
                indentation: [0, 1, 1, 2, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateCanReachEndHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateCanReachEndEdgeHistory();
                }
            }
        }
    },
    "12": {
        name: "Fewest Jumps to the End",
        alias: "Jump Game II",
        leetcodeNum: "45",
        inspiredBy: "Inspired by LeetCode Problem #45",
        sourceUrl: "https://leetcode.com/problems/jump-game-ii/",
        difficulty: "medium",
        topics: ["array", "greedy"],
        interview150: true,
        tree: null,
        algorithms: {
            greedy: {
                name: "Greedy (BFS-like Jumps)",
                code: [
                    "def fewestJumps(nums):",
                    "    jumps = 0",
                    "    l = r = 0",
                    "    farthest = 0",
                    "    while r < len(nums) - 1:",
                    "        for i in range(l, r + 1):",
                    "            farthest = max(farthest, i + nums[i])",
                    "        jumps += 1",
                    "        l = r + 1",
                    "        r = farthest",
                    "    return jumps"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 3, 2, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateFewestJumpsHistory();
                }
            }
        }
    },
    "13": {
        name: "Researcher Impact Score",
        alias: "H-Index",
        leetcodeNum: "274",
        inspiredBy: "Inspired by LeetCode Problem #274",
        sourceUrl: "https://leetcode.com/problems/h-index/",
        difficulty: "medium",
        topics: ["array", "sorting"],
        interview150: true,
        testCaseLabels: { normal: "[3,0,6,1,5] → h=3", edge: "[0,0,0] → h=0", tc2: "[100,100] → h=2", tc3: "[10] → h=1" },
        tree: null,
        algorithms: {
            sorting: {
                name: "Sort then Scan",
                code: [
                    "def hIndex(citations):",
                    "    citations.sort(reverse=True)",
                    "    h = 0",
                    "    for i in range(len(citations)):",
                    "        if citations[i] >= i + 1:",
                    "            h = i + 1",
                    "        else:",
                    "            break",
                    "    return h"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 2, 3, 1],
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateHIndexHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateHIndexEdgeHistory();
                },
                generateTc2History: function() {
                    return generateHIndexTestCase2History();
                },
                generateTc3History: function() {
                    return generateHIndexTestCase3History();
                }
            }
        }
    },
    "14": {
        name: "Randomized Collection",
        alias: "Insert Delete GetRandom O(1)",
        leetcodeNum: "380",
        inspiredBy: "Inspired by LeetCode Problem #380",
        sourceUrl: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        difficulty: "medium",
        topics: ["array", "hash-table", "design"],
        interview150: true,
        tree: null,
        algorithms: {
            design: {
                name: "HashMap + Array",
                code: [
                    "class RandomizedSet:",
                    "    def __init__(self):",
                    "        self.vals = []",
                    "        self.idx_map = {}",
                    "    def insert(self, val):",
                    "        if val in self.idx_map: return False",
                    "        self.idx_map[val] = len(self.vals)",
                    "        self.vals.append(val)",
                    "        return True",
                    "    def remove(self, val):",
                    "        if val not in self.idx_map: return False",
                    "        idx = self.idx_map[val]",
                    "        last = self.vals[-1]",
                    "        self.vals[idx] = last",
                    "        self.idx_map[last] = idx",
                    "        self.vals.pop()",
                    "        del self.idx_map[val]",
                    "        return True"
                ],
                indentation: [0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
                timeComplexity: "O(1) per op",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateRandomizedSetHistory();
                }
            }
        }
    },
    "15": {
        name: "Product Without Self",
        alias: "Product of Array Except Self",
        leetcodeNum: "238",
        inspiredBy: "Inspired by LeetCode Problem #238",
        sourceUrl: "https://leetcode.com/problems/product-of-array-except-self/",
        difficulty: "medium",
        topics: ["array", "prefix-sum"],
        interview150: true,
        tree: null,
        algorithms: {
            prefixSuffix: {
                name: "Prefix & Suffix Products",
                code: [
                    "def productWithoutSelf(nums):",
                    "    n = len(nums)",
                    "    answer = [1] * n",
                    "    prefix = 1",
                    "    for i in range(n):",
                    "        answer[i] = prefix",
                    "        prefix *= nums[i]",
                    "    suffix = 1",
                    "    for i in range(n - 1, -1, -1):",
                    "        answer[i] *= suffix",
                    "        suffix *= nums[i]",
                    "    return answer"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateProductWithoutSelfHistory();
                }
            }
        }
    },
    "16": {
        name: "Circular Fuel Route",
        alias: "Gas Station",
        leetcodeNum: "134",
        inspiredBy: "Inspired by LeetCode Problem #134",
        sourceUrl: "https://leetcode.com/problems/gas-station/",
        difficulty: "medium",
        topics: ["array", "greedy"],
        interview150: true,
        tree: null,
        algorithms: {
            greedy: {
                name: "Greedy (Single Pass)",
                code: [
                    "def circularFuel(gas, cost):",
                    "    totalSurplus = 0",
                    "    currentSurplus = 0",
                    "    start = 0",
                    "    for i in range(len(gas)):",
                    "        totalSurplus += gas[i] - cost[i]",
                    "        currentSurplus += gas[i] - cost[i]",
                    "        if currentSurplus < 0:",
                    "            start = i + 1",
                    "            currentSurplus = 0",
                    "    return start if totalSurplus >= 0 else -1"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateCircularFuelHistory();
                }
            }
        }
    },
    "17": {
        name: "Fair Candy Distribution",
        alias: "Candy",
        leetcodeNum: "135",
        inspiredBy: "Inspired by LeetCode Problem #135",
        sourceUrl: "https://leetcode.com/problems/candy/",
        difficulty: "hard",
        topics: ["array", "greedy"],
        interview150: true,
        tree: null,
        algorithms: {
            twoPass: {
                name: "Two-Pass Greedy",
                code: [
                    "def fairCandy(ratings):",
                    "    n = len(ratings)",
                    "    candies = [1] * n",
                    "    for i in range(1, n):",
                    "        if ratings[i] > ratings[i - 1]:",
                    "            candies[i] = candies[i - 1] + 1",
                    "    for i in range(n - 2, -1, -1):",
                    "        if ratings[i] > ratings[i + 1]:",
                    "            candies[i] = max(candies[i], candies[i+1]+1)",
                    "    return sum(candies)"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 1, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateFairCandyHistory();
                }
            }
        }
    },
    "18": {
        name: "Trapped Rainwater",
        alias: "Trapping Rain Water",
        leetcodeNum: "42",
        inspiredBy: "Inspired by LeetCode Problem #42",
        sourceUrl: "https://leetcode.com/problems/trapping-rain-water/",
        difficulty: "hard",
        topics: ["array", "two-pointers", "dynamic-programming"],
        interview150: true,
        testCaseLabels: { normal: "Varied Heights", edge: "Flat Surface (No Water)" },
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def trap(height):",
                    "    l, r = 0, len(height) - 1",
                    "    leftMax = height[l]",
                    "    rightMax = height[r]",
                    "    water = 0",
                    "    while l < r:",
                    "        if leftMax < rightMax:",
                    "            l += 1",
                    "            leftMax = max(leftMax, height[l])",
                    "            water += leftMax - height[l]",
                    "        else:",
                    "            r -= 1",
                    "            rightMax = max(rightMax, height[r])",
                    "            water += rightMax - height[r]",
                    "    return water"
                ],
                indentation: [0, 1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateTrappedRainwaterHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateTrappedRainwaterEdgeHistory();
                }
            }
        }
    },
    "19": {
        name: "Decode Roman Numerals",
        alias: "Roman to Integer",
        leetcodeNum: "13",
        inspiredBy: "Inspired by LeetCode Problem #13",
        sourceUrl: "https://leetcode.com/problems/roman-to-integer/",
        difficulty: "easy",
        topics: ["string", "hash-table", "math"],
        interview150: true,
        tree: null,
        algorithms: {
            scan: {
                name: "Right-to-Left Scan",
                code: [
                    "def romanToInt(s):",
                    "    roman = {'I':1,'V':5,'X':10,",
                    "             'L':50,'C':100,'D':500,'M':1000}",
                    "    total = 0",
                    "    prev = 0",
                    "    for ch in reversed(s):",
                    "        curr = roman[ch]",
                    "        if curr < prev:",
                    "            total -= curr",
                    "        else:",
                    "            total += curr",
                    "        prev = curr",
                    "    return total"
                ],
                indentation: [0, 1, 1, 1, 1, 1, 2, 2, 3, 2, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateRomanToIntHistory();
                }
            }
        }
    },
    "20": {
        name: "Encode to Roman Numerals",
        alias: "Integer to Roman",
        leetcodeNum: "12",
        inspiredBy: "Inspired by LeetCode Problem #12",
        sourceUrl: "https://leetcode.com/problems/integer-to-roman/",
        difficulty: "medium",
        topics: ["string", "hash-table", "math"],
        interview150: true,
        tree: null,
        algorithms: {
            greedy: {
                name: "Greedy (Largest First)",
                code: [
                    "def intToRoman(num):",
                    "    vals =  [1000,900,500,400,100,",
                    "             90,50,40,10,9,5,4,1]",
                    "    syms =  ['M','CM','D','CD','C',",
                    "             'XC','L','XL','X','IX','V','IV','I']",
                    "    result = ''",
                    "    for i in range(len(vals)):",
                    "        while num >= vals[i]:",
                    "            result += syms[i]",
                    "            num -= vals[i]",
                    "    return result"
                ],
                indentation: [0, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1],
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateIntToRomanHistory();
                }
            }
        }
    },
    "21": {
        name: "Length of Final Word",
        alias: "Length of Last Word",
        leetcodeNum: "58",
        inspiredBy: "Inspired by LeetCode Problem #58",
        sourceUrl: "https://leetcode.com/problems/length-of-last-word/",
        difficulty: "easy",
        topics: ["string"],
        interview150: true,
        tree: null,
        algorithms: {
            scan: {
                name: "Reverse Scan",
                code: [
                    "def lengthOfLastWord(s):",
                    "    i = len(s) - 1",
                    "    while i >= 0 and s[i] == ' ':",
                    "        i -= 1",
                    "    length = 0",
                    "    while i >= 0 and s[i] != ' ':",
                    "        length += 1",
                    "        i -= 1",
                    "    return length"
                ],
                indentation: [0, 1, 1, 2, 1, 1, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateLengthOfLastWordHistory();
                }
            }
        }
    },
    "22": {
        name: "Common Prefix Finder",
        alias: "Longest Common Prefix",
        leetcodeNum: "14",
        inspiredBy: "Inspired by LeetCode Problem #14",
        sourceUrl: "https://leetcode.com/problems/longest-common-prefix/",
        difficulty: "easy",
        topics: ["string"],
        interview150: true,
        tree: null,
        algorithms: {
            vertical: {
                name: "Vertical Scan",
                code: [
                    "def longestCommonPrefix(strs):",
                    "    if not strs: return ''",
                    "    for i in range(len(strs[0])):",
                    "        ch = strs[0][i]",
                    "        for j in range(1, len(strs)):",
                    "            if i >= len(strs[j]) or strs[j][i] != ch:",
                    "                return strs[0][:i]",
                    "    return strs[0]"
                ],
                indentation: [0, 1, 1, 2, 2, 3, 4, 1],
                timeComplexity: "O(S)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateLongestCommonPrefixHistory();
                }
            }
        }
    },
    "23": {
        name: "Flip Words in Sentence",
        alias: "Reverse Words in a String",
        leetcodeNum: "151",
        inspiredBy: "Inspired by LeetCode Problem #151",
        sourceUrl: "https://leetcode.com/problems/reverse-words-in-a-string/",
        difficulty: "medium",
        topics: ["string", "two-pointers"],
        interview150: true,
        tree: null,
        algorithms: {
            splitReverse: {
                name: "Split & Reverse",
                code: [
                    "def reverseWords(s):",
                    "    words = s.split()",
                    "    left, right = 0, len(words) - 1",
                    "    while left < right:",
                    "        words[left], words[right] = words[right], words[left]",
                    "        left += 1",
                    "        right -= 1",
                    "    return ' '.join(words)"
                ],
                indentation: [0, 1, 1, 1, 2, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateReverseWordsHistory();
                }
            }
        }
    },
    "24": {
        name: "Zigzag Text Encoder",
        alias: "Zigzag Conversion",
        leetcodeNum: "6",
        inspiredBy: "Inspired by LeetCode Problem #6",
        sourceUrl: "https://leetcode.com/problems/zigzag-conversion/",
        difficulty: "medium",
        topics: ["string"],
        interview150: true,
        tree: null,
        algorithms: {
            rowBuild: {
                name: "Row-by-Row Build",
                code: [
                    "def convert(s, numRows):",
                    "    if numRows == 1: return s",
                    "    rows = [''] * numRows",
                    "    curRow, goingDown = 0, False",
                    "    for ch in s:",
                    "        rows[curRow] += ch",
                    "        if curRow == 0 or curRow == numRows - 1:",
                    "            goingDown = not goingDown",
                    "        curRow += 1 if goingDown else -1",
                    "    return ''.join(rows)"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateZigzagConversionHistory();
                }
            }
        }
    },
    "25": {
        name: "Find Needle in Haystack",
        alias: "Find the Index of the First Occurrence",
        leetcodeNum: "28",
        inspiredBy: "Inspired by LeetCode Problem #28",
        sourceUrl: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        difficulty: "easy",
        topics: ["string", "two-pointers"],
        interview150: true,
        tree: null,
        algorithms: {
            sliding: {
                name: "Sliding Window",
                code: [
                    "def strStr(haystack, needle):",
                    "    n, m = len(haystack), len(needle)",
                    "    for i in range(n - m + 1):",
                    "        if haystack[i:i+m] == needle:",
                    "            return i",
                    "    return -1"
                ],
                indentation: [0, 1, 1, 2, 3, 1],
                timeComplexity: "O((n−m)·m)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateStrStrHistory();
                }
            }
        }
    },
    "26": {
        name: "Justified Text Formatter",
        alias: "Text Justification",
        leetcodeNum: "68",
        inspiredBy: "Inspired by LeetCode Problem #68",
        sourceUrl: "https://leetcode.com/problems/text-justification/",
        difficulty: "hard",
        topics: ["string"],
        interview150: true,
        tree: null,
        algorithms: {
            greedy: {
                name: "Greedy Pack Lines",
                code: [
                    "def fullJustify(words, maxWidth):",
                    "    result, line, lineLen = [], [], 0",
                    "    for w in words:",
                    "        if lineLen + len(w) + len(line) > maxWidth:",
                    "            for i in range(maxWidth - lineLen):",
                    "                line[i % max(len(line)-1,1)] += ' '",
                    "            result.append(''.join(line))",
                    "            line, lineLen = [], 0",
                    "        line.append(w)",
                    "        lineLen += len(w)",
                    "    result.append(' '.join(line).ljust(maxWidth))",
                    "    return result"
                ],
                indentation: [0, 1, 1, 2, 3, 4, 3, 3, 2, 2, 1, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateTextJustificationHistory();
                }
            }
        }
    },
    "27": {
        name: "Mirror String Check",
        alias: "Valid Palindrome",
        leetcodeNum: "125",
        inspiredBy: "Inspired by LeetCode Problem #125",
        sourceUrl: "https://leetcode.com/problems/valid-palindrome/",
        difficulty: "easy",
        topics: ["string", "two-pointers"],
        interview150: true,
        testCaseLabels: { normal: "\"No lemon, no melon\" ✓", edge: "\"race a car\" ✗" },
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def isPalindrome(s):",
                    "    l, r = 0, len(s) - 1",
                    "    while l < r:",
                    "        while l < r and not s[l].isalnum():",
                    "            l += 1",
                    "        while l < r and not s[r].isalnum():",
                    "            r -= 1",
                    "        if s[l].lower() != s[r].lower():",
                    "            return False",
                    "        l += 1",
                    "        r -= 1",
                    "    return True"
                ],
                indentation: [0, 1, 1, 2, 3, 2, 3, 2, 3, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateValidPalindromeHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateValidPalindromeEdgeHistory();
                }
            }
        }
    },
    "28": {
        name: "Subsequence Checker",
        alias: "Is Subsequence",
        leetcodeNum: "392",
        inspiredBy: "Inspired by LeetCode Problem #392",
        sourceUrl: "https://leetcode.com/problems/is-subsequence/",
        difficulty: "easy",
        topics: ["string", "two-pointers"],
        interview150: true,
        testCaseLabels: { normal: "\"abc\" in \"ahbgdc\"", edge: "Empty String s" },
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def isSubsequence(s, t):",
                    "    i, j = 0, 0",
                    "    while i < len(s) and j < len(t):",
                    "        if s[i] == t[j]:",
                    "            i += 1",
                    "        j += 1",
                    "    return i == len(s)"
                ],
                indentation: [0, 1, 1, 2, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateIsSubsequenceHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateIsSubsequenceEdgeHistory();
                }
            }
        }
    },
    "29": {
        name: "Sorted Pair Sum",
        alias: "Two Sum II",
        leetcodeNum: "167",
        inspiredBy: "Inspired by LeetCode Problem #167",
        sourceUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        difficulty: "medium",
        topics: ["array", "two-pointers"],
        interview150: true,
        testCaseLabels: { normal: "[2,7,11,15] target=9", edge: "[1,2,3,4,5] target=6" },
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def twoSum(numbers, target):",
                    "    l, r = 0, len(numbers) - 1",
                    "    while l < r:",
                    "        curSum = numbers[l] + numbers[r]",
                    "        if curSum == target:",
                    "            return [l + 1, r + 1]",
                    "        elif curSum < target:",
                    "            l += 1",
                    "        else:",
                    "            r -= 1",
                    "    return []"
                ],
                indentation: [0, 1, 1, 2, 2, 3, 2, 3, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateTwoSumIIHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateTwoSumIIEdgeHistory();
                }
            }
        }
    },
    "30": {
        name: "Widest Water Container",
        alias: "Container With Most Water",
        leetcodeNum: "11",
        inspiredBy: "Inspired by LeetCode Problem #11",
        sourceUrl: "https://leetcode.com/problems/container-with-most-water/",
        difficulty: "medium",
        topics: ["array", "two-pointers", "greedy"],
        interview150: true,
        tree: null,
        algorithms: {
            twoPointers: {
                name: "Two Pointers",
                code: [
                    "def maxArea(height):",
                    "    l, r = 0, len(height) - 1",
                    "    maxWater = 0",
                    "    while l < r:",
                    "        area = min(height[l], height[r]) * (r - l)",
                    "        maxWater = max(maxWater, area)",
                    "        if height[l] < height[r]:",
                    "            l += 1",
                    "        else:",
                    "            r -= 1",
                    "    return maxWater"
                ],
                indentation: [0, 1, 1, 1, 2, 2, 2, 3, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateContainerWaterHistory();
                }
            }
        }
    },
    "31": {
        name: "Triple Zero Sum",
        alias: "3Sum",
        leetcodeNum: "15",
        inspiredBy: "Inspired by LeetCode Problem #15",
        sourceUrl: "https://leetcode.com/problems/3sum/",
        difficulty: "medium",
        topics: ["array", "two-pointers", "sorting"],
        interview150: true,
        tree: null,
        algorithms: {
            sortAndScan: {
                name: "Sort + Two Pointers",
                code: [
                    "def threeSum(nums):",
                    "    nums.sort()",
                    "    result = []",
                    "    for i in range(len(nums) - 2):",
                    "        if i > 0 and nums[i] == nums[i-1]: continue",
                    "        l, r = i + 1, len(nums) - 1",
                    "        while l < r:",
                    "            total = nums[i] + nums[l] + nums[r]",
                    "            if total == 0:",
                    "                result.append([nums[i],nums[l],nums[r]])",
                    "                l += 1; r -= 1",
                    "                while l < r and nums[l] == nums[l-1]: l += 1",
                    "            elif total < 0: l += 1",
                    "            else: r -= 1",
                    "    return result"
                ],
                indentation: [0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 3, 3, 1],
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateThreeSumHistory();
                }
            }
        }
    },
    "32": {
        name: "Smallest Subarray Sum",
        alias: "Minimum Size Subarray Sum",
        leetcodeNum: "209",
        inspiredBy: "Inspired by LeetCode Problem #209",
        sourceUrl: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        difficulty: "medium",
        topics: ["array", "sliding-window"],
        interview150: true,
        tree: null,
        algorithms: {
            slidingWindow: {
                name: "Sliding Window",
                code: [
                    "def minSubArrayLen(target, nums):",
                    "    l, total, res = 0, 0, float('inf')",
                    "    for r in range(len(nums)):",
                    "        total += nums[r]",
                    "        while total >= target:",
                    "            res = min(res, r - l + 1)",
                    "            total -= nums[l]",
                    "            l += 1",
                    "    return res if res != float('inf') else 0"
                ],
                indentation: [0, 1, 1, 2, 2, 3, 3, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateMinSubArrayLenHistory();
                }
            }
        }
    },
    "33": {
        name: "Longest Unique Substring",
        alias: "Longest Substring Without Repeating Characters",
        leetcodeNum: "3",
        inspiredBy: "Inspired by LeetCode Problem #3",
        sourceUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        difficulty: "medium",
        topics: ["string", "sliding-window", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            slidingWindow: {
                name: "Sliding Window + Set",
                code: [
                    "def lengthOfLongestSubstring(s):",
                    "    charSet = set()",
                    "    l, res = 0, 0",
                    "    for r in range(len(s)):",
                    "        while s[r] in charSet:",
                    "            charSet.remove(s[l])",
                    "            l += 1",
                    "        charSet.add(s[r])",
                    "        res = max(res, r - l + 1)",
                    "    return res"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 3, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(min(n, m))",
                generateHistory: function() {
                    return generateLongestSubstringHistory();
                }
            }
        }
    },
    "34": {
        name: "Longest Repeating After Replace",
        alias: "Longest Repeating Character Replacement",
        leetcodeNum: "424",
        inspiredBy: "Inspired by LeetCode Problem #424",
        sourceUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        difficulty: "medium",
        topics: ["string", "sliding-window"],
        interview150: true,
        tree: null,
        algorithms: {
            slidingWindow: {
                name: "Sliding Window + Count",
                code: [
                    "def characterReplacement(s, k):",
                    "    count = {}",
                    "    l, maxf, res = 0, 0, 0",
                    "    for r in range(len(s)):",
                    "        count[s[r]] = count.get(s[r], 0) + 1",
                    "        maxf = max(maxf, count[s[r]])",
                    "        while (r - l + 1) - maxf > k:",
                    "            count[s[l]] -= 1",
                    "            l += 1",
                    "        res = max(res, r - l + 1)",
                    "    return res"
                ],
                indentation: [0, 1, 1, 1, 2, 2, 2, 3, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateCharReplacementHistory();
                }
            }
        }
    },
    "35": {
        name: "Minimum Window Match",
        alias: "Minimum Window Substring",
        leetcodeNum: "76",
        inspiredBy: "Inspired by LeetCode Problem #76",
        sourceUrl: "https://leetcode.com/problems/minimum-window-substring/",
        difficulty: "hard",
        topics: ["string", "sliding-window", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            slidingWindow: {
                name: "Sliding Window + HashMap",
                code: [
                    "def minWindow(s, t):",
                    "    need = Counter(t)",
                    "    have, total = 0, len(need)",
                    "    res, resLen = [-1,-1], float('inf')",
                    "    l = 0",
                    "    window = {}",
                    "    for r in range(len(s)):",
                    "        window[s[r]] = window.get(s[r],0) + 1",
                    "        if s[r] in need and window[s[r]] == need[s[r]]:",
                    "            have += 1",
                    "        while have == total:",
                    "            if (r - l + 1) < resLen:",
                    "                res, resLen = [l, r], r - l + 1",
                    "            window[s[l]] -= 1",
                    "            if s[l] in need and window[s[l]] < need[s[l]]:",
                    "                have -= 1",
                    "            l += 1",
                    "    return s[res[0]:res[1]+1] if resLen != float('inf') else ''"
                ],
                indentation: [0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 3, 4, 3, 3, 4, 3, 1],
                timeComplexity: "O(n + m)",
                spaceComplexity: "O(n + m)",
                generateHistory: function() {
                    return generateMinWindowHistory();
                }
            }
        }
    },
    "36": {
        name: "Valid Bracket Sequence",
        alias: "Valid Parentheses",
        leetcodeNum: "20",
        inspiredBy: "Inspired by LeetCode Problem #20",
        sourceUrl: "https://leetcode.com/problems/valid-parentheses/",
        difficulty: "easy",
        topics: ["string", "stack"],
        interview150: true,
        testCaseLabels: { normal: "({[]}) ✓ Balanced", edge: "([)] ✗ Interleaved" },
        tree: null,
        algorithms: {
            stackApproach: {
                name: "Stack",
                code: [
                    "def isValid(s):",
                    "    stack = []",
                    "    pairs = {')':'(', '}':'{', ']':'['}",
                    "    for c in s:",
                    "        if c in pairs:",
                    "            if not stack or stack[-1] != pairs[c]:",
                    "                return False",
                    "            stack.pop()",
                    "        else:",
                    "            stack.append(c)",
                    "    return len(stack) == 0"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 3, 2, 2, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateValidParenthesesHistory();
                },
                generateEdgeCaseHistory: function() {
                    return generateValidParenthesesEdgeHistory();
                }
            }
        }
    },
    "37": {
        name: "Spiral Matrix Reader",
        alias: "Spiral Matrix",
        leetcodeNum: "54",
        inspiredBy: "Inspired by LeetCode Problem #54",
        sourceUrl: "https://leetcode.com/problems/spiral-matrix/",
        difficulty: "medium",
        topics: ["array", "matrix"],
        interview150: true,
        tree: null,
        algorithms: {
            boundaryPeel: {
                name: "Boundary Peel",
                code: [
                    "def spiralOrder(matrix):",
                    "    res = []",
                    "    top, bot = 0, len(matrix) - 1",
                    "    left, right = 0, len(matrix[0]) - 1",
                    "    while top <= bot and left <= right:",
                    "        for i in range(left, right + 1): res.append(matrix[top][i])",
                    "        top += 1",
                    "        for i in range(top, bot + 1): res.append(matrix[i][right])",
                    "        right -= 1",
                    "        if top <= bot:",
                    "            for i in range(right, left-1, -1): res.append(matrix[bot][i])",
                    "            bot -= 1",
                    "        if left <= right:",
                    "            for i in range(bot, top-1, -1): res.append(matrix[i][left])",
                    "            left += 1",
                    "    return res"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 1],
                timeComplexity: "O(m × n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateSpiralMatrixHistory();
                }
            }
        }
    },
    "38": {
        name: "Rotate Grid 90°",
        alias: "Rotate Image",
        leetcodeNum: "48",
        inspiredBy: "Inspired by LeetCode Problem #48",
        sourceUrl: "https://leetcode.com/problems/rotate-image/",
        difficulty: "medium",
        topics: ["array", "matrix"],
        interview150: true,
        tree: null,
        algorithms: {
            transposeReverse: {
                name: "Transpose + Reverse",
                code: [
                    "def rotate(matrix):",
                    "    n = len(matrix)",
                    "    for i in range(n):",
                    "        for j in range(i + 1, n):",
                    "            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]",
                    "    for row in matrix:",
                    "        row.reverse()"
                ],
                indentation: [0, 1, 1, 2, 3, 1, 2],
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateRotateImageHistory();
                }
            }
        }
    },
    "39": {
        name: "Zero Row & Column Marker",
        alias: "Set Matrix Zeroes",
        leetcodeNum: "73",
        inspiredBy: "Inspired by LeetCode Problem #73",
        sourceUrl: "https://leetcode.com/problems/set-matrix-zeroes/",
        difficulty: "medium",
        topics: ["array", "matrix"],
        interview150: true,
        tree: null,
        algorithms: {
            inPlaceMarker: {
                name: "In-Place Marker",
                code: [
                    "def setZeroes(matrix):",
                    "    m, n = len(matrix), len(matrix[0])",
                    "    firstRow = any(matrix[0][j]==0 for j in range(n))",
                    "    firstCol = any(matrix[i][0]==0 for i in range(m))",
                    "    for i in range(1, m):",
                    "        for j in range(1, n):",
                    "            if matrix[i][j] == 0:",
                    "                matrix[i][0] = 0",
                    "                matrix[0][j] = 0",
                    "    for i in range(1, m):",
                    "        for j in range(1, n):",
                    "            if matrix[i][0]==0 or matrix[0][j]==0:",
                    "                matrix[i][j] = 0",
                    "    if firstRow: matrix[0] = [0]*n",
                    "    if firstCol:",
                    "        for i in range(m): matrix[i][0] = 0"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 3, 4, 4, 1, 2, 3, 4, 1, 1, 2],
                timeComplexity: "O(m × n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateSetMatrixZeroesHistory();
                }
            }
        }
    },
    "40": {
        name: "Game of Life Step",
        alias: "Game of Life",
        leetcodeNum: "289",
        inspiredBy: "Inspired by LeetCode Problem #289",
        sourceUrl: "https://leetcode.com/problems/game-of-life/",
        difficulty: "medium",
        topics: ["array", "matrix"],
        interview150: true,
        tree: null,
        algorithms: {
            inPlace: {
                name: "In-Place State Encoding",
                code: [
                    "def gameOfLife(board):",
                    "    m, n = len(board), len(board[0])",
                    "    for i in range(m):",
                    "        for j in range(n):",
                    "            neighbors = countLiveNeighbors(i, j)",
                    "            if board[i][j] == 1 and neighbors in (2,3):",
                    "                board[i][j] = 3  # was 1, stays 1",
                    "            if board[i][j] == 0 and neighbors == 3:",
                    "                board[i][j] = 2  # was 0, becomes 1",
                    "    for i in range(m):",
                    "        for j in range(n):",
                    "            board[i][j] >>= 1"
                ],
                indentation: [0, 1, 1, 2, 3, 3, 4, 3, 4, 1, 2, 3],
                timeComplexity: "O(m × n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateGameOfLifeHistory();
                }
            }
        }
    },
    "41": {
        name: "Ransom Letter Builder",
        alias: "Ransom Note",
        leetcodeNum: "383",
        inspiredBy: "Inspired by LeetCode Problem #383",
        sourceUrl: "https://leetcode.com/problems/ransom-note/",
        difficulty: "easy",
        topics: ["string", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            hashCount: {
                name: "Character Count",
                code: [
                    "def canConstruct(ransomNote, magazine):",
                    "    count = {}",
                    "    for c in magazine:",
                    "        count[c] = count.get(c, 0) + 1",
                    "    for c in ransomNote:",
                    "        if count.get(c, 0) == 0:",
                    "            return False",
                    "        count[c] -= 1",
                    "    return True"
                ],
                indentation: [0, 1, 1, 2, 1, 2, 3, 2, 1],
                timeComplexity: "O(n + m)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateRansomNoteHistory();
                }
            }
        }
    },
    "42": {
        name: "Isomorphic String Check",
        alias: "Isomorphic Strings",
        leetcodeNum: "205",
        inspiredBy: "Inspired by LeetCode Problem #205",
        sourceUrl: "https://leetcode.com/problems/isomorphic-strings/",
        difficulty: "easy",
        topics: ["string", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            twoMaps: {
                name: "Two HashMaps",
                code: [
                    "def isIsomorphic(s, t):",
                    "    mapST, mapTS = {}, {}",
                    "    for c1, c2 in zip(s, t):",
                    "        if c1 in mapST and mapST[c1] != c2:",
                    "            return False",
                    "        if c2 in mapTS and mapTS[c2] != c1:",
                    "            return False",
                    "        mapST[c1] = c2",
                    "        mapTS[c2] = c1",
                    "    return True"
                ],
                indentation: [0, 1, 1, 2, 3, 2, 3, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateIsomorphicHistory();
                }
            }
        }
    },
    "43": {
        name: "Word Pattern Matcher",
        alias: "Word Pattern",
        leetcodeNum: "290",
        inspiredBy: "Inspired by LeetCode Problem #290",
        sourceUrl: "https://leetcode.com/problems/word-pattern/",
        difficulty: "easy",
        topics: ["string", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            twoMaps: {
                name: "Two HashMaps",
                code: [
                    "def wordPattern(pattern, s):",
                    "    words = s.split()",
                    "    if len(pattern) != len(words): return False",
                    "    pToW, wToP = {}, {}",
                    "    for p, w in zip(pattern, words):",
                    "        if p in pToW and pToW[p] != w: return False",
                    "        if w in wToP and wToP[w] != p: return False",
                    "        pToW[p] = w",
                    "        wToP[w] = p",
                    "    return True"
                ],
                indentation: [0, 1, 1, 1, 1, 2, 2, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateWordPatternHistory();
                }
            }
        }
    },
    "44": {
        name: "Anagram Checker",
        alias: "Valid Anagram",
        leetcodeNum: "242",
        inspiredBy: "Inspired by LeetCode Problem #242",
        sourceUrl: "https://leetcode.com/problems/valid-anagram/",
        difficulty: "easy",
        topics: ["string", "hash-table", "sorting"],
        interview150: true,
        tree: null,
        algorithms: {
            hashCount: {
                name: "Character Count",
                code: [
                    "def isAnagram(s, t):",
                    "    if len(s) != len(t): return False",
                    "    count = {}",
                    "    for c in s:",
                    "        count[c] = count.get(c, 0) + 1",
                    "    for c in t:",
                    "        count[c] = count.get(c, 0) - 1",
                    "        if count[c] < 0: return False",
                    "    return True"
                ],
                indentation: [0, 1, 1, 1, 2, 1, 2, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                generateHistory: function() {
                    return generateValidAnagramHistory();
                }
            }
        }
    },
    "45": {
        name: "Group Anagram Sets",
        alias: "Group Anagrams",
        leetcodeNum: "49",
        inspiredBy: "Inspired by LeetCode Problem #49",
        sourceUrl: "https://leetcode.com/problems/group-anagrams/",
        difficulty: "medium",
        topics: ["string", "hash-table", "sorting"],
        interview150: true,
        tree: null,
        algorithms: {
            sortedKey: {
                name: "Sorted Key HashMap",
                code: [
                    "def groupAnagrams(strs):",
                    "    groups = {}",
                    "    for s in strs:",
                    "        key = ''.join(sorted(s))",
                    "        groups.setdefault(key, []).append(s)",
                    "    return list(groups.values())"
                ],
                indentation: [0, 1, 1, 2, 2, 1],
                timeComplexity: "O(n × k log k)",
                spaceComplexity: "O(n × k)",
                generateHistory: function() {
                    return generateGroupAnagramsHistory();
                }
            }
        }
    },
    "46": {
        name: "Pair Sum Finder",
        alias: "Two Sum",
        leetcodeNum: "1",
        inspiredBy: "Inspired by LeetCode Problem #1",
        sourceUrl: "https://leetcode.com/problems/two-sum/",
        difficulty: "easy",
        topics: ["array", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            hashMap: {
                name: "HashMap One Pass",
                code: [
                    "def twoSum(nums, target):",
                    "    seen = {}",
                    "    for i, num in enumerate(nums):",
                    "        complement = target - num",
                    "        if complement in seen:",
                    "            return [seen[complement], i]",
                    "        seen[num] = i",
                    "    return []"
                ],
                indentation: [0, 1, 1, 2, 2, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateTwoSumHistory();
                }
            }
        }
    },
    "47": {
        name: "Happy Number Cycle",
        alias: "Happy Number",
        leetcodeNum: "202",
        inspiredBy: "Inspired by LeetCode Problem #202",
        sourceUrl: "https://leetcode.com/problems/happy-number/",
        difficulty: "easy",
        topics: ["math", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            hashSet: {
                name: "HashSet Cycle Detection",
                code: [
                    "def isHappy(n):",
                    "    seen = set()",
                    "    while n != 1:",
                    "        if n in seen: return False",
                    "        seen.add(n)",
                    "        n = sum(int(d)**2 for d in str(n))",
                    "    return True"
                ],
                indentation: [0, 1, 1, 2, 2, 2, 1],
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)",
                generateHistory: function() {
                    return generateHappyNumberHistory();
                }
            }
        }
    },
    "48": {
        name: "Nearby Duplicate Finder",
        alias: "Contains Duplicate II",
        leetcodeNum: "219",
        inspiredBy: "Inspired by LeetCode Problem #219",
        sourceUrl: "https://leetcode.com/problems/contains-duplicate-ii/",
        difficulty: "easy",
        topics: ["array", "sliding-window", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            slidingSet: {
                name: "Sliding Window Set",
                code: [
                    "def containsNearbyDuplicate(nums, k):",
                    "    window = set()",
                    "    for i in range(len(nums)):",
                    "        if i > k:",
                    "            window.remove(nums[i - k - 1])",
                    "        if nums[i] in window:",
                    "            return True",
                    "        window.add(nums[i])",
                    "    return False"
                ],
                indentation: [0, 1, 1, 2, 3, 2, 3, 2, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(min(n, k))",
                generateHistory: function() {
                    return generateContainsDupIIHistory();
                }
            }
        }
    },
    "49": {
        name: "Longest Run of Consecutive",
        alias: "Longest Consecutive Sequence",
        leetcodeNum: "128",
        inspiredBy: "Inspired by LeetCode Problem #128",
        sourceUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
        difficulty: "medium",
        topics: ["array", "hash-table"],
        interview150: true,
        tree: null,
        algorithms: {
            hashSet: {
                name: "HashSet Sequence Build",
                code: [
                    "def longestConsecutive(nums):",
                    "    numSet = set(nums)",
                    "    longest = 0",
                    "    for n in numSet:",
                    "        if n - 1 not in numSet:",
                    "            length = 1",
                    "            while n + length in numSet:",
                    "                length += 1",
                    "            longest = max(longest, length)",
                    "    return longest"
                ],
                indentation: [0, 1, 1, 1, 2, 3, 3, 4, 3, 1],
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                generateHistory: function() {
                    return generateLongestConsecutiveHistory();
                }
            }
        }
    }
};

let currentProbId = "1";
let currentAlgorithm = "recursive";
let currentTestCase = "normal"; // "normal" or "edge"
let history = [];
let currentStep = 0;
let autoPlayInterval = null;
let autoPlaySpeed = 2000;
let prevArraySnapshot = null; // tracks previous step's array for change-detection animations
const speedPresets = [
    { label: '0.5x', ms: 3000 },
    { label: '1x',   ms: 2000 },
    { label: '1.5x', ms: 1200 },
    { label: '2x',   ms: 700 }
];
let currentSpeedIndex = 1; // default 1x
let baseCasesCount = 0;

function isArrayProblem(probId) {
    return problemDB[probId || currentProbId]?.tree === null;
}


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

// Insight Modal (generic — works for any problem's insight modal)
function openInsightModal(modalId) {
    const id = modalId || 'insightModal';
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('show');
}

function closeInsightModal(modalId) {
    const id = modalId || 'insightModal';
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('show');
}

// Close insight modals on backdrop click or close button
document.addEventListener('DOMContentLoaded', () => {
    // Set up all insight modals
    document.querySelectorAll('.insight-modal').forEach(modal => {
        // Close button
        const closeBtn = modal.querySelector('.insight-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('show'));
        }
        // Backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    });
});

// ── Report / Feedback Modal ──

function openReportModal() {
    const modal = document.getElementById('reportModal');
    const problemField = document.getElementById('reportProblem');
    if (problemField) problemField.value = currentProbId || '';
    document.getElementById('reportStatus').textContent = '';
    document.getElementById('reportStatus').className = 'report-status';
    document.getElementById('reportSubmitBtn').disabled = false;
    modal.classList.add('show');
}

function closeReportModal() {
    document.getElementById('reportModal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    // FAB button opens modal
    const fab = document.getElementById('reportFab');
    if (fab) fab.addEventListener('click', openReportModal);

    // Close button
    const closeBtn = document.getElementById('reportModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeReportModal);

    // Backdrop click
    const modal = document.getElementById('reportModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeReportModal();
        });
    }

    // Form submit
    const form = document.getElementById('reportForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('reportSubmitBtn');
            const status = document.getElementById('reportStatus');
            btn.disabled = true;
            status.textContent = 'Sending...';
            status.className = 'report-status';

            const API_URL = 'https://recursive-visualizer.onrender.com';

            try {
                const type = form.querySelector('[name="type"]')?.value || 'feedback';
                const email = form.querySelector('[name="email"]')?.value || '';
                const message = form.querySelector('[name="message"]')?.value || '';
                const problemId = typeof currentProbId !== 'undefined' ? currentProbId : '';

                const res = await fetch(`${API_URL}/api/report`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type, email, message, problemId })
                });

                if (res.ok) {
                    status.textContent = 'Sent! Thank you for your feedback.';
                    status.className = 'report-status success';
                    form.reset();
                    setTimeout(() => closeReportModal(), 1800);
                } else {
                    const data = await res.json().catch(() => ({}));
                    status.textContent = data.error || 'Something went wrong. Please try again.';
                    status.className = 'report-status error';
                }
            } catch (err) {
                status.textContent = 'Network error — please try again later.';
                status.className = 'report-status error';
            }

            setTimeout(() => { btn.disabled = false; }, 1200);
        });
    }
});

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
    prevArraySnapshot = null; // reset change-detection on problem switch
    const prob = problemDB[probId];
    currentAlgorithm = Object.keys(prob.algorithms)[0]; // Get first algorithm
    currentTestCase = "normal"; // Reset test case when switching problems
    document.getElementById('searchInput').value = '';
    document.getElementById('searchDropdown').style.display = 'none';
    // Debounce: cancel any pending init, schedule a new one
    if (selectProblem._raf) cancelAnimationFrame(selectProblem._raf);
    selectProblem._raf = requestAnimationFrame(() => {
        selectProblem._raf = null;
        init();
    });
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
            arrayMeta: { val, k, originalLength: nums.length, overwrittenVal: extra.overwrittenVal ?? null, copyFrom: extra.copyFrom ?? null, copyTo: extra.copyTo ?? null },
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
            const oldVal = arr[k];
            arr[k] = arr[i];
            record(4, `Execute nums[k] = nums[i] → nums[${prevK}] = nums[${i}] = ${arr[prevK]}. Array: [${arr}].`, { i, k }, { overwrittenVal: (prevK !== i) ? oldVal : null, copyFrom: (prevK !== i) ? i : null, copyTo: (prevK !== i) ? prevK : null });
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
            arrayMeta: { k, originalLength: nums.length, copyFrom: extra.copyFrom ?? null, copyTo: extra.copyTo ?? null },
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
            record(5, `Execute nums[k] = nums[i] → nums[${prevK}] = nums[${i}] = ${arr[prevK]}. Array: [${arr}].`, { i, k }, { copyFrom: (prevK !== i) ? i : null, copyTo: (prevK !== i) ? prevK : null });
            k++;
            record(6, `k++ → k = ${k}. Found ${k} unique so far: [${arr.slice(0, k)}]. i will move to ${i + 1} next.`, { i, k });
        } else {
            record(4, `nums[${i}] = ${arr[i]} == nums[${k - 1}] = ${arr[k - 1]} → duplicate! Skip — k stays at ${k}, i moves to ${i + 1}.`, { i, k }, { isComparison: true, isSkip: true });
        }
    }

    record(7, `✓ Done! i finished scanning all ${nums.length} elements. Returned k = ${k}. Result: [${arr.slice(0, k)}] — ${k} unique values in sorted order.`, { k }, { isComplete: true });
    return h;
}

// Trim Excess Duplicates (LC #80) — allow at most 2 of each value
function generateTrimExcessDuplicatesHistory() {
    const nums = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5];
    const h = [];
    const arr = [...nums];
    let k = 2;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...arr],
            nums2: [],
            arrayMeta: { k, originalLength: nums.length, copyFrom: extra.copyFrom ?? null, copyTo: extra.copyTo ?? null },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call trimDuplicates(nums=[${nums}]). Goal: remove extras so each value appears at most twice. Return the new length.`);

    if (arr.length <= 2) {
        record(1, `Array has ≤ 2 elements — already valid. Return ${arr.length}.`, {}, { isComplete: true });
        return h;
    }

    record(1, `Array has ${arr.length} elements (> 2) — skip the short-circuit check.`);
    record(2, `Initialize k = 2. The first two elements [${arr[0]}, ${arr[1]}] are always valid (at most 2 of anything). Read pointer i starts at index 2.`, { k });

    for (let i = 2; i < arr.length; i++) {
        record(3, `Move read pointer → i = ${i}. Reading nums[${i}] = ${arr[i]}. Comparing against nums[k − 2] = nums[${k - 2}] = ${arr[k - 2]}.`, { i, k });

        if (arr[i] !== arr[k - 2]) {
            record(4, `nums[${i}] = ${arr[i]} ≠ nums[${k - 2}] = ${arr[k - 2]} → still room (not a third copy). Keep it!`, { i, k }, { isComparison: true });
            const prevK = k;
            arr[k] = arr[i];
            record(5, `Execute nums[k] = nums[i] → nums[${prevK}] = ${arr[prevK]}. Array: [${arr}].`, { i, k }, { copyFrom: (prevK !== i) ? i : null, copyTo: (prevK !== i) ? prevK : null });
            k++;
            record(6, `k++ → k = ${k}. Kept ${k} so far: [${arr.slice(0, k)}].`, { i, k });
        } else {
            record(4, `nums[${i}] = ${arr[i]} == nums[${k - 2}] = ${arr[k - 2]} → third (or more) copy! Skip — k stays at ${k}.`, { i, k }, { isComparison: true, isSkip: true });
        }
    }

    record(7, `✓ Done! Scanned all ${nums.length} elements. Returned k = ${k}. Result: [${arr.slice(0, k)}] — each value appears at most twice.`, { k }, { isComplete: true });
    return h;
}

// Find the Dominant Element (LC #169) — Boyer-Moore Voting
function generateDominantElementHistory() {
    const nums = [3, 1, 3, 3, 2, 3, 1, 3, 2];
    const h = [];
    let candidate = nums[0];
    let count = 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...nums],
            nums2: [],
            arrayMeta: {
                candidate, count, originalLength: nums.length,
                battleType: extra.battleType ?? null,   // 'coronation' | 'reinforce' | 'clash' | null
                prevCount: extra.prevCount ?? null,
                prevCandidate: extra.prevCandidate ?? null,
                challengerVal: extra.challengerVal ?? null,
            },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call findDominant(nums=[${nums}]). Goal: find the element that appears more than ⌊n/2⌋ times using Boyer-Moore Voting.`);
    record(1, `Initialize candidate = nums[0] = ${candidate}.`, { i: 0 }, { battleType: 'coronation', challengerVal: candidate, prevCount: 0, prevCandidate: null });
    record(2, `Initialize count = 1. Start scanning from index 1.`, { i: 0 });

    for (let i = 1; i < nums.length; i++) {
        record(3, `Move to i = ${i}. nums[${i}] = ${nums[i]}. Current candidate = ${candidate}, count = ${count}.`, { i });

        if (count === 0) {
            const prevCand = candidate;
            candidate = nums[i];
            record(4, `count == 0 → The throne is empty! New King: ${candidate}.`, { i }, { isComparison: true, battleType: 'coronation', challengerVal: nums[i], prevCount: 0, prevCandidate: prevCand });
            count = 1;
            record(6, `Reset count = 1 for new candidate ${candidate}.`, { i });
        } else if (nums[i] === candidate) {
            const pc = count;
            count++;
            record(7, `nums[${i}] = ${nums[i]} == candidate ${candidate} → Reinforcement! count++ → ${count}.`, { i }, { isComparison: true, battleType: 'reinforce', challengerVal: nums[i], prevCount: pc });
        } else {
            const pc = count;
            count--;
            record(9, `nums[${i}] = ${nums[i]} ≠ candidate ${candidate} → Clash! count-- → ${count}.`, { i }, { isComparison: true, isSkip: true, battleType: 'clash', challengerVal: nums[i], prevCount: pc });
        }
    }

    record(11, `✓ Done! The dominant element is ${candidate}. It appears more than ⌊${nums.length}/2⌋ = ${Math.floor(nums.length / 2)} times.`, {}, { isComplete: true });
    return h;
}

// Cycle Array Elements (LC #189) — Reverse Three Times
function generateCycleArrayHistory() {
    const nums = [5, 12, 8, 3, 7, 10, 1];
    const k_input = 3;
    const h = [];
    const arr = [...nums];
    const n = arr.length;
    const k = k_input % n;

    // Pre-compute: which original indices belong to which segment
    // "Stay Back" = original indices 0..n-k-1 (Blue)
    // "Move Front" = original indices n-k..n-1 (Orange)
    // Track where each original index is at each step
    const posMap = nums.map((_, i) => i); // posMap[currentPos] = originalIndex

    // Compute the solved target array
    const target = [...nums.slice(n - k), ...nums.slice(0, n - k)];

    // Track which phases have completed for orientation indicators
    // 0 = nothing done, 1 = full reversed, 2 = left fixed, 3 = all done
    let phasesCompleted = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...arr],
            nums2: [],
            arrayMeta: {
                k: k, n: n,
                phase: extra.phase || '',
                posMap: [...posMap],
                splitAt: n - k,
                target: target,
                phasesCompleted: phasesCompleted,
            },
            step: h.length,
            ...extra
        });
    }

    function reverseSection(lo, hi, phase) {
        record(8, `  reverse(nums, ${lo}, ${hi}) — begin reversing indices [${lo}..${hi}].`, { lo, hi }, { phase });
        while (lo < hi) {
            const loVal = arr[lo], hiVal = arr[hi];
            record(9, `  Swap nums[${lo}]=${loVal} ↔ nums[${hi}]=${hiVal}.`, { lo, hi }, { isComparison: true, phase, swapIndices: [lo, hi], swapVals: [loVal, hiVal] });
            const tmp = arr[lo];
            arr[lo] = arr[hi];
            arr[hi] = tmp;
            const tmpP = posMap[lo];
            posMap[lo] = posMap[hi];
            posMap[hi] = tmpP;
            record(9, `  After swap: [${arr}].`, { lo, hi }, { phase });
            lo++;
            hi--;
        }
        record(11, `  Reverse done. Array: [${arr}].`, {}, { phase });
    }

    record(0, `Call cycleElements(nums=[${nums}], k=${k_input}). Goal: move the last ${k_input} elements to the front.`);
    record(1, `n = len(nums) = ${n}.`);
    if (k_input >= n) {
        record(2, `k = ${k_input} % ${n} = ${k}. Rotating by ${n} is a full cycle (back to start), so we only need to rotate by ${k}.`);
    } else {
        record(2, `k = ${k_input} % ${n} = ${k}. (Already < n, no reduction needed.)`);
    }
    
    record(3, `Step 1: Reverse the entire array [0..${n - 1}]. This puts the last ${k} elements at the front — but everything is backwards.`, {}, { phase: 'full' });
    reverseSection(0, n - 1, 'full');
    phasesCompleted = 1;

    record(4, `Step 2: Reverse [0..${k - 1}]. The front ${k} elements (orange) landed backwards — flip them right-side up.`, {}, { phase: 'left' });
    reverseSection(0, k - 1, 'left');
    phasesCompleted = 2;

    record(5, `Step 3: Reverse [${k}..${n - 1}]. The back ${n - k} elements (blue) are still backwards — flip them too.`, {}, { phase: 'right' });
    reverseSection(k, n - 1, 'right');
    phasesCompleted = 3;

    record(5, `✓ Done! Array rotated by ${k} positions: [${arr}].`, {}, { isComplete: true });
    return h;
}

// Best Moment to Trade (LC #121) — Single Transaction
function generateBestTradeHistory() {
    const prices = [8, 3, 5, 1, 7, 4, 9, 2];
    const h = [];
    let minPrice = prices[0];
    let minPriceIdx = 0;
    let maxProfit = 0;
    let bestBuyIdx = -1;
    let bestSellIdx = -1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...prices],
            nums2: [],
            arrayMeta: {
                minPrice,
                minPriceIdx,
                maxProfit,
                bestBuyIdx,
                bestSellIdx,
                originalLength: prices.length
            },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call bestTrade(prices=[${prices}]). Goal: find the maximum profit from buying once and selling once.`);
    record(1, `Initialize minPrice = prices[0] = ${minPrice}. This tracks the cheapest price seen so far.`);
    record(2, `Initialize maxProfit = 0. We haven't made any trade yet.`);

    for (let i = 1; i < prices.length; i++) {
        record(3, `Move to i = ${i}. prices[${i}] = ${prices[i]}. minPrice = ${minPrice}, maxProfit = ${maxProfit}.`, { i });

        if (prices[i] < minPrice) {
            const oldMin = minPrice;
            minPrice = prices[i];
            minPriceIdx = i;
            record(4, `prices[${i}] = ${prices[i]} < minPrice (was ${oldMin}) → new low found! minPrice = ${minPrice}.`, { i }, { isComparison: true });
        } else {
            const profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                const oldProfit = maxProfit;
                const oldBuyIdx = bestBuyIdx;
                const oldSellIdx = bestSellIdx;
                maxProfit = profit;
                bestBuyIdx = minPriceIdx;
                bestSellIdx = i;
                record(8, `Profit = $${profit}. Is $${profit} > $${oldProfit}? Yes! Updating Max Profit.`, { i }, {
                    isComparison: true,
                    isNewBest: true,
                    prevMaxProfit: oldProfit,
                    prevBuyIdx: oldBuyIdx,
                    prevSellIdx: oldSellIdx,
                    currentProfit: profit
                });
            } else {
                record(8, `sell $${prices[i]} − buy $${minPrice} = $${profit} profit ≤ best $${maxProfit} → no update.`, { i }, { isComparison: true, isSkip: true, currentProfit: profit });
            }
        }
    }

    record(9, `✓ Done! Best trade: max profit = ${maxProfit}. Buy at price ${minPrice}, sell for +${maxProfit}.`, {}, { isComplete: true });
    return h;
}

// Best Moments to Trade (LC #122) — Multiple Transactions (Greedy)
function generateBestTradesHistory() {
    const prices = [5, 2, 6, 1, 4, 7, 3, 8];
    const h = [];
    let totalProfit = 0;
    const collectedGains = []; // [{buyIdx, sellIdx, gain}]

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...prices],
            nums2: [],
            arrayMeta: { totalProfit, originalLength: prices.length, collectedGains: [...collectedGains] },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call bestTrades(prices=[${prices}]). Goal: maximize total profit by buying and selling any number of times (greedy).`);
    record(1, `Initialize totalProfit = 0.`);

    for (let i = 1; i < prices.length; i++) {
        record(2, `Move to i = ${i}. prices[${i}] = ${prices[i]}, prices[${i - 1}] = ${prices[i - 1]}. totalProfit = ${totalProfit}.`, { i });

        if (prices[i] > prices[i - 1]) {
            const gain = prices[i] - prices[i - 1];
            const prevTotalProfit = totalProfit;
            totalProfit += gain;
            collectedGains.push({ buyIdx: i - 1, sellIdx: i, gain });
            record(3, `prices[${i}] = ${prices[i]} > prices[${i - 1}] = ${prices[i - 1]} → gain = +${gain}. Collect it! totalProfit = ${totalProfit}.`, { i }, {
                isComparison: true,
                isGain: true,
                currentGain: gain,
                prevTotalProfit,
                buyIdx: i - 1,
                sellIdx: i
            });
        } else {
            record(3, `prices[${i}] = ${prices[i]} ≤ prices[${i - 1}] = ${prices[i - 1]} → no gain. Skip.`, { i }, { isComparison: true, isSkip: true });
        }
    }

    record(5, `Done! Total profit from all trades = ${totalProfit}.`, {}, { isComplete: true });
    return h;
}

// Can You Reach the End? (LC #55) — Greedy
function generateCanReachEndHistory() {
    const nums = [2, 3, 1, 1, 4];
    const h = [];
    let farthest = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...nums],
            nums2: [],
            arrayMeta: { farthest, originalLength: nums.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call canReachEnd(nums=[${nums}]). Goal: determine if we can reach the last index starting from index 0.`);
    record(1, `Initialize farthest = 0. This tracks the farthest index we can reach so far.`);

    for (let i = 0; i < nums.length; i++) {
        record(2, `Move to i = ${i}. nums[${i}] = ${nums[i]}. farthest = ${farthest}.`, { i });

        if (i > farthest) {
            record(3, `i = ${i} > farthest = ${farthest} — can't reach this index!`, { i }, { isComparison: true, isFail: true });
            record(4, `Return False — cannot reach the end.`, {}, { isComplete: true, result: false });
            return h;
        }

        const oldFarthest = farthest;
        const iReachRaw = i + nums[i];
        const iReach = Math.min(iReachRaw, nums.length - 1);
        farthest = Math.max(farthest, iReach);
        const expanded = farthest > oldFarthest;
        let reachNote = '';
        if (expanded && iReach >= nums.length - 1) {
            reachNote = ' Reached the goal!';
        } else if (!expanded) {
            reachNote = ` No change — previous reach (${oldFarthest}) already farther.`;
        }
        const reachMsg = iReachRaw > nums.length - 1
            ? `${iReach} capped`
            : `${i} + ${nums[i]} = ${iReach}`;
        record(5, `farthest = max(${oldFarthest}, ${reachMsg}) = ${farthest}.${reachNote}`, { i }, {
            isComparison: true,
            prevFarthest: oldFarthest,
            iReach,
            reachExpanded: expanded
        });
    }

    record(6, `Done! Scanned all indices. farthest = ${farthest} >= last index ${nums.length - 1}. Return True — we can reach the end!`, {}, { isComplete: true, result: true });
    return h;
}

// Fewest Jumps to the End (LC #45) — Greedy BFS-like
function generateFewestJumpsHistory() {
    const nums = [2, 3, 1, 1, 4];
    const h = [];
    let jumps = 0;
    let l = 0, r = 0;          // current window [l, r]
    let farthest = 0;
    let farthestIdx = 0;       // which index achieved farthest (for winner highlight)

    // windows: array of { l, r, jumpNum } — completed windows
    const windows = [];
    // arcs: what to draw on screen
    let arcs = [];
    // scannedInWindow: arcs accumulated during this window's scan
    let scannedArcs = [];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...nums],
            nums2: [],
            arrayMeta: {
                jumps, l, r, farthest, farthestIdx,
                windows: JSON.parse(JSON.stringify(windows)),
                arcs: JSON.parse(JSON.stringify(arcs)),
                activeWindow: { l, r }
            },
            step: h.length,
            ...extra
        });
    }

    // ── Intro steps ──
    record(0, `Goal: reach the last index in the fewest jumps. Each cell's value = how far you can jump from it.`, {}, {
        humanMsg: `We want to get from the first cell to the last cell. Each cell tells us the maximum distance we can jump forward.`
    });
    record(1, `jumps = 0 — no jumps taken yet.`, {}, {
        humanMsg: `We haven't jumped yet — starting fresh.`
    });
    record(2, `Starting reach is just index 0 — the cells we can currently reach.`, {}, {
        showWindow: true,
        humanMsg: `Right now we can only reach index 0 (where we're standing). This shaded zone is everything reachable in 0 jumps.`
    });
    record(3, `farthest = 0 — we'll track the best reach from any cell in this zone.`, {}, {
        humanMsg: `As we check each cell in the current zone, we'll remember the farthest any of them can reach.`
    });

    // The BFS-level loop using [l, r] window
    let jumpLevel = 0;
    while (r < nums.length - 1) {
        jumpLevel++;
        // Beginning of a new window scan
        scannedArcs = [];

        for (let i = l; i <= r; i++) {
            const reach = i + nums[i];
            const clampedReach = Math.min(reach, nums.length - 1);
            const oldFarthest = farthest;

            // ── Scan step: show one arc from cell i to its reach ──
            arcs = [{ from: i, to: clampedReach, type: 'scan', label: `${i} + ${nums[i]} = ${reach}` }];

            // Also show previous arcs from this window as dim context
            const contextArcs = scannedArcs.map(a => ({ ...a, type: 'context' }));
            arcs = [...contextArcs, ...arcs];

            record(5, `Scan index ${i}: value ${nums[i]} → can reach ${i} + ${nums[i]} = ${reach}.`, { i }, {
                humanMsg: `Looking at index ${i} (value ${nums[i]}). From here we could jump as far as index ${reach}. Let's see if that's better than our current best.`
            });

            // ── Update farthest: show the max() comparison ──
            farthest = Math.max(farthest, reach);
            if (reach > oldFarthest) farthestIdx = i;

            const reachDisplay = reach > nums.length - 1
                ? `${clampedReach} (capped)`
                : `${i}+${nums[i]}=${reach}`;

            if (reach > oldFarthest) {
                // This arc becomes the new "best" — highlight it
                const bestArc = { from: i, to: clampedReach, type: 'best', label: `${i}+${nums[i]}=${reach}` };
                arcs = [...contextArcs, bestArc];
                record(6, `farthest = max(${oldFarthest}, ${reachDisplay}) = ${farthest}. New best!`, { i }, {
                    reachExpanded: true,
                    prevFarthest: oldFarthest,
                    iReach: reach,
                    iReachDisplay: reachDisplay,
                    humanMsg: `Index ${i} can reach farther (${reach}) than our previous best (${oldFarthest}). It's the new best launch pad!`
                });
                scannedArcs.push(bestArc);
            } else {
                const dimArc = { from: i, to: clampedReach, type: 'dim', label: `${reach}` };
                arcs = [...contextArcs, dimArc];
                record(6, `farthest = max(${oldFarthest}, ${reachDisplay}) = ${farthest}. No change.`, { i }, {
                    reachExpanded: false,
                    prevFarthest: oldFarthest,
                    iReach: reach,
                    iReachDisplay: reachDisplay,
                    humanMsg: `Index ${i} only reaches ${reach}, which doesn't beat our current best of ${oldFarthest}. Moving on.`
                });
                scannedArcs.push(dimArc);
            }
        }

        // ── Window done → show ALL arcs together (the "comparison" moment) ──
        const bestReach = farthest;
        const bestFrom = scannedArcs.reduce((best, a) => {
            const r2 = a.from + nums[a.from];
            const bR = best.from + nums[best.from];
            return r2 > bR ? a : best;
        }, scannedArcs[0]);

        arcs = scannedArcs.map(a => ({
            ...a,
            type: a.from === bestFrom.from ? 'winner' : 'loser'
        }));

        const prevL = l, prevR = r;
        jumps++;
        windows.push({ l: prevL, r: prevR, jumpNum: jumps });
        l = prevR + 1;
        r = farthest;

        record(7, `Zone [${prevL}, ${prevR}] fully explored! Best reach = ${bestReach} (from index ${bestFrom.from}). Jump #${jumps}! New zone → [${l}, ${r}].`, {}, {
            isJump: true,
            prevL, prevR,
            prevJumps: jumps - 1,
            bestIdx: bestFrom.from,
            lines: [7, 8, 9],
            humanMsg: `We've checked every cell in this zone. The best launch pad was index ${bestFrom.from} (reaching index ${bestReach}). That completes jump #${jumps}. Our new reachable zone is indices ${l} through ${Math.min(farthest, nums.length - 1)}.`
        });

        arcs = [];
        scannedArcs = [];
    }

    // Add the final window that we arrived at (but didn't jump from)
    windows.push({ l, r: Math.min(r, nums.length - 1), jumpNum: jumps + 1, arrived: true });
    record(10, `Done! The last index is inside our reach. Minimum jumps = ${jumps}.`, {}, {
        isComplete: true,
        humanMsg: `The last index (${nums.length - 1}) falls within our current reachable zone. We made it in ${jumps} jump${jumps === 1 ? '' : 's'}!`
    });
    return h;
}

// Researcher Impact Score (LC #274) — H-Index via Sort
function generateHIndexHistory(inputCitations) {
    const citations = inputCitations || [3, 0, 6, 1, 5];
    const h_arr = [];
    const unsorted = [...citations];
    const arr = [...citations].sort((a, b) => b - a); // sort descending
    let hIdx = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h_arr.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: extra._useArr ? [...extra._useArr] : [...arr],
            nums2: [],
            arrayMeta: {
                h: hIdx,
                originalLength: arr.length,
                sorted: extra.phase !== 'unsorted',
                squareSize: hIdx,             // current Durfee square side
                trySquare: extra.trySquare ?? null, // square being tested this step
                thresholdH: extra.thresholdH ?? null, // horizontal line height
                passBars: extra.passBars ?? [],  // indices of bars above threshold
                failBars: extra.failBars ?? [],  // indices of bars below threshold
                crossingIdx: extra.crossingIdx ?? null, // where y=x diagonal crosses
                phase: extra.phase === 'unsorted' ? 'sort' : (extra.phase ?? 'scan'),
            },
            step: h_arr.length,
            isComparison: extra.isComparison || false,
            isComplete: extra.isComplete || false,
            isSkip: extra.isSkip || false,
        });
    }

    // Phase: sort — show unsorted first, then sorted
    record(0, `Call hIndex(citations=[${citations}]). Goal: find h such that h papers have ≥ h citations each.`, {}, { phase: 'unsorted', _useArr: unsorted });
    record(1, `Sort descending → [${arr}]. Tallest bars on the left — now we can scan left to right and grow the square.`, {}, { phase: 'sort' });
    record(2, `Initialize h = 0. The Durfee square starts at 0×0 — can we grow it?`, {}, { phase: 'sort' });

    for (let i = 0; i < arr.length; i++) {
        const tryH = i + 1;
        const passBars = [];
        const failBars = [];
        for (let b = 0; b < arr.length; b++) {
            if (arr[b] >= tryH) passBars.push(b);
            else failBars.push(b);
        }

        record(3, `Try h = ${tryH}: need ≥ ${tryH} papers with ≥ ${tryH} citations. Draw a ${tryH}×${tryH} square — does it fit under the bars?`, { i }, {
            phase: 'scan',
            trySquare: tryH,
            thresholdH: tryH,
            passBars,
            failBars,
        });

        if (arr[i] >= tryH) {
            hIdx = tryH;
            record(4, `citations[${i}] = ${arr[i]} ≥ ${tryH} ✓ — the ${tryH}×${tryH} square fits! ${passBars.length} bar${passBars.length > 1 ? 's' : ''} poke above the threshold line. h grows to ${hIdx}.`, { i }, {
                isComparison: true,
                phase: 'scan',
                trySquare: tryH,
                thresholdH: tryH,
                passBars,
                failBars,
            });
        } else {
            record(6, `citations[${i}] = ${arr[i]} < ${tryH} ✗ — the ${tryH}×${tryH} square overflows! Bar #${tryH} is too short. Stop here.`, { i }, {
                isComparison: true,
                isSkip: true,
                phase: 'scan',
                trySquare: tryH,
                thresholdH: tryH,
                passBars,
                failBars,
                crossingIdx: i,
            });
            break;
        }
    }

    // Final pass/fail lists for the answer
    const finalPass = [];
    const finalFail = [];
    for (let b = 0; b < arr.length; b++) {
        if (arr[b] >= hIdx) finalPass.push(b);
        else finalFail.push(b);
    }

    record(8, `✅ H-Index = ${hIdx}. The ${hIdx}×${hIdx} Durfee square is the largest that fits under the curve. ${hIdx} papers each have ≥ ${hIdx} citations.`, {}, {
        isComplete: true,
        phase: 'done',
        thresholdH: hIdx,
        passBars: finalPass,
        failBars: finalFail,
    });
    return h_arr;
}

function generateHIndexEdgeHistory() {
    return generateHIndexHistory([0, 0, 0]);
}

function generateHIndexTestCase2History() {
    return generateHIndexHistory([100, 100]);
}

function generateHIndexTestCase3History() {
    return generateHIndexHistory([10]);
}

// Randomized Collection (LC #380) — Design: HashMap + Array
function generateRandomizedSetHistory() {
    const ops = [
        { op: 'insert', val: 10 },
        { op: 'insert', val: 20 },
        { op: 'insert', val: 30 },
        { op: 'insert', val: 20 },  // duplicate, returns False
        { op: 'remove', val: 20 },
        { op: 'insert', val: 40 },
        { op: 'remove', val: 10 },
        { op: 'getRandom' }
    ];
    const h = [];
    const vals = [];
    const idxMap = {};

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...vals],
            nums2: [],
            arrayMeta: { idxMap: JSON.parse(JSON.stringify(idxMap)), opsCount: ops.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `RandomizedSet — supports insert, remove, and getRandom in O(1) average time.`);
    record(1, `Initialize: vals = [], idx_map = {}. The array stores values, the map stores value → index.`);

    for (let opIdx = 0; opIdx < ops.length; opIdx++) {
        const { op, val } = ops[opIdx];

        if (op === 'insert') {
            record(4, `Operation: insert(${val}).`, {});
            if (val in idxMap) {
                record(5, `${val} already in idx_map → return False. No duplicate allowed.`, {}, { isSkip: true });
            } else {
                idxMap[val] = vals.length;
                record(6, `idx_map[${val}] = ${vals.length}. Mapping value to its future index.`, {});
                vals.push(val);
                record(7, `vals.append(${val}) → vals = [${vals}]. Insert complete, return True.`, {}, { isComparison: true });
            }
        } else if (op === 'remove') {
            record(9, `Operation: remove(${val}).`, {});
            if (!(val in idxMap)) {
                record(10, `${val} not in idx_map → return False. Nothing to remove.`, {}, { isSkip: true });
            } else {
                const idx = idxMap[val];
                const last = vals[vals.length - 1];
                record(11, `idx = idx_map[${val}] = ${idx}. last = vals[-1] = ${last}.`, {});
                vals[idx] = last;
                idxMap[last] = idx;
                record(13, `Swap: vals[${idx}] = ${last}, idx_map[${last}] = ${idx}. vals = [${vals}].`, {});
                vals.pop();
                delete idxMap[val];
                record(16, `Pop last, delete idx_map[${val}]. vals = [${vals}]. Remove complete, return True.`, {}, { isComparison: true });
            }
        } else if (op === 'getRandom') {
            const randomVal = vals.length > 0 ? vals[Math.floor(Math.random() * vals.length)] : 'N/A';
            record(4, `Operation: getRandom(). Pick any element uniformly at random from vals = [${vals}]. Result: ${randomVal}.`, {}, { isComparison: true });
        }
    }

    record(17, `✓ Done! All operations executed in O(1) average time. Final vals = [${vals}].`, {}, { isComplete: true });
    return h;
}

// Product Without Self (LC #238) — Prefix & Suffix
function generateProductWithoutSelfHistory() {
    const nums = [1, 2, 3, 4];
    const h = [];
    const n = nums.length;
    const answer = new Array(n).fill(1);
    let prefix = 1;
    let suffix = 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...nums],
            nums2: [...answer],
            arrayMeta: { prefix, suffix, originalLength: n },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call productWithoutSelf(nums=[${nums}]). Goal: answer[i] = product of all elements except nums[i], without division.`);
    record(1, `n = ${n}.`);
    record(2, `Initialize answer = [${answer}] (all ones).`);
    record(3, `Initialize prefix = 1. We'll sweep left-to-right, accumulating the product of everything before each index.`);

    // Left pass
    for (let i = 0; i < n; i++) {
        record(4, `Left pass: i = ${i}. prefix = ${prefix}.`, { i });
        answer[i] = prefix;
        record(5, `answer[${i}] = prefix = ${prefix}. answer = [${answer}].`, { i }, { isComparison: true });
        prefix *= nums[i];
        record(6, `prefix *= nums[${i}] (${nums[i]}) → prefix = ${prefix}.`, { i });
    }

    record(7, `Left pass done. answer = [${answer}]. Each answer[i] holds the product of all elements to its left.`);
    record(7, `Now sweep right-to-left with suffix to multiply in the product of everything to the right.`);

    // Right pass
    for (let i = n - 1; i >= 0; i--) {
        record(8, `Right pass: i = ${i}. suffix = ${suffix}.`, { i });
        answer[i] *= suffix;
        record(9, `answer[${i}] *= suffix (${suffix}) → answer[${i}] = ${answer[i]}. answer = [${answer}].`, { i }, { isComparison: true });
        suffix *= nums[i];
        record(10, `suffix *= nums[${i}] (${nums[i]}) → suffix = ${suffix}.`, { i });
    }

    record(11, `✓ Done! answer = [${answer}]. Each answer[i] is the product of all elements except nums[i].`, {}, { isComplete: true });
    return h;
}

// Circular Fuel Route (LC #134) — Greedy Single Pass
function generateCircularFuelHistory() {
    const gas  = [1, 2, 3, 4, 5];
    const cost = [3, 4, 5, 1, 2];
    const h = [];
    let totalSurplus = 0;
    let currentSurplus = 0;
    let start = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...gas],
            nums2: [...cost],
            arrayMeta: { totalSurplus, currentSurplus, start, originalLength: gas.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call circularFuel(gas=[${gas}], cost=[${cost}]). Goal: find the starting station to complete the circuit, or -1 if impossible.`);
    record(1, `Initialize totalSurplus = 0 (tracks overall feasibility).`);
    record(2, `Initialize currentSurplus = 0 (tracks current run of fuel).`);
    record(3, `Initialize start = 0 (candidate starting station).`);

    for (let i = 0; i < gas.length; i++) {
        const net = gas[i] - cost[i];
        record(4, `Station i = ${i}: gas[${i}] = ${gas[i]}, cost[${i}] = ${cost[i]}, net = ${net}.`, { i });
        totalSurplus += net;
        record(5, `totalSurplus += ${net} → totalSurplus = ${totalSurplus}.`, { i });
        currentSurplus += net;
        record(6, `currentSurplus += ${net} → currentSurplus = ${currentSurplus}.`, { i }, { isComparison: true });

        if (currentSurplus < 0) {
            record(7, `currentSurplus < 0 → can't start at station ${start}..${i}. Reset!`, { i }, { isSkip: true });
            start = i + 1;
            currentSurplus = 0;
            record(9, `start = ${start}, currentSurplus = 0.`, { i });
        }
    }

    if (totalSurplus >= 0) {
        record(10, `✓ Done! totalSurplus = ${totalSurplus} ≥ 0 → circuit possible. Start at station ${start}.`, {}, { isComplete: true });
    } else {
        record(10, `✗ Done! totalSurplus = ${totalSurplus} < 0 → circuit impossible. Return -1.`, {}, { isComplete: true });
    }
    return h;
}

// Fair Candy Distribution (LC #135) — Two-Pass Greedy
function generateFairCandyHistory() {
    const ratings = [1, 0, 2, 3, 1];
    const h = [];
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg,
            line,
            pointers: { ...pointers },
            nums1: [...ratings],
            nums2: [...candies],
            arrayMeta: { total: candies.reduce((a, b) => a + b, 0), originalLength: n },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call fairCandy(ratings=[${ratings}]). Goal: give each child at least 1 candy; higher-rated neighbors get more. Minimize total.`);
    record(1, `n = ${n}.`);
    record(2, `Initialize candies = [${candies}] (everyone starts with 1).`);
    record(3, `Left pass: if ratings[i] > ratings[i-1], give more than left neighbor.`);

    for (let i = 1; i < n; i++) {
        record(3, `Left pass: i = ${i}. ratings[${i}] = ${ratings[i]}, ratings[${i - 1}] = ${ratings[i - 1]}.`, { i });
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
            record(4, `${ratings[i]} > ${ratings[i - 1]} → candies[${i}] = candies[${i - 1}] + 1 = ${candies[i]}. candies = [${candies}].`, { i }, { isComparison: true });
        } else {
            record(4, `${ratings[i]} ≤ ${ratings[i - 1]} → no change. candies[${i}] stays ${candies[i]}.`, { i }, { isComparison: true, isSkip: true });
        }
    }

    record(6, `Left pass done. candies = [${candies}]. Now right pass: if ratings[i] > ratings[i+1], ensure more than right neighbor.`);

    for (let i = n - 2; i >= 0; i--) {
        record(6, `Right pass: i = ${i}. ratings[${i}] = ${ratings[i]}, ratings[${i + 1}] = ${ratings[i + 1]}.`, { i });
        if (ratings[i] > ratings[i + 1]) {
            const oldVal = candies[i];
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            record(7, `${ratings[i]} > ${ratings[i + 1]} → candies[${i}] = max(${oldVal}, ${candies[i + 1] + 1}) = ${candies[i]}. candies = [${candies}].`, { i }, { isComparison: true });
        } else {
            record(7, `${ratings[i]} ≤ ${ratings[i + 1]} → no change. candies[${i}] stays ${candies[i]}.`, { i }, { isComparison: true, isSkip: true });
        }
    }

    const total = candies.reduce((a, b) => a + b, 0);
    record(9, `✓ Done! candies = [${candies}]. Total candies = ${total}. Each child satisfied.`, {}, { isComplete: true });
    return h;
}

// Add this function before init()

// Trapped Rainwater (LC #42) — Two Pointers
function generateTrappedRainwaterHistory() {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const h = [];
    let l = 0, r = height.length - 1;
    let leftMax = height[l], rightMax = height[r];
    let water = 0;
    const waterAt = new Array(height.length).fill(0); // water trapped per cell

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: [...height],
            nums2: [...waterAt],
            arrayMeta: { leftMax, rightMax, water, originalLength: height.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call trap(height=[${height}]). Goal: compute how many units of water are trapped between bars.`);
    record(1, `Set l = 0, r = ${r}. Two pointers start at opposite ends.`, { l, r });
    record(2, `leftMax = height[0] = ${leftMax}. Tallest bar seen from the left.`, { l, r });
    record(3, `rightMax = height[${r}] = ${rightMax}. Tallest bar seen from the right.`, { l, r });
    record(4, `water = 0. We'll accumulate trapped water as we go.`, { l, r });

    while (l < r) {
        record(5, `l = ${l}, r = ${r}. l < r → continue.`, { l, r });

        if (leftMax < rightMax) {
            record(6, `leftMax (${leftMax}) < rightMax (${rightMax}) → move left pointer inward.`, { l, r }, { isComparison: true });
            l++;
            record(7, `l += 1 → l = ${l}. height[${l}] = ${height[l]}.`, { l, r });
            const oldLeftMax = leftMax;
            leftMax = Math.max(leftMax, height[l]);
            record(8, `leftMax = max(${oldLeftMax}, ${height[l]}) = ${leftMax}.`, { l, r });
            const trapped = leftMax - height[l];
            water += trapped;
            waterAt[l] = trapped;
            record(9, `Water at index ${l} = leftMax(${leftMax}) − height(${height[l]}) = ${trapped}. Total water = ${water}.`, { l, r }, { isComparison: true });
        } else {
            record(10, `leftMax (${leftMax}) ≥ rightMax (${rightMax}) → move right pointer inward.`, { l, r }, { isComparison: true });
            r--;
            record(11, `r -= 1 → r = ${r}. height[${r}] = ${height[r]}.`, { l, r });
            const oldRightMax = rightMax;
            rightMax = Math.max(rightMax, height[r]);
            record(12, `rightMax = max(${oldRightMax}, ${height[r]}) = ${rightMax}.`, { l, r });
            const trapped = rightMax - height[r];
            water += trapped;
            waterAt[r] = trapped;
            record(13, `Water at index ${r} = rightMax(${rightMax}) − height(${height[r]}) = ${trapped}. Total water = ${water}.`, { l, r }, { isComparison: true });
        }
    }

    record(14, `✓ l meets r! Total trapped water = ${water} units.`, { l, r }, { isComplete: true });
    return h;
}

// Decode Roman Numerals (LC #13) — Right-to-Left Scan
function generateRomanToIntHistory() {
    const s = "MCMXCIV";
    const chars = s.split('');
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    const h = [];
    let total = 0;
    let prev = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: chars.map(c => c),
            nums2: [],
            arrayMeta: { total, prev, prevSymbol: prev > 0 ? Object.keys(romanMap).find(k => romanMap[k] === prev) : '—', originalLength: chars.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call romanToInt("${s}"). Goal: convert Roman numeral to integer.`);
    record(1, `Set up Roman value map: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.`);
    record(2, `Initialize total = 0, prev = 0.`);
    record(3, `Scan right-to-left. Key insight: if a smaller value appears before a larger one, subtract it.`);

    for (let idx = chars.length - 1; idx >= 0; idx--) {
        const ch = chars[idx];
        const curr = romanMap[ch];
        record(5, `i = ${idx}: char = '${ch}', value = ${curr}. prev = ${prev}.`, { i: idx });

        if (curr < prev) {
            record(6, `${curr} < ${prev} → subtraction case! (like IV = 4, XC = 90).`, { i: idx }, { isComparison: true });
            total -= curr;
            record(7, `total -= ${curr} → total = ${total}.`, { i: idx });
        } else {
            record(8, `${curr} ≥ ${prev} → normal addition.`, { i: idx }, { isComparison: true });
            total += curr;
            record(9, `total += ${curr} → total = ${total}.`, { i: idx });
        }
        prev = curr;
        record(10, `prev = ${curr} (for next comparison).`, { i: idx });
    }

    record(12, `✓ Done! "${s}" = ${total}.`, {}, { isComplete: true });
    return h;
}

// Encode to Roman Numerals (LC #12) — Greedy Largest First
function generateIntToRomanHistory() {
    let num = 1994;
    const original = num;
    const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const h = [];
    let result = '';

    function record(line, msg, pointers = {}, extra = {}) {
        // nums1 = vals table, nums2 = syms shown as labels
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: [...vals],
            nums2: [...syms],
            arrayMeta: { num, result, original, originalLength: vals.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call intToRoman(${original}). Goal: convert integer to Roman numeral string.`);
    record(1, `Value table: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1].`);
    record(3, `Symbol table: [M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I].`);
    record(5, `result = "". We greedily subtract the largest fitting value and append its symbol.`);

    for (let i = 0; i < vals.length; i++) {
        if (num <= 0) break;
        record(6, `i = ${i}: check vals[${i}] = ${vals[i]} (symbol "${syms[i]}"). num = ${num}.`, { i });

        while (num >= vals[i]) {
            record(7, `num (${num}) ≥ ${vals[i]} → append "${syms[i]}" to result.`, { i }, { isComparison: true });
            result += syms[i];
            num -= vals[i];
            record(8, `result = "${result}". num -= ${vals[i]} → num = ${num}.`, { i });
        }

        if (num > 0) {
            record(6, `num (${num}) < ${vals[i]} → skip symbol "${syms[i]}".`, { i }, { isSkip: true });
        }
    }

    record(10, `✓ Done! ${original} → "${result}".`, {}, { isComplete: true });
    return h;
}

// Length of Final Word (LC #58) — Reverse Scan
function generateLengthOfLastWordHistory() {
    const s = "Hello World  ";
    const chars = s.split('');
    const h = [];
    let i = chars.length - 1;
    let length = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: chars.map(c => c === ' ' ? '␣' : c),
            nums2: [],
            arrayMeta: { length, word: '', originalLength: chars.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call lengthOfLastWord("${s}"). Goal: find the length of the last word.`);
    record(1, `i = ${i}. Start from the end of the string.`, { i });

    // Phase 1: skip trailing spaces
    record(2, `Phase 1: skip trailing spaces.`, { i });
    while (i >= 0 && chars[i] === ' ') {
        record(2, `s[${i}] = ' ' (space) → skip. i -= 1.`, { i }, { isSkip: true });
        i--;
    }
    record(2, `Trailing spaces skipped. i = ${i}, s[${i}] = '${chars[i]}'.`, { i });

    // Phase 2: count word characters
    const wordEnd = i;
    record(4, `Phase 2: count characters of the last word.`, { i });
    while (i >= 0 && chars[i] !== ' ') {
        length++;
        record(5, `s[${i}] = '${chars[i]}' → letter! length = ${length}.`, { i }, { isComparison: true });
        i--;
        if (i >= 0 && chars[i] !== ' ') {
            record(6, `i -= 1 → i = ${i}.`, { i });
        }
    }

    const lastWord = s.substring(i + 1, wordEnd + 1);
    record(7, `${i >= 0 ? `s[${i}] = ' '` : 'Reached start'} → word boundary. Stop counting.`, { i: Math.max(i, 0) });
    record(8, `✓ Done! The last word is "${lastWord}" with length = ${length}.`, {}, { isComplete: true });
    return h;
}

// Longest Common Prefix (LC #14) — Vertical Scan
function generateLongestCommonPrefixHistory() {
    const strs = ["flower", "flow", "flight"];
    const h = [];
    let prefix = '';

    function record(line, msg, pointers = {}, extra = {}) {
        // nums1 = chars of strs[0], nums2 = chars being compared
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: strs[0].split('').map(c => c),
            nums2: [],
            arrayMeta: { prefix, strs: strs.map(s => s), originalLength: strs[0].length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call longestCommonPrefix(["${strs.join('", "')}"]).`);
    record(1, `strs is not empty. Use strs[0] = "${strs[0]}" as reference.`);

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];
        record(2, `Column i = ${i}: check char '${ch}' across all strings.`, { i });
        record(3, `ch = strs[0][${i}] = '${ch}'.`, { i });

        let mismatch = false;
        for (let j = 1; j < strs.length; j++) {
            record(4, `Compare with strs[${j}] = "${strs[j]}".`, { i });
            if (i >= strs[j].length) {
                record(5, `i = ${i} ≥ len("${strs[j]}") = ${strs[j].length} → string too short. Return prefix.`, { i });
                prefix = strs[0].substring(0, i);
                record(6, `✓ Done! Longest common prefix = "${prefix}".`, {}, { isComplete: true });
                return h;
            }
            if (strs[j][i] !== ch) {
                record(5, `strs[${j}][${i}] = '${strs[j][i]}' ≠ '${ch}' → mismatch! Return prefix.`, { i }, { isComparison: true });
                prefix = strs[0].substring(0, i);
                record(6, `✓ Done! Longest common prefix = "${prefix}".`, {}, { isComplete: true });
                return h;
            }
            record(5, `strs[${j}][${i}] = '${strs[j][i]}' == '${ch}' ✓`, { i }, { isComparison: true });
        }
        prefix = strs[0].substring(0, i + 1);
        record(4, `All strings match at column ${i}. Prefix so far: "${prefix}".`, { i });
    }

    record(7, `✓ Done! Longest common prefix = "${prefix}".`, {}, { isComplete: true });
    return h;
}

// Reverse Words in a String (LC #151) — Split & Reverse
function generateReverseWordsHistory() {
    const s = "  the sky  is blue  ";
    const words = s.trim().split(/\s+/);
    const h = [];
    const wordsArr = [...words];
    let left = 0;
    let right = wordsArr.length - 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: wordsArr.map(w => w),
            nums2: [],
            arrayMeta: { original: s, wordsCount: wordsArr.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call reverseWords("${s}"). Goal: reverse word order, trim spaces.`);
    record(1, `Split by whitespace → words = ["${words.join('", "')}"].`);
    record(2, `Set left = 0, right = ${right}. Swap words from outside in.`, { l: 0, r: right });

    while (left < right) {
        record(3, `left = ${left}, right = ${right}: left < right → swap "${wordsArr[left]}" ↔ "${wordsArr[right]}".`, { l: left, r: right }, { isComparison: true });
        const tmp = wordsArr[left];
        wordsArr[left] = wordsArr[right];
        wordsArr[right] = tmp;
        record(4, `After swap: ["${wordsArr.join('", "')}"].`, { l: left, r: right });
        left++;
        right--;
        record(5, `left += 1 → ${left}, right -= 1 → ${right}.`, { l: left, r: right });
    }

    const result = wordsArr.join(' ');
    record(7, `✓ Done! Result = "${result}".`, {}, { isComplete: true });
    return h;
}

// Zigzag Conversion (LC #6) — Row-by-Row Build
function generateZigzagConversionHistory() {
    const s = "PAYPALISHIRING";
    const numRows = 4;
    const chars = s.split('');
    const rows = Array.from({ length: numRows }, () => '');
    let curRow = 0;
    let goingDown = false;
    const h = [];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: chars.map(c => c),
            nums2: [],
            arrayMeta: { rows: rows.map(r => r), curRow, goingDown, numRows },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call convert("${s}", numRows=${numRows}).`);
    record(1, `numRows = ${numRows} ≠ 1, so proceed.`);
    record(2, `Create ${numRows} empty row strings.`);
    record(3, `curRow = 0, goingDown = false.`);

    for (let idx = 0; idx < chars.length; idx++) {
        const ch = chars[idx];
        rows[curRow] += ch;
        record(4, `i = ${idx}: char '${ch}' → append to row ${curRow}. Row ${curRow} = "${rows[curRow]}".`, { i: idx });

        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
            record(6, `curRow = ${curRow} (boundary) → flip direction. goingDown = ${goingDown}.`, { i: idx });
        }
        curRow += goingDown ? 1 : -1;
        record(8, `Move curRow ${goingDown ? 'down' : 'up'} → curRow = ${curRow}.`, { i: idx });
    }

    const result = rows.join('');
    record(9, `✓ Done! Rows: [${rows.map(r => `"${r}"`).join(', ')}] → "${result}".`, {}, { isComplete: true });
    return h;
}

// Find the Index of the First Occurrence (LC #28) — Sliding Window
function generateStrStrHistory() {
    const haystack = "sadbutsad";
    const needle = "sad";
    const chars = haystack.split('');
    const h = [];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: chars.map(c => c),
            nums2: needle.split('').map(c => c),
            arrayMeta: { haystack, needle, hLen: haystack.length, nLen: needle.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call strStr("${haystack}", "${needle}").`);
    record(1, `n = ${haystack.length}, m = ${needle.length}. Check windows of size ${needle.length}.`);

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        const window = haystack.substring(i, i + needle.length);
        record(2, `i = ${i}: window "${window}" vs needle "${needle}".`, { i, end: i + needle.length - 1 });

        if (window === needle) {
            record(3, `"${window}" === "${needle}" ✓ → match found!`, { i, end: i + needle.length - 1 }, { isComparison: true });
            record(4, `✓ Done! First occurrence at index ${i}.`, {}, { isComplete: true });
            return h;
        } else {
            record(3, `"${window}" ≠ "${needle}" ✗ → slide window.`, { i, end: i + needle.length - 1 }, { isComparison: true });
        }
    }

    record(5, `✓ Done! Needle not found. Return -1.`, {}, { isComplete: true });
    return h;
}

// Text Justification (LC #68) — Greedy Pack Lines
function generateTextJustificationHistory() {
    const words = ["This", "is", "an", "example", "of", "text", "justification."];
    const maxWidth = 16;
    const result = [];
    let line = [];
    let lineLen = 0;
    const h = [];

    function record(ln, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line: ln,
            pointers: { ...pointers },
            nums1: words.map(w => w),
            nums2: [],
            arrayMeta: { maxWidth, currentLine: [...line], lineLen, result: [...result], resultStr: result.map(r => `"${r}"`).join(', ') },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call fullJustify(words, maxWidth=${maxWidth}).`);
    record(1, `result = [], line = [], lineLen = 0.`);

    for (let wIdx = 0; wIdx < words.length; wIdx++) {
        const w = words[wIdx];
        record(2, `Word "${w}" (len=${w.length}). lineLen=${lineLen}, spaces needed=${line.length}. Total would be ${lineLen + w.length + line.length}.`, { i: wIdx });

        if (lineLen + w.length + line.length > maxWidth) {
            // Justify current line
            const totalSpaces = maxWidth - lineLen;
            record(3, `${lineLen + w.length + line.length} > ${maxWidth} → flush current line. Need ${totalSpaces} spaces.`, { i: wIdx });

            for (let s = 0; s < totalSpaces; s++) {
                line[s % Math.max(line.length - 1, 1)] += ' ';
            }
            const justified = line.join('');
            result.push(justified);
            record(4, `Justified: "${justified}" (${justified.length} chars).`, { i: wIdx });

            line = [];
            lineLen = 0;
            record(7, `Reset line = [], lineLen = 0.`, { i: wIdx });
        }

        line.push(w);
        lineLen += w.length;
        record(8, `Append "${w}" to line → [${line.join(', ')}]. lineLen = ${lineLen}.`, { i: wIdx });
    }

    // Last line: left-justified
    const lastLine = line.join(' ').padEnd(maxWidth);
    result.push(lastLine);
    record(10, `Last line (left-justified): "${lastLine}".`);

    record(11, `✓ Done! Result: [${result.map(r => `"${r}"`).join(', ')}].`, {}, { isComplete: true });
    return h;
}

// Valid Palindrome (LC #125) — Two Pointers
function generateValidPalindromeHistory() {
    const s = "No lemon, no melon";
    const chars = s.split('');
    const h = [];
    let l = 0;
    let r = chars.length - 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: chars.map(c => /[a-zA-Z0-9]/.test(c) ? c : c === ' ' ? '␣' : c),
            nums2: [],
            arrayMeta: { left: l, right: r, originalLength: chars.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call isPalindrome("${s}"). Compare only alphanumeric characters.`);
    record(1, `l = 0, r = ${r}.`, { l, r });

    while (l < r) {
        // Skip non-alnum on left
        while (l < r && !/[a-zA-Z0-9]/.test(chars[l])) {
            record(3, `s[${l}] = '${chars[l]}' is not alphanumeric → skip. l += 1.`, { l, r });
            l++;
        }
        // Skip non-alnum on right
        while (l < r && !/[a-zA-Z0-9]/.test(chars[r])) {
            record(5, `s[${r}] = '${chars[r]}' is not alphanumeric → skip. r -= 1.`, { l, r });
            r--;
        }

        if (l >= r) break;

        const lc = chars[l].toLowerCase();
        const rc = chars[r].toLowerCase();
        record(7, `Compare s[${l}] = '${lc}' vs s[${r}] = '${rc}'.`, { l, r }, { isComparison: true });

        if (lc !== rc) {
            record(8, `'${lc}' ≠ '${rc}' → NOT a palindrome!`, { l, r });
            record(8, `✓ Done! Return False.`, {}, { isComplete: true });
            return h;
        }

        record(7, `'${lc}' == '${rc}' ✓ → match!`, { l, r });
        l++;
        r--;
        record(9, `l += 1 → ${l}, r -= 1 → ${r}.`, { l, r });
    }

    record(11, `✓ Done! "${s}" IS a valid palindrome. Return True.`, {}, { isComplete: true });
    return h;
}

// Is Subsequence (LC #392) — Two Pointers
function generateIsSubsequenceHistory() {
    const s = "ace";
    const t = "abcde";
    const sChars = s.split('');
    const tChars = t.split('');
    const h = [];
    let i = 0;
    let j = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: tChars.map(c => c),
            nums2: sChars.map(c => c),
            arrayMeta: { s, t, sLen: s.length, tLen: t.length, i, j },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call isSubsequence("${s}", "${t}"). Is "${s}" a subsequence of "${t}"?`);
    record(1, `i = 0 (pointer in s), j = 0 (pointer in t).`, { i: 0, j: 0 });

    while (i < sChars.length && j < tChars.length) {
        record(2, `i = ${i}, j = ${j}: s[${i}] = '${sChars[i]}', t[${j}] = '${tChars[j]}'.`, { i, j });

        if (sChars[i] === tChars[j]) {
            record(3, `'${sChars[i]}' == '${tChars[j]}' ✓ → match! Advance both.`, { i, j }, { isComparison: true });
            i++;
            record(4, `i += 1 → ${i}.`, { i, j });
        } else {
            record(3, `'${sChars[i]}' ≠ '${tChars[j]}' ✗ → no match. Advance j only.`, { i, j }, { isComparison: true });
        }
        j++;
        record(5, `j += 1 → ${j}.`, { i, j });
    }

    if (i === sChars.length) {
        record(6, `✓ Done! i = ${i} == len(s) = ${sChars.length} → "${s}" IS a subsequence of "${t}". Return True.`, {}, { isComplete: true });
    } else {
        record(6, `✓ Done! i = ${i} < len(s) = ${sChars.length} → "${s}" is NOT a subsequence of "${t}". Return False.`, {}, { isComplete: true });
    }
    return h;
}

// Two Sum II (LC #167) — Two Pointers
function generateTwoSumIIHistory() {
    const numbers = [1, 3, 5, 8, 11, 15];
    const target = 13;
    const h = [];
    let l = 0;
    let r = numbers.length - 1;
    let sumDir = '';  // '', 'low', 'high', 'match'

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: [...numbers],
            nums2: [],
            arrayMeta: {
                target,
                curSum: (pointers.l != null && pointers.r != null) ? numbers[pointers.l] + numbers[pointers.r] : 0,
                sumDirection: sumDir,
                lVal: pointers.l != null ? numbers[pointers.l] : null,
                rVal: pointers.r != null ? numbers[pointers.r] : null
            },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call twoSum([${numbers}], target=${target}). Find two numbers that add to ${target}.`);
    record(1, `l = 0, r = ${r}. Array is sorted, use two pointers.`, { l: 0, r });

    while (l < r) {
        const curSum = numbers[l] + numbers[r];
        sumDir = '';
        record(2, `l = ${l}, r = ${r}: check.`, { l, r });
        sumDir = curSum < target ? 'low' : curSum > target ? 'high' : 'match';
        record(3, `curSum = numbers[${l}] + numbers[${r}] = ${numbers[l]} + ${numbers[r]} = ${curSum}.`, { l, r });

        if (curSum === target) {
            record(4, `${curSum} == ${target} ✓ → found!`, { l, r }, { isComparison: true });
            sumDir = 'match';
            record(5, `✓ Done! Return [${l + 1}, ${r + 1}] (1-indexed).`, {}, { isComplete: true });
            return h;
        } else if (curSum < target) {
            record(6, `${curSum} < ${target} → too small. l += 1.`, { l, r }, { isComparison: true });
            l++;
            sumDir = '';
            record(7, `l = ${l}.`, { l, r });
        } else {
            record(8, `${curSum} > ${target} → too big. r -= 1.`, { l, r }, { isComparison: true });
            r--;
            sumDir = '';
            record(9, `r = ${r}.`, { l, r });
        }
    }

    record(10, `✓ Done! No pair found. Return [].`, {}, { isComplete: true });
    return h;
}

// Container With Most Water (LC #11) — Two Pointers
function generateContainerWaterHistory() {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const h = [];
    let l = 0;
    let r = height.length - 1;
    let maxWater = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: [...height],
            nums2: [],
            arrayMeta: { maxWater, area: 0 },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call maxArea([${height}]).`);
    record(1, `l = 0, r = ${r}.`, { l: 0, r });
    record(2, `maxWater = 0. Move pointers inward, always shrinking the shorter side.`);

    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        maxWater = Math.max(maxWater, area);
        record(3, `l = ${l}, r = ${r}.`, { l, r });
        record(4, `area = min(${height[l]}, ${height[r]}) × (${r} - ${l}) = ${Math.min(height[l], height[r])} × ${r - l} = ${area}.`, { l, r });
        record(5, `maxWater = max(${maxWater === area ? maxWater : maxWater - area + ',' + area}, ${area}) = ${maxWater}.`, { l, r });

        if (height[l] < height[r]) {
            record(6, `height[${l}] = ${height[l]} < height[${r}] = ${height[r]} → move l right.`, { l, r }, { isComparison: true });
            l++;
            record(7, `l = ${l}.`, { l, r });
        } else {
            record(8, `height[${l}] = ${height[l]} ≥ height[${r}] = ${height[r]} → move r left.`, { l, r }, { isComparison: true });
            r--;
            record(9, `r = ${r}.`, { l, r });
        }
    }

    record(10, `✓ Done! Maximum water = ${maxWater}.`, {}, { isComplete: true });
    return h;
}

// 3Sum (LC #15) — Sort + Two Pointers
function generateThreeSumHistory() {
    const nums = [-1, 0, 1, 2, -1, -4];
    const sorted = [...nums].sort((a, b) => a - b);
    const result = [];
    const h = [];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: [...sorted],
            nums2: [],
            arrayMeta: { result: result.map(r => `[${r}]`).join(', '), triplets: result.length },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call threeSum([${nums}]). Find all unique triplets summing to 0.`);
    record(1, `Sort → [${sorted}].`);
    record(2, `result = []. Fix one element, two-pointer the rest.`);

    for (let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) {
            record(4, `i = ${i}: nums[${i}] = ${sorted[i]} == nums[${i - 1}] → skip duplicate.`, { i }, { isSkip: true });
            continue;
        }
        record(3, `i = ${i}: fix nums[${i}] = ${sorted[i]}. Two-pointer on [${i + 1}..${sorted.length - 1}].`, { i });

        let l = i + 1;
        let r = sorted.length - 1;
        record(5, `l = ${l}, r = ${r}.`, { i, l, r });

        while (l < r) {
            const total = sorted[i] + sorted[l] + sorted[r];
            record(6, `l = ${l}, r = ${r}.`, { i, l, r });
            record(7, `total = ${sorted[i]} + ${sorted[l]} + ${sorted[r]} = ${total}.`, { i, l, r });

            if (total === 0) {
                result.push([sorted[i], sorted[l], sorted[r]]);
                record(8, `total == 0 ✓ → found [${sorted[i]}, ${sorted[l]}, ${sorted[r]}]!`, { i, l, r }, { isComparison: true });
                l++;
                r--;
                record(10, `l = ${l}, r = ${r}.`, { i, l, r });
                // Skip duplicates
                while (l < r && sorted[l] === sorted[l - 1]) {
                    record(11, `nums[${l}] = ${sorted[l]} == prev → skip duplicate l.`, { i, l, r }, { isSkip: true });
                    l++;
                }
            } else if (total < 0) {
                record(12, `${total} < 0 → too small. l += 1.`, { i, l, r }, { isComparison: true });
                l++;
            } else {
                record(13, `${total} > 0 → too big. r -= 1.`, { i, l, r }, { isComparison: true });
                r--;
            }
        }
    }

    record(14, `✓ Done! Triplets: [${result.map(r => `[${r}]`).join(', ')}].`, {}, { isComplete: true });
    return h;
}

function generateMergeSortedArrayHistory() {
    const nums1 = [4, 5, 6, 0, 0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3, 7, 8, 9];
    const n = 6;
    
    const h = [];
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    let step = 0;
    const merged = [...nums1];
    
    function record(msg, extra = {}) {
        const state = {
            msg,
            line: step,
            pointers: { i, j, k },
            nums1: [...merged],
            nums2: [...nums2],
            m,
            mergeInfo: extra.mergeInfo || '',
            isComparison: extra.isComparison || false,
            isComplete: extra.isComplete || false,
            step: h.length
        };
        if (extra.mergeSource !== undefined) {
            state.mergeSource = extra.mergeSource;
            state.sourceIdx = extra.sourceIdx;
            state.targetIdx = extra.targetIdx;
            state.placedVal = extra.placedVal;
        }
        h.push(state);
    }
    
    record(`We merge nums2 into nums1's buffer slots. Key insight: fill from the END so we never overwrite data we still need.`, { mergeInfo: `Filling right → left. i reads nums1, j reads nums2, k writes.` });
    step = 1;
    
    record(`Pointers set → i=index ${i} (last real value in nums1: ${merged[i]}), j=index ${j} (last in nums2: ${nums2[j]}), k=index ${k} (last empty slot).`, { mergeInfo: `i=idx ${i}  j=idx ${j}  k=idx ${k} — ready to compare` });
    step = 5;
    
    while (i >= 0 && j >= 0) {
        step = 6;
        record(`Compare: nums1[${i}]=${merged[i]} vs nums2[${j}]=${nums2[j]}. Larger one goes to k=${k}.`, {
            isComparison: true,
            mergeInfo: `${merged[i]} vs ${nums2[j]} — who fills slot ${k}?`
        });
        
        if (merged[i] > nums2[j]) {
            const winVal = merged[i];
            const loseVal = nums2[j];
            step = 7;
            record(`${winVal} > ${loseVal} → place ${winVal} at k=${k}. Only move i — nums2[${j}]=${loseVal} hasn't been placed yet, it still needs to compete.`, {
                mergeInfo: `${winVal} > ${loseVal} → i wins! Move i left, j stays (${loseVal} still unplaced)`
            });
            
            merged[k] = winVal;
            step = 8;
            record(`nums1[${k}] = ${merged[k]} ✓`, { mergeInfo: `Placed ${merged[k]} at index ${k}`, mergeSource: 'i', sourceIdx: i, targetIdx: k, placedVal: winVal });
            
            i--;
            step = 9;
            record(`i-- → ${i}. Why not j? Because nums2[${j}]=${nums2[j]} was smaller — it belongs further left, so it waits.`, {
                mergeInfo: `i→${i} (consumed). j stays at ${j} — ${loseVal} waits for next round`
            });
        } else {
            const winVal = nums2[j];
            const loseVal = merged[i];
            step = 10;
            record(`${winVal} ≥ ${loseVal} → place ${winVal} at k=${k}. Only move j — nums1[${i}]=${loseVal} hasn't been placed yet, it still needs to compete.`, {
                mergeInfo: `${winVal} ≥ ${loseVal} → j wins! Move j left, i stays (${loseVal} still unplaced)`
            });
            
            merged[k] = winVal;
            step = 11;
            record(`nums1[${k}] = ${merged[k]} ✓`, { mergeInfo: `Placed ${merged[k]} at index ${k}`, mergeSource: 'j', sourceIdx: j, targetIdx: k, placedVal: winVal });
            
            j--;
            step = 12;
            record(`j-- → ${j}. Why not i? Because nums1[${i}]=${merged[i]} was larger or equal — it belongs further left, so it waits.`, {
                mergeInfo: `j→${j} (consumed). i stays at ${i} — ${loseVal} waits for next round`
            });
        }
        
        k--;
        step = 13;
        record(`k-- → ${k}. One more slot filled.`, { mergeInfo: `k→${k} — always decrements after each placement` });
    }
    
    step = 14;
    
    if (j >= 0) {
        record(`Loop condition broke: i < 0, so (i >= 0 && j >= 0) is false. nums1 is fully consumed — but nums2 still has ${j + 1} element(s). We must now loop through nums2 and copy them into nums1.`, {
            mergeInfo: `i < 0 → exit main loop. Drain remaining nums2 into nums1`
        });
    }
    
    while (j >= 0) {
        step = 15;
        record(`Copy nums2[${j}]=${nums2[j]} → nums1[${k}]. No comparison needed — everything left in nums2 is smaller than what's already placed.`, { mergeInfo: `Draining: nums2[${j}]=${nums2[j]} → index ${k}` });
        
        merged[k] = nums2[j];
        step = 16;
        record(`nums1[${k}] = ${merged[k]} ✓`, { mergeInfo: `Placed ${merged[k]} at index ${k}`, mergeSource: 'j', sourceIdx: j, targetIdx: k, placedVal: nums2[j] });
        
        j--;
        step = 17;
        record(`j-- → ${j}.${j >= 0 ? ` Still ${j + 1} left to drain.` : ' nums2 fully drained!'}`, { mergeInfo: j >= 0 ? `${j + 1} remaining in nums2` : `nums2 drained ✓` });
        
        k--;
        step = 13;
        record(`k-- → ${k}.`, { mergeInfo: `k→${k}` });
    }
    
    if (i >= 0) {
        record(`✓ All of nums2 placed! nums1 elements at indices 0–${i} are already in their correct sorted positions — no moves needed.`, { mergeInfo: `✓ nums1[0..${i}] already in place` });
    }
    
    h.push({
        msg: `✅ Merge complete! [${merged}]. Right-to-left fill = no overwrites. O(m+n) time, O(1) space.`,
        line: -1,
        pointers: { i, j, k },
        nums1: merged,
        nums2: nums2,
        m,
        mergeInfo: '✅ Sorted!',
        isComplete: true,
        step: h.length
    });
    
    return h;
}

// ─── Problem 32: Minimum Size Subarray Sum (LC #209) ───
function generateMinSubArrayLenHistory() {
    const nums = [2, 3, 1, 2, 4, 3];
    const target = 7;
    const h = [];
    let l = 0, total = 0, res = Infinity;

    function record(line, msg, extra = {}) {
        const r = extra.r ?? -1;
        const windowItems = (l >= 0 && r >= 0) ? nums.slice(l, r + 1) : [];
        const action = extra.action || '';
        h.push({ msg, line, pointers: { l, r }, nums1: [...nums], nums2: [], arrayMeta: { target, total, res: res === Infinity ? '∞' : res, windowLen: extra.wLen ?? 0, windowItems, action, addedVal: extra.addedVal, removedVal: extra.removedVal }, step: h.length, ...extra });
    }

    record(0, `Call minSubArrayLen(target=${target}, nums=[${nums}]).`);
    record(1, `l=0, total=0, res=∞. Expand R to grow window until sum ≥ target, then shrink L to minimize.`);

    for (let r = 0; r < nums.length; r++) {
        total += nums[r];
        record(3, `R expands → add nums[${r}]=${nums[r]}. Window sum: ${total - nums[r]} + ${nums[r]} = ${total}.`, { r, action: 'expand', addedVal: nums[r] });
        while (total >= target) {
            const wLen = r - l + 1;
            res = Math.min(res, wLen);
            record(5, `sum ${total} ≥ ${target} ✓ Window [${l}..${r}] length=${wLen}. Best so far: ${res}.`, { r, wLen, isComparison: true, action: 'hit' });
            const removed = nums[l];
            total -= nums[l];
            l++;
            record(7, `L shrinks → remove ${removed}. Window sum: ${total + removed} − ${removed} = ${total}.`, { r, action: 'shrink', removedVal: removed });
        }
    }

    h.push({ msg: `✓ Done! Minimum subarray length = ${res === Infinity ? 0 : res}.`, line: 8, pointers: { l, r: nums.length - 1 }, nums1: [...nums], nums2: [], arrayMeta: { target, total, res, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 33: Longest Substring Without Repeating Characters (LC #3) ───
function generateLongestSubstringHistory() {
    const s = "abcabcbb";
    const chars = s.split('');
    const h = [];
    let l = 0, res = 0;
    const charSet = new Set();

    function record(line, msg, r, extra = {}) {
        const windowStr = r >= l && l >= 0 ? s.substring(l, r + 1) : '';
        h.push({ msg, line, pointers: { l, r }, nums1: [...chars], nums2: [], arrayMeta: { res, windowChars: [...charSet].join(''), window: windowStr, action: extra.action || '', dupChar: extra.dupChar || '', removedChar: extra.removedChar || '' }, step: h.length, ...extra });
    }

    record(0, `Call lengthOfLongestSubstring("${s}").`, -1);
    record(2, `l=0, charSet={}. Expand R — if char already in set, shrink L until it's removed.`, -1);

    for (let r = 0; r < chars.length; r++) {
        if (charSet.has(chars[r])) {
            record(4, `R→ s[${r}]='${chars[r]}' — DUPLICATE! '${chars[r]}' already in window. Must shrink L.`, r, { action: 'duplicate', dupChar: chars[r] });
        } else {
            record(4, `R→ s[${r}]='${chars[r]}' — unique, safe to add.`, r, { action: 'expand' });
        }
        while (charSet.has(chars[r])) {
            const removed = chars[l];
            charSet.delete(chars[l]);
            l++;
            record(5, `L shrinks → remove '${removed}'. ${removed === chars[r] ? 'Duplicate cleared!' : `Still looking for '${chars[r]}'...`}`, r, { action: 'shrink', removedChar: removed, dupChar: chars[r] });
        }
        charSet.add(chars[r]);
        const wLen = r - l + 1;
        res = Math.max(res, wLen);
        record(8, `Window "${s.substring(l, r + 1)}" has ${wLen} unique chars. Best: ${res}.`, r, { action: wLen >= res ? 'newbest' : 'ok' });
    }

    h.push({ msg: `✓ Done! Longest substring without repeating = ${res}.`, line: 9, pointers: { l, r: chars.length - 1 }, nums1: [...chars], nums2: [], arrayMeta: { res, windowChars: [...charSet].join(''), action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 34: Longest Repeating Character Replacement (LC #424) ───
function generateCharReplacementHistory() {
    const s = "AABABBA";
    const k = 1;
    const chars = s.split('');
    const h = [];
    let l = 0, maxf = 0, res = 0;
    const count = {};

    function record(line, msg, r, extra = {}) {
        const wLen = r >= l && r >= 0 ? r - l + 1 : 0;
        const replacements = wLen - maxf;
        const dominantChar = Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] || '?';
        h.push({ msg, line, pointers: { l, r }, nums1: [...chars], nums2: [], arrayMeta: { k, maxf, res, counts: { ...count }, window: r >= l ? s.substring(l, r + 1) : '', replacements, dominantChar, action: extra.action || '' }, step: h.length, ...extra });
    }

    record(0, `Call characterReplacement("${s}", k=${k}).`, -1);
    record(2, `Key insight: window is valid when (window_length − most_frequent_char_count) ≤ k.`, -1);
    record(2, `This means: "chars we'd need to REPLACE" ≤ k replacements allowed.`, -1);

    for (let r = 0; r < chars.length; r++) {
        count[chars[r]] = (count[chars[r]] || 0) + 1;
        maxf = Math.max(maxf, count[chars[r]]);
        const wLen = r - l + 1;
        const replacements = wLen - maxf;
        const dominantChar = Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] || '?';
        record(5, `R→ s[${r}]='${chars[r]}'. Window "${s.substring(l, r + 1)}": ${wLen} chars, most frequent='${dominantChar}'×${maxf}. Replacements needed: ${wLen}−${maxf}=${replacements}.`, r, { action: replacements <= k ? 'valid' : 'invalid' });

        while ((r - l + 1) - maxf > k) {
            record(6, `${r - l + 1} − ${maxf} = ${(r - l + 1) - maxf} > ${k} → too many replacements! Shrink L.`, r, { action: 'shrink' });
            count[chars[l]]--;
            l++;
        }
        res = Math.max(res, r - l + 1);
        record(9, `Window "${s.substring(l, r + 1)}" valid (≤${k} replacements). Best: ${res}.`, r, { action: 'ok' });
    }

    h.push({ msg: `✓ Done! Longest repeating after ≤${k} replacements = ${res}.`, line: 10, pointers: { l, r: chars.length - 1 }, nums1: [...chars], nums2: [], arrayMeta: { k, maxf, res, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 35: Minimum Window Substring (LC #76) ───
function generateMinWindowHistory() {
    const s = "ADOBECODEBANC";
    const t = "ABC";
    const chars = s.split('');
    const h = [];
    const need = {};
    for (const c of t) need[c] = (need[c] || 0) + 1;
    const total = Object.keys(need).length;
    let have = 0, l = 0, resLen = Infinity, resStr = '';
    const window = {};

    function record(line, msg, r, extra = {}) {
        const needStatus = Object.entries(need).map(([ch, cnt]) => {
            const got = window[ch] || 0;
            return `${ch}:${got}/${cnt}${got >= cnt ? '✓' : ''}`;
        }).join(' ');
        h.push({ msg, line, pointers: { l, r }, nums1: [...chars], nums2: [], arrayMeta: { t, have, total, res: resLen === Infinity ? '∞' : resLen, resStr, window: r >= l ? s.substring(l, r + 1) : '', needStatus, action: extra.action || '' }, step: h.length, ...extra });
    }

    record(0, `Call minWindow("${s}", "${t}"). Need all chars of "${t}" in a window.`, -1);
    record(4, `Track: ${Object.entries(need).map(([c,n]) => `need '${c}'×${n}`).join(', ')}. Expand R to collect, shrink L to minimize.`, -1);

    for (let r = 0; r < chars.length; r++) {
        window[chars[r]] = (window[chars[r]] || 0) + 1;
        const isNeeded = !!need[chars[r]];
        if (isNeeded && window[chars[r]] === need[chars[r]]) have++;
        record(8, `R→ '${chars[r]}' ${isNeeded ? '(NEEDED!)' : '(not needed)'}. have=${have}/${total} unique chars matched.`, r, { action: have === total ? 'allmatched' : 'expand' });

        while (have === total) {
            const wLen = r - l + 1;
            if (wLen < resLen) {
                resLen = wLen;
                resStr = s.substring(l, r + 1);
            }
            record(12, `✓ ALL ${total} chars matched! Window "${s.substring(l, r + 1)}" len=${wLen}. Best: "${resStr}"(${resLen}).`, r, { action: 'hit' });
            const removing = chars[l];
            window[chars[l]]--;
            if (need[chars[l]] && window[chars[l]] < need[chars[l]]) have--;
            l++;
            record(16, `L shrinks → remove '${removing}'. ${need[removing] ? `Lost a needed char! have=${have}/${total}.` : 'Not needed, keep shrinking.'}`, r, { action: have < total ? 'lost' : 'shrink' });
        }
    }

    h.push({ msg: `✓ Done! Minimum window = "${resStr}" (length ${resLen}).`, line: 17, pointers: { l, r: chars.length - 1 }, nums1: [...chars], nums2: [], arrayMeta: { t, have, total, res: resLen, resStr, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 36: Valid Parentheses (LC #20) ───
function generateValidParenthesesHistory() {
    const s = "({[]})";
    const chars = s.split('');
    const h = [];
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    const openBrackets = new Set(['(', '{', '[']);

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: [...chars], nums2: [], arrayMeta: { stack: [...stack], stackStr: stack.join(''), action: extra.action || '', matchPair: extra.matchPair || '', currentChar: extra.currentChar || '' }, step: h.length, ...extra });
    }

    record(0, `Call isValid("${s}"). Opening brackets push onto stack; closing brackets must match stack top.`, -1);
    record(2, `pairs: ) matches (, } matches {, ] matches [.`, -1);

    let valid = true;
    for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (openBrackets.has(c)) {
            stack.push(c);
            record(9, `i=${i}: '${c}' is OPENING → push onto stack. Stack: [${stack.join(' ')}].`, i, { action: 'push', currentChar: c });
        } else {
            // closing bracket
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[c]) {
                const expected = pairs[c];
                const got = stack.length === 0 ? 'empty' : stack[stack.length - 1];
                record(6, `i=${i}: '${c}' is CLOSING → needs '${expected}' on top, but got '${got}' → MISMATCH!`, i, { action: 'mismatch', currentChar: c, matchPair: expected });
                valid = false;
                break;
            }
            const popped = stack.pop();
            record(7, `i=${i}: '${c}' is CLOSING → matches '${popped}' on top ✓ Pop! Stack: [${stack.join(' ')}].`, i, { action: 'pop', currentChar: c, matchPair: `${popped}${c}` });
        }
    }

    if (valid && stack.length === 0) {
        h.push({ msg: `✓ Done! Stack empty → ALL brackets matched. Valid = True.`, line: 10, pointers: {}, nums1: [...chars], nums2: [], arrayMeta: { stack: [], stackStr: '', action: 'valid' }, step: h.length, isComplete: true });
    } else if (valid) {
        h.push({ msg: `✗ Done! Stack still has [${stack.join(' ')}] → unmatched openers. Valid = False.`, line: 10, pointers: {}, nums1: [...chars], nums2: [], arrayMeta: { stack: [...stack], stackStr: stack.join(''), action: 'invalid' }, step: h.length, isComplete: true });
    } else {
        h.push({ msg: `✗ Done! Mismatch found → Valid = False.`, line: 6, pointers: {}, nums1: [...chars], nums2: [], arrayMeta: { stack: [...stack], stackStr: stack.join(''), action: 'invalid' }, step: h.length, isComplete: true });
    }
    return h;
}

// ─── Problem 37: Spiral Matrix (LC #54) ───
function generateSpiralMatrixHistory() {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]];
    const m = matrix.length, n = matrix[0].length;
    const h = [];
    const res = [];
    let top = 0, bot = m - 1, left = 0, right = n - 1;
    const flat = matrix.flat();
    const visited = new Array(m * n).fill(false);

    function record(line, msg, row, col, extra = {}) {
        h.push({ msg, line, pointers: { row, col }, nums1: [...flat], nums2: [], arrayMeta: { matrix: matrix.map(r => [...r]), m, n, res: [...res], visited: [...visited], top, bot, left, right, direction: extra.direction || '' }, step: h.length, ...extra });
    }

    record(0, `Call spiralOrder(3×3 matrix). Peel layers: top→right→bottom→left.`, -1, -1);
    record(2, `top=0, bot=2, left=0, right=2.`, -1, -1);

    while (top <= bot && left <= right) {
        // Right
        for (let i = left; i <= right; i++) { res.push(matrix[top][i]); visited[top * n + i] = true; record(5, `→ Right: matrix[${top}][${i}]=${matrix[top][i]}. res=[${res}].`, top, i, { direction: 'right' }); }
        top++;
        // Down
        for (let i = top; i <= bot; i++) { res.push(matrix[i][right]); visited[i * n + right] = true; record(7, `↓ Down: matrix[${i}][${right}]=${matrix[i][right]}. res=[${res}].`, i, right, { direction: 'down' }); }
        right--;
        if (top <= bot) {
            // Left
            for (let i = right; i >= left; i--) { res.push(matrix[bot][i]); visited[bot * n + i] = true; record(10, `← Left: matrix[${bot}][${i}]=${matrix[bot][i]}. res=[${res}].`, bot, i, { direction: 'left' }); }
            bot--;
        }
        if (left <= right) {
            // Up
            for (let i = bot; i >= top; i--) { res.push(matrix[i][left]); visited[i * n + left] = true; record(13, `↑ Up: matrix[${i}][${left}]=${matrix[i][left]}. res=[${res}].`, i, left, { direction: 'up' }); }
            left++;
        }
    }

    h.push({ msg: `✓ Done! Spiral order = [${res}].`, line: 15, pointers: {}, nums1: [...flat], nums2: [], arrayMeta: { matrix: matrix.map(r => [...r]), m, n, res: [...res], visited: [...visited] }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 38: Rotate Image (LC #48) ───
function generateRotateImageHistory() {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]];
    const n = matrix.length;
    const h = [];
    const flat = () => matrix.flat();

    function record(line, msg, r, c, extra = {}) {
        h.push({ msg, line, pointers: { row: r, col: c }, nums1: flat(), nums2: [], arrayMeta: { matrix: matrix.map(r => [...r]), n, phase: extra.phase || '' }, step: h.length, ...extra });
    }

    record(0, `Call rotate(3×3 matrix). Strategy: transpose then reverse each row.`, -1, -1);

    // Transpose
    record(2, `Phase 1: Transpose (swap matrix[i][j] with matrix[j][i]).`, -1, -1, { phase: 'transpose' });
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            record(4, `Swap matrix[${i}][${j}]=${matrix[i][j]} ↔ matrix[${j}][${i}]=${matrix[j][i]}.`, i, j, { phase: 'transpose' });
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            record(4, `After swap: [${i}][${j}]=${matrix[i][j]}, [${j}][${i}]=${matrix[j][i]}.`, i, j, { phase: 'transpose' });
        }
    }

    // Reverse each row
    record(5, `Phase 2: Reverse each row.`, -1, -1, { phase: 'reverse' });
    for (let i = 0; i < n; i++) {
        record(6, `Reverse row ${i}: [${matrix[i]}] → [${[...matrix[i]].reverse()}].`, i, -1, { phase: 'reverse' });
        matrix[i].reverse();
    }

    h.push({ msg: `✓ Done! Matrix rotated 90° clockwise.`, line: 6, pointers: {}, nums1: flat(), nums2: [], arrayMeta: { matrix: matrix.map(r => [...r]), n, phase: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 39: Set Matrix Zeroes (LC #73) ───
function generateSetMatrixZeroesHistory() {
    const matrix = [[1,1,1],[1,0,1],[1,1,1]];
    const m = matrix.length, n = matrix[0].length;
    const h = [];
    const flat = () => matrix.flat();

    function record(line, msg, r, c, extra = {}) {
        h.push({ msg, line, pointers: { row: r, col: c }, nums1: flat(), nums2: [], arrayMeta: { matrix: matrix.map(r => [...r]), m, n, phase: extra.phase || '' }, step: h.length, ...extra });
    }

    record(0, `Call setZeroes(3×3 matrix). Found 0 at [1][1].`, -1, -1);

    // Check first row/col
    let firstRow = matrix[0].includes(0);
    let firstCol = matrix.some(r => r[0] === 0);
    record(2, `firstRow has zero? ${firstRow}. firstCol has zero? ${firstCol}.`, -1, -1, { phase: 'scan' });

    // Mark phase
    record(4, `Phase 1: Scan interior, mark zeros in first row/col.`, -1, -1, { phase: 'mark' });
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
                record(8, `matrix[${i}][${j}]=0 → mark row ${i} (matrix[${i}][0]=0) & col ${j} (matrix[0][${j}]=0).`, i, j, { phase: 'mark', isComparison: true });
            }
        }
    }

    // Zero phase
    record(9, `Phase 2: Zero out cells based on markers.`, -1, -1, { phase: 'zero' });
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
                record(12, `matrix[${i}][0]=${matrix[i][0]} or matrix[0][${j}]=${matrix[0][j]} → zero matrix[${i}][${j}].`, i, j, { phase: 'zero' });
            }
        }
    }

    if (firstRow) { matrix[0] = new Array(n).fill(0); record(13, `firstRow was zero → zero entire row 0.`, 0, -1, { phase: 'zero' }); }
    if (firstCol) { for (let i = 0; i < m; i++) matrix[i][0] = 0; record(15, `firstCol was zero → zero entire col 0.`, -1, 0, { phase: 'zero' }); }

    h.push({ msg: `✓ Done! Matrix zeroed in-place.`, line: 15, pointers: {}, nums1: flat(), nums2: [], arrayMeta: { matrix: matrix.map(r => [...r]), m, n, phase: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 40: Game of Life (LC #289) ───
function generateGameOfLifeHistory() {
    const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
    const m = board.length, n = board[0].length;
    const h = [];
    const flat = () => board.flat();
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

    function countNeighbors(r, c) {
        let cnt = 0;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && (board[nr][nc] & 1)) cnt++;
        }
        return cnt;
    }

    function record(line, msg, r, c, extra = {}) {
        h.push({ msg, line, pointers: { row: r, col: c }, nums1: flat(), nums2: [], arrayMeta: { matrix: board.map(r => [...r]), m, n, phase: extra.phase || '' }, step: h.length, ...extra });
    }

    record(0, `Call gameOfLife(4×3 board). Rules: live cell with 2-3 neighbors survives; dead cell with 3 neighbors becomes alive.`, -1, -1);
    record(1, `Phase 1: Encode next state in 2nd bit. 2=was dead→alive, 3=was alive→stays alive.`, -1, -1, { phase: 'encode' });

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const nb = countNeighbors(i, j);
            const alive = board[i][j] & 1;
            if (alive && (nb === 2 || nb === 3)) {
                board[i][j] = 3;
                record(6, `[${i}][${j}] alive, ${nb} neighbors → survives (3).`, i, j, { phase: 'encode', isComparison: true });
            } else if (!alive && nb === 3) {
                board[i][j] = 2;
                record(8, `[${i}][${j}] dead, ${nb} neighbors → born (2).`, i, j, { phase: 'encode', isComparison: true });
            } else {
                record(4, `[${i}][${j}] ${alive ? 'alive' : 'dead'}, ${nb} neighbors → ${alive ? 'dies' : 'stays dead'}.`, i, j, { phase: 'encode' });
            }
        }
    }

    // Decode
    record(9, `Phase 2: Decode — right shift each cell to get final state.`, -1, -1, { phase: 'decode' });
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const old = board[i][j];
            board[i][j] >>= 1;
            record(11, `[${i}][${j}]: ${old} >> 1 = ${board[i][j]}.`, i, j, { phase: 'decode' });
        }
    }

    h.push({ msg: `✓ Done! Next generation computed in-place.`, line: 11, pointers: {}, nums1: flat(), nums2: [], arrayMeta: { matrix: board.map(r => [...r]), m, n, phase: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 41: Ransom Note (LC #383) ───
function generateRansomNoteHistory() {
    const ransomNote = "aab";
    const magazine = "aabcc";
    const h = [];
    const count = {};

    function record(line, msg, src, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: src === 'mag' ? magazine.split('') : ransomNote.split(''), nums2: [], arrayMeta: { count: { ...count }, source: src, ransomNote, magazine, action: extra.action || '', currentChar: extra.currentChar || '' }, step: h.length, ...extra });
    }

    record(0, `Call canConstruct("${ransomNote}", "${magazine}"). Can we spell "${ransomNote}" using letters from "${magazine}"?`, 'mag', -1);
    record(2, `Phase 1: Count every letter available in magazine.`, 'mag', -1);

    // Count magazine chars
    for (let i = 0; i < magazine.length; i++) {
        count[magazine[i]] = (count[magazine[i]] || 0) + 1;
        const countStr = Object.entries(count).map(([k, v]) => `${k}:${v}`).join(', ');
        record(3, `magazine[${i}]='${magazine[i]}' → count['${magazine[i]}']+1 = ${count[magazine[i]]}. Available: {${countStr}}.`, 'mag', i, { action: 'count', currentChar: magazine[i] });
    }

    // Check ransom note
    record(4, `Phase 2: For each letter in "${ransomNote}", consume from available counts.`, 'note', -1);
    let possible = true;
    for (let i = 0; i < ransomNote.length; i++) {
        const c = ransomNote[i];
        if ((count[c] || 0) === 0) {
            record(6, `Need '${c}' but count['${c}']=${count[c] || 0} → NONE LEFT! Cannot build note.`, 'note', i, { action: 'fail', currentChar: c });
            possible = false;
            break;
        }
        count[c]--;
        const countStr = Object.entries(count).map(([k, v]) => `${k}:${v}`).join(', ');
        record(7, `Need '${c}' → count['${c}']-1 = ${count[c]} ✓ Still available: {${countStr}}.`, 'note', i, { action: 'consume', currentChar: c });
    }

    h.push({ msg: `✓ Done! canConstruct = ${possible}. ${possible ? 'All letters found!' : 'Missing letters.'}`, line: 8, pointers: {}, nums1: ransomNote.split(''), nums2: [], arrayMeta: { count: { ...count }, result: possible, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 42: Isomorphic Strings (LC #205) ───
function generateIsomorphicHistory() {
    const s = "paper";
    const t = "title";
    const h = [];
    const mapST = {}, mapTS = {};

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: s.split(''), nums2: t.split(''), arrayMeta: { mapST: { ...mapST }, mapTS: { ...mapTS }, s, t, action: extra.action || '', charS: extra.charS || '', charT: extra.charT || '', conflictWith: extra.conflictWith || '' }, step: h.length, ...extra });
    }

    record(0, `Call isIsomorphic("${s}", "${t}"). Check 1-to-1 character mapping.`, -1);
    record(1, `mapST={}, mapTS={}. Each char must map consistently both ways.`, -1);

    let iso = true;
    for (let i = 0; i < s.length; i++) {
        const c1 = s[i], c2 = t[i];
        if (mapST[c1] && mapST[c1] !== c2) {
            record(3, `i=${i}: '${c1}'→'${c2}' but mapST['${c1}']='${mapST[c1]}' ≠ '${c2}' → NOT isomorphic!`, i, { isComparison: true, action: 'conflict', charS: c1, charT: c2, conflictWith: mapST[c1] });
            iso = false; break;
        }
        if (mapTS[c2] && mapTS[c2] !== c1) {
            record(5, `i=${i}: '${c2}'→'${c1}' but mapTS['${c2}']='${mapTS[c2]}' ≠ '${c1}' → NOT isomorphic!`, i, { isComparison: true, action: 'conflict', charS: c1, charT: c2, conflictWith: mapTS[c2] });
            iso = false; break;
        }
        mapST[c1] = c2;
        mapTS[c2] = c1;
        record(8, `i=${i}: '${c1}' ↔ '${c2}' ✓ mapST=${JSON.stringify(mapST)}.`, i, { action: 'map', charS: c1, charT: c2 });
    }

    h.push({ msg: `✓ Done! isIsomorphic = ${iso}.`, line: 9, pointers: {}, nums1: s.split(''), nums2: t.split(''), arrayMeta: { mapST: { ...mapST }, mapTS: { ...mapTS }, result: iso, action: 'done', s, t }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 43: Word Pattern (LC #290) ───
function generateWordPatternHistory() {
    const pattern = "abba";
    const str = "dog cat cat dog";
    const words = str.split(' ');
    const h = [];
    const pToW = {}, wToP = {};

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: pattern.split(''), nums2: [], arrayMeta: { words: [...words], pToW: { ...pToW }, wToP: { ...wToP }, pattern, str, action: extra.action || '', patChar: extra.patChar || '', word: extra.word || '', conflictWith: extra.conflictWith || '' }, step: h.length, ...extra });
    }

    record(0, `Call wordPattern("${pattern}", "${str}"). words=[${words.map(w => '"' + w + '"')}].`, -1);
    record(2, `len(pattern)=${pattern.length} == len(words)=${words.length} ✓.`, -1);

    let match = true;
    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i], w = words[i];
        if (pToW[p] && pToW[p] !== w) {
            record(5, `i=${i}: '${p}'→"${w}" but pToW['${p}']="${pToW[p]}" ≠ "${w}" → FALSE!`, i, { isComparison: true, action: 'conflict', patChar: p, word: w, conflictWith: pToW[p] });
            match = false; break;
        }
        if (wToP[w] && wToP[w] !== p) {
            record(6, `i=${i}: "${w}"→'${p}' but wToP["${w}"]='${wToP[w]}' ≠ '${p}' → FALSE!`, i, { isComparison: true, action: 'conflict', patChar: p, word: w, conflictWith: wToP[w] });
            match = false; break;
        }
        pToW[p] = w;
        wToP[w] = p;
        record(8, `i=${i}: '${p}' ↔ "${w}" ✓. pToW=${JSON.stringify(pToW)}.`, i, { action: 'map', patChar: p, word: w });
    }

    h.push({ msg: `✓ Done! wordPattern = ${match}.`, line: 9, pointers: {}, nums1: pattern.split(''), nums2: [], arrayMeta: { words, pToW: { ...pToW }, wToP: { ...wToP }, result: match, action: 'done', pattern, str }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 44: Valid Anagram (LC #242) ───
function generateValidAnagramHistory() {
    const s = "anagram";
    const t = "nagaram";
    const h = [];
    const count = {};

    function record(line, msg, src, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: src === 's' ? s.split('') : t.split(''), nums2: [], arrayMeta: { count: { ...count }, source: src, s, t, action: extra.action || '', currentChar: extra.currentChar || '', delta: extra.delta || 0 }, step: h.length, ...extra });
    }

    record(0, `Call isAnagram("${s}", "${t}").`, 's', -1);
    record(1, `len("${s}")=${s.length} == len("${t}")=${t.length} ✓. Count chars.`, 's', -1);

    // Count s
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        record(4, `s[${i}]='${s[i]}' → count['${s[i]}']=+1 → ${count[s[i]]}.`, 's', i, { action: 'add', currentChar: s[i], delta: 1 });
    }

    // Subtract t
    record(5, `Now subtract counts for t.`, 't', -1);
    let valid = true;
    for (let i = 0; i < t.length; i++) {
        count[t[i]] = (count[t[i]] || 0) - 1;
        if (count[t[i]] < 0) {
            record(7, `t[${i}]='${t[i]}' → count['${t[i]}']=−1 → ${count[t[i]]} < 0 → NOT anagram!`, 't', i, { isComparison: true, action: 'fail', currentChar: t[i], delta: -1 });
            valid = false; break;
        }
        record(6, `t[${i}]='${t[i]}' → count['${t[i]}']=−1 → ${count[t[i]]}.`, 't', i, { action: 'subtract', currentChar: t[i], delta: -1 });
    }

    h.push({ msg: `✓ Done! isAnagram = ${valid}.`, line: 8, pointers: {}, nums1: s.split(''), nums2: [], arrayMeta: { count: { ...count }, result: valid, action: 'done', s, t }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 45: Group Anagrams (LC #49) ───
function generateGroupAnagramsHistory() {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const h = [];
    const groups = {};
    const wordToKey = {};

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: [...strs], nums2: [], arrayMeta: { groups: JSON.parse(JSON.stringify(groups)), wordToKey: { ...wordToKey }, currentWord: idx >= 0 ? strs[idx] : '', currentKey: extra.currentKey || '', action: extra.action || '' }, step: h.length, ...extra });
    }

    record(0, `Call groupAnagrams([${strs.map(s => '"' + s + '"')}]).`, -1);
    record(1, `Insight: Anagrams have the same sorted characters. "eat" → "aet", "tea" → "aet". Same key → same group!`, -1);

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('');
        wordToKey[strs[i]] = key;
        const isNew = !groups[key];
        if (!groups[key]) groups[key] = [];
        groups[key].push(strs[i]);
        record(4, `"${strs[i]}" → sort → "${key}". ${isNew ? 'NEW group' : `Add to existing group`} "${key}": [${groups[key].map(s => '"' + s + '"').join(', ')}].`, i, { currentKey: key, action: isNew ? 'newgroup' : 'addtogroup' });
    }

    const result = Object.values(groups);
    h.push({ msg: `✓ Done! ${result.length} anagram groups: ${result.map(g => '[' + g.map(s => '"' + s + '"').join(', ') + ']').join(', ')}.`, line: 5, pointers: {}, nums1: [...strs], nums2: [], arrayMeta: { groups: JSON.parse(JSON.stringify(groups)), wordToKey: { ...wordToKey }, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 46: Two Sum (LC #1) ───
function generateTwoSumHistory() {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const h = [];
    const seen = {};

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: [...nums], nums2: [], arrayMeta: { target, seen: { ...seen }, complement: extra.complement ?? null, currentVal: idx >= 0 ? nums[idx] : null, action: extra.action || '', foundIdx: extra.foundIdx ?? null, result: extra.result || null }, step: h.length, ...extra });
    }

    record(0, `Call twoSum([${nums}], target=${target}).`, -1);
    record(1, `Strategy: For each num, compute complement = target − num. If complement is in our hash map → found! Otherwise, store num → index.`, -1);

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen[complement] !== undefined) {
            record(5, `nums[${i}]=${nums[i]}. complement = ${target} − ${nums[i]} = ${complement}. Check map → seen[${complement}] = index ${seen[complement]} ✓ FOUND!`, i, { complement, action: 'found', foundIdx: seen[complement], result: [seen[complement], i] });
            h.push({ msg: `✓ Done! nums[${seen[complement]}] + nums[${i}] = ${nums[seen[complement]]} + ${nums[i]} = ${target}. Return [${seen[complement]}, ${i}].`, line: 5, pointers: {}, nums1: [...nums], nums2: [], arrayMeta: { target, seen: { ...seen }, result: [seen[complement], i], action: 'done' }, step: h.length, isComplete: true });
            return h;
        }

        record(6, `nums[${i}]=${nums[i]}. complement = ${target} − ${nums[i]} = ${complement}. Check map → NOT found. Store seen[${nums[i]}] = ${i}.`, i, { complement, action: 'store' });
        seen[nums[i]] = i;
    }

    h.push({ msg: `✓ Done! No pair found.`, line: 7, pointers: {}, nums1: [...nums], nums2: [], arrayMeta: { target, seen: { ...seen }, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 47: Happy Number (LC #202) ───
function generateHappyNumberHistory() {
    const startN = 19;
    const h = [];
    const seen = new Set();
    let n = startN;

    function digitSquareSum(num) {
        let sum = 0;
        while (num > 0) { sum += (num % 10) ** 2; num = Math.floor(num / 10); }
        return sum;
    }

    function record(line, msg, extra = {}) {
        const digits = String(n).split('').map(Number);
        const squares = digits.map(d => d * d);
        const squareSum = squares.reduce((a, b) => a + b, 0);
        h.push({ msg, line, pointers: {}, nums1: [], nums2: [], arrayMeta: { n, seen: [...seen], startN, digits, squares, squareSum, chain: [...seen, n], action: extra.action || '' }, step: h.length, ...extra });
    }

    record(0, `Call isHappy(${startN}). Split number into digits, square each, sum them. Repeat until 1 or cycle.`);
    record(1, `Track seen numbers — if we see one again, it's a cycle (not happy).`);

    while (n !== 1) {
        if (seen.has(n)) {
            record(3, `${n} already seen → CYCLE! Not a happy number.`, { action: 'cycle' });
            h.push({ msg: `✗ Done! ${startN} is NOT a happy number (cycle detected).`, line: 3, pointers: {}, nums1: [], nums2: [], arrayMeta: { n, seen: [...seen], startN, action: 'done' }, step: h.length, isComplete: true });
            return h;
        }
        seen.add(n);
        const digits = String(n).split('').map(Number);
        const squares = digits.map(d => d * d);
        const expr = digits.map(d => `${d}²=${d * d}`).join(' + ');
        const next = digitSquareSum(n);
        record(5, `${n} → ${expr} → sum = ${next}.`, { action: 'compute' });
        n = next;
    }

    record(6, `Reached 1! 🎉 Happy number!`, { action: 'happy' });
    h.push({ msg: `✓ Done! ${startN} IS a happy number!`, line: 6, pointers: {}, nums1: [], nums2: [], arrayMeta: { n, seen: [...seen], startN, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 48: Contains Duplicate II (LC #219) ───
function generateContainsDupIIHistory() {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const h = [];
    const windowSet = new Set();

    function record(line, msg, idx, extra = {}) {
        const winStart = Math.max(0, idx - k);
        h.push({ msg, line, pointers: { i: idx }, nums1: [...nums], nums2: [], arrayMeta: { k, windowSet: [...windowSet], windowStr: [...windowSet].join(', '), action: extra.action || '', checkedVal: extra.checkedVal ?? null, removedVal: extra.removedVal ?? null, winStart, winEnd: idx }, step: h.length, ...extra });
    }

    record(0, `Call containsNearbyDuplicate([${nums}], k=${k}).`, -1);
    record(1, `Use a sliding window set of size k=${k}. For each num: if already in set → duplicate within distance k!`, -1);

    let found = false;
    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            const removed = nums[i - k - 1];
            windowSet.delete(removed);
            record(4, `Window full → evict nums[${i - k - 1}]=${removed} (too far away, distance > k=${k}).`, i, { action: 'evict', removedVal: removed });
        }
        if (windowSet.has(nums[i])) {
            record(5, `nums[${i}]=${nums[i]} IS in window set {${[...windowSet].join(',')}} → DUPLICATE within k=${k}! ✓`, i, { action: 'found', checkedVal: nums[i] });
            found = true;
            break;
        }
        record(7, `nums[${i}]=${nums[i]} NOT in window set → add it. Window: {${[...windowSet, nums[i]].join(', ')}}.`, i, { action: 'add', checkedVal: nums[i] });
        windowSet.add(nums[i]);
    }

    h.push({ msg: `✓ Done! containsNearbyDuplicate = ${found}. ${found ? 'Found a duplicate within k=' + k + '!' : 'No nearby duplicates.'}`, line: 8, pointers: {}, nums1: [...nums], nums2: [], arrayMeta: { k, windowSet: [...windowSet], result: found, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ─── Problem 49: Longest Consecutive Sequence (LC #128) ───
function generateLongestConsecutiveHistory() {
    const nums = [100, 4, 200, 1, 3, 2];
    const h = [];
    const numSet = new Set(nums);
    let longest = 0;

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: [...nums], nums2: [], arrayMeta: { numSet: [...numSet].sort((a, b) => a - b), longest, currentSeq: extra.seq || [], currentNum: extra.currentNum ?? null, action: extra.action || '', checkingNum: extra.checkingNum ?? null, isStart: extra.isStart ?? null }, step: h.length, ...extra });
    }

    record(0, `Call longestConsecutive([${nums}]).`, -1);
    record(1, `Step 1: Put all nums in a HashSet = {${[...numSet].sort((a,b)=>a-b).join(', ')}}.`, -1);
    record(1, `Step 2: For each num, check if num−1 is in set. If NOT → it's a SEQUENCE START. Then count forward.`, -1);

    let idx = 0;
    for (const n of nums) {
        const hasPrec = numSet.has(n - 1);
        if (!hasPrec) {
            // Start of a sequence
            let length = 1;
            const seq = [n];
            record(4, `num=${n}: Is ${n - 1} in set? NO → ${n} is a SEQUENCE START! Begin counting forward.`, idx, { seq: [...seq], currentNum: n, action: 'start', isStart: true });

            while (numSet.has(n + length)) {
                seq.push(n + length);
                record(7, `Is ${n + length} in set? YES → extend chain! seq=[${seq.join(' → ')}] length=${seq.length}.`, idx, { seq: [...seq], currentNum: n, checkingNum: n + length, action: 'extend' });
                length++;
            }
            record(7, `Is ${n + length} in set? NO → chain ends.`, idx, { seq: [...seq], currentNum: n, checkingNum: n + length, action: 'chainend' });
            longest = Math.max(longest, length);
            record(8, `Sequence [${seq.join(' → ')}] has length ${length}. Longest so far: ${longest}.`, idx, { seq: [...seq], currentNum: n, action: 'compare', isComparison: true });
        } else {
            record(4, `num=${n}: Is ${n - 1}=${n - 1} in set? YES → ${n} is NOT a start (${n - 1} comes before it). Skip.`, idx, { currentNum: n, action: 'skip', isStart: false });
        }
        idx++;
    }

    h.push({ msg: `✓ Done! Longest consecutive sequence = ${longest}.`, line: 9, pointers: {}, nums1: [...nums], nums2: [], arrayMeta: { numSet: [...numSet].sort((a, b) => a - b), longest, action: 'done' }, step: h.length, isComplete: true });
    return h;
}

// ═══════════════════════════════════════════════════════
//  EDGE CASE HISTORY GENERATORS
// ═══════════════════════════════════════════════════════

// Edge: #3 Merge Sorted Array — second array is empty
function generateMergeSortedArrayEdgeHistory() {
    const nums1 = [1, 3, 5];
    const m = 3;
    const nums2 = [];
    const n = 0;
    const h = [];
    let i = m - 1, j = n - 1, k = m + n - 1;
    let step = 0;
    const merged = [...nums1];

    function record(msg, extra = {}) {
        h.push({ msg, line: step, pointers: { i, j, k }, nums1: [...merged], nums2: [...nums2], m, isComparison: extra.isComparison || false, isComplete: extra.isComplete || false, step: h.length });
    }

    step = 0;
    record(`Initializing merge. nums1=[${nums1}], nums2=[] (empty!)`);
    step = 1;
    record(`Setting pointers: i=index ${i}, j=index ${j}, k=index ${k}`);
    step = 5;
    record(`j = ${j} < 0 → nums2 is empty! Nothing to merge.`);
    step = 14;
    record(`✓ nums1 is already sorted and complete. No work needed!`);
    h.push({ msg: `✅ Merge complete! Result: [${merged}]. Edge case: when nums2 is empty, nums1 is unchanged.`, line: -1, pointers: { i, j, k }, nums1: merged, nums2: nums2, m, isComplete: true, step: h.length });
    return h;
}

// Edge: #4 Remove Element — all elements match target
function generateRemoveElementEdgeHistory() {
    const nums = [2, 2, 2, 2];
    const val = 2;
    const h = [];
    let k = 0;
    const arr = [...nums];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...arr], nums2: [], arrayMeta: { val, k, originalLength: nums.length }, step: h.length, ...extra });
    }

    record(0, `Call removeElement(nums=[${nums}], val=${val}). Goal: remove all ${val}s in-place.`);
    record(1, `Initialize write pointer k = 0.`, { k });

    for (let i = 0; i < arr.length; i++) {
        record(2, `Move read pointer → i = ${i}. nums[${i}] = ${arr[i]}. k = ${k}.`, { i, k });
        record(3, `nums[${i}] = ${arr[i]} == ${val} → matches target! Skip — k stays at ${k}.`, { i, k }, { isComparison: true, isSkip: true });
    }

    record(6, `✓ Done! k = ${k}. ALL elements were the target value — result is empty! Edge case: every element removed.`, { k }, { isComplete: true });
    return h;
}

// Edge: #5 Remove Duplicates — already unique
function generateRemoveDuplicatesEdgeHistory() {
    const nums = [1, 2, 3, 4, 5];
    const h = [];
    let k = 1;
    const arr = [...nums];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...arr], nums2: [], arrayMeta: { k, originalLength: nums.length, copyFrom: extra.copyFrom ?? null, copyTo: extra.copyTo ?? null }, step: h.length, ...extra });
    }

    record(0, `Call removeDuplicates(nums=[${nums}]). Goal: remove duplicates in-place.`);
    record(2, `Initialize k = 1. First element is always kept.`, { k });

    for (let i = 1; i < arr.length; i++) {
        record(3, `i = ${i}. nums[${i}] = ${arr[i]}, nums[${i - 1}] = ${arr[i - 1]}.`, { i, k });
        record(4, `nums[${i}] = ${arr[i]} ≠ nums[${k - 1}] = ${arr[k - 1]} → unique! nums[${k}] = ${arr[i]}.`, { i, k }, { isComparison: true });
        arr[k] = arr[i];
        k++;
        record(6, `k++ → k = ${k}.`, { i, k });
    }

    record(7, `✓ Done! k = ${k}. Edge case: array was already unique — no duplicates removed!`, { k }, { isComplete: true });
    return h;
}

// Edge: #9 Best Trade — descending prices, no profit
function generateBestTradeEdgeHistory() {
    const prices = [7, 6, 4, 3, 1];
    const h = [];
    let minPrice = prices[0];
    let minPriceIdx = 0;
    let maxProfit = 0;
    let bestBuyIdx = -1;
    let bestSellIdx = -1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...prices], nums2: [], arrayMeta: { minPrice, minPriceIdx, maxProfit, bestBuyIdx, bestSellIdx, originalLength: prices.length }, step: h.length, ...extra });
    }

    record(0, `Call bestTrade(prices=[${prices}]). Goal: find the maximum profit from buying once and selling once.`);
    record(1, `Initialize minPrice = prices[0] = ${minPrice}.`);
    record(2, `Initialize maxProfit = 0.`);

    for (let i = 1; i < prices.length; i++) {
        record(3, `Move to i = ${i}. prices[${i}] = ${prices[i]}. minPrice = ${minPrice}, maxProfit = ${maxProfit}.`, { i });
        const oldMin = minPrice;
        minPrice = prices[i];
        minPriceIdx = i;
        record(4, `prices[${i}] = ${prices[i]} < minPrice (was ${oldMin}) → new low found! minPrice = ${minPrice}.`, { i }, { isComparison: true });
    }

    record(9, `✓ Done! maxProfit = ${maxProfit}. Edge case: prices only decrease → no profitable trade exists!`, {}, { isComplete: true });
    return h;
}

// Edge: #10 Best Trades II — flat prices, no gains
function generateBestTradesEdgeHistory() {
    const prices = [3, 3, 3, 3, 3];
    const h = [];
    let totalProfit = 0;
    const collectedGains = [];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...prices], nums2: [], arrayMeta: { totalProfit, originalLength: prices.length, collectedGains: [...collectedGains] }, step: h.length, ...extra });
    }

    record(0, `Call bestTrades(prices=[${prices}]). Goal: maximize total profit (greedy).`);
    record(1, `Initialize totalProfit = 0.`);

    for (let i = 1; i < prices.length; i++) {
        record(2, `Move to i = ${i}. prices[${i}] = ${prices[i]}, prices[${i - 1}] = ${prices[i - 1]}.`, { i });
        record(3, `prices[${i}] = ${prices[i]} ≤ prices[${i - 1}] = ${prices[i - 1]} → no gain. Skip.`, { i }, { isComparison: true, isSkip: true });
    }

    record(5, `Done! totalProfit = ${totalProfit}. Edge case: all prices equal, no trades possible.`, {}, { isComplete: true });
    return h;
}

// Edge: #11 Jump Game — can't reach end
function generateCanReachEndEdgeHistory() {
    const nums = [3, 2, 1, 0, 4];
    const h = [];
    let farthest = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...nums], nums2: [], arrayMeta: { farthest, originalLength: nums.length }, step: h.length, ...extra });
    }

    record(0, `Call canReachEnd(nums=[${nums}]). Goal: determine if we can reach the last index.`);
    record(1, `Initialize farthest = 0.`);

    for (let i = 0; i < nums.length; i++) {
        record(2, `Move to i = ${i}. nums[${i}] = ${nums[i]}. farthest = ${farthest}.`, { i });
        if (i > farthest) {
            record(3, `i = ${i} > farthest = ${farthest} — can't reach this index!`, { i }, { isComparison: true, isFail: true });
            record(4, `Return False — cannot reach the end. A zero creates an impassable barrier.`, {}, { isComplete: true, result: false });
            return h;
        }
        const oldFarthest = farthest;
        const iReachRaw = i + nums[i];
        const iReach = Math.min(iReachRaw, nums.length - 1);
        farthest = Math.max(farthest, iReach);
        record(5, `farthest = max(${oldFarthest}, ${i} + ${nums[i]}) = ${farthest}.`, { i }, {
            isComparison: true,
            prevFarthest: oldFarthest,
            iReach,
            reachExpanded: farthest > oldFarthest
        });
    }

    record(6, `Done! Return True.`, {}, { isComplete: true, result: true });
    return h;
}

// Edge: #18 Trapping Rain Water — flat surface, no water
function generateTrappedRainwaterEdgeHistory() {
    const height = [3, 3, 3, 3, 3];
    const h = [];
    let l = 0, r = height.length - 1;
    let leftMax = height[l], rightMax = height[r];
    let water = 0;
    const waterAt = new Array(height.length).fill(0);

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...height], nums2: [...waterAt], arrayMeta: { leftMax, rightMax, water, originalLength: height.length }, step: h.length, ...extra });
    }

    record(0, `Call trap(height=[${height}]). Goal: compute trapped water.`);
    record(1, `Set l = 0, r = ${r}.`, { l, r });
    record(2, `leftMax = height[0] = ${leftMax}.`, { l, r });
    record(3, `rightMax = height[${r}] = ${rightMax}.`, { l, r });
    record(4, `water = 0.`, { l, r });

    while (l < r) {
        record(5, `l = ${l}, r = ${r}. l < r → continue.`, { l, r });
        if (leftMax < rightMax) {
            record(6, `leftMax (${leftMax}) < rightMax (${rightMax}) → move left.`, { l, r }, { isComparison: true });
            l++;
            record(7, `l = ${l}. height[${l}] = ${height[l]}.`, { l, r });
            leftMax = Math.max(leftMax, height[l]);
            const trapped = leftMax - height[l];
            water += trapped;
            waterAt[l] = trapped;
            record(9, `Water at ${l} = ${leftMax} − ${height[l]} = ${trapped}. Total = ${water}.`, { l, r }, { isComparison: true });
        } else {
            record(10, `leftMax (${leftMax}) ≥ rightMax (${rightMax}) → move right.`, { l, r }, { isComparison: true });
            r--;
            record(11, `r = ${r}. height[${r}] = ${height[r]}.`, { l, r });
            rightMax = Math.max(rightMax, height[r]);
            const trapped = rightMax - height[r];
            water += trapped;
            waterAt[r] = trapped;
            record(13, `Water at ${r} = ${rightMax} − ${height[r]} = ${trapped}. Total = ${water}.`, { l, r }, { isComparison: true });
        }
    }

    record(14, `✓ Total trapped water = ${water}. Edge case: flat surface → no water trapped!`, { l, r }, { isComplete: true });
    return h;
}

// Edge: #27 Valid Palindrome — NOT a palindrome
function generateValidPalindromeEdgeHistory() {
    const s = "race a car";
    const chars = s.split('');
    const h = [];
    let l = 0;
    let r = chars.length - 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: chars.map(c => /[a-zA-Z0-9]/.test(c) ? c : c === ' ' ? '␣' : c), nums2: [], arrayMeta: { left: l, right: r, originalLength: chars.length }, step: h.length, ...extra });
    }

    record(0, `Call isPalindrome("${s}"). Compare only alphanumeric characters.`);
    record(1, `l = 0, r = ${r}.`, { l, r });

    while (l < r) {
        while (l < r && !/[a-zA-Z0-9]/.test(chars[l])) {
            record(3, `s[${l}] = '${chars[l]}' is not alphanumeric → skip. l += 1.`, { l, r });
            l++;
        }
        while (l < r && !/[a-zA-Z0-9]/.test(chars[r])) {
            record(5, `s[${r}] = '${chars[r]}' is not alphanumeric → skip. r -= 1.`, { l, r });
            r--;
        }

        if (l >= r) break;

        const lc = chars[l].toLowerCase();
        const rc = chars[r].toLowerCase();
        record(7, `Compare s[${l}] = '${lc}' vs s[${r}] = '${rc}'.`, { l, r }, { isComparison: true });

        if (lc !== rc) {
            record(8, `'${lc}' ≠ '${rc}' → NOT a palindrome!`, { l, r });
            record(8, `✓ Done! Return False. Edge case: "race a car" fails — a common trick question!`, {}, { isComplete: true });
            return h;
        }

        record(7, `'${lc}' == '${rc}' ✓ → match!`, { l, r });
        l++;
        r--;
        record(9, `l += 1 → ${l}, r -= 1 → ${r}.`, { l, r });
    }

    record(11, `✓ Done! IS a valid palindrome.`, {}, { isComplete: true });
    return h;
}

// Edge: #36 Valid Parentheses — unbalanced
function generateValidParenthesesEdgeHistory() {
    const s = "([)]";
    const chars = s.split('');
    const h = [];
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    const openBrackets = new Set(['(', '{', '[']);

    function record(line, msg, idx, extra = {}) {
        h.push({ msg, line, pointers: { i: idx }, nums1: [...chars], nums2: [], arrayMeta: { stack: [...stack], stackStr: stack.join(''), action: extra.action || '', matchPair: extra.matchPair || '', currentChar: extra.currentChar || '' }, step: h.length, ...extra });
    }

    record(0, `Call isValid("${s}"). Edge case: interleaved brackets.`, -1);
    record(2, `pairs: ) matches (, ] matches [.`, -1);

    // i=0: '(' → push
    stack.push('(');
    record(9, `i=0: '(' is OPENING → push. Stack: [${stack.join(' ')}].`, 0, { action: 'push', currentChar: '(' });

    // i=1: '[' → push
    stack.push('[');
    record(9, `i=1: '[' is OPENING → push. Stack: [${stack.join(' ')}].`, 1, { action: 'push', currentChar: '[' });

    // i=2: ')' → needs '(' but top is '['
    const expected = pairs[')'];
    const got = stack[stack.length - 1];
    record(6, `i=2: ')' is CLOSING → needs '${expected}' on top, but got '${got}' → MISMATCH!`, 2, { action: 'mismatch', currentChar: ')' });

    h.push({ msg: `✗ Done! Mismatch found → Valid = False. Edge case: interleaved brackets like "([)]" are NOT valid!`, line: 6, pointers: {}, nums1: [...chars], nums2: [], arrayMeta: { stack: [...stack], stackStr: stack.join(''), action: 'invalid' }, step: h.length, isComplete: true });
    return h;
}

// Edge: #7 Dominant Element — dominant element appears every time
function generateDominantElementEdgeHistory() {
    const nums = [1, 1, 1, 1, 1];
    const h = [];
    let candidate = nums[0];
    let count = 1;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...nums], nums2: [], arrayMeta: { candidate, count, originalLength: nums.length, battleType: extra.battleType ?? null, prevCount: extra.prevCount ?? null, prevCandidate: extra.prevCandidate ?? null, challengerVal: extra.challengerVal ?? null }, step: h.length, ...extra });
    }

    record(0, `Call majorityElement(nums=[${nums}]). Goal: find the element that appears > n/2 times.`);
    record(1, `Initialize candidate = ${candidate}.`, { i: 0 }, { battleType: 'coronation', challengerVal: candidate, prevCount: 0, prevCandidate: null });
    record(2, `Initialize count = 1.`, { i: 0 });

    for (let i = 1; i < nums.length; i++) {
        record(3, `i = ${i}. nums[${i}] = ${nums[i]}. candidate = ${candidate}, count = ${count}.`, { i });
        const pc = count;
        count++;
        record(7, `nums[${i}] = ${nums[i]} == candidate ${candidate} → Reinforcement! count++ → ${count}.`, { i }, { isComparison: true, battleType: 'reinforce', challengerVal: nums[i], prevCount: pc });
    }

    record(11, `✓ Done! candidate = ${candidate}, count = ${count}. Edge case: ALL elements are the same!`, {}, { isComplete: true });
    return h;
}

// Edge: #28 Is Subsequence — empty subsequence (always true)
function generateIsSubsequenceEdgeHistory() {
    const s = "";
    const t = "hello";
    const sChars = s.split('');
    const tChars = t.split('');
    const h = [];
    let i = 0, j = 0;

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: tChars.map(c => c),
            nums2: sChars.map(c => c),
            arrayMeta: { s, t, sLen: s.length, tLen: t.length, i, j },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call isSubsequence("${s}", "${t}"). Is "" a subsequence of "${t}"?`);
    record(1, `i = 0, j = 0. s is EMPTY (sLen = 0).`, { i: 0, j: 0 });
    record(6, `i = 0 ≥ sLen = 0 → all characters of s matched! Return True.`);
    record(7, `✓ Done! Return True. Edge case: empty string is always a subsequence.`, {}, { isComplete: true });
    return h;
}

// Edge: #29 Two Sum II — target at endpoints
function generateTwoSumIIEdgeHistory() {
    const numbers = [1, 2, 3, 4, 5];
    const target = 6;
    const h = [];
    let l = 0, r = numbers.length - 1;
    let sumDir = '';

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({
            msg, line,
            pointers: { ...pointers },
            nums1: [...numbers],
            nums2: [],
            arrayMeta: {
                target,
                curSum: (pointers.l != null && pointers.r != null) ? numbers[pointers.l] + numbers[pointers.r] : 0,
                sumDirection: sumDir,
                lVal: pointers.l != null ? numbers[pointers.l] : null,
                rVal: pointers.r != null ? numbers[pointers.r] : null
            },
            step: h.length,
            ...extra
        });
    }

    record(0, `Call twoSum([${numbers}], target=${target}). Find two numbers that add to ${target}.`);
    record(1, `l = 0, r = ${r}. Array is sorted, use two pointers.`, { l: 0, r });

    while (l < r) {
        const curSum = numbers[l] + numbers[r];
        sumDir = '';
        record(2, `l = ${l}, r = ${r}: check.`, { l, r });
        sumDir = curSum < target ? 'low' : curSum > target ? 'high' : 'match';
        record(3, `curSum = numbers[${l}] + numbers[${r}] = ${numbers[l]} + ${numbers[r]} = ${curSum}.`, { l, r });

        if (curSum === target) {
            record(4, `${curSum} == ${target} ✓ → found!`, { l, r }, { isComparison: true });
            sumDir = 'match';
            record(5, `✓ Done! Return [${l + 1}, ${r + 1}] (1-indexed). Edge case: answer found quickly!`, {}, { isComplete: true });
            return h;
        } else if (curSum < target) {
            record(6, `${curSum} < ${target} → too small. l += 1.`, { l, r }, { isComparison: true });
            l++;
            sumDir = '';
            record(7, `l = ${l}.`, { l, r });
        } else {
            record(8, `${curSum} > ${target} → too big. r -= 1.`, { l, r }, { isComparison: true });
            r--;
            sumDir = '';
            record(9, `r = ${r}.`, { l, r });
        }
    }

    record(10, `✓ Done! No pair found. Return [].`, {}, { isComplete: true });
    return h;
}

// Edge: #8 Cycle Array — k = 0 (no rotation)
function generateCycleArrayEdgeHistory() {
    const nums = [1, 2, 3, 4, 5];
    const k_input = 0;
    const h = [];
    const n = nums.length;
    const k = k_input % n;
    const arr = [...nums];

    function record(line, msg, pointers = {}, extra = {}) {
        h.push({ msg, line, pointers: { ...pointers }, nums1: [...arr], nums2: [], arrayMeta: { k: k_input, n, effectiveK: k, originalLength: n, phase: '', posMap: nums.map((_, i) => i), splitAt: n - (k || n), target: [...arr], phasesCompleted: 0 }, step: h.length, ...extra });
    }

    record(0, `Call cycleElements(nums=[${nums}], k=${k_input}).`);
    record(1, `n = ${n}.`);
    record(2, `k = ${k_input} % ${n} = ${k}. Effective rotation = 0!`);
    record(5, `✓ Done! Edge case: k = 0 (or k is multiple of n) → array stays the same: [${arr}].`, {}, { isComplete: true });
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
        // Problem 6 - Trim Excess Duplicates
        else if (currentProbId === '6') {
            videos = [
                {
                    title: "Remove Duplicates from Sorted Array II — NeetCode",
                    url: "https://www.youtube.com/watch?v=bucdUNFhos4",
                    reason: "Clear explanation of the k-2 comparison trick for allowing at most 2 duplicates"
                },
                {
                    title: "Two Pointer Technique Explained — GeeksforGeeks",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Comprehensive guide to the two-pointer technique and when to use it"
                }
            ];
        }
        // Problem 7 - Find the Dominant Element
        else if (currentProbId === '7') {
            videos = [
                {
                    title: "Majority Element — Boyer-Moore Voting Algorithm — NeetCode",
                    url: "https://www.youtube.com/watch?v=7pnhv842keE",
                    reason: "Intuitive explanation of the Boyer-Moore voting algorithm"
                },
                {
                    title: "Boyer-Moore Majority Vote Algorithm — Visual Explanation",
                    url: "https://www.youtube.com/watch?v=n5QY3x_GNDg",
                    reason: "Visual step-by-step walkthrough of how candidate/count approach works"
                }
            ];
        }
        // Problem 8 - Cycle Array Elements
        else if (currentProbId === '8') {
            videos = [
                {
                    title: "Rotate Array — LeetCode 189 — NeetCode",
                    url: "https://www.youtube.com/watch?v=BHr381Guz3Y",
                    reason: "Three approaches explained: brute force, extra array, and reverse trick"
                },
                {
                    title: "Reverse Algorithm for Array Rotation — Abdul Bari",
                    url: "https://www.youtube.com/watch?v=lBsQf2J-Ves",
                    reason: "Deep dive into why reversing three times correctly rotates the array"
                }
            ];
        }
        // Problem 9 - Best Moment to Trade
        else if (currentProbId === '9') {
            videos = [
                {
                    title: "Best Time to Buy and Sell Stock — NeetCode",
                    url: "https://www.youtube.com/watch?v=1pkOgXD63yU",
                    reason: "Optimal single-pass solution tracking minimum price and maximum profit"
                },
                {
                    title: "Stock Buy and Sell Problem — Kadane's Approach",
                    url: "https://www.youtube.com/watch?v=nS5z4x6LyKw",
                    reason: "Understanding the connection between stock problems and dynamic programming"
                }
            ];
        }
        // Problem 10 - Best Moments to Trade
        else if (currentProbId === '10') {
            videos = [
                {
                    title: "Best Time to Buy and Sell Stock II — NeetCode",
                    url: "https://www.youtube.com/watch?v=3SJ3pUkPQMc",
                    reason: "Greedy approach: collect every consecutive gain for maximum total profit"
                },
                {
                    title: "Greedy Algorithms — When and How to Use Them",
                    url: "https://www.youtube.com/watch?v=bC7o8P_Ste4",
                    reason: "Learn the greedy paradigm and why it works for this problem"
                }
            ];
        }
        // Problem 11 - Can You Reach the End? (Jump Game)
        else if (currentProbId === '11') {
            videos = [
                {
                    title: "Jump Game — LeetCode 55 — NeetCode",
                    url: "https://www.youtube.com/watch?v=Yan0cv2cLy8",
                    reason: "Greedy O(n) solution tracking the farthest reachable index"
                },
                {
                    title: "Jump Game — Greedy Approach Explained",
                    url: "https://www.youtube.com/watch?v=muDPTDrpS28",
                    reason: "Visual walkthrough of why greedy works and DP comparison"
                }
            ];
        }
        // Problem 12 - Fewest Jumps to the End (Jump Game II)
        else if (currentProbId === '12') {
            videos = [
                {
                    title: "Jump Game II — LeetCode 45 — NeetCode",
                    url: "https://www.youtube.com/watch?v=dJ7sWiOoK7g",
                    reason: "BFS-like greedy approach to find minimum jumps in O(n)"
                },
                {
                    title: "Jump Game II — Greedy BFS Intuition",
                    url: "https://www.youtube.com/watch?v=vBdo7wtwlXs",
                    reason: "Understanding the level-by-level expansion trick for minimum jumps"
                }
            ];
        }
        // Problem 13 - Researcher Impact Score (H-Index)
        else if (currentProbId === '13') {
            videos = [
                {
                    title: "H-Index — LeetCode 274 — NeetCode",
                    url: "https://www.youtube.com/watch?v=INS0LBIhu2g",
                    reason: "Sort-based and counting-sort approaches to find h-index"
                },
                {
                    title: "H-Index Problem — Step by Step Explanation",
                    url: "https://www.youtube.com/watch?v=JK-mXsmMfho",
                    reason: "Clear explanation of what h-index means and how to compute it"
                }
            ];
        }
        // Problem 14 - Randomized Collection (Insert Delete GetRandom)
        else if (currentProbId === '14') {
            videos = [
                {
                    title: "Insert Delete GetRandom O(1) — LeetCode 380 — NeetCode",
                    url: "https://www.youtube.com/watch?v=j4KwhBziOpg",
                    reason: "HashMap + Array design pattern for O(1) operations"
                },
                {
                    title: "Randomized Set Design — System Design Interview",
                    url: "https://www.youtube.com/watch?v=4lXCzhgOPCs",
                    reason: "How the swap-with-last trick enables O(1) removal"
                }
            ];
        }
        // Problem 15 - Product Without Self
        else if (currentProbId === '15') {
            videos = [
                {
                    title: "Product of Array Except Self — LeetCode 238 — NeetCode",
                    url: "https://www.youtube.com/watch?v=bNvIQI2wAjk",
                    reason: "Prefix and suffix product approach without using division"
                },
                {
                    title: "Product Except Self — O(1) Space Trick",
                    url: "https://www.youtube.com/watch?v=gREVHiZjXeQ",
                    reason: "How to compute prefix and suffix products in a single output array"
                }
            ];
        }
        // Problem 16 - Circular Fuel Route (Gas Station)
        else if (currentProbId === '16') {
            videos = [
                {
                    title: "Gas Station — LeetCode 134 — NeetCode",
                    url: "https://www.youtube.com/watch?v=lJwbPZGo05A",
                    reason: "Greedy single-pass solution to find the valid starting station"
                },
                {
                    title: "Gas Station Problem — Why Greedy Works",
                    url: "https://www.youtube.com/watch?v=nTKdYm_5-TY",
                    reason: "Mathematical proof of why the greedy reset approach is correct"
                }
            ];
        }
        // Problem 17 - Fair Candy Distribution (Candy)
        else if (currentProbId === '17') {
            videos = [
                {
                    title: "Candy — LeetCode 135 — NeetCode",
                    url: "https://www.youtube.com/watch?v=h9_tOFnbSMI",
                    reason: "Two-pass greedy approach to minimize total candies given constraints"
                },
                {
                    title: "Candy Distribution — Hard Greedy Problem Explained",
                    url: "https://www.youtube.com/watch?v=QzPWc0ilrec",
                    reason: "Why a left pass then right pass handles all neighbor constraints"
                }
            ];
        }
        // Problem 18 - Trapped Rainwater (Trapping Rain Water)
        else if (currentProbId === '18') {
            videos = [
                {
                    title: "Trapping Rain Water — LeetCode 42 — NeetCode",
                    url: "https://www.youtube.com/watch?v=ZI2z5pq0TqA",
                    reason: "Clear two-pointer approach with visual water-filling explanation"
                },
                {
                    title: "Trapping Rain Water — Why Two Pointers Work",
                    url: "https://www.youtube.com/watch?v=C8UjlJZsHBw",
                    reason: "Deep dive into the min(leftMax, rightMax) intuition with bar diagrams"
                }
            ];
        }
        // Problem 19 - Decode Roman Numerals (Roman to Integer)
        else if (currentProbId === '19') {
            videos = [
                {
                    title: "Roman to Integer — LeetCode 13 — NeetCode",
                    url: "https://www.youtube.com/watch?v=3jdxYj3DD98",
                    reason: "Simple right-to-left scan with the subtraction rule clearly explained"
                },
                {
                    title: "Roman Numerals — Hash Map Approach Explained",
                    url: "https://www.youtube.com/watch?v=dlATMslQ6Uc",
                    reason: "How to handle subtraction cases like IV, IX, XC, CM"
                }
            ];
        }
        // Problem 20 - Encode to Roman Numerals (Integer to Roman)
        else if (currentProbId === '20') {
            videos = [
                {
                    title: "Integer to Roman — LeetCode 12 — NeetCode",
                    url: "https://www.youtube.com/watch?v=ohBNdSJyLh8",
                    reason: "Greedy approach: subtract the largest symbol value that fits"
                },
                {
                    title: "Integer to Roman — Lookup Table Trick",
                    url: "https://www.youtube.com/watch?v=rsSFJwF-OWk",
                    reason: "Why a 13-entry value/symbol table handles all subtractive cases"
                }
            ];
        }
        // Problem 21 - Length of Final Word (Length of Last Word)
        else if (currentProbId === '21') {
            videos = [
                {
                    title: "Length of Last Word — LeetCode 58 — NeetCode",
                    url: "https://www.youtube.com/watch?v=KT9rltZTybQ",
                    reason: "Clean reverse-scan approach: skip trailing spaces, then count letters"
                },
                {
                    title: "String Problems for Beginners — Interview Prep",
                    url: "https://www.youtube.com/watch?v=GQr3Z7oM3Dw",
                    reason: "Build string manipulation intuition with multiple easy problems"
                }
            ];
        }
        // Problem 22 - Common Prefix Finder (Longest Common Prefix)
        else if (currentProbId === '22') {
            videos = [
                {
                    title: "Longest Common Prefix — LeetCode 14 — NeetCode",
                    url: "https://www.youtube.com/watch?v=0sWShKIJoo4",
                    reason: "Vertical scanning approach explained step by step"
                },
                {
                    title: "Longest Common Prefix — Multiple Approaches",
                    url: "https://www.youtube.com/watch?v=bl8nYAN3cKw",
                    reason: "Compare vertical scan, horizontal scan, and divide-and-conquer methods"
                }
            ];
        }
        // Problem 23 - Flip Words in Sentence (Reverse Words in a String)
        else if (currentProbId === '23') {
            videos = [
                {
                    title: "Reverse Words in a String — LeetCode 151 — NeetCode",
                    url: "https://www.youtube.com/watch?v=MYKVfIaudfY",
                    reason: "Split, reverse, and join approach with edge case handling"
                },
                {
                    title: "String Manipulation — Two Pointer Reversal",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Core two-pointer reversal technique used in string problems"
                }
            ];
        }
        // Problem 24 - Zigzag Text Encoder (Zigzag Conversion)
        else if (currentProbId === '24') {
            videos = [
                {
                    title: "Zigzag Conversion — LeetCode 6 — NeetCode",
                    url: "https://www.youtube.com/watch?v=Q2Tw6gcVKnE",
                    reason: "Row-by-row simulation with direction toggle explained visually"
                },
                {
                    title: "Zigzag Pattern — Understand the Math",
                    url: "https://www.youtube.com/watch?v=UkVIljgYDMs",
                    reason: "How to derive the cycle length and index formulas for zigzag"
                }
            ];
        }
        // Problem 25 - Find Needle in Haystack (Find the Index of the First Occurrence)
        else if (currentProbId === '25') {
            videos = [
                {
                    title: "Implement strStr — LeetCode 28 — NeetCode",
                    url: "https://www.youtube.com/watch?v=JoF0Z7nVSrA",
                    reason: "Sliding window and KMP approaches for substring search"
                },
                {
                    title: "String Matching Algorithms — KMP and Beyond",
                    url: "https://www.youtube.com/watch?v=V5-7GzOfADQ",
                    reason: "Deep dive into efficient string matching algorithms"
                }
            ];
        }
        // Problem 26 - Justified Text Formatter (Text Justification)
        else if (currentProbId === '26') {
            videos = [
                {
                    title: "Text Justification — LeetCode 68 — NeetCode",
                    url: "https://www.youtube.com/watch?v=GqXlEbFVTXY",
                    reason: "Greedy line packing with round-robin space distribution"
                },
                {
                    title: "Text Justification — Hard String Problem Walkthrough",
                    url: "https://www.youtube.com/watch?v=qrZLQmL6EY0",
                    reason: "Step-by-step breakdown of the space padding logic"
                }
            ];
        }
        // Problem 27 - Mirror String Check (Valid Palindrome)
        else if (currentProbId === '27') {
            videos = [
                {
                    title: "Valid Palindrome — LeetCode 125 — NeetCode",
                    url: "https://www.youtube.com/watch?v=jJXJ16kPFWg",
                    reason: "Two-pointer approach skipping non-alphanumeric characters"
                },
                {
                    title: "Palindrome Problems — Two Pointer Technique",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Master the two-pointer palindrome pattern for interviews"
                }
            ];
        }
        // Problem 28 - Subsequence Checker (Is Subsequence)
        else if (currentProbId === '28') {
            videos = [
                {
                    title: "Is Subsequence — LeetCode 392 — NeetCode",
                    url: "https://www.youtube.com/watch?v=99RVfqklbCE",
                    reason: "Two-pointer greedy scan through both strings"
                },
                {
                    title: "Subsequence Problems — Follow-Up with DP",
                    url: "https://www.youtube.com/watch?v=RFe4K_OB1uo",
                    reason: "From O(n) two-pointer to O(n·m) DP for multiple queries"
                }
            ];
        }
        // Problem 29 - Sorted Pair Sum (Two Sum II)
        else if (currentProbId === '29') {
            videos = [
                {
                    title: "Two Sum II — LeetCode 167 — NeetCode",
                    url: "https://www.youtube.com/watch?v=cQ1Oz4ckceM",
                    reason: "Two-pointer approach on sorted array: move left or right based on sum"
                },
                {
                    title: "Two Pointer Technique — Complete Guide",
                    url: "https://www.youtube.com/watch?v=pWLlJPg0Sx0",
                    reason: "Comprehensive guide to the two-pointer pattern"
                }
            ];
        }
        // Problem 30 - Widest Water Container (Container With Most Water)
        else if (currentProbId === '30') {
            videos = [
                {
                    title: "Container With Most Water — LeetCode 11 — NeetCode",
                    url: "https://www.youtube.com/watch?v=UuiTKBwPgAo",
                    reason: "Greedy two-pointer: always move the shorter side inward"
                },
                {
                    title: "Container With Most Water — Why Greedy Works",
                    url: "https://www.youtube.com/watch?v=ZHQg1mAmN0Y",
                    reason: "Proof of correctness for the two-pointer greedy approach"
                }
            ];
        }
        // Problem 31 - Triple Zero Sum (3Sum)
        else if (currentProbId === '31') {
            videos = [
                {
                    title: "3Sum — LeetCode 15 — NeetCode",
                    url: "https://www.youtube.com/watch?v=jzZsG8n2R9A",
                    reason: "Sort + fix one element + two-pointer with duplicate skipping"
                },
                {
                    title: "3Sum — Avoiding Duplicates Explained",
                    url: "https://www.youtube.com/watch?v=qJSPYnS35SE",
                    reason: "Key insight: how to skip duplicate triplets efficiently"
                }
            ];
        }
        // Problem 32 - Smallest Subarray Sum (Minimum Size Subarray Sum)
        else if (currentProbId === '32') {
            videos = [
                { title: "Minimum Size Subarray Sum — LeetCode 209 — NeetCode", url: "https://www.youtube.com/watch?v=aYqYMIqZx5s", reason: "Sliding window: grow right, shrink left when sum ≥ target" },
                { title: "Sliding Window Technique — Complete Guide", url: "https://www.youtube.com/watch?v=MK-NZ4hN7rs", reason: "Master the sliding window pattern used in dozens of problems" }
            ];
        }
        // Problem 33 - Longest Unique Substring
        else if (currentProbId === '33') {
            videos = [
                { title: "Longest Substring Without Repeating Characters — NeetCode", url: "https://www.youtube.com/watch?v=wiGpQwVHdE0", reason: "Sliding window with HashSet to track unique characters" },
                { title: "Sliding Window + HashSet Pattern", url: "https://www.youtube.com/watch?v=MK-NZ4hN7rs", reason: "Foundation for all sliding window + set problems" }
            ];
        }
        // Problem 34 - Longest Repeating After Replace
        else if (currentProbId === '34') {
            videos = [
                { title: "Longest Repeating Character Replacement — NeetCode", url: "https://www.youtube.com/watch?v=gqXU1UyA8pk", reason: "Key insight: window valid when (length - maxFreq) ≤ k" },
                { title: "Sliding Window with Frequency Count", url: "https://www.youtube.com/watch?v=MK-NZ4hN7rs", reason: "Pattern for frequency-based sliding window problems" }
            ];
        }
        // Problem 35 - Minimum Window Match (Minimum Window Substring)
        else if (currentProbId === '35') {
            videos = [
                { title: "Minimum Window Substring — LeetCode 76 — NeetCode", url: "https://www.youtube.com/watch?v=jSto0O4AJbM", reason: "Hardest sliding window: have/need counters with shrink phase" },
                { title: "Minimum Window Substring — Step by Step", url: "https://www.youtube.com/watch?v=U1q16AFcjKs", reason: "Detailed walkthrough of the have/total counting technique" }
            ];
        }
        // Problem 36 - Valid Bracket Sequence (Valid Parentheses)
        else if (currentProbId === '36') {
            videos = [
                { title: "Valid Parentheses — LeetCode 20 — NeetCode", url: "https://www.youtube.com/watch?v=WTzjTskDFMg", reason: "Classic stack problem: push opens, pop and match closes" },
                { title: "Stack Data Structure — Full Course", url: "https://www.youtube.com/watch?v=I37kGX-nZEI", reason: "Deep dive into stack operations and bracket matching" }
            ];
        }
        // Problem 37 - Spiral Matrix Reader
        else if (currentProbId === '37') {
            videos = [
                { title: "Spiral Matrix — LeetCode 54 — NeetCode", url: "https://www.youtube.com/watch?v=BJnMZNwUk1M", reason: "Boundary peeling: move top/bot/left/right inward each layer" },
                { title: "Spiral Matrix — Visual Walkthrough", url: "https://www.youtube.com/watch?v=TmweBVEL0I0", reason: "Step-by-step animation of the spiral traversal pattern" }
            ];
        }
        // Problem 38 - Rotate Grid 90°
        else if (currentProbId === '38') {
            videos = [
                { title: "Rotate Image — LeetCode 48 — NeetCode", url: "https://www.youtube.com/watch?v=fMSJSS7eO1w", reason: "Transpose + reverse = 90° clockwise rotation in-place" },
                { title: "Matrix Rotation — Why Transpose Works", url: "https://www.youtube.com/watch?v=SA867FvqHrM", reason: "Mathematical proof of the transpose + reverse technique" }
            ];
        }
        // Problem 39 - Zero Row & Column Marker
        else if (currentProbId === '39') {
            videos = [
                { title: "Set Matrix Zeroes — LeetCode 73 — NeetCode", url: "https://www.youtube.com/watch?v=T41rL0L3Pnw", reason: "Use first row/col as markers for O(1) space solution" },
                { title: "Set Matrix Zeroes — All Three Approaches", url: "https://www.youtube.com/watch?v=M65xBewcqcI", reason: "Compare O(mn), O(m+n), and O(1) space approaches" }
            ];
        }
        // Problem 40 - Game of Life Step
        else if (currentProbId === '40') {
            videos = [
                { title: "Game of Life — LeetCode 289 — NeetCode", url: "https://www.youtube.com/watch?v=fei4bJQdBUQ", reason: "In-place state encoding: use 2nd bit to store next state" },
                { title: "Conway's Game of Life Explained", url: "https://www.youtube.com/watch?v=ouipbDkwHWA", reason: "The cellular automaton rules and why they create complexity" }
            ];
        }
        // Problem 41 - Ransom Letter Builder
        else if (currentProbId === '41') {
            videos = [
                { title: "Ransom Note — LeetCode 383 — NeetCode", url: "https://www.youtube.com/watch?v=iTbBbfkMnnI", reason: "HashMap character counting: build from magazine, consume for note" },
                { title: "Character Frequency Problems — Pattern", url: "https://www.youtube.com/watch?v=WpYhLikralU", reason: "Foundation pattern for all character counting problems" }
            ];
        }
        // Problem 42 - Isomorphic String Check
        else if (currentProbId === '42') {
            videos = [
                { title: "Isomorphic Strings — LeetCode 205 — NeetCode", url: "https://www.youtube.com/watch?v=7yF-U1hLEqQ", reason: "Two-way mapping: each char must map consistently both directions" },
                { title: "String Mapping Problems — Pattern Guide", url: "https://www.youtube.com/watch?v=WpYhLikralU", reason: "Bidirectional mapping pattern used in multiple problems" }
            ];
        }
        // Problem 43 - Word Pattern Matcher
        else if (currentProbId === '43') {
            videos = [
                { title: "Word Pattern — LeetCode 290 — NeetCode", url: "https://www.youtube.com/watch?v=W_akoecmCbM", reason: "Same bidirectional mapping as isomorphic, but pattern↔word" },
                { title: "HashMap Bijection Pattern", url: "https://www.youtube.com/watch?v=7yF-U1hLEqQ", reason: "Understanding 1-to-1 mappings in string problems" }
            ];
        }
        // Problem 44 - Anagram Checker
        else if (currentProbId === '44') {
            videos = [
                { title: "Valid Anagram — LeetCode 242 — NeetCode", url: "https://www.youtube.com/watch?v=9UtInBqnCgA", reason: "Count chars in s, decrement for t — if any negative, not anagram" },
                { title: "Anagram & Character Count Techniques", url: "https://www.youtube.com/watch?v=WpYhLikralU", reason: "Foundation for all anagram-related problems" }
            ];
        }
        // Problem 45 - Group Anagram Sets
        else if (currentProbId === '45') {
            videos = [
                { title: "Group Anagrams — LeetCode 49 — NeetCode", url: "https://www.youtube.com/watch?v=vzdNOK2oB2E", reason: "Sort each word as key → group by sorted key in HashMap" },
                { title: "Group Anagrams — Optimal with Count Key", url: "https://www.youtube.com/watch?v=6kkmFlTRO1k", reason: "Character count array as key instead of sorting for O(n·k)" }
            ];
        }
        // Problem 46 - Pair Sum Finder (Two Sum)
        else if (currentProbId === '46') {
            videos = [
                { title: "Two Sum — LeetCode 1 — NeetCode", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA", reason: "THE classic: HashMap one-pass — check complement, then store" },
                { title: "Two Sum — Every Approach Explained", url: "https://www.youtube.com/watch?v=Ivyh3V4QolA", reason: "Brute force vs sort+two-pointer vs HashMap comparison" }
            ];
        }
        // Problem 47 - Happy Number Cycle
        else if (currentProbId === '47') {
            videos = [
                { title: "Happy Number — LeetCode 202 — NeetCode", url: "https://www.youtube.com/watch?v=ljz85bxOYJ0", reason: "HashSet cycle detection: sum of digit squares until 1 or loop" },
                { title: "Happy Number — Floyd's Cycle Detection", url: "https://www.youtube.com/watch?v=gW3P9tcNjx4", reason: "Alternative O(1) space approach using slow/fast pointers" }
            ];
        }
        // Problem 48 - Nearby Duplicate Finder
        else if (currentProbId === '48') {
            videos = [
                { title: "Contains Duplicate II — LeetCode 219 — NeetCode", url: "https://www.youtube.com/watch?v=ypn0aZ0nrL4", reason: "Sliding window HashSet of size k: check before insert" },
                { title: "Sliding Window Set Pattern", url: "https://www.youtube.com/watch?v=MK-NZ4hN7rs", reason: "Foundation for fixed-size window with set membership checks" }
            ];
        }
        // Problem 49 - Longest Run of Consecutive
        else if (currentProbId === '49') {
            videos = [
                { title: "Longest Consecutive Sequence — LeetCode 128 — NeetCode", url: "https://www.youtube.com/watch?v=P6RZZMu_maU", reason: "HashSet: only start counting from sequence starts (n-1 not in set)" },
                { title: "Longest Consecutive — Why O(n)?", url: "https://www.youtube.com/watch?v=rc2QdQ7U78I", reason: "Proof that each element is visited at most twice" }
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
        if (state.line === index || (state.lines && state.lines.includes(index))) {
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
        const side = edgeEl.getAttribute('data-side');

        if (state.currentTask && from === state.nodeId && side === state.currentTask) {
            // Processing L or R subtree: highlight the edge going DOWN to that child
            edgeEl.classList.add('edge-active');
        } else if (!state.currentTask && to === state.nodeId) {
            // Entering a node or at a base case: highlight the edge coming INTO this node
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
    if (isArrayProblem()) {
        const engine = document.querySelector('.render-engine');
        
        let arrayContainer = document.getElementById('arrayContainer');
        if (!arrayContainer) {
            arrayContainer = document.createElement('div');
            arrayContainer.id = 'arrayContainer';
            arrayContainer.className = 'array-container';
            engine.appendChild(arrayContainer);
        }
        
        // ── Change-detection: find which array cells mutated since last step ──
        const curArr = state.nums1 || [];
        const changedIndices = new Set();
        if (prevArraySnapshot && prevArraySnapshot.probId === currentProbId) {
            const prev = prevArraySnapshot.arr;
            for (let ci = 0; ci < curArr.length; ci++) {
                if (ci < prev.length && prev[ci] !== curArr[ci]) changedIndices.add(ci);
            }
        }
        // Save snapshot AFTER computing diff (will be used on next render)
        prevArraySnapshot = { probId: currentProbId, arr: [...curArr] };
        
        // Problem 3: Merge Sorted Array (two arrays, three pointers: i, j, k)
        if (currentProbId === '3' && state.nums1 && state.nums2) {
            const iPtr = state.pointers?.i ?? -1;
            const jPtr = state.pointers?.j ?? -1;
            const kPtr = state.pointers?.k ?? -1;
            const mVal = state.m ?? 0;
            const isBattle = state.isComparison || false;
            
            const itemCount = state.nums1.length;
            const denseClass = itemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-dual${denseClass}">`; 
            html += `
                <div class="array-section">
                    <div class="array-label">nums1 (merge in-place, slots ${mVal}–${state.nums1.length - 1} are buffer)</div>
                    <div class="array-visualization">
            `;
            
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                
                // Buffer slots: originally empty (index >= m) and still holding 0
                if (val === 0 && idx >= mVal) {
                    classes += ' empty';
                }
                
                // Battle highlight: yellow glow on the two cells being compared
                if (isBattle && (idx === iPtr || idx === kPtr)) {
                    // Only highlight i's cell in nums1 during comparison
                }
                if (isBattle && idx === iPtr) {
                    classes += ' merge-battle';
                }
                
                // Handle overlapping pointers (i and k on same cell)
                if (idx === iPtr && idx === kPtr) {
                    classes += ' pointer-1 pointer-k';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">i</div><div class="pointer-label p-green pair-right">k</div></div>`;
                } else if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                } else if (idx === kPtr) {
                    classes += ' pointer-k';
                    pointerLabels = `<div class="pointer-label p-green">k</div>`;
                }
                
                html += `
                    <div class="${classes}">
                        ${val}
                        ${pointerLabels}
                        <div class="array-index">${idx}</div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
            
            // Merge info bridge — explanation between the two arrays
            const mergeInfo = state.mergeInfo || '';
            if (mergeInfo) {
                const bridgeClass = isBattle ? ' merge-info-battle' : (state.isComplete ? ' merge-info-done' : '');
                html += `
                    <div class="merge-info-bridge${bridgeClass}">
                        <span class="merge-info-text">${mergeInfo}</span>
                    </div>
                `;
            }
            
            html += `
                <div class="array-section">
                    <div class="array-label">nums2 (source array)</div>
                    <div class="array-visualization">
            `;
            
            state.nums2.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabel = '';
                
                // Battle highlight on j's cell
                if (isBattle && idx === jPtr) {
                    classes += ' merge-battle';
                }
                
                if (idx === jPtr) {
                    classes += ' pointer-2';
                    pointerLabel = `<div class="pointer-label p2">j</div>`;
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
                        <div class="pointer-detail-label">i (nums1 read)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : 'Done'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">j (nums2 read)</div>
                        <div class="pointer-detail-value p2">${jPtr >= 0 ? `idx ${jPtr}` : 'Done'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">k (write target)</div>
                        <div class="pointer-detail-value p-green">${kPtr >= 0 ? `idx ${kPtr}` : 'Done'}</div>
                    </div>
                </div>
            `;
            html += `</div>`; // close array-inner
            
            arrayContainer.innerHTML = html;
            
            // ── Merge Ghost Float ──
            // When a value wins and gets placed, spawn a ghost copy that floats from source → target
            if (state.mergeSource !== undefined && state.targetIdx !== undefined) {
                requestAnimationFrame(() => {
                    // Remove any existing ghost
                    const oldGhost = arrayContainer.querySelector('.merge-ghost');
                    if (oldGhost) oldGhost.remove();
                    
                    const sections = arrayContainer.querySelectorAll('.array-visualization');
                    const nums1Section = sections[0]; // first array-visualization = nums1
                    const nums2Section = sections[1]; // second array-visualization = nums2
                    if (!nums1Section || !nums2Section) return;
                    
                    // Find the source cell
                    let sourceCell;
                    if (state.mergeSource === 'i') {
                        // Source is from nums1 — sourceIdx refers to nums1
                        const nums1Items = nums1Section.querySelectorAll('.array-item');
                        sourceCell = nums1Items[state.sourceIdx];
                    } else {
                        // Source is from nums2 — sourceIdx refers to nums2
                        const nums2Items = nums2Section.querySelectorAll('.array-item');
                        sourceCell = nums2Items[state.sourceIdx];
                    }
                    
                    // Find the target cell (always in nums1)
                    const nums1Items = nums1Section.querySelectorAll('.array-item');
                    const targetCell = nums1Items[state.targetIdx];
                    
                    if (!sourceCell || !targetCell) return;
                    
                    // Get bounding rects relative to arrayContainer
                    const containerRect = arrayContainer.getBoundingClientRect();
                    const srcRect = sourceCell.getBoundingClientRect();
                    const tgtRect = targetCell.getBoundingClientRect();
                    
                    // Compute ghost start position (center of source cell, offset to container)
                    const startX = srcRect.left - containerRect.left + (srcRect.width / 2) - 24;
                    const startY = srcRect.top - containerRect.top + (srcRect.height / 2) - 24;
                    
                    // Compute delta to target center
                    const dx = (tgtRect.left + tgtRect.width / 2) - (srcRect.left + srcRect.width / 2);
                    const dy = (tgtRect.top + tgtRect.height / 2) - (srcRect.top + srcRect.height / 2);
                    
                    // Adjust speed based on auto-play — if fast, shorten the animation
                    const speed = parseFloat(document.querySelector('.speed-btn.active')?.dataset?.speed || '1');
                    const baseDuration = 0.55;
                    const duration = Math.max(0.25, baseDuration / Math.max(speed, 1));
                    
                    // Create ghost element
                    const ghost = document.createElement('div');
                    ghost.className = 'merge-ghost';
                    ghost.textContent = state.placedVal;
                    ghost.style.left = startX + 'px';
                    ghost.style.top = startY + 'px';
                    ghost.style.setProperty('--dx', dx + 'px');
                    ghost.style.setProperty('--dy', dy + 'px');
                    ghost.style.setProperty('--ghost-duration', duration + 's');
                    
                    arrayContainer.appendChild(ghost);
                    
                    // Clean up after animation completes
                    ghost.addEventListener('animationend', () => ghost.remove(), { once: true });
                    // Fallback cleanup
                    setTimeout(() => { if (ghost.parentNode) ghost.remove(); }, (duration + 0.2) * 1000);
                });
            }
        }
        
        // Problems 4, 5 & 6: Single-array two-pointer (Remove Element / Remove Duplicates / Trim Excess)
        if (['4','5','6'].includes(currentProbId) && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const kPtr = state.pointers?.k ?? -1;
            const meta = state.arrayMeta || {};
            const kVal = meta.k ?? kPtr;
            const isComplete = state.isComplete || false;
            const isP4 = currentProbId === '4';
            const isSkip = isP4 && state.isSkip;
            const overwrittenVal = isP4 ? (meta.overwrittenVal ?? null) : null;
            
            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            
            // Problem title context
            if (currentProbId === '4') {
                html += `<div class="array-label">nums — remove all instances of val = ${meta.val ?? '?'}</div>`;
            } else if (currentProbId === '6') {
                html += `<div class="array-label">nums — allow at most 2 of each value</div>`;
            } else {
                html += `<div class="array-label">nums — remove duplicates in-place</div>`;
            }
            
            html += `<div class="array-visualization">`;
            
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                let ghostOverlay = '';
                
                // Highlight the "kept" region (indices < k) — Problem 4 gets green, others get orange
                if (isComplete && idx < kVal) {
                    classes += isP4 ? ' re4-kept' : ' pointer-merge';
                }
                
                // Active pointers — Problem 4 uses distinct shapes
                if (idx === iPtr && idx === kPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">i</div><div class="pointer-label p2 pair-right">k</div></div>`;
                } else if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                } else if (idx === kPtr) {
                    classes += ' pointer-2';
                    if (isP4 && isSkip) {
                        pointerLabels = `<div class="pointer-label p2 re4-k-frozen">k</div>`;
                    } else {
                        pointerLabels = `<div class="pointer-label p2">k</div>`;
                    }
                }
                
                // Dim cells beyond k when complete — Problem 4 gets ghost zone
                if (isComplete && idx >= kVal) {
                    classes += isP4 ? ' re4-ghost' : ' empty';
                }

                // Problem 4: on skip, the k cell itself shows a "held" pulse
                if (isP4 && isSkip && idx === kPtr) {
                    classes += ' re4-cell-held';
                }

                // Problem 4: scissors cut border on the first ghost cell
                if (isP4 && isComplete && idx === kVal && kVal < state.nums1.length) {
                    classes += ' re4-cut';
                }
                
                // Problem 4: ghost overlay for overwritten value
                if (isP4 && overwrittenVal !== null && changedIndices.has(idx)) {
                    ghostOverlay = `<div class="re4-old-val">${overwrittenVal}</div>`;
                }
                
                html += `
                    <div class="${classes}">
                        ${val}
                        ${ghostOverlay}
                        ${pointerLabels}
                        <div class="array-index">${idx}</div>
                    </div>
                `;
            });
            
            html += `</div>`; // close array-visualization

            // Problem 4: "New Length" label on completion
            if (isP4 && isComplete) {
                if (kVal > 0) {
                    html += `<div class="re4-newlen-label">New Length: <strong>k = ${kVal}</strong> — grader only checks indices 0…${kVal - 1}</div>`;
                } else {
                    html += `<div class="re4-newlen-label">New Length: <strong>k = 0</strong> — every element removed, nothing to check</div>`;
                }
            }
            
            // Decision bridge: explain keep vs skip
            if (iPtr >= 0 && iPtr < state.nums1.length && !isComplete) {
                const readVal = state.nums1[iPtr];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (currentProbId === '4') {
                    if (readVal !== (meta.val ?? -1)) {
                        html += `<span style="color:var(--accent-blue);font-weight:600">nums[i=${iPtr}]=${readVal}</span>`;
                        html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">≠ val(${meta.val})</span>`;
                        html += `<span style="color:var(--accent-green)">✓ KEEP → write to nums[k=${kPtr}]</span>`;
                    } else {
                        html += `<span style="color:var(--accent-blue);font-weight:600">nums[i=${iPtr}]=${readVal}</span>`;
                        html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">== val(${meta.val})</span>`;
                        html += `<span style="color:var(--text-muted)">→ SKIP — k stays at ${kPtr}</span>`;
                    }
                } else if (currentProbId === '5') {
                    const compareIdx = kPtr > 0 ? kPtr - 1 : 0;
                    const compareVal = state.nums1[compareIdx];
                    if (readVal !== compareVal || kPtr === 0) {
                        html += `<span style="color:var(--accent-blue);font-weight:600">nums[${iPtr}]=${readVal}</span>`;
                        html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">≠ nums[k-1]=${compareVal}</span>`;
                        html += `<span style="color:var(--accent-green)">✓ NEW unique → write to nums[${kPtr}]</span>`;
                    } else {
                        html += `<span style="color:var(--accent-blue);font-weight:600">nums[${iPtr}]=${readVal}</span>`;
                        html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">== nums[k-1]=${compareVal}</span>`;
                        html += `<span style="color:var(--text-muted)">→ duplicate! SKIP</span>`;
                    }
                } else { // Problem 6
                    const compareIdx = kPtr >= 2 ? kPtr - 2 : 0;
                    const compareVal = state.nums1[compareIdx];
                    if (kPtr < 2 || readVal !== compareVal) {
                        html += `<span style="color:var(--accent-blue);font-weight:600">nums[${iPtr}]=${readVal}</span>`;
                        html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">≠ nums[k-2]=${compareVal}</span>`;
                        html += `<span style="color:var(--accent-green)">✓ ≤ 2 copies → KEEP at nums[${kPtr}]</span>`;
                    } else {
                        html += `<span style="color:var(--accent-blue);font-weight:600">nums[${iPtr}]=${readVal}</span>`;
                        html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">== nums[k-2]=${compareVal}</span>`;
                        html += `<span style="color:var(--text-muted)">→ 3rd+ copy! SKIP</span>`;
                    }
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Done! Kept ${kVal} elements: [${state.nums1.slice(0, kVal)}]</span>`;
                html += `</div></div>`;
            }

            // Pointer info bar
            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (read pointer)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">k (write pointer)</div>
                        <div class="pointer-detail-value p2">idx ${kVal}</div>
                    </div>
                </div>
            `;
            
            html += `</div>`; // close array-inner
            arrayContainer.innerHTML = html;

            // ── Copy transport — slide the value box from i → k ──
            if (meta.copyFrom != null && meta.copyTo != null) {
                requestAnimationFrame(() => {
                    const oldGhost = arrayContainer.querySelector('.copy-ghost');
                    if (oldGhost) oldGhost.remove();

                    const vizSection = arrayContainer.querySelector('.array-visualization');
                    if (!vizSection) return;
                    const items = vizSection.querySelectorAll('.array-item');
                    const sourceCell = items[meta.copyFrom];
                    const targetCell = items[meta.copyTo];
                    if (!sourceCell || !targetCell) return;

                    const containerRect = arrayContainer.getBoundingClientRect();
                    const srcRect = sourceCell.getBoundingClientRect();
                    const tgtRect = targetCell.getBoundingClientRect();

                    const startX = srcRect.left - containerRect.left + (srcRect.width / 2) - 24;
                    const startY = srcRect.top - containerRect.top + (srcRect.height / 2) - 24;
                    const dx = (tgtRect.left + tgtRect.width / 2) - (srcRect.left + srcRect.width / 2);
                    const dy = (tgtRect.top + tgtRect.height / 2) - (srcRect.top + srcRect.height / 2);

                    const speed = parseFloat(document.querySelector('.speed-btn.active')?.dataset?.speed || '1');
                    const duration = Math.max(0.25, 0.55 / Math.max(speed, 1));

                    const ghost = document.createElement('div');
                    ghost.className = 'copy-ghost';
                    ghost.textContent = state.nums1[meta.copyTo]; // the value that was placed
                    ghost.style.left = startX + 'px';
                    ghost.style.top = startY + 'px';
                    ghost.style.setProperty('--dx', dx + 'px');
                    ghost.style.setProperty('--dy', dy + 'px');
                    ghost.style.setProperty('--ghost-duration', duration + 's');

                    arrayContainer.appendChild(ghost);
                    ghost.addEventListener('animationend', () => ghost.remove(), { once: true });
                    setTimeout(() => { if (ghost.parentNode) ghost.remove(); }, (duration + 0.3) * 1000);
                });
            }
        }
        
        // Problem 7: Dominant Element (Boyer-Moore Voting) — Battle Arena
        if (currentProbId === '7' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const candidate = meta.candidate;
            const count = meta.count ?? 0;
            const isComplete = state.isComplete || false;
            const battleType = meta.battleType;       // 'coronation' | 'reinforce' | 'clash' | null
            const challengerVal = meta.challengerVal;
            const prevCount = meta.prevCount ?? 0;
            
            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">nums — Battle Arena: find the element that survives</div>`;
            
            // ── Champion Zone (candidate stack) ──
            html += `<div class="bm-arena">`;
            html += `<div class="bm-champion-zone">`;
            html += `<div class="bm-champion-title">${isComplete ? 'Victor' : 'Current Champion'}</div>`;
            html += `<div class="bm-stack-container">`;
            if (count > 0 && candidate != null) {
                // Build the physical stack of blocks
                const displayCount = Math.min(count, 8); // cap visual height
                for (let s = 0; s < displayCount; s++) {
                    const isTop = s === displayCount - 1;
                    html += `<div class="bm-stack-block${isComplete ? ' bm-victor' : ''}${isTop ? ' bm-stack-top' : ''}">${candidate}</div>`;
                }
                if (count > 8) {
                    html += `<div class="bm-stack-overflow">+${count - 8} more</div>`;
                }
            } else {
                html += `<div class="bm-throne-empty">Empty Throne</div>`;
            }
            html += `</div>`; // close stack-container
            html += `<div class="bm-count-label">Strength: <strong>${count}</strong></div>`;
            html += `</div>`; // close champion-zone
            html += `</div>`; // close arena
            
            // ── Array row ──
            html += `<div class="array-visualization">`;
            
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                
                // Color coding based on battle role
                if (isComplete && val === candidate) {
                    classes += ' bm-victor-cell';
                } else if (idx === iPtr && !isComplete) {
                    if (val === candidate) {
                        classes += ' bm-friendly';  // reinforcement — green
                    } else {
                        classes += ' bm-enemy';     // attacker — red
                    }
                }
                
                if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">challenger</div>`;
                }
                
                html += `
                    <div class="${classes}">
                        ${val}
                        ${pointerLabels}
                        <div class="array-index">${idx}</div>
                    </div>
                `;
            });
            
            html += `</div>`;

            // ── Battle bridge: explain what happened ──
            if (iPtr >= 0 && iPtr < state.nums1.length && !isComplete) {
                const val = state.nums1[iPtr];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (battleType === 'coronation') {
                    html += `<span style="color:var(--accent-red);font-weight:600">Throne is empty!</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                    html += `<span style="color:var(--bm-gold);font-weight:700">${candidate} takes the crown</span>`;
                } else if (battleType === 'reinforce') {
                    html += `<span style="color:var(--accent-green);font-weight:600">${val} == Champion ${candidate}</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">Reinforcement! Strength ${prevCount} → ${count}</span>`;
                } else if (battleType === 'clash') {
                    html += `<span style="color:var(--accent-red);font-weight:600">${val} ≠ Champion ${candidate}</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:700">Clash! Both fall — Strength ${prevCount} → ${count}</span>`;
                    if (count === 0) {
                        html += `<span style="color:var(--accent-red);margin-left:6px;font-weight:600">Throne empty!</span>`;
                    }
                } else {
                    html += `<span style="color:var(--text-muted)">Scanning nums[${iPtr}] = ${val}…</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--bm-gold);font-weight:700">${candidate} is the dominant element — survived the battle with strength ${count}</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">Challenger (i)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">Champion</div>
                        <div class="pointer-detail-value" style="color:var(--bm-gold);border-color:var(--bm-gold)">${candidate ?? '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">Strength</div>
                        <div class="pointer-detail-value p2">${count}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;

            // ── Battle Animations ──
            if (battleType && iPtr >= 0) {
                requestAnimationFrame(() => {
                    // Remove any existing battle ghost
                    const oldGhost = arrayContainer.querySelector('.bm-battle-ghost');
                    if (oldGhost) oldGhost.remove();

                    const vizSection = arrayContainer.querySelector('.array-visualization');
                    const stackContainer = arrayContainer.querySelector('.bm-stack-container');
                    if (!vizSection || !stackContainer) return;

                    const items = vizSection.querySelectorAll('.array-item');
                    const sourceCell = items[iPtr];
                    if (!sourceCell) return;

                    const containerRect = arrayContainer.getBoundingClientRect();
                    const srcRect = sourceCell.getBoundingClientRect();

                    // Target: top of the stack (or the empty throne)
                    const topBlock = stackContainer.querySelector('.bm-stack-top') || stackContainer.querySelector('.bm-throne-empty');
                    if (!topBlock) return;
                    const tgtRect = topBlock.getBoundingClientRect();

                    const startX = srcRect.left - containerRect.left + (srcRect.width / 2) - 22;
                    const startY = srcRect.top - containerRect.top + (srcRect.height / 2) - 22;
                    const dx = (tgtRect.left + tgtRect.width / 2) - (srcRect.left + srcRect.width / 2);
                    const dy = (tgtRect.top + tgtRect.height / 2) - (srcRect.top + srcRect.height / 2);

                    const speed = parseFloat(document.querySelector('.speed-btn.active')?.dataset?.speed || '1');
                    const duration = Math.max(0.2, 0.5 / Math.max(speed, 1));

                    const ghost = document.createElement('div');
                    ghost.className = 'bm-battle-ghost';
                    ghost.textContent = challengerVal;
                    ghost.style.left = startX + 'px';
                    ghost.style.top = startY + 'px';
                    ghost.style.setProperty('--dx', dx + 'px');
                    ghost.style.setProperty('--dy', dy + 'px');
                    ghost.style.setProperty('--ghost-duration', duration + 's');

                    if (battleType === 'reinforce') {
                        ghost.classList.add('bm-ghost-reinforce');
                    } else if (battleType === 'clash') {
                        ghost.classList.add('bm-ghost-clash');
                    } else if (battleType === 'coronation') {
                        ghost.classList.add('bm-ghost-coronation');
                    }

                    arrayContainer.appendChild(ghost);
                    ghost.addEventListener('animationend', () => ghost.remove(), { once: true });
                    setTimeout(() => { if (ghost.parentNode) ghost.remove(); }, (duration + 0.3) * 1000);
                });
            }
        }
        
        // Problem 8: Cycle Array Elements (Reverse Three Times) — clean rotation visual
        if (currentProbId === '8' && state.nums1) {
            const lo = state.pointers?.lo ?? -1;
            const hi = state.pointers?.hi ?? -1;
            const meta = state.arrayMeta || {};
            const isComplete = state.isComplete || false;
            const kVal = meta.k ?? 0;
            const nVal = meta.n ?? state.nums1.length;
            const phase = meta.phase || '';
            const posMap = meta.posMap || [];
            const splitAt = meta.splitAt ?? (nVal - kVal);
            const target = meta.target || [];
            const pc = meta.phasesCompleted ?? 0;
            
            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner cy-compact${sDenseClass}">`;
            html += `<div class="array-label">nums — rotate right by k = ${kVal}`;
            if (kVal > 0) {
                html += `<button class="cy-insight-btn" onclick="openInsightModal()" title="Why does this work?">i</button>`;
            }
            html += `</div>`;

            // ── Blueprint stepper: shows the 3-step trick ──
            if (!isComplete && kVal > 0) {
                html += `<div class="cy-blueprint">`;
                html += `<div class="cy-bp-step${phase === 'full' ? ' cy-bp-active' : ''}${pc >= 1 ? ' cy-bp-done' : ''}">`;
                html += `<span class="cy-bp-num">1</span><span class="cy-bp-text">Reverse All</span>`;
                html += `</div>`;
                html += `<span class="cy-bp-arrow">→</span>`;
                html += `<div class="cy-bp-step${phase === 'left' ? ' cy-bp-active' : ''}${pc >= 2 ? ' cy-bp-done' : ''}">`;
                html += `<span class="cy-bp-num">2</span><span class="cy-bp-text">Fix Front [0..${kVal - 1}]</span>`;
                html += `</div>`;
                html += `<span class="cy-bp-arrow">→</span>`;
                html += `<div class="cy-bp-step${phase === 'right' ? ' cy-bp-active' : ''}${pc >= 3 ? ' cy-bp-done' : ''}">`;
                html += `<span class="cy-bp-num">3</span><span class="cy-bp-text">Fix Back [${kVal}..${nVal - 1}]</span>`;
                html += `</div>`;
                html += `</div>`;
            }

            // ── "Why" line — the key insight per phase ──
            if (!isComplete && kVal > 0) {
                let whyText = '';
                if (!phase || phase === '') {
                    whyText = `The last <span style="color:var(--accent-orange)">k = ${kVal} elements (orange)</span> need to move to the front. The remaining <span style="color:var(--accent-blue)">${nVal - kVal} elements (blue)</span> shift to the back.`;
                } else if (phase === 'full') {
                    whyText = `Reversing [0..${nVal - 1}] — the <span style="color:var(--accent-orange)">orange elements</span> land at the front, but everything is backwards.`;
                } else if (phase === 'left') {
                    whyText = `The <span style="color:var(--accent-orange)">orange section</span> landed backwards. Reverse [0..${kVal - 1}] to fix their order.`;
                } else if (phase === 'right') {
                    whyText = `The <span style="color:var(--accent-blue)">blue section</span> is still backwards. Reverse [${kVal}..${nVal - 1}] to fix their order.`;
                }
                if (whyText) {
                    html += `<div class="cy-why">${whyText}</div>`;
                }
            }
            
            // ── Main array with segment coloring ──
            html += `<div class="array-visualization">`;
            
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                
                const origIdx = posMap[idx];
                if (origIdx != null && !isComplete) {
                    if (origIdx < splitAt) {
                        classes += ' cy-stay-back';
                    } else {
                        classes += ' cy-move-front';
                    }
                }
                
                if (isComplete) classes += ' pointer-merge';
                
                // Dim out-of-scope cells
                if (!isComplete && phase) {
                    let inScope = false;
                    if (phase === 'full') inScope = true;
                    else if (phase === 'left') inScope = idx < kVal;
                    else if (phase === 'right') inScope = idx >= kVal;
                    if (!inScope) classes += ' cy-out-of-scope';
                }
                
                if (idx === lo && idx === hi) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">lo</div><div class="pointer-label p2 pair-right">hi</div></div>`;
                } else if (idx === lo) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">lo</div>`;
                } else if (idx === hi) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">hi</div>`;
                }
                
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            
            html += `</div>`;

            // ── Ghost target row ──
            if (target.length > 0 && !isComplete) {
                html += `<div class="cy-ghost-target">`;
                html += `<div class="cy-ghost-label">Goal</div>`;
                html += `<div class="array-visualization cy-ghost-cells">`;
                target.forEach((val, idx) => {
                    const origIdx = idx < kVal ? (splitAt + idx) : (idx - kVal);
                    let segClass = origIdx < splitAt ? 'cy-ghost-blue' : 'cy-ghost-orange';
                    const matched = state.nums1[idx] === val;
                    html += `<div class="array-item cy-ghost-cell ${segClass}${matched ? ' cy-ghost-matched' : ''}">${val}<div class="array-index">${idx}</div></div>`;
                });
                html += `</div></div>`;
            }

            // ── Completion bridge ──
            if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Rotated right by k=${kVal}: [${state.nums1}]</span>`;
                html += `</div></div>`;
            }

            // ── Pointer info ──
            const phaseIntent = phase === 'full' ? 'Reverse All' : phase === 'left' ? 'Fix Front' : phase === 'right' ? 'Fix Back' : '—';
            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">k</div>
                        <div class="pointer-detail-value" style="color:var(--accent-purple);border-color:var(--accent-purple)">${kVal}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">n</div>
                        <div class="pointer-detail-value" style="color:var(--text-muted);border-color:var(--border-color)">${nVal}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">lo</div>
                        <div class="pointer-detail-value p1">${lo >= 0 ? `idx ${lo}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">hi</div>
                        <div class="pointer-detail-value p2">${hi >= 0 ? `idx ${hi}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">step</div>
                        <div class="pointer-detail-value" style="color:var(--accent-purple);border-color:var(--accent-purple)">${phaseIntent}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;

            // ── Swap fly animation — two ghosts cross paths ──
            if (state.swapIndices && state.swapVals) {
                requestAnimationFrame(() => {
                    const arrayViz = arrayContainer.querySelector('.array-visualization');
                    if (!arrayViz) return;
                    const cells = arrayViz.querySelectorAll('.array-item');
                    const cellA = cells[state.swapIndices[0]];
                    const cellB = cells[state.swapIndices[1]];
                    if (!cellA || !cellB) return;

                    // Remove previous swap ghosts
                    arrayContainer.querySelectorAll('.cy-swap-ghost').forEach(g => g.remove());

                    const containerRect = arrayContainer.getBoundingClientRect();
                    const rectA = cellA.getBoundingClientRect();
                    const rectB = cellB.getBoundingClientRect();

                    const speed = parseFloat(document.querySelector('.speed-btn.active')?.dataset?.speed || '1');
                    const baseDuration = 0.5;
                    const duration = Math.max(0.2, baseDuration / Math.max(speed, 1));

                    function makeSwapGhost(val, fromRect, toRect, colorVar, arcDir) {
                        const ghost = document.createElement('div');
                        ghost.className = 'cy-swap-ghost';
                        ghost.textContent = val;
                        ghost.style.left = (fromRect.left - containerRect.left + fromRect.width / 2 - 20) + 'px';
                        ghost.style.top = (fromRect.top - containerRect.top + fromRect.height / 2 - 20) + 'px';
                        const dx = (toRect.left + toRect.width / 2) - (fromRect.left + fromRect.width / 2);
                        ghost.style.setProperty('--dx', dx + 'px');
                        ghost.style.setProperty('--arc', arcDir + 'px');
                        ghost.style.setProperty('--swap-duration', duration + 's');
                        ghost.style.borderColor = `var(${colorVar})`;
                        ghost.style.color = `var(${colorVar})`;
                        ghost.style.boxShadow = `0 0 12px color-mix(in srgb, var(${colorVar}) 50%, transparent)`;
                        arrayContainer.appendChild(ghost);
                        ghost.addEventListener('animationend', () => ghost.remove(), { once: true });
                        setTimeout(() => { if (ghost.parentNode) ghost.remove(); }, (duration + 0.3) * 1000);
                    }

                    // Determine color based on which segment each element belongs to
                    const origA = posMap[state.swapIndices[0]];
                    const colorA = (origA != null && origA >= splitAt) ? '--accent-orange' : '--accent-blue';
                    const origB = posMap[state.swapIndices[1]];
                    const colorB = (origB != null && origB >= splitAt) ? '--accent-orange' : '--accent-blue';

                    // Ghost A arcs up, Ghost B arcs down — they cross in the middle
                    makeSwapGhost(state.swapVals[0], rectA, rectB, colorA, -30);
                    makeSwapGhost(state.swapVals[1], rectB, rectA, colorB, 30);
                });
            }
        }
        
        // Problem 9: Best Moment to Trade (single pass) — price chart + buy/sell visual
        if (currentProbId === '9' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const minPrice = meta.minPrice;
            const minPriceIdx = meta.minPriceIdx ?? -1;
            const maxProfit = meta.maxProfit ?? 0;
            const bestBuyIdx = meta.bestBuyIdx ?? -1;
            const bestSellIdx = meta.bestSellIdx ?? -1;
            const isComplete = state.isComplete || false;
            const isNewBest = state.isNewBest || false;
            const prevMaxProfit = state.prevMaxProfit ?? 0;
            const prevBuyIdx = state.prevBuyIdx ?? -1;
            const prevSellIdx = state.prevSellIdx ?? -1;
            const currentProfit = state.currentProfit ?? 0;
            const isComparison = state.isComparison || false;
            const prices = state.nums1;
            const maxP = Math.max(...prices, 1);

            const sItemCount = prices.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass} stock-inner">`;
            html += `<div class="array-label">prices — find max profit (buy once, sell once)</div>`;

            // ── Price chart with bars ──
            html += `<div class="array-visualization price-chart-viz" id="stock-chart-viz">`;
            prices.forEach((val, idx) => {
                let classes = 'array-item price-bar';
                let pointerLabels = '';
                const barPct = (val / maxP) * 100;
                const minPricePct = (minPrice / maxP) * 100;

                // Color coding
                if (isComplete && idx === bestBuyIdx) classes += ' price-buy';
                if (isComplete && idx === bestSellIdx) classes += ' price-sell';
                if (!isComplete && val === minPrice && idx <= iPtr && idx === minPriceIdx) classes += ' price-low';
                if (idx === iPtr && !isComplete) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }

                // ── Feature 2: Profit Gap — green block from minPrice floor to bar top ──
                let profitBlock = '';
                const showProfitGap = (
                    (isComparison && idx === iPtr && !isComplete && val > minPrice) ||
                    (isComplete && idx === bestSellIdx && maxProfit > 0)
                );
                if (showProfitGap && val > minPrice) {
                    const gapProfit = isComplete ? maxProfit : (val - minPrice);
                    const gapTopPct = barPct;
                    const gapBottomPct = minPricePct;
                    const gapClass = isNewBest ? 'profit-gap-block profit-gap-best' : 'profit-gap-block';
                    profitBlock = `<div class="${gapClass}" style="--gap-bottom:${gapBottomPct}%;--gap-top:${gapTopPct}%"><span class="profit-gap-label">+$${gapProfit}</span></div>`;
                }

                // ── Feature 3: Ghost previous record holder ──
                let ghostOutline = '';
                if (isNewBest && prevSellIdx >= 0 && prevMaxProfit > 0 && idx === prevSellIdx) {
                    const ghostPct = ((prices[prevSellIdx]) / maxP) * 100;
                    const ghostFloorPct = (prices[prevBuyIdx] / maxP) * 100;
                    ghostOutline = `<div class="profit-ghost-outline" style="--ghost-bottom:${ghostFloorPct}%;--ghost-top:${ghostPct}%"><span class="profit-ghost-label">$${prevMaxProfit}</span></div>`;
                }

                html += `<div class="${classes}" style="--bar-h:${barPct}%" data-idx="${idx}">`;
                html += `<span class="price-val">$${val}</span>`;
                html += profitBlock;
                html += ghostOutline;
                html += `${pointerLabels}<div class="array-index">day ${idx}</div></div>`;
            });
            html += `</div>`;

            // MinPrice floor line indicator
            if (!isComplete && minPrice != null) {
                html += `<div class="price-floor-line"><span style="color:var(--accent-green);font-size:11px;font-weight:600">minPrice floor = $${minPrice}</span></div>`;
            }

            // ── Bridge: profit calculation with Feature 1 state-sync logic ──
            if (iPtr >= 0 && iPtr < prices.length && !isComplete && isComparison) {
                const price = prices[iPtr];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (price < minPrice || (price === minPrice && iPtr > 0 && iPtr === minPriceIdx)) {
                    html += `<span style="color:var(--accent-blue);font-weight:600">$${price}</span>`;
                    html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">< minPrice $${meta.minPrice}</span>`;
                    html += `<span style="color:var(--text-muted)">→ new low! Buy here</span>`;
                } else if (isNewBest) {
                    // Feature 1: Explicit evaluation frame
                    html += `<span style="color:var(--accent-green);font-weight:600">sell $${price}</span>`;
                    html += `<span class="sum-bridge-op">−</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">buy $${minPrice}</span>`;
                    html += `<span class="sum-bridge-eq">=</span>`;
                    html += `<span style="font-weight:700;color:var(--accent-green)">$${currentProfit} profit</span>`;
                    html += `<span style="color:var(--text-secondary);margin:0 6px">→</span>`;
                    html += `<span style="font-weight:700;color:var(--accent-green)">$${currentProfit} > $${prevMaxProfit}? Yes!</span>`;
                    html += `<span style="color:var(--text-secondary);margin-left:6px">Updating Max Profit</span>`;
                } else {
                    const profit = price - minPrice;
                    html += `<span style="color:var(--accent-green);font-weight:600">sell $${price}</span>`;
                    html += `<span class="sum-bridge-op">−</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">buy $${minPrice}</span>`;
                    html += `<span class="sum-bridge-eq">=</span>`;
                    html += `<span style="font-weight:700;color:var(--text-secondary)">$${profit} profit</span>`;
                    if (profit === maxProfit && profit > 0) {
                        html += `<span style="color:var(--text-muted);margin-left:8px">= best $${maxProfit}</span>`;
                    } else {
                        html += `<span style="color:var(--text-muted);margin-left:8px">≤ best $${maxProfit}</span>`;
                    }
                }
                html += `</div></div>`;
            } else if (iPtr >= 0 && iPtr < prices.length && !isComplete && !isComparison) {
                // Scanning step — show what we're looking at
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted)">Scanning day ${iPtr}: prices[${iPtr}] = $${prices[iPtr]}</span>`;
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Buy at $${prices[bestBuyIdx] ?? minPrice} (day ${bestBuyIdx >= 0 ? bestBuyIdx : '?'}) → Sell at $${prices[bestSellIdx] ?? '?'} (day ${bestSellIdx >= 0 ? bestSellIdx : '?'}) = $${maxProfit} profit</span>`;
                html += `</div></div>`;
            }

            // ── Feature 1: maxProfit box with flash animation on update ──
            const mpFlashClass = isNewBest ? ' stock-mp-flash' : '';
            let mpContent;
            if (isNewBest) {
                // Show old value crossing out, then new value appearing
                mpContent = `<span class="stock-mp-old">$${prevMaxProfit}</span><span class="stock-mp-new">$${maxProfit}</span>`;
            } else {
                mpContent = `$${maxProfit}`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (scanner)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">minPrice</div>
                        <div class="pointer-detail-value p2">${minPrice != null ? '$' + minPrice : '—'}</div>
                    </div>
                    <div class="pointer-detail stock-mp-box${mpFlashClass}">
                        <div class="pointer-detail-label">maxProfit</div>
                        <div class="pointer-detail-value p-merge">${mpContent}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;

            // ── Feature 4: Trade arc — connect minPrice bar to scanner bar ──
            if (isComparison && !isComplete && iPtr >= 1 && minPriceIdx >= 0 && minPriceIdx < iPtr && prices[iPtr] >= minPrice) {
                const chartEl = arrayContainer.querySelector('#stock-chart-viz');
                const buyBar = chartEl?.querySelector(`[data-idx="${minPriceIdx}"]`);
                const sellBar = chartEl?.querySelector(`[data-idx="${iPtr}"]`);
                if (chartEl && buyBar && sellBar) {
                    requestAnimationFrame(() => {
                        const chartRect = chartEl.getBoundingClientRect();
                        const buyBarRect = buyBar.getBoundingClientRect();
                        const sellBarRect = sellBar.getBoundingClientRect();
                        // bar-h percentages (same formula used in --bar-h CSS var)
                        const buyPct = minPrice / maxP;
                        const sellPct = prices[iPtr] / maxP;
                        // x = center of each bar element
                        const x1 = buyBarRect.left + buyBarRect.width / 2 - chartRect.left;
                        const x2 = sellBarRect.left + sellBarRect.width / 2 - chartRect.left;
                        // y = top of the visible ::before bar
                        // ::before is position:absolute, bottom:0, height:var(--bar-h)
                        // so its top edge = container.bottom - container.height * barPct
                        const y1 = buyBarRect.bottom - (buyBarRect.height * buyPct) - chartRect.top;
                        const y2 = sellBarRect.bottom - (sellBarRect.height * sellPct) - chartRect.top;
                        const midX = (x1 + x2) / 2;
                        const arcHeight = Math.min(Math.abs(x2 - x1) * 0.12, 30) + 14;
                        const midY = Math.min(y1, y2) - arcHeight;
                        const arcPath = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.classList.add('trade-arc-svg');
                        svg.setAttribute('width', chartRect.width);
                        svg.setAttribute('height', chartRect.height);
                        svg.setAttribute('viewBox', `0 0 ${chartRect.width} ${chartRect.height}`);
                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', arcPath);
                        path.classList.add('trade-arc-path');
                        // arrowhead
                        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                        marker.setAttribute('id', 'trade-arrow');
                        marker.setAttribute('viewBox', '0 0 10 10');
                        marker.setAttribute('refX', '10');
                        marker.setAttribute('refY', '5');
                        marker.setAttribute('markerWidth', '6');
                        marker.setAttribute('markerHeight', '6');
                        marker.setAttribute('orient', 'auto-start-reverse');
                        const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        arrowPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
                        arrowPath.setAttribute('fill', 'rgba(16, 185, 129, 0.6)');
                        marker.appendChild(arrowPath);
                        defs.appendChild(marker);
                        svg.appendChild(defs);
                        path.setAttribute('marker-end', 'url(#trade-arrow)');
                        svg.appendChild(path);
                        // "buy → sell" label at midpoint
                        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        text.setAttribute('x', midX);
                        text.setAttribute('y', midY - 4);
                        text.classList.add('trade-arc-label');
                        text.textContent = 'buy → sell';
                        svg.appendChild(text);
                        chartEl.appendChild(svg);
                    });
                }
            }

            // ── Feature 3: Ghost outline on previous best sell bar (after DOM ready) ──
            if (isNewBest && prevSellIdx >= 0 && prevMaxProfit > 0) {
                const chartEl = arrayContainer.querySelector('#stock-chart-viz');
                const prevBar = chartEl?.querySelector(`[data-idx="${prevSellIdx}"]`);
                if (prevBar) {
                    prevBar.classList.add('stock-prev-best');
                }
            }
        }
        
        // Problem 10: Best Moments to Trade (greedy) — price chart with gain/loss coloring
        if (currentProbId === '10' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const totalProfit = meta.totalProfit ?? 0;
            const isComplete = state.isComplete || false;
            const isGain = state.isGain || false;
            const isComparison = state.isComparison || false;
            const isSkip = state.isSkip || false;
            const currentGain = state.currentGain ?? 0;
            const prevTotalProfit = state.prevTotalProfit ?? 0;
            const buyIdx = state.buyIdx ?? -1;
            const sellIdx = state.sellIdx ?? -1;
            const collectedGains = meta.collectedGains || [];
            const prices = state.nums1;
            const maxP = Math.max(...prices, 1);
            
            const sItemCount = prices.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-dual${sDenseClass} stock-inner">`;
            html += `<div class="array-label">prices — collect every consecutive gain (greedy: buy low, sell high, repeat)</div>`;

            // Build set of collected gain indices for highlighting
            const gainBuySet = new Set();
            const gainSellSet = new Set();
            collectedGains.forEach(g => { gainBuySet.add(g.buyIdx); gainSellSet.add(g.sellIdx); });

            // Price chart with gain-coloring
            html += `<div class="array-visualization price-chart-viz" id="trades-chart-viz">`;
            prices.forEach((val, idx) => {
                let classes = 'array-item price-bar';
                let pointerLabels = '';
                const barPct = (val / maxP) * 100;

                // Only color bars that have been scanned
                if (idx <= iPtr || isComplete) {
                    if (idx > 0 && val > prices[idx - 1]) classes += ' price-gain';
                    if (idx > 0 && val < prices[idx - 1]) classes += ' price-drop';
                }

                // Highlight completed trade pairs
                if (isComplete && gainSellSet.has(idx)) classes += ' price-sell';

                if (idx === iPtr && !isComplete) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }

                // Profit gap block on current gain
                let profitBlock = '';
                if (isGain && idx === iPtr && !isComplete) {
                    const prevPct = (prices[idx - 1] / maxP) * 100;
                    profitBlock = `<div class="profit-gap-block profit-gap-best" style="--gap-bottom:${prevPct}%;--gap-top:${barPct}%"><span class="profit-gap-label">+$${currentGain}</span></div>`;
                }
                // Show all collected gain blocks on completion
                if (isComplete) {
                    const match = collectedGains.find(g => g.sellIdx === idx);
                    if (match) {
                        const prevPct = (prices[match.buyIdx] / maxP) * 100;
                        profitBlock = `<div class="profit-gap-block profit-gap-best" style="--gap-bottom:${prevPct}%;--gap-top:${barPct}%"><span class="profit-gap-label">+$${match.gain}</span></div>`;
                    }
                }

                html += `<div class="${classes}" style="--bar-h:${barPct}%" data-idx="${idx}">`;
                html += `<span class="price-val">$${val}</span>`;
                html += profitBlock;
                html += `${pointerLabels}<div class="array-index">day ${idx}</div></div>`;
            });
            html += `</div>`;

            // Gain/loss indicator row — only show scanned days
            html += `<div class="array-visualization" style="margin-top:4px;">`;
            prices.forEach((val, idx) => {
                if (idx === 0) {
                    html += `<div class="array-item" style="opacity:0.3;font-size:10px">—</div>`;
                } else if (idx > iPtr && !isComplete) {
                    html += `<div class="array-item" style="opacity:0.15;font-size:10px">?</div>`;
                } else {
                    const diff = val - prices[idx - 1];
                    const color = diff > 0 ? 'var(--accent-green)' : diff < 0 ? 'var(--accent-red)' : 'var(--text-muted)';
                    const sign = diff > 0 ? '+' : '';
                    html += `<div class="array-item" style="color:${color};font-weight:${diff > 0 ? '700' : '400'};font-size:11px;border-color:${diff > 0 ? 'var(--accent-green)' : 'transparent'}">${sign}${diff}</div>`;
                }
            });
            html += `</div>`;

            // Bridge: gain calculation
            if (iPtr >= 1 && iPtr < prices.length && !isComplete && isComparison) {
                const price = prices[iPtr];
                const prev = prices[iPtr - 1];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (isGain) {
                    html += `<span style="color:var(--accent-green);font-weight:600">sell $${price}</span>`;
                    html += `<span class="sum-bridge-op">-</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">buy $${prev}</span>`;
                    html += `<span class="sum-bridge-eq">=</span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">+$${currentGain}</span>`;
                    html += `<span style="color:var(--text-muted);margin-left:6px">collect! total = $${totalProfit}</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);font-weight:600">$${price}</span>`;
                    html += `<span style="color:var(--accent-red);margin:0 6px">${price === prev ? '=' : '<'} $${prev}</span>`;
                    html += `<span style="color:var(--text-muted)">no gain, skip</span>`;
                }
                html += `</div></div>`;
            } else if (iPtr >= 1 && !isComplete && !isComparison) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted)">Scanning day ${iPtr}: prices[${iPtr}] = $${prices[iPtr]}</span>`;
                html += `</div></div>`;
            } else if (isComplete) {
                const gainCount = collectedGains.length;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">Collected ${gainCount} gain${gainCount !== 1 ? 's' : ''} = $${totalProfit} total profit</span>`;
                html += `</div></div>`;
            }

            // totalProfit box with flash animation on update
            const tpFlashClass = isGain ? ' stock-mp-flash' : '';
            let tpContent;
            if (isGain) {
                tpContent = `<span class="stock-mp-old">$${prevTotalProfit}</span><span class="stock-mp-new">$${totalProfit}</span>`;
            } else {
                tpContent = `$${totalProfit}`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (scanner)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail stock-mp-box${tpFlashClass}">
                        <div class="pointer-detail-label">totalProfit</div>
                        <div class="pointer-detail-value p-merge">${tpContent}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;

            // Trade arc — connect buy bar to sell bar on gain steps
            if (isGain && !isComplete && buyIdx >= 0 && sellIdx >= 0) {
                const chartEl = arrayContainer.querySelector('#trades-chart-viz');
                const buyBar = chartEl?.querySelector(`[data-idx="${buyIdx}"]`);
                const sellBar = chartEl?.querySelector(`[data-idx="${sellIdx}"]`);
                if (chartEl && buyBar && sellBar) {
                    requestAnimationFrame(() => {
                        const chartRect = chartEl.getBoundingClientRect();
                        const buyBarRect = buyBar.getBoundingClientRect();
                        const sellBarRect = sellBar.getBoundingClientRect();
                        const buyPct = prices[buyIdx] / maxP;
                        const sellPct = prices[sellIdx] / maxP;
                        const x1 = buyBarRect.left + buyBarRect.width / 2 - chartRect.left;
                        const x2 = sellBarRect.left + sellBarRect.width / 2 - chartRect.left;
                        const y1 = buyBarRect.bottom - (buyBarRect.height * buyPct) - chartRect.top;
                        const y2 = sellBarRect.bottom - (sellBarRect.height * sellPct) - chartRect.top;
                        const midX = (x1 + x2) / 2;
                        const arcHeight = Math.min(Math.abs(x2 - x1) * 0.15, 25) + 12;
                        const midY = Math.min(y1, y2) - arcHeight;
                        const arcPath = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.classList.add('trade-arc-svg');
                        svg.setAttribute('width', chartRect.width);
                        svg.setAttribute('height', chartRect.height);
                        svg.setAttribute('viewBox', `0 0 ${chartRect.width} ${chartRect.height}`);
                        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                        marker.setAttribute('id', 'trades-arrow');
                        marker.setAttribute('viewBox', '0 0 10 10');
                        marker.setAttribute('refX', '10');
                        marker.setAttribute('refY', '5');
                        marker.setAttribute('markerWidth', '6');
                        marker.setAttribute('markerHeight', '6');
                        marker.setAttribute('orient', 'auto-start-reverse');
                        const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        arrowPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
                        arrowPath.setAttribute('fill', 'rgba(16, 185, 129, 0.6)');
                        marker.appendChild(arrowPath);
                        defs.appendChild(marker);
                        svg.appendChild(defs);
                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', arcPath);
                        path.classList.add('trade-arc-path');
                        path.setAttribute('marker-end', 'url(#trades-arrow)');
                        svg.appendChild(path);
                        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        text.setAttribute('x', midX);
                        text.setAttribute('y', midY - 4);
                        text.classList.add('trade-arc-label');
                        text.textContent = `+$${currentGain}`;
                        svg.appendChild(text);
                        chartEl.appendChild(svg);
                    });
                }
            }

            // On completion, draw all collected trade arcs
            if (isComplete && collectedGains.length > 0) {
                const chartEl = arrayContainer.querySelector('#trades-chart-viz');
                if (chartEl) {
                    requestAnimationFrame(() => {
                        const chartRect = chartEl.getBoundingClientRect();
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.classList.add('trade-arc-svg');
                        svg.setAttribute('width', chartRect.width);
                        svg.setAttribute('height', chartRect.height);
                        svg.setAttribute('viewBox', `0 0 ${chartRect.width} ${chartRect.height}`);
                        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                        marker.setAttribute('id', 'trades-arrow-final');
                        marker.setAttribute('viewBox', '0 0 10 10');
                        marker.setAttribute('refX', '10');
                        marker.setAttribute('refY', '5');
                        marker.setAttribute('markerWidth', '5');
                        marker.setAttribute('markerHeight', '5');
                        marker.setAttribute('orient', 'auto-start-reverse');
                        const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        arrowPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
                        arrowPath.setAttribute('fill', 'rgba(16, 185, 129, 0.7)');
                        marker.appendChild(arrowPath);
                        defs.appendChild(marker);
                        svg.appendChild(defs);
                        collectedGains.forEach(g => {
                            const buyBar = chartEl.querySelector(`[data-idx="${g.buyIdx}"]`);
                            const sellBar = chartEl.querySelector(`[data-idx="${g.sellIdx}"]`);
                            if (!buyBar || !sellBar) return;
                            const buyBarRect = buyBar.getBoundingClientRect();
                            const sellBarRect = sellBar.getBoundingClientRect();
                            const buyPct = prices[g.buyIdx] / maxP;
                            const sellPct = prices[g.sellIdx] / maxP;
                            const x1 = buyBarRect.left + buyBarRect.width / 2 - chartRect.left;
                            const x2 = sellBarRect.left + sellBarRect.width / 2 - chartRect.left;
                            const y1 = buyBarRect.bottom - (buyBarRect.height * buyPct) - chartRect.top;
                            const y2 = sellBarRect.bottom - (sellBarRect.height * sellPct) - chartRect.top;
                            const midX = (x1 + x2) / 2;
                            const arcH = Math.min(Math.abs(x2 - x1) * 0.15, 25) + 12;
                            const midY = Math.min(y1, y2) - arcH;
                            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            path.setAttribute('d', `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`);
                            path.classList.add('trade-arc-path');
                            path.setAttribute('marker-end', 'url(#trades-arrow-final)');
                            svg.appendChild(path);
                            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            text.setAttribute('x', midX);
                            text.setAttribute('y', midY - 4);
                            text.classList.add('trade-arc-label');
                            text.textContent = `+$${g.gain}`;
                            svg.appendChild(text);
                        });
                        chartEl.appendChild(svg);
                    });
                }
            }
        }
        
        // Problem 11: Can You Reach the End? (Jump Game) — "Safe Zone" vs "Darkness"
        if (currentProbId === '11' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const farthest = meta.farthest ?? 0;
            const isComplete = state.isComplete || false;
            const isComparison = state.isComparison || false;
            const isFail = state.isFail || false;
            const reachExpanded = state.reachExpanded || false;
            const prevFarthest = state.prevFarthest ?? farthest;
            const iReach = state.iReach ?? 0;
            const result = state.result;
            const nums = state.nums1;
            const lastIdx = nums.length - 1;
            
            const sItemCount = nums.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass} jg1-inner">`;
            html += `<div class="array-label">nums — can we reach the last index? Each value = max jump distance from that cell</div>`;
            html += `<div class="array-visualization jump-viz jg1-viz" id="jg1-chart">`;
            
            nums.forEach((val, idx) => {
                let classes = 'array-item jg1-cell';
                let pointerLabels = '';
                let flagHtml = '';
                
                // Safe zone (reachable) vs darkness (unreachable)
                if (idx <= farthest) {
                    classes += ' jg1-safe';
                    // Highlight the newly expanded reach zone
                    if (reachExpanded && idx > prevFarthest && idx <= farthest && !isComplete) {
                        classes += ' jg1-new-reach';
                    }
                } else {
                    classes += ' jg1-dark';
                }

                // Current reach contribution highlight
                if (isComparison && !isFail && idx === iPtr && !isComplete) {
                    classes += ' jg1-active';
                }

                // Goal cell
                if (idx === lastIdx) {
                    classes += ' jg1-goal';
                    if (isComplete && result !== false) classes += ' jg1-goal-reached';
                }

                // Fail — i passed farthest
                if (isFail && idx === iPtr) {
                    classes += ' jg1-blocked';
                }

                // Complete success glow
                if (isComplete && result !== false && idx <= farthest) {
                    classes += ' jg1-won';
                }

                // Scanner pointer
                if (idx === iPtr && !isComplete) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }

                // Flag at farthest index (beside the index box)
                if (idx === farthest && !isComplete) {
                    flagHtml = `<div class="jg1-flag${reachExpanded ? ' jg1-flag-moved' : ''}">&#9873;</div>`;
                }

                html += `<div class="${classes}" data-idx="${idx}">${val}${pointerLabels}<div class="array-index">${idx}</div>${flagHtml}</div>`;
            });
            
            html += `</div>`;

            // Reach progress bar
            if (!isComplete) {
                const pct = Math.min(((farthest + 1) / nums.length) * 100, 100);
                const goalReached = farthest >= lastIdx;
                html += `<div class="jg1-reach-bar-wrap">`;
                html += `<div class="jg1-reach-fill${goalReached ? ' jg1-reach-goal' : ''}" style="width:${pct}%"></div>`;
                html += `<span class="jg1-reach-text">safe zone: 0..${farthest}${goalReached ? ' — GOAL REACHED' : ''} / goal: ${lastIdx}</span>`;
                html += `</div>`;
            }

            // Reach highlight band (shows i → i+nums[i] span)
            if (isComparison && !isFail && iPtr >= 0 && !isComplete && nums[iPtr] > 0) {
                const reachEnd = Math.min(iPtr + nums[iPtr], lastIdx);
                html += `<div class="jg1-reach-span">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">i=${iPtr}</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">can reach up to</span>`;
                html += `<span style="color:var(--accent-green);font-weight:600">index ${reachEnd}</span>`;
                if (reachExpanded) {
                    html += `<span style="color:var(--accent-green);margin-left:6px;font-weight:700">Flag moves: ${prevFarthest} -> ${farthest}</span>`;
                }
                html += `</div>`;
            }

            // Bridge
            if (iPtr >= 0 && iPtr < nums.length && !isComplete && isComparison) {
                const val = nums[iPtr];
                const reachRaw = iPtr + val;
                const reach = Math.min(reachRaw, lastIdx);
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (isFail) {
                    html += `<span style="color:var(--accent-red);font-weight:700">i = ${iPtr} > farthest = ${farthest} — BLOCKED! Can't reach here.</span>`;
                } else {
                    const reachDisplay = reachRaw > lastIdx
                        ? `${reach} <span style="color:var(--text-muted);font-size:0.85em;font-style:italic">capped</span>`
                        : `${iPtr} + ${val} = ${reach}`;
                    html += `<span style="color:var(--text-muted)">farthest = max(</span>`;
                    html += `<span style="color:var(--accent-purple);font-weight:600">${prevFarthest}</span>`;
                    html += `<span style="color:var(--text-muted)">, </span>`;
                    html += `<span style="color:var(--accent-blue);font-weight:600">${reachDisplay}</span>`;
                    html += `<span style="color:var(--text-muted)">) = </span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">${Math.max(prevFarthest, reach)}</span>`;
                    if (reachExpanded && reach >= lastIdx) {
                        html += `<span style="color:var(--accent-green);margin-left:6px;font-weight:700">>= goal!</span>`;
                    } else if (!reachExpanded) {
                        html += `<span style="color:var(--text-muted);margin-left:6px;font-style:italic">no change</span>`;
                    }
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (result === false) {
                    html += `<span style="color:var(--accent-red);font-weight:700">Cannot reach the end. Blocked at index ${iPtr}.</span>`;
                } else {
                    html += `<span style="color:var(--accent-green);font-weight:700">farthest = ${farthest} >= last index ${lastIdx} — can reach the end!</span>`;
                }
                html += `</div></div>`;
            }

            // Farthest flash
            const fFlash = reachExpanded ? ' stock-mp-flash' : '';
            let fContent;
            if (reachExpanded) {
                fContent = `<span class="stock-mp-old">idx ${prevFarthest}</span><span class="stock-mp-new">idx ${farthest}</span>`;
            } else {
                fContent = `idx ${farthest}`;
            }

            const goalReached = isComplete && result !== false;
            const goalColorClass = goalReached ? 'p-green' : 'p-purple';

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (scanner)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail stock-mp-box${fFlash}">
                        <div class="pointer-detail-label">farthest</div>
                        <div class="pointer-detail-value p-merge">${fContent}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">goal</div>
                        <div class="pointer-detail-value ${goalColorClass}">idx ${lastIdx}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;

            // Draw reach arc from scanner to its max reach
            if (isComparison && !isFail && iPtr >= 0 && !isComplete && nums[iPtr] > 0) {
                const chartEl = arrayContainer.querySelector('#jg1-chart');
                const fromCell = chartEl?.querySelector(`[data-idx="${iPtr}"]`);
                const reachIdx = Math.min(iPtr + nums[iPtr], lastIdx);
                const toCell = chartEl?.querySelector(`[data-idx="${reachIdx}"]`);
                if (chartEl && fromCell && toCell && iPtr !== reachIdx) {
                    requestAnimationFrame(() => {
                        const chartRect = chartEl.getBoundingClientRect();
                        const fromRect = fromCell.getBoundingClientRect();
                        const toRect = toCell.getBoundingClientRect();
                        const x1 = fromRect.left + fromRect.width / 2 - chartRect.left;
                        const x2 = toRect.left + toRect.width / 2 - chartRect.left;
                        const y = fromRect.top - chartRect.top - 2;
                        const midX = (x1 + x2) / 2;
                        const arcH = Math.min(Math.abs(x2 - x1) * 0.2, 28) + 10;
                        const midY = y - arcH;
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.classList.add('jg1-arc-svg');
                        svg.setAttribute('width', chartRect.width);
                        svg.setAttribute('height', chartRect.height);
                        svg.setAttribute('viewBox', `0 0 ${chartRect.width} ${chartRect.height}`);
                        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                        marker.setAttribute('id', 'jg1-arrow');
                        marker.setAttribute('viewBox', '0 0 10 10');
                        marker.setAttribute('refX', '10');
                        marker.setAttribute('refY', '5');
                        marker.setAttribute('markerWidth', '6');
                        marker.setAttribute('markerHeight', '6');
                        marker.setAttribute('orient', 'auto-start-reverse');
                        const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        arrowPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
                        arrowPath.setAttribute('fill', 'rgba(59, 130, 246, 0.6)');
                        marker.appendChild(arrowPath);
                        defs.appendChild(marker);
                        svg.appendChild(defs);
                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', `M ${x1} ${y} Q ${midX} ${midY} ${x2} ${y}`);
                        path.classList.add('jg1-arc-path');
                        path.setAttribute('marker-end', 'url(#jg1-arrow)');
                        svg.appendChild(path);
                        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        text.setAttribute('x', midX);
                        text.setAttribute('y', midY - 3);
                        text.classList.add('jg1-arc-label');
                        text.textContent = `+${nums[iPtr]}`;
                        svg.appendChild(text);
                        chartEl.appendChild(svg);
                    });
                }
            }
        }
        
        // Problem 12: Fewest Jumps to End (Jump Game II) — Window / BFS visual
        if (currentProbId === '12' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const jumps = meta.jumps ?? 0;
            const wL = meta.l ?? 0;
            const wR = meta.r ?? 0;
            const farthest = meta.farthest ?? 0;
            const farthestIdx = meta.farthestIdx ?? 0;
            const completedWindows = meta.windows || [];
            const arcs = meta.arcs || [];
            const activeWindow = meta.activeWindow || { l: 0, r: 0 };
            const isComplete = state.isComplete || false;
            const isJump = state.isJump || false;
            const prevL = state.prevL ?? wL;
            const prevR = state.prevR ?? wR;
            const prevJumps = state.prevJumps ?? jumps;
            const reachExpanded = state.reachExpanded || false;
            const prevFarthest = state.prevFarthest ?? farthest;
            const showWindow = state.showWindow || false;
            const bestIdx = state.bestIdx ?? -1;
            const humanMsg = state.humanMsg || '';
            const nums = state.nums1;
            const lastIdx = nums.length - 1;

            // Window color palette (each jump level gets a color)
            const winColors = [
                { bg: 'rgba(59, 130, 246, 0.15)', border: 'var(--accent-blue)', text: '#60a5fa', zoneBg: 'rgba(59, 130, 246, 0.08)' },
                { bg: 'rgba(16, 185, 129, 0.15)', border: 'var(--accent-green)', text: '#34d399', zoneBg: 'rgba(16, 185, 129, 0.08)' },
                { bg: 'rgba(139, 92, 246, 0.15)', border: 'var(--accent-purple)', text: '#a78bfa', zoneBg: 'rgba(139, 92, 246, 0.08)' },
                { bg: 'rgba(249, 115, 22, 0.15)', border: 'var(--accent-orange)', text: '#fb923c', zoneBg: 'rgba(249, 115, 22, 0.08)' },
                { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.8)', text: '#f472b6', zoneBg: 'rgba(236, 72, 153, 0.08)' }
            ];

            // Build map: which window does each index belong to?
            const allWindows = [...completedWindows];
            const currentWinIdx = allWindows.length;
            
            const idxWin = new Array(nums.length).fill(-1);
            allWindows.forEach((w, wi) => {
                for (let k = w.l; k <= Math.min(w.r, lastIdx); k++) {
                    idxWin[k] = wi;
                }
            });
            for (let k = activeWindow.l; k <= Math.min(activeWindow.r, lastIdx); k++) {
                if (idxWin[k] < 0) idxWin[k] = currentWinIdx;
            }

            const sItemCount = nums.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass} jg2-inner">`;

            // ── Concept header ──
            html += `<div class="jg2-concept">`;
            html += `<span class="jg2-concept-icon">i</span>`;
            html += `<span>Greedy BFS — each <b>shaded zone</b> = all indices reachable in that many jumps. The outer loop expands zones; the inner loop finds the farthest reach.</span>`;
            html += `<button class="cy-insight-btn jg2-insight-btn" onclick="openInsightModal('insightModal12')" title="Why does this work?">i</button>`;
            html += `</div>`;

            html += `<div class="array-label">nums — each value = max jump distance from that index</div>`;
            html += `<div class="array-visualization jump-viz jg2-viz" id="jg2-chart">`;

            // ── Farthest marker (flag above cells) ──
            // We'll position this with JS after render, but add the element now
            if (farthest > 0 || isComplete) {
                const fMarkerIdx = Math.min(farthest, lastIdx);
                html += `<div class="jg2-farthest-flag" data-target="${fMarkerIdx}">`;
                html += `<div class="jg2-ff-line"></div>`;
                html += `<div class="jg2-ff-label">farthest=${farthest}</div>`;
                html += `</div>`;
            }

            nums.forEach((val, idx) => {
                let classes = 'array-item jg2-cell';
                const wIdx = idxWin[idx];
                const wc = wIdx >= 0 ? winColors[wIdx % winColors.length] : null;
                let extraStyle = wc 
                    ? `background:${wc.bg};border-color:${wc.border}` 
                    : '';

                if (idx === lastIdx) classes += ' jg2-goal';
                if (isComplete) classes += ' jg2-done';

                // Best index pulse on jump step
                if (isJump && idx === bestIdx) {
                    classes += ' jg2-best-launch';
                }

                // L / R / i pointer labels
                const isL = !isComplete && idx === activeWindow.l;
                const isR = !isComplete && idx === activeWindow.r;
                const isI = !isComplete && idx === iPtr;

                const jumpNewL = isJump ? wL : -1;
                const jumpNewR = isJump ? Math.min(wR, lastIdx) : -1;
                const isJumpL = isJump && idx === jumpNewL;
                const isJumpR = isJump && idx === jumpNewR;

                if (isI) classes += ' pointer-1';
                if (isL || isR || isJumpL || isJumpR) classes += ' jg2-window-edge';

                // Pointer label stack
                let bottomLabels = [];
                if (isL && isR && isI) {
                    bottomLabels.push(`<span class="jg2-ptr jg2-ptr-l">L</span><span class="jg2-ptr jg2-ptr-r">R</span><span class="jg2-ptr jg2-ptr-i">i</span>`);
                } else if (isL && isR) {
                    bottomLabels.push(`<span class="jg2-ptr jg2-ptr-l">L</span><span class="jg2-ptr jg2-ptr-r">R</span>`);
                } else {
                    if (isL || isJumpL) bottomLabels.push(`<span class="jg2-ptr jg2-ptr-l">L</span>`);
                    if (isR || isJumpR) bottomLabels.push(`<span class="jg2-ptr jg2-ptr-r">R</span>`);
                    if (isI) bottomLabels.push(`<span class="jg2-ptr jg2-ptr-i">i</span>`);
                }

                const ptrRow = bottomLabels.length > 0 
                    ? `<div class="jg2-ptr-row">${bottomLabels.join('')}</div>` 
                    : '';

                html += `<div class="${classes}" style="${extraStyle}" data-idx="${idx}">${val}${ptrRow}<div class="array-index">${idx}</div></div>`;
            });
            
            html += `</div>`;

            // ── Zone labels row (below cells) — show completed + active zones ──
            const showZones = [...completedWindows.map((w, i) => {
                const label = w.arrived ? 'Arrived' : `Jump ${w.jumpNum}`;
                return { ...w, label, idx: i, active: false };
            })];
            if (!isComplete && !isJump) {
                showZones.push({ l: activeWindow.l, r: activeWindow.r, label: jumps === 0 ? 'Start' : `Reach`, idx: currentWinIdx, active: true });
            } else if (isJump) {
                showZones.push({ l: wL, r: Math.min(wR, lastIdx), label: 'Next Reach →', idx: currentWinIdx, active: true });
            }

            if (showZones.length > 0) {
                html += `<div class="jg2-zones-row">`;
                showZones.forEach(w => {
                    const wc = winColors[w.idx % winColors.length];
                    const rangeEnd = Math.min(w.r, lastIdx);
                    const isSingle = w.l === rangeEnd;
                    const jumpClass = isJump && w.active ? ' jg2-zone-new' : '';
                    const completedClass = !w.active && !w.arrived ? ' jg2-zone-done' : '';
                    html += `<div class="jg2-zone-pill${jumpClass}${completedClass}" style="border-color:${wc.border};background:${wc.bg}">`;
                    html += `<span class="jg2-zone-label" style="color:${wc.text}">${w.label}</span>`;
                    html += `<span class="jg2-zone-range">`;
                    if (isSingle) {
                        html += `[${w.l}]`;
                    } else {
                        html += `[${w.l}…${rangeEnd}]`;
                    }
                    html += `</span>`;
                    if (w.active && !isJump) html += `<span class="jg2-zone-scanning">scanning</span>`;
                    html += `</div>`;
                });
                html += `</div>`;
            }

            // ── Bridge text ──
            if (isJump && !isComplete) {
                const prevWinColor = winColors[(completedWindows.length - 1) % winColors.length];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:${prevWinColor.text};font-weight:700">Zone [${prevL}, ${prevR}] fully explored</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700">Jump #${jumps}!</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">New reach → [${wL}, ${Math.min(wR, lastIdx)}]</span>`;
                html += `</div></div>`;
            } else if (!isComplete && iPtr >= 0) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (reachExpanded || state.reachExpanded === false) {
                    const reach = state.iReach ?? (iPtr + nums[iPtr]);
                    const reachDisplay = state.iReachDisplay ?? `${iPtr}+${nums[iPtr]}=${reach}`;
                    const result = Math.max(prevFarthest, reach);

                    html += `<span style="color:var(--text-muted)">farthest = max(</span>`;
                    html += `<span style="color:var(--accent-purple);font-weight:600">${prevFarthest}</span>`;
                    html += `<span style="color:var(--text-muted)">, </span>`;
                    html += `<span style="color:var(--accent-blue);font-weight:600">${reachDisplay}</span>`;
                    html += `<span style="color:var(--text-muted)">) = </span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">${result}</span>`;

                    if (reachExpanded) {
                        html += `<span style="color:var(--accent-green);margin-left:8px;font-weight:700">new best!</span>`;
                    } else {
                        html += `<span style="color:var(--text-muted);margin-left:8px;font-style:italic">no change</span>`;
                    }
                } else {
                    const reach = iPtr + nums[iPtr];
                    html += `<span style="color:var(--accent-blue)">Index ${iPtr}: value <b>${nums[iPtr]}</b> → reach = ${iPtr} + ${nums[iPtr]} = <b>${reach}</b></span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">Done! Minimum jumps = ${jumps}</span>`;
                html += `</div></div>`;
            } else if (showWindow && !isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue)">Starting zone [0, 0] — we begin at index 0. Let's find the farthest we can reach.</span>`;
                html += `</div></div>`;
            }

            // ── Human-mode explanation ──
            if (humanMsg) {
                html += `<div class="jg2-human">`;
                html += `<span class="jg2-human-icon"></span>`;
                html += `<span class="jg2-human-text">${humanMsg}</span>`;
                html += `</div>`;
            }

            // ── Pointer info boxes ──
            const jFlash = isJump ? ' stock-mp-flash' : '';
            let jContent = isJump
                ? `<span class="stock-mp-old">${prevJumps}</span><span class="stock-mp-new">${jumps}</span>`
                : `${jumps}`;

            const fFlash = reachExpanded ? ' stock-mp-flash' : '';
            let fContent = reachExpanded
                ? `<span class="stock-mp-old">${prevFarthest}</span><span class="stock-mp-new">${farthest}</span>`
                : `${farthest}`;

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">current reach [<span style="color:#fb923c">L</span>, <span style="color:#f472b6">R</span>]</div>
                        <div class="pointer-detail-value p2">[${wL}, ${Math.min(wR, lastIdx)}]</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label"><span style="color:#60a5fa">i</span> (inner loop)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail stock-mp-box${fFlash}">
                        <div class="pointer-detail-label">farthest</div>
                        <div class="pointer-detail-value p-purple">${fContent}</div>
                    </div>
                    <div class="pointer-detail stock-mp-box${jFlash}">
                        <div class="pointer-detail-label">jumps</div>
                        <div class="pointer-detail-value p-merge">${jContent}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;

            // ── Position the farthest flag via JS ──
            const chartEl = arrayContainer.querySelector('#jg2-chart');
            const fFlag = arrayContainer.querySelector('.jg2-farthest-flag');
            if (chartEl && fFlag) {
                requestAnimationFrame(() => {
                    const targetIdx = parseInt(fFlag.dataset.target);
                    const targetCell = chartEl.querySelector(`[data-idx="${targetIdx}"]`);
                    if (targetCell) {
                        const chartRect = chartEl.getBoundingClientRect();
                        const cellRect = targetCell.getBoundingClientRect();
                        const cx = cellRect.left + cellRect.width / 2 - chartRect.left;
                        fFlag.style.left = cx + 'px';
                    }
                });
            }

            // ── SVG overlay: arcs ──
            if (chartEl && arcs.length > 0) {
                requestAnimationFrame(() => {
                    const chartRect = chartEl.getBoundingClientRect();
                    const svgW = chartRect.width;
                    const svgH = chartRect.height;

                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.classList.add('jg2-wall-svg');
                    svg.setAttribute('width', svgW);
                    svg.setAttribute('height', svgH);
                    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);

                    // Arrow marker defs
                    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                    [
                        { id: 'jg2-arr-scan', fill: 'rgba(96, 165, 250, 0.8)', size: 6 },
                        { id: 'jg2-arr-best', fill: 'rgba(16, 185, 129, 0.9)', size: 6 },
                        { id: 'jg2-arr-dim', fill: 'rgba(255,255,255,0.2)', size: 4 },
                        { id: 'jg2-arr-win', fill: 'rgba(16, 185, 129, 0.9)', size: 7 },
                        { id: 'jg2-arr-lose', fill: 'rgba(255,255,255,0.12)', size: 4 },
                        { id: 'jg2-arr-ctx', fill: 'rgba(255,255,255,0.15)', size: 4 }
                    ].forEach(m => {
                        const mk = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                        mk.setAttribute('id', m.id);
                        mk.setAttribute('viewBox', '0 0 10 10');
                        mk.setAttribute('refX', '10'); mk.setAttribute('refY', '5');
                        mk.setAttribute('markerWidth', String(m.size)); mk.setAttribute('markerHeight', String(m.size));
                        mk.setAttribute('orient', 'auto-start-reverse');
                        const ap = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        ap.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
                        ap.setAttribute('fill', m.fill);
                        mk.appendChild(ap); defs.appendChild(mk);
                    });
                    svg.appendChild(defs);

                    // Helpers
                    const cellCX = (idx) => {
                        const c = chartEl.querySelector(`[data-idx="${Math.min(idx, lastIdx)}"]`);
                        if (!c) return 0;
                        const rect = c.getBoundingClientRect();
                        return rect.left + rect.width / 2 - chartRect.left;
                    };
                    const baseY = (() => {
                        const c = chartEl.querySelector('[data-idx="0"]');
                        return c ? c.getBoundingClientRect().top - chartRect.top - 2 : 0;
                    })();

                    // Sort so context arcs render first (behind)
                    const sortedArcs = [...arcs].sort((a, b) => {
                        const order = { context: 0, loser: 1, dim: 2, scan: 3, best: 4, winner: 5 };
                        return (order[a.type] || 0) - (order[b.type] || 0);
                    });

                    sortedArcs.forEach((arc, arcIdx) => {
                        const fromX = cellCX(arc.from);
                        const toX = cellCX(arc.to);
                        if (Math.abs(toX - fromX) < 2) return;
                        const midX = (fromX + toX) / 2;
                        const baseArcH = Math.min(Math.abs(toX - fromX) * 0.25, 30) + 12;
                        const stagger = arc.type === 'context' ? -4 : (arc.type === 'winner' ? 6 : 0);
                        const arcH = baseArcH + stagger;
                        const midY = baseY - arcH;

                        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        p.setAttribute('d', `M ${fromX} ${baseY} Q ${midX} ${midY} ${toX} ${baseY}`);

                        let markerEnd, className;
                        switch (arc.type) {
                            case 'scan':
                                className = 'jg2-arc-scan';
                                markerEnd = 'url(#jg2-arr-scan)';
                                break;
                            case 'best':
                                className = 'jg2-arc-best';
                                markerEnd = 'url(#jg2-arr-best)';
                                break;
                            case 'dim':
                                className = 'jg2-arc-dim';
                                markerEnd = 'url(#jg2-arr-dim)';
                                break;
                            case 'winner':
                                className = 'jg2-arc-winner';
                                markerEnd = 'url(#jg2-arr-win)';
                                break;
                            case 'loser':
                                className = 'jg2-arc-loser';
                                markerEnd = 'url(#jg2-arr-lose)';
                                break;
                            case 'context':
                                className = 'jg2-arc-context';
                                markerEnd = 'url(#jg2-arr-ctx)';
                                break;
                            default:
                                className = 'jg2-arc-scan';
                                markerEnd = 'url(#jg2-arr-scan)';
                        }

                        p.setAttribute('class', className);
                        p.setAttribute('marker-end', markerEnd);
                        svg.appendChild(p);

                        // Labels — only on prominent arcs
                        if (arc.label && (arc.type === 'scan' || arc.type === 'best' || arc.type === 'winner')) {
                            const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            t.setAttribute('x', midX); t.setAttribute('y', midY - 4);
                            t.setAttribute('text-anchor', 'middle');
                            t.setAttribute('class', arc.type === 'scan' ? 'jg2-arc-label-scan' : 'jg2-arc-label-best');
                            t.textContent = arc.label;
                            svg.appendChild(t);
                        }
                        // Dim / loser labels (smaller, subtle)
                        if (arc.label && (arc.type === 'dim' || arc.type === 'loser')) {
                            const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            t.setAttribute('x', midX); t.setAttribute('y', midY - 4);
                            t.setAttribute('text-anchor', 'middle');
                            t.setAttribute('class', 'jg2-arc-label-dim');
                            t.textContent = arc.label;
                            svg.appendChild(t);
                        }
                    });

                    chartEl.appendChild(svg);
                });
            }
        }
        
        // Problem 13: H-Index — Durfee-square geometric visualization (SVG)
        if (currentProbId === '13' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const hVal = meta.h ?? 0;
            const isComplete = state.isComplete || false;
            const citations = state.nums1;
            const n = citations.length;
            const maxC = Math.max(...citations, n, 1);
            const phase = meta.phase || 'scan';
            const trySquare = meta.trySquare ?? null;
            const thresholdH = meta.thresholdH ?? null;
            const passBars = meta.passBars || [];
            const failBars = meta.failBars || [];
            const crossingIdx = meta.crossingIdx ?? null;
            const squareSize = meta.squareSize ?? 0;

            // SVG geometry constants
            const svgW = 520, svgH = 280;
            const pad = { top: 24, right: 20, bottom: 32, left: 44 };
            const plotW = svgW - pad.left - pad.right;
            const plotH = svgH - pad.top - pad.bottom;
            const barGap = Math.max(2, Math.min(6, Math.floor(plotW / n * 0.12)));
            const barW = Math.max(12, (plotW - barGap * (n - 1)) / n);
            const scaleY = (v) => pad.top + plotH - (v / maxC) * plotH;
            const scaleX = (i) => pad.left + i * (barW + barGap);

            const sItemCount = n;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            const isSorted = meta.sorted !== false;
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">${isSorted ? 'citations (sorted desc) — find largest h×h Durfee square that fits under the bars' : 'citations (unsorted) — must sort descending first'}</div>`;

            // ─── SVG chart ───
            html += `<div class="hindex-svg-wrap">`;
            html += `<svg class="hindex-svg" width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}" preserveAspectRatio="xMidYMid meet">`;
            html += `<defs>`;
            html += `<pattern id="hatch-pass" patternUnits="userSpaceOnUse" width="6" height="6"><path d="M0,6 L6,0" stroke="rgba(16,185,129,0.25)" stroke-width="1"/></pattern>`;
            html += `<pattern id="hatch-fail" patternUnits="userSpaceOnUse" width="6" height="6"><path d="M0,6 L6,0" stroke="rgba(239,68,68,0.25)" stroke-width="1"/></pattern>`;
            html += `</defs>`;

            // Y-axis gridlines + labels
            const yTicks = [];
            const tickStep = maxC <= 5 ? 1 : maxC <= 12 ? 2 : maxC <= 30 ? 5 : 10;
            for (let t = 0; t <= maxC; t += tickStep) yTicks.push(t);
            if (yTicks[yTicks.length - 1] !== maxC && maxC - yTicks[yTicks.length - 1] > tickStep * 0.3) yTicks.push(maxC);
            yTicks.forEach(t => {
                const y = scaleY(t);
                html += `<line x1="${pad.left}" y1="${y}" x2="${svgW - pad.right}" y2="${y}" stroke="var(--grid-line)" stroke-width="1"/>`;
                html += `<text x="${pad.left - 8}" y="${y + 4}" text-anchor="end" class="hindex-axis-label">${t}</text>`;
            });

            // X-axis baseline
            html += `<line x1="${pad.left}" y1="${scaleY(0)}" x2="${svgW - pad.right}" y2="${scaleY(0)}" stroke="var(--grid-line-strong)" stroke-width="1"/>`;

            // ─── Durfee square overlay ───
            const activeSquare = phase === 'done' ? hVal : (trySquare ?? squareSize);
            if (activeSquare > 0) {
                const sqLeft = scaleX(0);
                const sqTop = scaleY(activeSquare);
                const sqW = activeSquare * (barW + barGap) - barGap;
                const sqH = (activeSquare / maxC) * plotH;
                const sqPass = phase === 'done' || (trySquare && !failBars.includes(trySquare - 1));
                const sqClass = sqPass ? 'hindex-square-pass' : 'hindex-square-fail';
                html += `<rect class="${sqClass}" x="${sqLeft}" y="${sqTop}" width="${sqW}" height="${sqH}" rx="3"/>`;
                // Square dimension label
                html += `<text x="${sqLeft + sqW / 2}" y="${sqTop - 6}" text-anchor="middle" class="hindex-square-label">${activeSquare}×${activeSquare}</text>`;
            }

            // ─── y = x diagonal line ───
            // In our coordinate system, y=x means: at bar index i, the y-value equals (i+1)
            // We draw from (index 0, value 1) to (index n-1, value n) clipped to maxC
            const diagStartX = scaleX(0) + barW / 2;
            const diagStartY = scaleY(1);
            const diagEndIdx = Math.min(n - 1, maxC - 1);
            const diagEndX = scaleX(diagEndIdx) + barW / 2;
            const diagEndY = scaleY(diagEndIdx + 1);
            html += `<line class="hindex-diagonal" x1="${diagStartX}" y1="${diagStartY}" x2="${diagEndX}" y2="${diagEndY}"/>`;
            // Diagonal label
            html += `<text x="${diagEndX + 6}" y="${diagEndY - 2}" class="hindex-diag-label">y=x</text>`;

            // ─── Threshold line ───
            if (thresholdH !== null && thresholdH > 0 && phase !== 'sort') {
                const thY = scaleY(thresholdH);
                html += `<line class="hindex-threshold" x1="${pad.left}" y1="${thY}" x2="${svgW - pad.right}" y2="${thY}"/>`;
                html += `<text x="${svgW - pad.right + 4}" y="${thY + 4}" class="hindex-threshold-label">h=${thresholdH}</text>`;
            }

            // ─── Citation bars ───
            citations.forEach((val, idx) => {
                const x = scaleX(idx);
                const y = scaleY(val);
                const bH = (val / maxC) * plotH;
                const isPass = passBars.includes(idx);
                const isFail = failBars.includes(idx);
                const isCurrent = idx === iPtr;
                const isFinalH = isComplete && idx < hVal;

                let barClass = 'hindex-bar';
                if (phase === 'sort') barClass += ' hindex-bar-sort';
                else if (isFinalH) barClass += ' hindex-bar-final';
                else if (isPass) barClass += ' hindex-bar-pass';
                else if (isFail) barClass += ' hindex-bar-fail';
                if (isCurrent) barClass += ' hindex-bar-active';

                html += `<rect class="${barClass}" x="${x}" y="${y}" width="${barW}" height="${bH}" rx="2"/>`;
                // Value label above bar
                html += `<text x="${x + barW / 2}" y="${y - 5}" text-anchor="middle" class="hindex-bar-val">${val}</text>`;
                // Index label below baseline (show "i" inline when active instead of a separate pointer)
                if (isCurrent) {
                    html += `<text x="${x + barW / 2}" y="${scaleY(0) + 15}" text-anchor="middle" class="hindex-pointer-i">▲ i=${idx}</text>`;
                } else {
                    html += `<text x="${x + barW / 2}" y="${scaleY(0) + 15}" text-anchor="middle" class="hindex-bar-idx">${idx}</text>`;
                }

                // Crossing mark
                if (crossingIdx !== null && idx === crossingIdx) {
                    html += `<line x1="${x}" y1="${y}" x2="${x + barW}" y2="${scaleY(0)}" stroke="var(--accent-red)" stroke-width="2" stroke-dasharray="4,3" opacity="0.6"/>`;
                }
            });

            html += `</svg>`;
            html += `</div>`; // .hindex-svg-wrap

            // ─── Explanation bridge ───
            if (phase === 'scan' && iPtr >= 0 && iPtr < n && !isComplete) {
                const val = citations[iPtr];
                const need = iPtr + 1;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted)">Try h=${need}: </span>`;
                html += `<span style="color:var(--accent-blue);font-weight:600">citations[${iPtr}] = ${val}</span>`;
                if (val >= need) {
                    html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">≥ ${need}</span>`;
                    html += `<span style="color:var(--accent-green)">✓ the ${need}×${need} square fits! h grows to ${need}</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">< ${need}</span>`;
                    html += `<span style="color:var(--accent-red)">✗ the ${need}×${need} square overflows — stop!</span>`;
                }
                html += `</div></div>`;
            } else if (phase === 'sort') {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (!isSorted) {
                    html += `<span style="color:var(--accent-purple);font-weight:600">Unsorted input</span>`;
                    html += `<span style="color:var(--text-muted)"> — bars are in their original order. We need to sort descending so the tallest bars land on the left.</span>`;
                } else {
                    html += `<span style="color:var(--accent-green);font-weight:600">✓ Sorted descending</span>`;
                    html += `<span style="color:var(--text-muted)"> — tallest bars on the left. Now we scan left-to-right and try to grow the Durfee square.</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ H-Index = ${hVal}</span>`;
                html += `<span style="color:var(--text-muted)"> — the ${hVal}×${hVal} Durfee square is the largest that fits. ${hVal} papers each have ≥ ${hVal} citations.</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (paper)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">h-index</div>
                        <div class="pointer-detail-value p-merge">${hVal}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">phase</div>
                        <div class="pointer-detail-value">${phase}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">square</div>
                        <div class="pointer-detail-value">${activeSquare > 0 ? `${activeSquare}×${activeSquare}` : '—'}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }
        
        // Problem 14: Randomized Collection — vals array + idx_map
        if (currentProbId === '14' && state.nums1) {
            const meta = state.arrayMeta || {};
            const idxMap = meta.idxMap || {};
            const isComplete = state.isComplete || false;
            
            const sItemCount = Math.max(state.nums1.length, 1);
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">vals — O(1) insert, remove, and getRandom</div>`;
            html += `<div class="array-visualization">`;
            
            if (state.nums1.length === 0) {
                html += `<div class="array-item empty">∅</div>`;
            } else {
                state.nums1.forEach((val, idx) => {
                    let classes = 'array-item';
                    if (isComplete) classes += ' pointer-merge';
                    
                    html += `
                        <div class="${classes}">
                            ${val}
                            <div class="array-index">${idx}</div>
                        </div>
                    `;
                });
            }
            
            html += `</div>`;

            // HashMap bucket for idx_map
            const mapEntries = Object.entries(idxMap);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> idx_map <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (mapEntries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                mapEntries.forEach(([k, v]) => {
                    html += `<span class="ds-item ds-map-item">${k}→${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">vals.length</div>
                        <div class="pointer-detail-value p1">${state.nums1.length}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }
        
        // Problem 15: Product Without Self — prefix × suffix bridge visualization
        if (currentProbId === '15' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const prefix = meta.prefix ?? 1;
            const suffix = meta.suffix ?? 1;
            const isComplete = state.isComplete || false;
            const nums = state.nums1;
            const answer = state.nums2 || [];
            
            const sItemCount = nums.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-dual${sDenseClass}">`;
            
            // nums row
            html += `<div class="array-section"><div class="array-label">nums (input)</div><div class="array-visualization">`;
            nums.forEach((val, idx) => {
                let classes = 'array-item';
                if (idx === iPtr) classes += ' pointer-1';
                let pointerLabels = idx === iPtr ? `<div class="pointer-label p1">i</div>` : '';
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;
            
            // answer row with prefix/suffix coloring
            html += `<div class="array-section"><div class="array-label">answer (product of everything except nums[i])</div><div class="array-visualization">`;
            answer.forEach((val, idx) => {
                let classes = 'array-item';
                if (isComplete) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-2';
                html += `<div class="${classes}">${val}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Bridge: show prefix × suffix calculation
            if (iPtr >= 0 && iPtr < nums.length && !isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                // Determine which pass we're on (prefix goes left→right, suffix goes right→left)
                const isLeftPass = state.msg && state.msg.includes('Left pass');
                const isRightPass = state.msg && state.msg.includes('Right pass');
                if (isLeftPass) {
                    html += `<span style="color:var(--accent-blue);font-weight:600">answer[${iPtr}]</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 4px">= prefix =</span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">${prefix}</span>`;
                    html += `<span style="color:var(--text-muted);margin-left:8px;font-size:11px">(product of everything LEFT of index ${iPtr})</span>`;
                    // Show what elements are left of i
                    if (iPtr > 0) {
                        const leftElems = nums.slice(0, iPtr).join(' × ');
                        html += `<br><span style="color:var(--accent-purple);font-size:11px">${leftElems} = ${prefix}</span>`;
                    }
                } else if (isRightPass) {
                    html += `<span style="color:var(--accent-blue);font-weight:600">answer[${iPtr}]</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 4px">×= suffix (${suffix}) →</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:700">${answer[iPtr]}</span>`;
                    html += `<span style="color:var(--text-muted);margin-left:8px;font-size:11px">(LEFT product × RIGHT product)</span>`;
                    if (iPtr < nums.length - 1) {
                        const rightElems = nums.slice(iPtr + 1).join(' × ');
                        html += `<br><span style="color:var(--accent-purple);font-size:11px">right of [${iPtr}]: ${rightElems} = ${suffix}</span>`;
                    }
                } else {
                    html += `<span style="color:var(--accent-blue);font-weight:600">prefix=${prefix}</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 4px">|</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">suffix=${suffix}</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ answer[i] = (product of left) × (product of right) for each i</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">prefix ←</div>
                        <div class="pointer-detail-value p2">${prefix}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">suffix →</div>
                        <div class="pointer-detail-value p-merge">${suffix}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }
        
        // Problem 16: Circular Fuel Route — gas/cost with surplus bridge + tank visual
        if (currentProbId === '16' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const totalSurplus = meta.totalSurplus ?? 0;
            const currentSurplus = meta.currentSurplus ?? 0;
            const startStation = meta.start ?? 0;
            const isComplete = state.isComplete || false;
            const gas = state.nums1;
            const cost = state.nums2 || [];
            
            const sItemCount = gas.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-compact${sDenseClass}">`;
            
            // gas row
            html += `<div class="array-section"><div class="array-label">gas ⛽ (fuel at station)</div><div class="array-visualization">`;
            gas.forEach((val, idx) => {
                let classes = 'array-item';
                if (isComplete && idx === startStation) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-1';
                let pointerLabels = idx === iPtr ? `<div class="pointer-label p1">i</div>` : '';
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;
            
            // cost row
            html += `<div class="array-section"><div class="array-label">cost 🚗 (fuel to next station)</div><div class="array-visualization">`;
            cost.forEach((val, idx) => {
                let classes = 'array-item';
                if (idx === iPtr) classes += ' pointer-2';
                html += `<div class="${classes}">${val}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Net surplus row (gas[i] - cost[i])
            html += `<div class="array-section"><div class="array-label">net = gas − cost (surplus per station)</div><div class="array-visualization">`;
            gas.forEach((val, idx) => {
                const net = val - (cost[idx] || 0);
                const color = net > 0 ? 'var(--accent-green)' : net < 0 ? 'var(--accent-red)' : 'var(--text-muted)';
                const sign = net > 0 ? '+' : '';
                let classes = 'array-item';
                if (idx === iPtr) classes += ' pointer-1';
                if (isComplete && idx === startStation) classes += ' pointer-merge';
                html += `<div class="${classes}" style="color:${color};font-weight:${Math.abs(net) > 0 ? '700' : '400'}">${sign}${net}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Bridge: surplus tracking
            if (iPtr >= 0 && iPtr < gas.length && !isComplete) {
                const net = gas[iPtr] - (cost[iPtr] || 0);
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">gas[${iPtr}]=${gas[iPtr]}</span>`;
                html += `<span class="sum-bridge-op">−</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">cost[${iPtr}]=${cost[iPtr]}</span>`;
                html += `<span class="sum-bridge-eq">=</span>`;
                html += `<span style="color:${net >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'};font-weight:700">${net >= 0 ? '+' : ''}${net}</span>`;
                html += `<span style="color:var(--text-muted);margin-left:8px">→ tank = ${currentSurplus}</span>`;
                if (currentSurplus < 0) {
                    html += `<span style="color:var(--accent-red);margin-left:6px;font-weight:700">🚫 EMPTY! Reset start = ${startStation}</span>`;
                } else {
                    html += `<span style="color:var(--accent-green);margin-left:6px">✓ still rolling (start=${startStation})</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (totalSurplus >= 0) {
                    html += `<span style="color:var(--accent-green);font-weight:700">✓ Start at station ${startStation} — total surplus = ${totalSurplus} ≥ 0, circuit possible!</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);font-weight:700">✗ Total surplus = ${totalSurplus} < 0 — circuit impossible!</span>`;
                }
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (station)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">start ⛽</div>
                        <div class="pointer-detail-value p-merge">${startStation >= 0 ? `idx ${startStation}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">tank (currentSurplus)</div>
                        <div class="pointer-detail-value p2">${currentSurplus}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">totalSurplus</div>
                        <div class="pointer-detail-value">${totalSurplus}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }
        
        // Problem 17: Fair Candy Distribution — comparison arrows + candy bars
        if (currentProbId === '17' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const total = meta.total ?? 0;
            const isComplete = state.isComplete || false;
            const ratings = state.nums1;
            const candies = state.nums2 || [];
            const maxCandy = Math.max(...candies, 1);
            const isLeftPass = state.msg && state.msg.includes('Left pass');
            const isRightPass = state.msg && state.msg.includes('Right pass');
            
            const sItemCount = ratings.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-compact${sDenseClass}">`;
            
            // ratings row with comparison arrows
            html += `<div class="array-section"><div class="array-label">ratings ⭐ (${isLeftPass ? '← LEFT PASS →' : isRightPass ? '← RIGHT PASS →' : 'compare neighbors'})</div><div class="array-visualization">`;
            ratings.forEach((val, idx) => {
                let classes = 'array-item';
                if (idx === iPtr) classes += ' pointer-1';
                let pointerLabels = idx === iPtr ? `<div class="pointer-label p1">i</div>` : '';
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Comparison arrow row
            if (iPtr >= 0 && iPtr < ratings.length && !isComplete) {
                html += `<div class="candy-compare-row">`;
                if (isLeftPass && iPtr >= 1) {
                    const cmp = ratings[iPtr] > ratings[iPtr - 1];
                    html += `<span style="color:${cmp ? 'var(--accent-green)' : 'var(--accent-red)'};font-weight:600;font-size:12px;">`;
                    html += `ratings[${iPtr}]=${ratings[iPtr]} ${cmp ? '>' : '≤'} ratings[${iPtr-1}]=${ratings[iPtr-1]}`;
                    html += cmp ? ` → candies[${iPtr}] = candies[${iPtr-1}]+1` : ` → no change`;
                    html += `</span>`;
                } else if (isRightPass && iPtr < ratings.length - 1) {
                    const cmp = ratings[iPtr] > ratings[iPtr + 1];
                    html += `<span style="color:${cmp ? 'var(--accent-green)' : 'var(--accent-red)'};font-weight:600;font-size:12px;">`;
                    html += `ratings[${iPtr}]=${ratings[iPtr]} ${cmp ? '>' : '≤'} ratings[${iPtr+1}]=${ratings[iPtr+1]}`;
                    html += cmp ? ` → candies[${iPtr}] = max(cur, candies[${iPtr+1}]+1)` : ` → no change`;
                    html += `</span>`;
                }
                html += `</div>`;
            }
            
            // candies row — show as candy bars proportional to their count
            html += `<div class="array-section"><div class="array-label">candies 🍬 (assigned)</div><div class="array-visualization price-chart-viz">`;
            candies.forEach((val, idx) => {
                let classes = 'array-item price-bar';
                const barPct = (val / maxCandy) * 100;
                if (isComplete) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-2';
                html += `<div class="${classes}" style="--bar-h:${barPct}%"><span class="price-val">${val}</span><div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Bridge: Why this candy assignment?
            if (iPtr >= 0 && iPtr < ratings.length && !isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (isLeftPass && iPtr >= 1) {
                    const cmp = ratings[iPtr] > ratings[iPtr - 1];
                    if (cmp) {
                        html += `<span style="color:var(--accent-green);font-weight:600">rating ${ratings[iPtr]} > neighbor ${ratings[iPtr-1]}</span>`;
                        html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                        html += `<span style="color:var(--accent-green);font-weight:700">must give MORE than left → ${candies[iPtr]} candies</span>`;
                    } else {
                        html += `<span style="color:var(--accent-red);font-weight:600">rating ${ratings[iPtr]} ≤ neighbor ${ratings[iPtr-1]}</span>`;
                        html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                        html += `<span style="color:var(--text-muted)">no obligation from left side → keep ${candies[iPtr]}</span>`;
                    }
                } else if (isRightPass && iPtr < ratings.length - 1) {
                    const cmp = ratings[iPtr] > ratings[iPtr + 1];
                    if (cmp) {
                        html += `<span style="color:var(--accent-green);font-weight:600">rating ${ratings[iPtr]} > right neighbor ${ratings[iPtr+1]}</span>`;
                        html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                        html += `<span style="color:var(--accent-green);font-weight:700">must give MORE than right → max(${candies[iPtr]}, ${candies[iPtr+1]}+1)</span>`;
                    } else {
                        html += `<span style="color:var(--accent-red);font-weight:600">rating ${ratings[iPtr]} ≤ right neighbor ${ratings[iPtr+1]}</span>`;
                        html += `<span style="color:var(--text-muted);margin:0 6px">→</span>`;
                        html += `<span style="color:var(--text-muted)">no obligation from right side → keep ${candies[iPtr]}</span>`;
                    }
                } else {
                    html += `<span style="color:var(--accent-purple);font-weight:600">Setting up: everyone starts with 1 candy</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ All neighbors satisfied! candies = [${candies}] → total = ${total} 🍬</span>`;
                html += `</div></div>`;
            }
            
            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">pass</div>
                        <div class="pointer-detail-value p2">${isLeftPass ? 'Left →' : isRightPass ? '← Right' : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">total candies 🍬</div>
                        <div class="pointer-detail-value p-merge">${total}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }
        
        // Problem 18: Trapped Rainwater — height bars + water overlay + two pointers
        if (currentProbId === '18' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const leftMax = meta.leftMax ?? 0;
            const rightMax = meta.rightMax ?? 0;
            const waterTotal = meta.water ?? 0;
            const waterAt = state.nums2 || [];
            const isComplete = state.isComplete || false;
            const maxH = Math.max(...state.nums1, 1);

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-dual${sDenseClass}">`;

            // Height bars with water overlay
            html += `<div class="array-section"><div class="array-label">height — elevation map with trapped water</div><div class="array-visualization rain-viz">`;
            state.nums1.forEach((val, idx) => {
                let classes = 'array-item rain-bar';
                let pointerLabels = '';
                const wLevel = waterAt[idx] || 0;

                if (idx === lPtr && idx === rPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">L</div><div class="pointer-label p2 pair-right">R</div></div>`;
                } else if (idx === lPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">L</div>`;
                } else if (idx === rPtr) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">R</div>`;
                }

                if (isComplete && wLevel > 0) classes += ' water-cell';

                html += `<div class="${classes}" style="--bar-h:${(val / maxH) * 100}%;--water-h:${((val + wLevel) / maxH) * 100}%">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Water amount row
            html += `<div class="array-section"><div class="array-label">water trapped per index</div><div class="array-visualization">`;
            waterAt.forEach((val, idx) => {
                let classes = 'array-item';
                if (val > 0) classes += ' pointer-merge';
                html += `<div class="${classes}">${val}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Bridge: explain which pointer moves and why
            if (lPtr >= 0 && rPtr >= 0 && lPtr < rPtr && !isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (leftMax < rightMax) {
                    const trapped = leftMax - state.nums1[lPtr];
                    html += `<span style="color:var(--accent-blue);font-weight:600">leftMax(${leftMax})</span>`;
                    html += `<span style="color:var(--accent-red);margin:0 4px">&lt;</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">rightMax(${rightMax})</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→ move L right</span>`;
                    if (trapped > 0) {
                        html += `<span style="color:var(--accent-green);font-weight:700">+${trapped} water trapped</span>`;
                    }
                } else {
                    const trapped = rightMax - state.nums1[rPtr];
                    html += `<span style="color:var(--accent-blue);font-weight:600">leftMax(${leftMax})</span>`;
                    html += `<span style="color:var(--accent-green);margin:0 4px">≥</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">rightMax(${rightMax})</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→ move R left</span>`;
                    if (trapped > 0) {
                        html += `<span style="color:var(--accent-green);font-weight:700">+${trapped} water trapped</span>`;
                    }
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Total water trapped = ${waterTotal} units 💧</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">L (left)</div>
                        <div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">R (right)</div>
                        <div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">leftMax</div>
                        <div class="pointer-detail-value p1">${leftMax}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">rightMax</div>
                        <div class="pointer-detail-value p2">${rightMax}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">total water</div>
                        <div class="pointer-detail-value p-merge">${waterTotal}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 19: Decode Roman Numerals — value lookup + add/subtract bridge
        if (currentProbId === '19' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const total = meta.total ?? 0;
            const prev = meta.prev ?? 0;
            const prevSym = meta.prevSymbol ?? '—';
            const isComplete = state.isComplete || false;
            const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">Roman numeral — scan right to left (← direction)</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item roman-char';
                let pointerLabels = '';
                const val = romanMap[ch] || 0;

                // Already processed (to the right of i) → dim
                if (iPtr >= 0 && idx > iPtr) classes += ' visited-cell';
                if (isComplete) classes += ' pointer-merge';
                if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }

                // Show value under each symbol
                html += `<div class="${classes}">${ch}<div class="array-index" style="font-size:9px">${val}</div>${pointerLabels}</div>`;
            });

            html += `</div>`;

            // Value lookup table (compact)
            html += `<div style="display:flex;justify-content:center;gap:6px;margin:6px 0;flex-wrap:wrap;">`;
            ['I','V','X','L','C','D','M'].forEach(sym => {
                const v = romanMap[sym];
                const isActive = iPtr >= 0 && state.nums1[iPtr] === sym;
                html += `<span style="padding:2px 6px;border-radius:4px;font-size:10px;font-weight:600;${isActive ? 'background:var(--accent-blue);color:white;' : 'color:var(--text-muted);background:var(--overlay-light);'}">${sym}=${v}</span>`;
            });
            html += `</div>`;

            // Bridge: add/subtract decision
            if (iPtr >= 0 && iPtr < state.nums1.length && !isComplete) {
                const ch = state.nums1[iPtr];
                const curr = romanMap[ch] || 0;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">${ch}=${curr}</span>`;
                if (curr < prev) {
                    html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">< prev ${prevSym}=${prev}</span>`;
                    html += `<span style="color:var(--accent-red)">→ SUBTRACT! (like IV=4, XC=90)</span>`;
                    html += `<br><span style="color:var(--text-muted)">total = ${total + curr} − ${curr} = </span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:700">${total}</span>`;
                } else {
                    html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">≥ prev ${prevSym}=${prev}</span>`;
                    html += `<span style="color:var(--accent-green)">→ ADD normally</span>`;
                    html += `<br><span style="color:var(--text-muted)">total += ${curr} → </span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">${total}</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ "${state.nums1.join('')}" = ${total}</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (← scanner)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">prev</div>
                        <div class="pointer-detail-value p2">${prevSym}=${prev}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">total</div>
                        <div class="pointer-detail-value p-merge">${total}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 20: Encode to Roman — greedy subtraction bridge + result building
        if (currentProbId === '20' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const num = meta.num ?? 0;
            const result = meta.result ?? '';
            const original = meta.original ?? 0;
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;

            // Compact lookup table — pill badges (like #19)
            html += `<div class="array-section"><div class="array-label">value → symbol lookup (greedy: pick largest that fits)</div>`;
            html += `<div style="display:flex;justify-content:center;gap:5px;margin:8px 0;flex-wrap:wrap;padding:10px 12px;background:var(--overlay-subtle);border-radius:10px;border:1px solid var(--border-subtle);">`;
            state.nums1.forEach((val, idx) => {
                const sym = (state.nums2 || [])[idx] || '';
                const isActive = idx === iPtr;
                const isPassed = iPtr >= 0 && idx < iPtr;
                const isFit = isActive && num >= val;
                let pillStyle = 'padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;transition:all 0.2s;display:inline-flex;align-items:center;gap:3px;';
                if (isComplete) {
                    pillStyle += 'background:rgba(16,185,129,0.15);color:var(--accent-green);border:1px solid rgba(16,185,129,0.25);';
                } else if (isFit) {
                    pillStyle += 'background:rgba(59,130,246,0.2);color:var(--accent-blue);border:1px solid rgba(59,130,246,0.4);box-shadow:0 0 8px rgba(59,130,246,0.2);';
                } else if (isActive) {
                    pillStyle += 'background:rgba(249,115,22,0.15);color:var(--accent-orange);border:1px solid rgba(249,115,22,0.35);';
                } else if (isPassed) {
                    pillStyle += 'opacity:0.35;color:var(--text-muted);background:var(--overlay-subtle);border:1px solid var(--border-subtle);';
                } else {
                    pillStyle += 'color:var(--text-secondary);background:var(--overlay-light);border:1px solid var(--overlay-medium);';
                }
                html += `<span style="${pillStyle}"><strong>${sym}</strong><span style="font-size:10px;opacity:0.7;font-weight:400">${val}</span></span>`;
            });
            html += `</div></div>`;

            // Result building visualization
            html += `<div class="array-section"><div class="array-label">result being built: "<span style="color:var(--accent-green);font-weight:700">${result || ''}</span>"</div>`;
            if (result.length > 0) {
                html += `<div class="array-visualization" style="justify-content:center;">`;
                // Split into Roman symbols (handle two-char symbols like CM, XC)
                const romanSymbols = result.match(/(CM|CD|XC|XL|IX|IV|[MDCLXVI])/g) || [];
                romanSymbols.forEach((sym) => {
                    html += `<div class="array-item pointer-merge roman-char" style="min-width:36px;width:auto;max-width:none;aspect-ratio:auto;flex:0 0 auto;padding:8px 12px;">${sym}</div>`;
                });
                html += `</div>`;
            }
            html += `</div>`;

            // Bridge: subtraction step
            if (iPtr >= 0 && iPtr < state.nums1.length && !isComplete) {
                const val = state.nums1[iPtr];
                const sym = (state.nums2 || [])[iPtr] || '';
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (num >= val) {
                    html += `<span style="color:var(--accent-blue);font-weight:600">num = ${num}</span>`;
                    html += `<span style="color:var(--accent-green);margin:0 8px;font-weight:700">≥ ${val}</span>`;
                    html += `<span style="color:var(--text-muted)">→ append "${sym}", num − ${val} = </span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:700">${num - val}</span>`;
                } else {
                    html += `<span style="color:var(--accent-blue);font-weight:600">num = ${num}</span>`;
                    html += `<span style="color:var(--accent-red);margin:0 8px">< ${val}</span>`;
                    html += `<span style="color:var(--text-muted)">→ skip "${sym}", too large</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ ${original} → "${result}"</span>`;
                html += `</div></div>`;
            }

            // Progress bar showing remaining num
            if (!isComplete) {
                const pct = ((original - num) / original) * 100;
                html += `<div class="reach-bar-container">`;
                html += `<div class="reach-bar" style="width:${pct}%;background:var(--accent-green)"></div>`;
                html += `<span class="reach-bar-label">converted: ${original - num}/${original} (remaining: ${num})</span>`;
                html += `</div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (table index)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">remaining num</div>
                        <div class="pointer-detail-value p2">${num}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">result</div>
                        <div class="pointer-detail-value p-merge">"${result}"</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 21: Length of Final Word — phase-based visualization with word boundary bridge
        if (currentProbId === '21' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const wordLen = meta.length ?? 0;
            const isComplete = state.isComplete || false;
            const isSkipPhase = state.msg && (state.msg.includes('skip') || state.msg.includes('Trailing'));
            const isCountPhase = state.msg && (state.msg.includes('letter') || state.msg.includes('Phase 2') || state.msg.includes('count'));

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">string — scan from end: skip spaces, then count word chars ← </div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                // Highlight the counted word characters
                if (isComplete && wordLen > 0 && idx > iPtr && idx <= iPtr + wordLen) {
                    classes += ' pointer-merge';
                }
                // Spaces: muted + strikethrough feel
                if (ch === '␣') classes += ' space-char';
                // Already scanned past (right of i) but not part of word
                if (iPtr >= 0 && idx > iPtr && !isComplete && ch === '␣') classes += ' visited-cell';
                // Currently counting characters
                if (isCountPhase && iPtr >= 0 && idx > iPtr && idx <= iPtr + wordLen + 1 && ch !== '␣') {
                    classes += ' pointer-2';
                }

                if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }

                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Phase indicator bridge
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (isSkipPhase) {
                html += `<span style="color:var(--accent-orange);font-weight:600">Phase 1: Skip trailing spaces →→→</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">(scanning right to left)</span>`;
            } else if (isCountPhase && !isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:600">Phase 2: Count word characters ←←←</span>`;
                html += `<span style="color:var(--accent-purple);margin-left:8px;font-weight:700">length = ${wordLen}</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Last word length = ${wordLen}</span>`;
            } else {
                html += `<span style="color:var(--text-muted)">Starting from end of string…</span>`;
            }
            html += `</div></div>`;

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (← scanner)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">length</div>
                        <div class="pointer-detail-value p-merge">${wordLen}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 22: Common Prefix Finder — vertical scan with all strings aligned
        if (currentProbId === '22' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const prefix = meta.prefix ?? '';
            const strs = meta.strs || [];
            const isComplete = state.isComplete || false;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">Vertical scan — compare column by column across all strings</div>`;

            // Show ALL strings vertically aligned
            strs.forEach((str, sIdx) => {
                const chars = str.split('');
                html += `<div class="array-visualization" style="margin-bottom:2px;">`;
                html += `<div class="array-item" style="min-width:50px;font-size:10px;opacity:0.6;border:none;">strs[${sIdx}]</div>`;
                chars.forEach((ch, cIdx) => {
                    let classes = 'array-item';
                    // Prefix region: green
                    if (cIdx < prefix.length) classes += ' pointer-merge';
                    // Current column being checked
                    if (cIdx === iPtr && !isComplete) classes += ' pointer-1';
                    // Mismatch column
                    if (cIdx === iPtr && isComplete && cIdx >= prefix.length) classes += ' pointer-2';
                    html += `<div class="${classes}">${ch}${cIdx === iPtr && sIdx === 0 ? '<div class="pointer-label p1">col</div>' : ''}</div>`;
                });
                // Pad shorter strings with empty
                for (let k = chars.length; k < strs[0].length; k++) {
                    let classes = 'array-item space-char';
                    if (k === iPtr) classes += ' pointer-1';
                    html += `<div class="${classes}">—</div>`;
                }
                html += `</div>`;
            });

            // Column index row
            html += `<div class="array-visualization" style="margin-top:2px;">`;
            html += `<div class="array-item" style="min-width:50px;border:none;opacity:0"></div>`;
            for (let k = 0; k < strs[0].length; k++) {
                const inPrefix = k < prefix.length;
                html += `<div class="array-item" style="font-size:9px;color:${inPrefix ? 'var(--accent-green)' : 'var(--text-muted)'};border-color:${k === iPtr ? 'var(--accent-blue)' : 'transparent'}">${k}</div>`;
            }
            html += `</div>`;

            // Bridge: match/mismatch at current column
            if (iPtr >= 0 && !isComplete) {
                const ch = strs[0][iPtr];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">Column ${iPtr}: char '${ch}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">→ check all strings at index ${iPtr}</span>`;
                // Check for mismatch
                let allMatch = true;
                for (let j = 1; j < strs.length; j++) {
                    if (iPtr >= strs[j].length || strs[j][iPtr] !== ch) { allMatch = false; break; }
                }
                if (allMatch) {
                    html += `<span style="color:var(--accent-green);font-weight:700">✓ all match!</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);font-weight:700">✗ mismatch → stop</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Longest common prefix = "${prefix}" (${prefix.length} chars)</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">column</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">prefix</div>
                        <div class="pointer-detail-value p-merge">"${prefix}"</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 23: Flip Words in Sentence — words array with L/R swap pointers
        if (currentProbId === '23' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const isComplete = state.isComplete || false;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">words — reverse word order using two pointers</div>`;
            html += `<div class="array-visualization" style="flex-wrap:wrap;">`;

            state.nums1.forEach((word, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                if (isComplete) classes += ' pointer-merge';

                if (idx === lPtr && idx === rPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">L</div><div class="pointer-label p2 pair-right">R</div></div>`;
                } else if (idx === lPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">L</div>`;
                } else if (idx === rPtr) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">R</div>`;
                }

                html += `<div class="${classes}" style="width:auto;max-width:none;aspect-ratio:auto;flex:0 0 auto;padding:8px 14px;font-size:14px;white-space:nowrap;">${word}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge: swap explanation
            if (lPtr >= 0 && rPtr >= 0 && lPtr < rPtr && !isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">"${state.nums1[lPtr]}"</span>`;
                html += `<span style="color:var(--accent-green);margin:0 4px;font-weight:700">⇄</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">"${state.nums1[rPtr]}"</span>`;
                html += `<span style="color:var(--text-muted);margin-left:8px;font-size:11px">then L++, R--</span>`;
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Words reversed: "${state.nums1.join(' ')}"</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">left</div>
                        <div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">right</div>
                        <div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 24: Zigzag Text Encoder — actual zigzag grid being built
        if (currentProbId === '24' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const curRow = meta.curRow ?? 0;
            const rows = meta.rows || [];
            const numRows = meta.numRows || 4;
            const goingDown = meta.goingDown ?? false;
            const isComplete = state.isComplete || false;
            const chars = state.nums1;

            const sItemCount = chars.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">string — distribute chars into ${numRows} zigzag rows (${goingDown ? '↓ going down' : '↑ going up'})</div>`;

            // Source string with pointer
            html += `<div class="array-visualization">`;
            chars.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (iPtr >= 0 && idx < iPtr) classes += ' visited-cell';
                if (isComplete) classes += ' pointer-merge';
                if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div>`;

            // Build the actual zigzag grid
            // First, compute which row each character was placed in
            const charRows = [];
            let r = 0, down = false;
            for (let k = 0; k < chars.length; k++) {
                charRows.push(r);
                if (r === 0 || r === numRows - 1) down = !down;
                r += down ? 1 : -1;
            }

            html += `<div style="margin-top:8px;">`;
            for (let row = 0; row < numRows; row++) {
                const isActiveRow = row === curRow && !isComplete;
                html += `<div class="array-visualization" style="margin-bottom:1px;">`;
                html += `<div class="array-item" style="min-width:32px;font-size:10px;opacity:0.5;border:none;color:${isActiveRow ? 'var(--accent-green)' : 'var(--text-muted)'}">R${row}</div>`;
                
                // Place chars in their zigzag positions
                const processedUpTo = iPtr >= 0 ? iPtr : -1;
                for (let k = 0; k < chars.length; k++) {
                    if (charRows[k] === row && k <= processedUpTo) {
                        let classes = 'array-item';
                        if (k === iPtr) classes += ' pointer-1';
                        if (isComplete) classes += ' pointer-merge';
                        html += `<div class="${classes}" style="min-width:24px;font-size:12px;">${chars[k]}</div>`;
                    } else if (charRows[k] === row) {
                        // Future position
                        html += `<div class="array-item" style="min-width:24px;opacity:0.15;font-size:12px;">·</div>`;
                    } else {
                        // Empty cell (char goes to a different row)
                        html += `<div style="min-width:24px;height:28px;display:inline-block;"></div>`;
                    }
                }
                html += `</div>`;
            }
            html += `</div>`;

            // Row contents built so far
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (!isComplete && iPtr >= 0) {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${chars[iPtr]}' → row ${curRow}</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">|</span>`;
                rows.forEach((r, rIdx) => {
                    html += `<span style="color:${rIdx === curRow ? 'var(--accent-green)' : 'var(--text-muted)'};font-size:11px;margin-right:8px;">R${rIdx}: "${r}"</span>`;
                });
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Concatenate rows: "${rows.join('')}"</span>`;
            } else {
                html += `<span style="color:var(--text-muted)">Waiting to start…</span>`;
            }
            html += `</div></div>`;

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (char index)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">curRow</div>
                        <div class="pointer-detail-value p2">row ${curRow}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">direction</div>
                        <div class="pointer-detail-value">${goingDown ? '↓ down' : '↑ up'}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 25: Find Needle in Haystack — char comparison bridge with match/mismatch
        if (currentProbId === '25' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const endPtr = state.pointers?.end ?? -1;
            const meta = state.arrayMeta || {};
            const needle = meta.needle || '';
            const nLen = meta.nLen || 0;
            const isComplete = state.isComplete || false;
            const hChars = state.nums1;
            const nChars = state.nums2 || [];

            const sItemCount = hChars.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-dual${sDenseClass}">`;

            // Haystack row with sliding window
            html += `<div class="array-section"><div class="array-label">haystack — slide window of size ${nLen}</div><div class="array-visualization">`;
            hChars.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && idx >= iPtr && idx < iPtr + nLen) classes += ' pointer-merge';
                if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }
                // Current window highlight
                if (!isComplete && iPtr >= 0 && idx >= iPtr && idx < iPtr + nLen) {
                    classes += ' pointer-2';
                }
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Needle row (aligned under current window position)
            html += `<div class="array-section"><div class="array-label">needle — match against window</div><div class="array-visualization">`;
            // Spacer to align under window
            if (iPtr > 0) {
                for (let k = 0; k < iPtr; k++) {
                    html += `<div style="min-width:36px;height:36px;display:inline-block;"></div>`;
                }
            }
            nChars.forEach((ch, idx) => {
                let classes = 'array-item';
                if (isComplete) classes += ' pointer-merge';
                // Char-by-char match indicator
                if (!isComplete && iPtr >= 0) {
                    const hChar = hChars[iPtr + idx];
                    if (hChar === ch) classes += ' highlight-char';
                }
                html += `<div class="${classes}">${ch}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Bridge: window comparison
            if (iPtr >= 0 && !isComplete) {
                const window = hChars.slice(iPtr, iPtr + nLen).join('');
                const matches = window === needle;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">"${window}"</span>`;
                if (matches) {
                    html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">===</span>`;
                    html += `<span style="color:var(--accent-green);font-weight:600">"${needle}" ✓ FOUND!</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);margin:0 6px">≠</span>`;
                    html += `<span style="color:var(--accent-orange);font-weight:600">"${needle}"</span>`;
                    // Show first mismatch position
                    for (let k = 0; k < nLen; k++) {
                        if (hChars[iPtr + k] !== nChars[k]) {
                            html += `<span style="color:var(--text-muted);margin-left:6px;font-size:11px">(mismatch at pos ${k}: '${hChars[iPtr+k]}' vs '${nChars[k]}')</span>`;
                            break;
                        }
                    }
                    html += `<span style="color:var(--text-muted);margin-left:6px">→ slide window right</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Found "${needle}" at index ${iPtr}!</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (window start)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">needle length</div>
                        <div class="pointer-detail-value p2">${nLen}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 26: Justified Text Formatter — line-building with character ruler
        if (currentProbId === '26' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const maxWidth = meta.maxWidth || 16;
            const currentLine = meta.currentLine || [];
            const lineLen = meta.lineLen ?? 0;
            const result = meta.result || [];
            const resultStr = meta.resultStr || '';
            const isComplete = state.isComplete || false;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">words — greedy line packing (maxWidth = ${maxWidth})</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((word, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                if (isComplete) classes += ' pointer-merge';
                if (iPtr >= 0 && idx < iPtr) classes += ' visited-cell';
                if (idx === iPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }

                html += `<div class="${classes}" style="width:auto;max-width:none;aspect-ratio:auto;flex:0 0 auto;padding:8px 14px;font-size:14px;white-space:nowrap;">${word}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Current line being built (with character width ruler)
            if (currentLine.length > 0 && !isComplete) {
                const spaceCount = currentLine.length - 1;
                const totalWithSpaces = lineLen + spaceCount;
                const remaining = maxWidth - totalWithSpaces;
                html += `<div style="margin:8px 0;padding:8px 12px;background:var(--overlay-subtle);border-radius:6px;border:1px solid var(--overlay-medium);">`;
                html += `<div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">📝 Current line being packed:</div>`;
                html += `<div style="font-family:monospace;font-size:13px;color:var(--accent-green);font-weight:600;">[${currentLine.join(' | ')}]</div>`;
                // Width bar
                const usedPct = (totalWithSpaces / maxWidth) * 100;
                html += `<div class="reach-bar-container" style="margin-top:4px;">`;
                html += `<div class="reach-bar" style="width:${usedPct}%;background:${remaining >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}"></div>`;
                html += `<span class="reach-bar-label">${totalWithSpaces}/${maxWidth} chars used${remaining > 0 ? ` (${remaining} remaining)` : remaining === 0 ? ' (FULL)' : ' (OVERFLOW)'}</span>`;
                html += `</div>`;
                html += `</div>`;
            }

            // Bridge: word fit check
            if (iPtr >= 0 && !isComplete) {
                const word = state.nums1[iPtr];
                const wouldBe = lineLen + word.length + currentLine.length;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (wouldBe > maxWidth && currentLine.length > 0) {
                    html += `<span style="color:var(--accent-orange);font-weight:600">"${word}" (len ${word.length})</span>`;
                    html += `<span style="color:var(--accent-red);margin:0 6px">→ ${wouldBe} > ${maxWidth}</span>`;
                    html += `<span style="color:var(--accent-red);font-weight:700">overflow! → flush & justify line</span>`;
                } else {
                    html += `<span style="color:var(--accent-green);font-weight:600">"${word}" (len ${word.length})</span>`;
                    html += `<span style="color:var(--accent-green);margin:0 6px">→ ${lineLen + word.length + Math.max(0, currentLine.length)} ≤ ${maxWidth}</span>`;
                    html += `<span style="color:var(--text-muted)">✓ fits! add to current line</span>`;
                }
                html += `</div></div>`;
            }

            // Already justified lines
            if (result.length > 0) {
                html += `<div style="margin-top:8px;">`;
                html += `<div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">✅ Justified output lines:</div>`;
                result.forEach((line, idx) => {
                    html += `<div style="font-family:monospace;font-size:12px;color:var(--accent-purple);padding:2px 8px;background:rgba(139,92,246,0.1);border-radius:4px;margin-bottom:2px;border:1px solid rgba(139,92,246,0.2);">"${line}" <span style="color:var(--text-muted);font-size:10px">(${line.length} chars)</span></div>`;
                });
                html += `</div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (word)</div>
                        <div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">current line words</div>
                        <div class="pointer-detail-value p2">${currentLine.length}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">lineLen</div>
                        <div class="pointer-detail-value p-merge">${lineLen}/${maxWidth}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 27: Mirror String Check — char array with L/R pointers
        if (currentProbId === '27' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const isComplete = state.isComplete || false;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">string — check palindrome (alphanumeric only)</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                if (isComplete) classes += ' pointer-merge';
                if (ch === '␣') classes += ' space-char';
                if (!/[a-zA-Z0-9␣]/.test(ch)) classes += ' space-char';

                if (idx === lPtr && idx === rPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">L</div><div class="pointer-label p2 pair-right">R</div></div>`;
                } else if (idx === lPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">L</div>`;
                } else if (idx === rPtr) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">R</div>`;
                }

                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge: compare L and R characters
            if (lPtr >= 0 && rPtr >= 0 && lPtr <= rPtr && !isComplete) {
                const lCh = state.nums1[lPtr];
                const rCh = state.nums1[rPtr];
                const isAlphaL = /[a-zA-Z0-9]/.test(lCh);
                const isAlphaR = /[a-zA-Z0-9]/.test(rCh);
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (!isAlphaL) {
                    html += `<span style="color:var(--accent-blue);font-weight:600">s[${lPtr}]='${lCh}'</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→ not alphanumeric, skip L++</span>`;
                } else if (!isAlphaR) {
                    html += `<span style="color:var(--accent-orange);font-weight:600">s[${rPtr}]='${rCh}'</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">→ not alphanumeric, skip R--</span>`;
                } else if (lCh.toLowerCase() === rCh.toLowerCase()) {
                    html += `<span style="color:var(--accent-blue);font-weight:600">s[${lPtr}]='${lCh}'</span>`;
                    html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">== s[${rPtr}]='${rCh}'</span>`;
                    html += `<span style="color:var(--accent-green)">✓ mirror match! L++, R--</span>`;
                } else {
                    html += `<span style="color:var(--accent-blue);font-weight:600">s[${lPtr}]='${lCh}'</span>`;
                    html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">≠ s[${rPtr}]='${rCh}'</span>`;
                    html += `<span style="color:var(--accent-red)">✗ NOT a palindrome!</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (state.msg && state.msg.includes('NOT')) {
                    html += `<span style="color:var(--accent-red);font-weight:700">✗ Characters didn't match — not a palindrome</span>`;
                } else {
                    html += `<span style="color:var(--accent-green);font-weight:700">✓ All characters matched — it IS a palindrome!</span>`;
                }
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">L (left)</div>
                        <div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">R (right)</div>
                        <div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 28: Subsequence Checker — matching bridge between aligned chars
        if (currentProbId === '28' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;  // s pointer
            const jPtr = state.pointers?.j ?? -1;  // t pointer
            const meta = state.arrayMeta || {};
            const isComplete = state.isComplete || false;
            const tChars = state.nums1;
            const sChars = state.nums2 || [];

            const sItemCount = tChars.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner array-dual${sDenseClass}">`;

            // t (main string) row
            html += `<div class="array-section"><div class="array-label">t (main string) — scan with j pointer</div><div class="array-visualization">`;
            tChars.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete) classes += ' pointer-merge';
                if (jPtr >= 0 && idx < jPtr) classes += ' visited-cell';
                // Highlight matched characters in t
                if (idx === jPtr && iPtr < sChars.length && sChars[iPtr] === ch) {
                    classes += ' highlight-char';
                }
                if (idx === jPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">j</div>`;
                }
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // s (subsequence) row
            html += `<div class="array-section"><div class="array-label">s (subsequence) — advance i only on match</div><div class="array-visualization">`;
            sChars.forEach((ch, idx) => {
                let classes = 'array-item';
                if (isComplete && iPtr >= sChars.length) classes += ' pointer-merge';
                // Matched chars (before i) 
                if (idx < iPtr) classes += ' pointer-merge';
                // Current s char waiting to match
                if (idx === iPtr) classes += ' pointer-2';
                html += `<div class="${classes}">${ch}${idx === iPtr ? '<div class="pointer-label p2">i</div>' : ''}<div class="array-index">${idx}</div></div>`;
            });
            html += `</div></div>`;

            // Bridge: match/skip decision
            if (jPtr >= 0 && jPtr < tChars.length && iPtr < sChars.length && !isComplete) {
                const tCh = tChars[jPtr];
                const sCh = sChars[iPtr];
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-blue);font-weight:600">t[${jPtr}]='${tCh}'</span>`;
                if (tCh === sCh) {
                    html += `<span style="color:var(--accent-green);margin:0 6px;font-weight:700">== s[${iPtr}]='${sCh}'</span>`;
                    html += `<span style="color:var(--accent-green)">✓ MATCH! advance both i++ and j++</span>`;
                    html += `<span style="color:var(--text-muted);margin-left:8px;font-size:11px">(${iPtr + 1}/${sChars.length} matched)</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);margin:0 6px">≠ s[${iPtr}]='${sCh}'</span>`;
                    html += `<span style="color:var(--text-muted)">→ skip, advance j++ only (keep looking for '${sCh}')</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                const isSubseq = iPtr >= sChars.length;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (isSubseq) {
                    html += `<span style="color:var(--accent-green);font-weight:700">✓ All ${sChars.length} chars matched! "${sChars.join('')}" IS a subsequence of "${tChars.join('')}"</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);font-weight:700">✗ Only matched ${iPtr}/${sChars.length} chars — NOT a subsequence</span>`;
                }
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (s pointer)</div>
                        <div class="pointer-detail-value p2">${iPtr >= 0 ? `idx ${iPtr}/${sChars.length}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">j (t pointer)</div>
                        <div class="pointer-detail-value p1">${jPtr >= 0 ? `idx ${jPtr}` : '—'}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 29: Sorted Pair Sum — array with L/R two pointers + sum bridge + move hints
        if (currentProbId === '29' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const target = meta.target ?? 0;
            const curSum = meta.curSum ?? 0;
            const sumDir = meta.sumDirection || '';   // 'low' | 'high' | 'match' | ''
            const lVal = meta.lVal;
            const rVal = meta.rVal;
            const isComplete = state.isComplete || false;
            const showBridge = lPtr >= 0 && rPtr >= 0 && lPtr !== rPtr && curSum > 0;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">numbers (sorted) — find two that sum to ${target}</div>`;
            html += `<div class="array-visualization sum-pair-viz">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                if (isComplete && (idx === lPtr || idx === rPtr)) classes += ' pointer-merge';

                if (idx === lPtr && idx === rPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">L</div><div class="pointer-label p2 pair-right">R</div></div>`;
                } else if (idx === lPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">L</div>`;
                } else if (idx === rPtr) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">R</div>`;
                }

                // Bridge anchor data attributes for L and R
                const anchorAttr = (idx === lPtr) ? ' data-bridge="L"' : (idx === rPtr) ? ' data-bridge="R"' : '';

                html += `<div class="${classes}"${anchorAttr}>${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Sum bridge between L and R — with inline move hint
            if (showBridge) {
                const bridgeClass = sumDir === 'match' ? 'sum-bridge-match' : sumDir === 'low' ? 'sum-bridge-low' : sumDir === 'high' ? 'sum-bridge-high' : '';
                html += `<div class="sum-bridge ${bridgeClass}">`;
                html += `<div class="sum-bridge-label">`;
                html += `<span class="sum-bridge-val sum-bridge-lval">${lVal ?? '?'}</span>`;
                html += `<span class="sum-bridge-op">+</span>`;
                html += `<span class="sum-bridge-val sum-bridge-rval">${rVal ?? '?'}</span>`;
                html += `<span class="sum-bridge-eq">=</span>`;
                html += `<span class="sum-bridge-result">${curSum}</span>`;
                if (sumDir === 'low') html += `<span class="sum-bridge-cmp">&lt;</span><span class="sum-bridge-target">${target}</span>`;
                else if (sumDir === 'high') html += `<span class="sum-bridge-cmp">&gt;</span><span class="sum-bridge-target">${target}</span>`;
                else if (sumDir === 'match') html += `<span class="sum-bridge-cmp sum-bridge-cmp-match">=</span><span class="sum-bridge-target">${target}</span><span class="sum-bridge-cmp sum-bridge-cmp-match">✓</span>`;
                // Inline move hint next to the addition
                if (sumDir === 'low') html += `<span class="move-hint move-hint-right">→ L++</span>`;
                else if (sumDir === 'high') html += `<span class="move-hint move-hint-left">R-- ←</span>`;
                html += `</div>`;
                html += `</div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">L (left)</div>
                        <div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">R (right)</div>
                        <div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">target</div>
                        <div class="pointer-detail-value p-green">${target}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">curSum</div>
                        <div class="pointer-detail-value p-purple">${curSum}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 30: Widest Water Container — height bars with L/R pointers
        if (currentProbId === '30' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const maxWater = meta.maxWater ?? 0;
            const isComplete = state.isComplete || false;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">height — find container with most water</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                if (isComplete && (idx === lPtr || idx === rPtr)) classes += ' pointer-merge';

                if (idx === lPtr && idx === rPtr) {
                    classes += ' pointer-1 pointer-2';
                    pointerLabels = `<div class="pointer-label-pair"><div class="pointer-label p1 pair-left">L</div><div class="pointer-label p2 pair-right">R</div></div>`;
                } else if (idx === lPtr) {
                    classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">L</div>`;
                } else if (idx === rPtr) {
                    classes += ' pointer-2';
                    pointerLabels = `<div class="pointer-label p2">R</div>`;
                }

                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge: area calculation
            if (lPtr >= 0 && rPtr >= 0 && lPtr < rPtr && !isComplete) {
                const hL = state.nums1[lPtr];
                const hR = state.nums1[rPtr];
                const minH = Math.min(hL, hR);
                const width = rPtr - lPtr;
                const area = minH * width;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted)">area = min(</span>`;
                html += `<span style="color:var(--accent-blue);font-weight:600">${hL}</span>`;
                html += `<span style="color:var(--text-muted)">,</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">${hR}</span>`;
                html += `<span style="color:var(--text-muted)">) × (${rPtr}−${lPtr}) =</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700;margin:0 4px">${minH} × ${width} = ${area}</span>`;
                if (area >= maxWater) {
                    html += `<span style="color:var(--accent-green);font-weight:700">NEW BEST! 🎯</span>`;
                }
                html += `</div></div>`;
                // Move hint
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (hL < hR) {
                    html += `<span style="color:var(--accent-blue)">h[L]=${hL}</span>`;
                    html += `<span style="color:var(--accent-red);margin:0 4px">&lt;</span>`;
                    html += `<span style="color:var(--accent-orange)">h[R]=${hR}</span>`;
                    html += `<span class="move-hint" style="color:var(--accent-blue)">→ move L right (shorter side)</span>`;
                } else {
                    html += `<span style="color:var(--accent-blue)">h[L]=${hL}</span>`;
                    html += `<span style="color:var(--accent-green);margin:0 4px">≥</span>`;
                    html += `<span style="color:var(--accent-orange)">h[R]=${hR}</span>`;
                    html += `<span class="move-hint" style="color:var(--accent-orange)">→ move R left (shorter side)</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Maximum water = ${maxWater}</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">L (left)</div>
                        <div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">R (right)</div>
                        <div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">maxWater</div>
                        <div class="pointer-detail-value p-merge">${maxWater}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 31: Triple Zero Sum — sorted array with i fixed + L/R two pointers
        if (currentProbId === '31' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const resultStr = meta.result || '';
            const triplets = meta.triplets ?? 0;
            const isComplete = state.isComplete || false;

            const sItemCount = state.nums1.length;
            const sDenseClass = sItemCount >= 9 ? ' array-dense' : '';
            let html = `<div class="array-inner${sDenseClass}">`;
            html += `<div class="array-label">nums (sorted) — find all unique triplets summing to 0</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';

                if (isComplete) classes += ' pointer-merge';

                if (idx === iPtr) {
                    classes += ' pointer-merge';
                    pointerLabels = `<div class="pointer-label p-merge">i</div>`;
                }
                if (idx === lPtr) {
                    classes += ' pointer-1';
                    pointerLabels += `<div class="pointer-label p1">L</div>`;
                }
                if (idx === rPtr) {
                    classes += ' pointer-2';
                    pointerLabels += `<div class="pointer-label p2">R</div>`;
                }

                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge: sum calculation
            if (iPtr >= 0 && lPtr >= 0 && rPtr >= 0 && !isComplete) {
                const valI = state.nums1[iPtr];
                const valL = state.nums1[lPtr];
                const valR = state.nums1[rPtr];
                const sum = valI + valL + valR;
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-orange);font-weight:600">${valI}</span>`;
                html += `<span class="sum-bridge-op">+</span>`;
                html += `<span style="color:var(--accent-blue);font-weight:600">${valL}</span>`;
                html += `<span class="sum-bridge-op">+</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:600">${valR}</span>`;
                html += `<span class="sum-bridge-eq">=</span>`;
                html += `<span style="color:${sum === 0 ? 'var(--accent-green)' : sum < 0 ? 'var(--accent-blue)' : 'var(--accent-red)'};font-weight:700">${sum}</span>`;
                if (sum === 0) {
                    html += `<span style="color:var(--accent-green);margin-left:8px;font-weight:700">TRIPLET FOUND! 🎯</span>`;
                } else if (sum < 0) {
                    html += `<span class="move-hint" style="color:var(--accent-blue)">→ too small, move L right</span>`;
                } else {
                    html += `<span class="move-hint" style="color:var(--accent-orange)">→ too big, move R left</span>`;
                }
                html += `</div></div>`;
            } else if (isComplete) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Found ${triplets} triplet${triplets !== 1 ? 's' : ''}: ${resultStr || 'none'}</span>`;
                html += `</div></div>`;
            }

            html += `
                <div class="pointer-info">
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">i (fixed)</div>
                        <div class="pointer-detail-value p-merge">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">L (left)</div>
                        <div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">R (right)</div>
                        <div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div>
                    </div>
                    <div class="pointer-detail">
                        <div class="pointer-detail-label">triplets</div>
                        <div class="pointer-detail-value">${triplets}</div>
                    </div>
                </div>
            `;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 32: Smallest Subarray Sum — sliding window with L/R
        if (currentProbId === '32' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const target = meta.target ?? 0;
            const total = meta.total ?? 0;
            const res = meta.res ?? '∞';
            const action = meta.action || '';
            const windowItems = meta.windowItems || [];
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">nums — find smallest subarray with sum ≥ <span style="color:var(--accent-green);font-weight:700">${target}</span></div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && idx >= lPtr && idx <= rPtr) classes += ' pointer-merge';
                if (idx >= lPtr && idx <= rPtr && lPtr >= 0 && rPtr >= 0 && !isComplete) classes += ' active-window';
                if (idx === lPtr) { classes += ' pointer-1'; pointerLabels += `<div class="pointer-label p1">L</div>`; }
                if (idx === rPtr) { classes += ' pointer-2'; pointerLabels += `<div class="pointer-label p2">R</div>`; }
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;
            // Visual bridge showing sum comparison — the WHY
            if (lPtr >= 0 && rPtr >= 0) {
                const sumStr = windowItems.join(' + ');
                if (total >= target) {
                    html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                    html += `<span style="color:var(--text-muted);font-size:11px">${sumStr} =</span> `;
                    html += `<span class="sum-bridge-result" style="color:var(--accent-purple);font-weight:700">${total}</span>`;
                    html += `<span class="sum-bridge-cmp" style="color:var(--accent-green)"> ≥ ${target} ✓</span>`;
                    html += `<span class="move-hint" style="color:var(--accent-blue)">→ shrink L to minimize</span>`;
                    html += `</div></div>`;
                } else {
                    html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                    html += `<span style="color:var(--text-muted);font-size:11px">${sumStr} =</span> `;
                    html += `<span class="sum-bridge-result" style="color:var(--accent-purple);font-weight:700">${total}</span>`;
                    html += `<span class="sum-bridge-cmp" style="color:var(--accent-red)"> &lt; ${target}</span>`;
                    html += `<span class="move-hint" style="color:var(--accent-orange)">→ expand R to grow sum</span>`;
                    html += `</div></div>`;
                }
            }
            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">L</div><div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">R</div><div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">window sum</div><div class="pointer-detail-value p-purple">${total}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">target</div><div class="pointer-detail-value p-green">${target}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">best len</div><div class="pointer-detail-value p-merge">${res}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 33: Longest Unique Substring — sliding window on chars
        if (currentProbId === '33' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const res = meta.res ?? 0;
            const windowChars = meta.windowChars ?? '';
            const action = meta.action || '';
            const dupChar = meta.dupChar || '';
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">s — find longest substring without repeating characters</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && idx >= lPtr && idx <= rPtr) classes += ' pointer-merge';
                if (idx >= lPtr && idx <= rPtr && lPtr >= 0 && rPtr >= 0 && !isComplete) classes += ' active-window';
                // Highlight the duplicate char in red
                if (dupChar && ch === dupChar && idx >= lPtr && idx <= rPtr && !isComplete && action === 'duplicate') classes += ' pointer-merge-alt';
                if (idx === lPtr) { classes += ' pointer-1'; pointerLabels += `<div class="pointer-label p1">L</div>`; }
                if (idx === rPtr) { classes += ' pointer-2'; pointerLabels += `<div class="pointer-label p2">R</div>`; }
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;
            // Visual bridge showing window uniqueness check
            if (lPtr >= 0 && rPtr >= 0) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                if (action === 'duplicate' || action === 'shrink') {
                    html += `<span style="color:var(--accent-red);font-weight:700">'${dupChar}' duplicate!</span>`;
                    html += `<span class="move-hint" style="color:var(--accent-blue)">→ shrink L until removed</span>`;
                } else {
                    html += `<span style="color:var(--accent-green)">all unique ✓</span>`;
                    html += `<span style="color:var(--text-muted);margin-left:6px">window len = ${rPtr - lPtr + 1}</span>`;
                }
                html += `</div></div>`;
            }

            // HashSet bucket for window chars
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-set">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> charSet <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (!windowChars || windowChars.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                windowChars.split('').forEach(ch => {
                    let cls = 'ds-item ds-set-item';
                    if (ch === dupChar && (action === 'duplicate' || action === 'shrink')) cls += ' ds-miss';
                    html += `<span class="${cls}">${ch}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">L</div><div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">R</div><div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">best</div><div class="pointer-detail-value p-green">${res}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 34: Longest Repeating After Replace — sliding window
        if (currentProbId === '34' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const res = meta.res ?? 0;
            const maxf = meta.maxf ?? 0;
            const k = meta.k ?? 0;
            const counts = meta.counts || {};
            const dominantChar = meta.dominantChar || '?';
            const replacements = meta.replacements ?? 0;
            const action = meta.action || '';
            const isComplete = state.isComplete || false;
            const wLen = (lPtr >= 0 && rPtr >= 0) ? rPtr - lPtr + 1 : 0;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">s — longest substring of same char with ≤ <span style="color:var(--accent-green);font-weight:700">${k}</span> replacement(s)</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && idx >= lPtr && idx <= rPtr) classes += ' pointer-merge';
                if (idx >= lPtr && idx <= rPtr && lPtr >= 0 && rPtr >= 0 && !isComplete) {
                    classes += ' active-window';
                    // Highlight non-dominant chars (these are the "replacements")
                    if (ch !== dominantChar && wLen > 0) classes += ' highlight-char';
                }
                if (idx === lPtr) { classes += ' pointer-1'; pointerLabels += `<div class="pointer-label p1">L</div>`; }
                if (idx === rPtr) { classes += ' pointer-2'; pointerLabels += `<div class="pointer-label p2">R</div>`; }
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;
            // Visual bridge — the key equation
            if (lPtr >= 0 && rPtr >= 0 && wLen > 0) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted);font-size:11px">window ${wLen} − freq('${dominantChar}')×${maxf} =</span> `;
                html += `<span style="color:var(--accent-purple);font-weight:700">${replacements} replacements</span>`;
                if (replacements <= k) {
                    html += `<span style="color:var(--accent-green)"> ≤ ${k} ✓ valid</span>`;
                } else {
                    html += `<span style="color:var(--accent-red)"> > ${k} ✗</span>`;
                    html += `<span class="move-hint" style="color:var(--accent-blue)">→ shrink L</span>`;
                }
                html += `</div></div>`;
            }

            // HashMap bucket for character counts
            const countEntries = Object.entries(counts);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> counts <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (countEntries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                countEntries.forEach(([ch, v]) => {
                    let cls = 'ds-item ds-map-item';
                    if (ch === dominantChar) cls += ' ds-active';
                    html += `<span class="${cls}">${ch}→${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">L</div><div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">R</div><div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">most freq</div><div class="pointer-detail-value p-purple">'${dominantChar}'×${maxf}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">replacements</div><div class="pointer-detail-value ${replacements <= k ? 'p-green' : 'p-merge'}">${replacements}/${k}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">best</div><div class="pointer-detail-value p-merge">${res}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 35: Minimum Window Match — sliding window
        if (currentProbId === '35' && state.nums1) {
            const lPtr = state.pointers?.l ?? -1;
            const rPtr = state.pointers?.r ?? -1;
            const meta = state.arrayMeta || {};
            const have = meta.have ?? 0;
            const total = meta.total ?? 0;
            const res = meta.res ?? '∞';
            const resStr = meta.resStr ?? '';
            const t = meta.t ?? '';
            const needStatus = meta.needStatus || '';
            const action = meta.action || '';
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">s — find smallest window containing all of "<span style="color:var(--accent-green);font-weight:700">${t}</span>"</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && resStr && idx >= lPtr && idx <= rPtr) classes += ' pointer-merge';
                if (idx >= lPtr && idx <= rPtr && lPtr >= 0 && rPtr >= 0 && !isComplete) classes += ' active-window';
                if (t.includes(ch)) classes += ' highlight-char';
                if (idx === lPtr) { classes += ' pointer-1'; pointerLabels += `<div class="pointer-label p1">L</div>`; }
                if (idx === rPtr) { classes += ' pointer-2'; pointerLabels += `<div class="pointer-label p2">R</div>`; }
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;
            // Scoreboard showing which needed chars we have
            if (needStatus) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted);font-size:11px">need:</span> `;
                needStatus.split(' ').forEach(part => {
                    const hasCheck = part.includes('✓');
                    html += `<span style="color:${hasCheck ? 'var(--accent-green)' : 'var(--accent-red)'};margin:0 3px;font-size:12px;font-weight:600">${part}</span>`;
                });
                if (have === total && lPtr >= 0) {
                    html += `<span class="move-hint" style="color:var(--accent-blue)">→ shrink L to minimize</span>`;
                } else {
                    html += `<span class="move-hint" style="color:var(--accent-orange)">→ expand R to collect</span>`;
                }
                html += `</div></div>`;
            }
            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">L</div><div class="pointer-detail-value p1">${lPtr >= 0 ? `idx ${lPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">R</div><div class="pointer-detail-value p2">${rPtr >= 0 ? `idx ${rPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">matched</div><div class="pointer-detail-value p-purple">${have}/${total}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">best window</div><div class="pointer-detail-value p-green">${resStr ? `"${resStr}" (${res})` : '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 36: Valid Parentheses — chars with visual stack
        if (currentProbId === '36' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const stack = meta.stack || [];
            const action = meta.action || '';
            const matchPair = meta.matchPair || '';
            const currentChar = meta.currentChar || '';
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">s — validate brackets using a stack</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && action === 'valid') classes += ' pointer-merge';
                if (isComplete && action === 'invalid') classes += ' pointer-merge-alt';
                if (idx === iPtr) {
                    if (action === 'push') classes += ' pointer-1';
                    else if (action === 'pop') classes += ' pointer-merge';
                    else if (action === 'mismatch') classes += ' pointer-merge-alt';
                    else classes += ' pointer-1';
                    pointerLabels = `<div class="pointer-label p1">i</div>`;
                }
                if (idx < iPtr) classes += ' visited';
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Visual stack — render as horizontal boxes growing right (like a visual stack)
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            html += `<span style="color:var(--text-muted);font-size:11px;margin-right:6px">stack:</span>`;
            if (stack.length === 0) {
                html += `<span style="color:var(--text-muted);font-style:italic">empty</span>`;
            } else {
                stack.forEach((ch, si) => {
                    const isTop = si === stack.length - 1;
                    html += `<span style="display:inline-block;padding:2px 8px;margin:0 2px;border-radius:4px;font-weight:700;font-size:14px;border:1px solid ${isTop ? 'var(--accent-purple)' : 'var(--border-subtle)'};color:${isTop ? 'var(--accent-purple)' : 'var(--text-muted)'};background:${isTop ? 'rgba(139,92,246,0.1)' : 'transparent'}">${ch}</span>`;
                });
            }
            if (action === 'push') {
                html += `<span style="color:var(--accent-green);margin-left:8px;font-size:12px">← pushed '${currentChar}'</span>`;
            } else if (action === 'pop') {
                html += `<span style="color:var(--accent-green);margin-left:8px;font-size:12px">✓ matched ${matchPair}</span>`;
            } else if (action === 'mismatch') {
                html += `<span style="color:var(--accent-red);margin-left:8px;font-size:12px">✗ mismatch!</span>`;
            }
            html += `</div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">action</div><div class="pointer-detail-value ${action === 'push' ? 'p1' : action === 'pop' ? 'p-green' : action === 'mismatch' ? 'p-merge' : ''}">${action || '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">stack size</div><div class="pointer-detail-value p-purple">${stack.length}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 37: Spiral Matrix — grid with direction bridge
        if (currentProbId === '37' && state.nums1) {
            const meta = state.arrayMeta || {};
            const matrix = meta.matrix || [];
            const m = meta.m || 0, n = meta.n || 0;
            const res = meta.res || [];
            const visited = meta.visited || [];
            const row = state.pointers?.row ?? -1;
            const col = state.pointers?.col ?? -1;
            const direction = meta.direction || '';
            const isComplete = state.isComplete || false;

            const dirArrow = { right: '→', down: '↓', left: '←', up: '↑' };
            const dirColor = { right: 'var(--accent-blue)', down: 'var(--accent-orange)', left: 'var(--accent-purple)', up: 'var(--accent-green)' };

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">matrix ${m}×${n} — peel layers in spiral: → ↓ ← ↑ repeat</div>`;
            html += `<div class="matrix-grid" style="display:grid;grid-template-columns:repeat(${n},1fr);gap:6px;max-width:${n * 64}px;margin:0 auto;">`;

            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    const idx = i * n + j;
                    let classes = 'array-item';
                    if (visited[idx]) classes += ' visited';
                    if (i === row && j === col) classes += ' pointer-1';
                    if (isComplete) classes += ' pointer-merge';
                    html += `<div class="${classes}" style="margin:0;min-width:44px;aspect-ratio:1;">${matrix[i]?.[j] ?? ''}</div>`;
                }
            }

            html += `</div>`;

            // Bridge: direction and current value
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (direction && row >= 0) {
                const dc = dirColor[direction] || 'var(--text-muted)';
                html += `<span style="color:${dc};font-weight:700;font-size:18px;">${dirArrow[direction] || ''}</span>`;
                html += `<span style="color:${dc};font-weight:600;margin-left:6px;">moving ${direction}</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">→ collect</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700">${matrix[row]?.[col] ?? '?'}</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">(${res.length}/${m * n})</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Spiral complete: [${res.join(', ')}]</span>`;
            }
            html += `</div></div>`;

            // Result bar
            if (res.length > 0 && !isComplete) {
                html += `<div style="display:flex;gap:3px;align-items:center;justify-content:center;margin:6px 0;flex-wrap:wrap;">`;
                html += `<span style="color:var(--text-muted);font-size:11px;font-weight:600;">result:</span>`;
                res.forEach((v, ri) => {
                    const isLast = ri === res.length - 1;
                    html += `<span style="background:${isLast ? 'var(--accent-green)' : 'var(--surface-2)'};color:${isLast ? '#fff' : 'var(--text-primary)'};padding:1px 6px;border-radius:3px;font-size:11px;font-weight:600;">${v}</span>`;
                });
                html += `</div>`;
            }

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">direction</div><div class="pointer-detail-value p1">${direction ? `${dirArrow[direction]} ${direction}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">collected</div><div class="pointer-detail-value p-purple">${res.length}/${m * n}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 38: Rotate Image — grid with phase bridge
        if (currentProbId === '38' && state.nums1) {
            const meta = state.arrayMeta || {};
            const matrix = meta.matrix || [];
            const n = meta.n || 0;
            const phase = meta.phase || '';
            const row = state.pointers?.row ?? -1;
            const col = state.pointers?.col ?? -1;
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">matrix ${n}×${n} — rotate 90° CW = transpose + reverse rows</div>`;
            html += `<div class="matrix-grid" style="display:grid;grid-template-columns:repeat(${n},1fr);gap:6px;max-width:${n * 64}px;margin:0 auto;">`;

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    let classes = 'array-item';
                    if (isComplete) classes += ' pointer-merge';
                    if (i === row && j === col) classes += ' pointer-1';
                    if (phase === 'transpose' && i === col && j === row && row >= 0) classes += ' pointer-2';
                    html += `<div class="${classes}" style="margin:0;min-width:44px;aspect-ratio:1;">${matrix[i]?.[j] ?? ''}</div>`;
                }
            }

            html += `</div>`;

            // Bridge: phase explanation
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (phase === 'transpose' && row >= 0) {
                html += `<span style="color:var(--accent-blue);font-weight:700">Step 1: Transpose</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">— swap [${row}][${col}] ↔ [${col}][${row}]</span>`;
                html += `<span style="color:var(--accent-purple)">(mirror across diagonal)</span>`;
            } else if (phase === 'transpose') {
                html += `<span style="color:var(--accent-blue);font-weight:700">Step 1: Transpose</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">— swap matrix[i][j] ↔ matrix[j][i]</span>`;
            } else if (phase === 'reverse' && row >= 0) {
                html += `<span style="color:var(--accent-orange);font-weight:700">Step 2: Reverse row ${row}</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">— flip left↔right to complete rotation</span>`;
            } else if (phase === 'reverse') {
                html += `<span style="color:var(--accent-orange);font-weight:700">Step 2: Reverse each row</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Matrix rotated 90° clockwise!</span>`;
            }
            html += `</div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">phase</div><div class="pointer-detail-value p1">${phase === 'transpose' ? '1. Transpose' : phase === 'reverse' ? '2. Reverse rows' : phase || '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">cell</div><div class="pointer-detail-value p-purple">${row >= 0 ? `[${row}][${col}]` : '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 39: Set Matrix Zeroes — grid with phase bridge
        if (currentProbId === '39' && state.nums1) {
            const meta = state.arrayMeta || {};
            const matrix = meta.matrix || [];
            const m = meta.m || 0, n = meta.n || 0;
            const phase = meta.phase || '';
            const row = state.pointers?.row ?? -1;
            const col = state.pointers?.col ?? -1;
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">matrix ${m}×${n} — use first row/col as markers, then zero in-place</div>`;
            html += `<div class="matrix-grid" style="display:grid;grid-template-columns:repeat(${n},1fr);gap:6px;max-width:${n * 64}px;margin:0 auto;">`;

            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    let classes = 'array-item';
                    const val = matrix[i]?.[j] ?? '';
                    if (val === 0) classes += ' pointer-merge';
                    // Highlight marker row/col
                    if ((i === 0 || j === 0) && phase === 'mark') classes += ' active-window';
                    if (i === row && j === col) classes += ' pointer-1';
                    html += `<div class="${classes}" style="margin:0;min-width:44px;aspect-ratio:1;">${val}</div>`;
                }
            }

            html += `</div>`;

            // Bridge
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (phase === 'scan') {
                html += `<span style="color:var(--accent-blue);font-weight:700">Scan:</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">check if first row/col already contain zeros</span>`;
            } else if (phase === 'mark' && row >= 0) {
                html += `<span style="color:var(--accent-orange);font-weight:700">Mark:</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">[${row}][${col}] = 0 → set</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:600">row ${row} marker</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">&</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:600">col ${col} marker</span>`;
            } else if (phase === 'mark') {
                html += `<span style="color:var(--accent-orange);font-weight:700">Phase 1: Mark</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">— record zeros in first row/col as markers</span>`;
            } else if (phase === 'zero' && row >= 0) {
                html += `<span style="color:var(--accent-red);font-weight:700">Zero:</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">[${row}][${col}] → 0 (marker says this row or col has a zero)</span>`;
            } else if (phase === 'zero') {
                html += `<span style="color:var(--accent-red);font-weight:700">Phase 2: Zero out</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">— set cells to 0 based on markers</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Matrix zeroed in-place using O(1) extra space!</span>`;
            }
            html += `</div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">phase</div><div class="pointer-detail-value p1">${phase === 'scan' ? 'Scan' : phase === 'mark' ? 'Mark' : phase === 'zero' ? 'Zero' : phase || '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">cell</div><div class="pointer-detail-value p-purple">${row >= 0 ? `[${row}][${col}]` : '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 40: Game of Life — grid with rules bridge
        if (currentProbId === '40' && state.nums1) {
            const meta = state.arrayMeta || {};
            const matrix = meta.matrix || [];
            const m = meta.m || 0, n = meta.n || 0;
            const phase = meta.phase || '';
            const row = state.pointers?.row ?? -1;
            const col = state.pointers?.col ?? -1;
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">board ${m}×${n} — Game of Life: encode next state in-place, then decode</div>`;
            html += `<div class="matrix-grid" style="display:grid;grid-template-columns:repeat(${n},1fr);gap:6px;max-width:${n * 64}px;margin:0 auto;">`;

            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    let classes = 'array-item';
                    const val = matrix[i]?.[j] ?? 0;
                    // Color coding: 0=dead, 1=alive, 2=born(was dead→alive), 3=survives(was alive→alive)
                    if (val === 1 || val === 3) classes += ' pointer-merge';
                    if (val === 2) classes += ' highlight-char';
                    if (i === row && j === col) classes += ' pointer-1';
                    const display = phase === 'decode' || phase === 'done' ? (val > 0 ? val : '·') : (val === 0 ? '·' : val === 1 ? '■' : val === 2 ? '★' : '■');
                    html += `<div class="${classes}" style="margin:0;min-width:44px;aspect-ratio:1;">${display}</div>`;
                }
            }

            html += `</div>`;

            // Bridge: explain rules
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (phase === 'encode' && row >= 0 && col >= 0) {
                const val = matrix[row]?.[col] ?? 0;
                const wasAlive = (val & 1) === 1 || val === 3;
                // Extract from step message if possible
                if (val === 3) {
                    html += `<span style="color:var(--accent-green);font-weight:700">[${row}][${col}] ■ alive</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">with 2–3 neighbors →</span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">SURVIVES (3)</span>`;
                } else if (val === 2) {
                    html += `<span style="color:var(--accent-blue);font-weight:700">[${row}][${col}] · dead</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">with exactly 3 neighbors →</span>`;
                    html += `<span style="color:var(--accent-green);font-weight:700">BORN! (2) ★</span>`;
                } else if (wasAlive) {
                    html += `<span style="color:var(--accent-red);font-weight:700">[${row}][${col}] ■ alive</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">under/overpopulated →</span>`;
                    html += `<span style="color:var(--accent-red);font-weight:700">DIES</span>`;
                } else {
                    html += `<span style="color:var(--text-muted)">[${row}][${col}] · dead</span>`;
                    html += `<span style="color:var(--text-muted);margin:0 6px">stays dead (not exactly 3 neighbors)</span>`;
                }
            } else if (phase === 'encode') {
                html += `<span style="color:var(--accent-orange);font-weight:700">Phase 1: Encode</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">— 2=born, 3=survives (store next state in 2nd bit)</span>`;
            } else if (phase === 'decode' && row >= 0) {
                html += `<span style="color:var(--accent-purple);font-weight:700">Phase 2: Decode</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">[${row}][${col}]: ${matrix[row]?.[col]} >> 1 = final state</span>`;
            } else if (phase === 'decode') {
                html += `<span style="color:var(--accent-purple);font-weight:700">Phase 2: Decode</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">— right shift each cell to get final state</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Next generation computed in-place!</span>`;
            }
            html += `</div></div>`;

            // Legend
            html += `<div style="display:flex;gap:12px;align-items:center;justify-content:center;margin:6px 0;flex-wrap:wrap;font-size:11px;">`;
            html += `<span style="color:var(--text-muted);">· dead</span>`;
            html += `<span style="color:var(--accent-green);">■ alive</span>`;
            html += `<span style="color:var(--accent-blue);">★ born</span>`;
            html += `<span style="color:var(--accent-red);">💀 dies</span>`;
            html += `</div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">phase</div><div class="pointer-detail-value p1">${phase === 'encode' ? '1. Encode' : phase === 'decode' ? '2. Decode' : phase || '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">cell</div><div class="pointer-detail-value p-purple">${row >= 0 ? `[${row}][${col}]` : '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 41: Ransom Note — visual frequency counter with consume bridge
        if (currentProbId === '41' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const count = meta.count || {};
            const source = meta.source || '';
            const action = meta.action || '';
            const currentChar = meta.currentChar || '';
            const isComplete = state.isComplete || false;
            const displayArr = source === 'note' ? (meta.ransomNote || '').split('') : (meta.magazine || '').split('');

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">${source === 'note' ? 'ransomNote' : 'magazine'} — ${source === 'note' ? 'consume letters from available counts' : 'count available letters'}</div>`;
            html += `<div class="array-visualization">`;

            displayArr.forEach((ch, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete) classes += meta.result ? ' pointer-merge' : ' pointer-merge-alt';
                if (idx === iPtr) { classes += ' pointer-1'; pointerLabels = `<div class="pointer-label p1">i</div>`; }
                if (idx < iPtr) classes += ' visited';
                html += `<div class="${classes}">${ch}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge: what's happening
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (action === 'count') {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${currentChar}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">→ count['${currentChar}'] + 1 =</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700">${count[currentChar] ?? 0}</span>`;
                html += `<span style="color:var(--text-muted);margin-left:4px">(building inventory)</span>`;
            } else if (action === 'consume') {
                html += `<span style="color:var(--accent-orange);font-weight:600">Need '${currentChar}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">→ count['${currentChar}'] − 1 =</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700">${count[currentChar] ?? 0} ✓</span>`;
            } else if (action === 'fail') {
                html += `<span style="color:var(--accent-red);font-weight:600">Need '${currentChar}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">but count['${currentChar}'] =</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700">0 — NONE LEFT!</span>`;
            } else if (isComplete) {
                html += meta.result
                    ? `<span style="color:var(--accent-green);font-weight:700">✓ All letters consumed — can construct!</span>`
                    : `<span style="color:var(--accent-red);font-weight:700">✗ Missing letters — cannot construct</span>`;
            }
            html += `</div></div>`;

            // HashMap bucket visual for frequency counter
            const entries = Object.entries(count);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> count <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (entries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                entries.forEach(([ch, v]) => {
                    let cls = 'ds-item ds-map-item';
                    if (ch === currentChar) cls += v <= 0 ? ' ds-miss' : ' ds-active';
                    html += `<span class="${cls}">${ch}→${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">phase</div><div class="pointer-detail-value p-green">${source === 'mag' ? 'counting magazine' : 'consuming for note'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 42: Isomorphic Strings — dual array with mapping bridge
        if (currentProbId === '42' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const mapST = meta.mapST || {};
            const action = meta.action || '';
            const charS = meta.charS || '';
            const charT = meta.charT || '';
            const conflictWith = meta.conflictWith || '';
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">s → t — each char in s must map to exactly one char in t (and vice versa)</div>`;

            // Show s
            html += `<div class="array-visualization">`;
            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                if (isComplete && meta.result) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-1';
                if (idx < iPtr) classes += ' visited';
                // Highlight mapped chars
                if (ch === charS && idx === iPtr) classes += ' highlight-char';
                html += `<div class="${classes}">${ch}<div class="array-index">s[${idx}]</div></div>`;
            });
            html += `</div>`;

            // Show t
            html += `<div class="array-visualization" style="margin-top:4px;">`;
            state.nums2.forEach((ch, idx) => {
                let classes = 'array-item';
                if (isComplete && meta.result) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-2';
                if (idx < iPtr) classes += ' visited';
                if (ch === charT && idx === iPtr) classes += ' highlight-char';
                html += `<div class="${classes}">${ch}<div class="array-index">t[${idx}]</div></div>`;
            });
            html += `</div>`;

            // Bridge: mapping explanation
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (action === 'map') {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${charS}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">↔</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">'${charT}'</span>`;
                html += `<span style="color:var(--accent-green);margin-left:6px;font-weight:600">✓ consistent mapping</span>`;
            } else if (action === 'conflict') {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${charS}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">→</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">'${charT}'</span>`;
                html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">CONFLICT!</span>`;
                html += `<span style="color:var(--text-muted)">already mapped to '${conflictWith}'</span>`;
            } else if (isComplete) {
                html += meta.result
                    ? `<span style="color:var(--accent-green);font-weight:700">✓ All mappings consistent — isomorphic!</span>`
                    : `<span style="color:var(--accent-red);font-weight:700">✗ Mapping conflict — not isomorphic</span>`;
            }
            html += `</div></div>`;

            // HashMap bucket visual for s→t mapping
            const mapEntries = Object.entries(mapST);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> s→t map <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (mapEntries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                mapEntries.forEach(([k, v]) => {
                    let cls = 'ds-item ds-map-item';
                    if (k === charS) cls += action === 'conflict' ? ' ds-miss' : ' ds-active';
                    html += `<span class="${cls}">${k}→${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">checking</div><div class="pointer-detail-value p-purple">${charS ? `'${charS}' ↔ '${charT}'` : '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 43: Word Pattern — pattern + words with mapping bridge
        if (currentProbId === '43' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const words = meta.words || [];
            const pToW = meta.pToW || {};
            const action = meta.action || '';
            const patChar = meta.patChar || '';
            const word = meta.word || '';
            const conflictWith = meta.conflictWith || '';
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">pattern → words — each pattern char maps to exactly one word (and vice versa)</div>`;

            // Show pattern
            html += `<div class="array-visualization">`;
            state.nums1.forEach((ch, idx) => {
                let classes = 'array-item';
                if (isComplete && meta.result) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-1';
                if (idx < iPtr) classes += ' visited';
                html += `<div class="${classes}">${ch}<div class="array-index">p[${idx}]</div></div>`;
            });
            html += `</div>`;

            // Show words
            html += `<div class="array-visualization" style="margin-top:4px;">`;
            words.forEach((w, idx) => {
                let classes = 'array-item';
                if (isComplete && meta.result) classes += ' pointer-merge';
                if (idx === iPtr) classes += ' pointer-2';
                if (idx < iPtr) classes += ' visited';
                html += `<div class="${classes}" style="min-width:${Math.max(36, w.length * 10)}px;font-size:11px;">${w}<div class="array-index">w[${idx}]</div></div>`;
            });
            html += `</div>`;

            // Bridge
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (action === 'map') {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${patChar}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">↔</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">"${word}"</span>`;
                html += `<span style="color:var(--accent-green);margin-left:6px;font-weight:600">✓ consistent</span>`;
            } else if (action === 'conflict') {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${patChar}'</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">→</span>`;
                html += `<span style="color:var(--accent-orange);font-weight:600">"${word}"</span>`;
                html += `<span style="color:var(--accent-red);margin:0 6px;font-weight:700">CONFLICT!</span>`;
                html += `<span style="color:var(--text-muted)">already mapped to "${conflictWith}"</span>`;
            } else if (isComplete) {
                html += meta.result
                    ? `<span style="color:var(--accent-green);font-weight:700">✓ All pattern↔word mappings consistent!</span>`
                    : `<span style="color:var(--accent-red);font-weight:700">✗ Pattern mapping conflict</span>`;
            }
            html += `</div></div>`;

            // HashMap bucket visual for pattern→word mapping
            const mapEntries = Object.entries(pToW);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> pattern→word <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (mapEntries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                mapEntries.forEach(([k, v]) => {
                    let cls = 'ds-item ds-map-item';
                    if (k === patChar) cls += action === 'conflict' ? ' ds-miss' : ' ds-active';
                    html += `<span class="${cls}">${k}→"${v}"</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">checking</div><div class="pointer-detail-value p-purple">${patChar ? `'${patChar}' ↔ "${word}"` : '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 44: Valid Anagram — char frequency with visual bars
        if (currentProbId === '44' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const count = meta.count || {};
            const source = meta.source || 's';
            const action = meta.action || '';
            const currentChar = meta.currentChar || '';
            const isComplete = state.isComplete || false;
            const displayArr = source === 's' ? (meta.s || '').split('') : (meta.t || '').split('');

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">${source === 's' ? `s="${meta.s}"` : `t="${meta.t}"`} — ${source === 's' ? 'count chars (+1)' : 'subtract chars (−1)'}</div>`;
            html += `<div class="array-visualization">`;

            displayArr.forEach((ch, idx) => {
                let classes = 'array-item';
                if (isComplete) classes += meta.result ? ' pointer-merge' : '';
                if (idx === iPtr) classes += ' pointer-1';
                if (idx < iPtr) classes += ' visited';
                html += `<div class="${classes}">${ch}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (action === 'add') {
                html += `<span style="color:var(--accent-blue);font-weight:600">'${currentChar}'</span>`;
                html += `<span style="color:var(--accent-green);margin:0 4px;font-weight:700">+1</span>`;
                html += `<span style="color:var(--text-muted)">→ count['${currentChar}'] = ${count[currentChar] ?? 0}</span>`;
                html += `<span style="color:var(--text-muted);margin-left:6px">(building frequency from s)</span>`;
            } else if (action === 'subtract') {
                html += `<span style="color:var(--accent-orange);font-weight:600">'${currentChar}'</span>`;
                html += `<span style="color:var(--accent-red);margin:0 4px;font-weight:700">−1</span>`;
                html += `<span style="color:var(--text-muted)">→ count['${currentChar}'] = ${count[currentChar] ?? 0}</span>`;
                html += `<span style="color:var(--accent-green);margin-left:6px">✓ still ≥ 0</span>`;
            } else if (action === 'fail') {
                html += `<span style="color:var(--accent-red);font-weight:600">'${currentChar}' −1 → ${count[currentChar] ?? 0}</span>`;
                html += `<span style="color:var(--accent-red);margin-left:6px;font-weight:700">< 0 — MORE in t than s! NOT anagram</span>`;
            } else if (isComplete) {
                html += meta.result
                    ? `<span style="color:var(--accent-green);font-weight:700">✓ All counts balanced to 0 — valid anagram!</span>`
                    : `<span style="color:var(--accent-red);font-weight:700">✗ Counts don't balance — not an anagram</span>`;
            }
            html += `</div></div>`;

            // HashMap bucket visual for frequency counter
            const entries = Object.entries(count);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> count <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (entries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                entries.forEach(([ch, v]) => {
                    let cls = 'ds-item ds-map-item';
                    if (ch === currentChar) cls += ' ds-active';
                    if (v < 0) cls += ' ds-miss';
                    else if (v === 0) cls = 'ds-item ds-map-item ds-active';
                    html += `<span class="${cls}">${ch}→${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">phase</div><div class="pointer-detail-value p-green">${source === 's' ? 'counting s (+1)' : 'verifying t (−1)'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 45: Group Anagrams — words with visual grouping buckets
        if (currentProbId === '45' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const groups = meta.groups || {};
            const action = meta.action || '';
            const currentKey = meta.currentKey || '';
            const wordToKey = meta.wordToKey || {};
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">strs — sort each word to create key, group by matching keys</div>`;
            html += `<div class="array-visualization">`;

            // Color palette for groups
            const groupColors = ['var(--accent-blue)', 'var(--accent-orange)', 'var(--accent-purple)', 'var(--accent-green)', 'var(--accent-red)', '#06b6d4'];
            const groupKeys = Object.keys(groups);

            state.nums1.forEach((word, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (idx === iPtr) { classes += ' pointer-1'; pointerLabels = `<div class="pointer-label p1">i</div>`; }
                if (idx < iPtr) classes += ' visited';
                // Color by group
                const key = wordToKey[word];
                const gIdx = groupKeys.indexOf(key);
                const borderColor = gIdx >= 0 ? groupColors[gIdx % groupColors.length] : '';
                const style = borderColor && idx <= iPtr ? `border-color:${borderColor};box-shadow:0 0 6px ${borderColor}40;` : '';
                html += `<div class="${classes}" style="min-width:${Math.max(36, word.length * 10)}px;font-size:12px;${style}">${word}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge: sort key explanation
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (iPtr >= 0 && iPtr < state.nums1.length && !isComplete) {
                const word = state.nums1[iPtr];
                html += `<span style="color:var(--accent-blue);font-weight:600">"${word}"</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">→ sort →</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700">"${currentKey}"</span>`;
                if (action === 'newgroup') {
                    html += `<span style="color:var(--accent-green);margin-left:6px;font-weight:600">NEW GROUP!</span>`;
                } else if (action === 'addtogroup') {
                    html += `<span style="color:var(--accent-orange);margin-left:6px;font-weight:600">→ add to existing group</span>`;
                }
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ ${groupKeys.length} groups found</span>`;
            }
            html += `</div></div>`;

            // Visual group buckets
            if (groupKeys.length > 0) {
                html += `<div style="display:flex;gap:10px;align-items:flex-start;justify-content:center;margin:8px 0;flex-wrap:wrap;">`;
                groupKeys.forEach((key, gi) => {
                    const color = groupColors[gi % groupColors.length];
                    const words = groups[key] || [];
                    html += `<div style="border:2px solid ${color};border-radius:8px;padding:6px 10px;background:${color}10;text-align:center;min-width:60px;">`;
                    html += `<div style="color:${color};font-size:10px;font-weight:700;margin-bottom:4px;">"${key}"</div>`;
                    words.forEach(w => {
                        html += `<div style="color:var(--text-primary);font-size:12px;font-weight:600;">${w}</div>`;
                    });
                    html += `</div>`;
                });
                html += `</div>`;
            }

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">sort key</div><div class="pointer-detail-value p-purple">"${currentKey || '—'}"</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">groups</div><div class="pointer-detail-value p-green">${groupKeys.length}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 46: Two Sum — array with hash map lookup
        if (currentProbId === '46' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const target = meta.target ?? 0;
            const seen = meta.seen || {};
            const complement = meta.complement;
            const currentVal = meta.currentVal;
            const action = meta.action || '';
            const foundIdx = meta.foundIdx;
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">nums — find two numbers that sum to <span style="color:var(--accent-green);font-weight:700">${target}</span></div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete && meta.result && (idx === meta.result[0] || idx === meta.result[1])) classes += ' pointer-merge';
                if (action === 'found' && idx === foundIdx) classes += ' pointer-2';
                if (idx === iPtr) { classes += ' pointer-1'; pointerLabels = `<div class="pointer-label p1">i</div>`; }
                if (idx < iPtr && !(action === 'found' && idx === foundIdx)) classes += ' visited';
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;
            // Visual bridge — the complement computation
            if (iPtr >= 0 && complement !== null && complement !== undefined) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--accent-green);font-weight:600">${target}</span>`;
                html += `<span class="sum-bridge-op">−</span>`;
                html += `<span style="color:var(--accent-blue);font-weight:700">${currentVal}</span>`;
                html += `<span class="sum-bridge-eq">=</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700">${complement}</span>`;
                if (action === 'found') {
                    html += `<span style="color:var(--accent-green);margin-left:8px;font-weight:700">✓ found in map at index ${foundIdx}!</span>`;
                } else {
                    html += `<span style="color:var(--accent-red);margin-left:8px">✗ not in map → store ${currentVal}</span>`;
                }
                html += `</div></div>`;
            }

            // HashMap bucket visual
            const seenEntries = Object.entries(seen);
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-map">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> seen <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (seenEntries.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                seenEntries.forEach(([val, idx]) => {
                    let cls = 'ds-item ds-map-item';
                    if (Number(val) === complement && action === 'found') cls += ' ds-active';
                    if (Number(val) === currentVal && action === 'store') cls += ' ds-ping';
                    html += `<span class="${cls}">${val}→i${idx}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">target</div><div class="pointer-detail-value p-green">${target}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">complement</div><div class="pointer-detail-value p-purple">${complement ?? '—'}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 47: Happy Number — digit squares chain
        if (currentProbId === '47') {
            const meta = state.arrayMeta || {};
            const n = meta.n ?? 0;
            const seen = meta.seen || [];
            const digits = meta.digits || [];
            const squares = meta.squares || [];
            const squareSum = meta.squareSum ?? 0;
            const chain = meta.chain || [];
            const action = meta.action || '';
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">n=${meta.startN} — repeatedly sum squares of digits until 1 (happy) or cycle (not)</div>`;

            // Show current number being decomposed into digit squares
            if (digits.length > 0) {
                html += `<div class="array-visualization">`;
                digits.forEach((d, idx) => {
                    let classes = 'array-item';
                    if (isComplete && n === 1) classes += ' pointer-merge';
                    html += `<div class="${classes}"><div style="font-size:11px;color:var(--text-muted)">${d}²</div><div style="font-size:16px;font-weight:700;color:var(--accent-purple)">${squares[idx] ?? d * d}</div><div class="array-index">${d}</div></div>`;
                });
                // Show the sum
                html += `<div class="array-item" style="border-color:var(--accent-green);color:var(--accent-green);font-weight:700">=<div style="font-size:16px">${squareSum}</div><div class="array-index">sum</div></div>`;
                html += `</div>`;
            }

            // Chain visualization — shows the journey
            if (chain.length > 0) {
                html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
                html += `<span style="color:var(--text-muted);font-size:11px;margin-right:4px">journey:</span>`;
                chain.forEach((num, ci) => {
                    if (ci > 0) html += `<span style="color:var(--text-muted);margin:0 2px">→</span>`;
                    const isCurrent = ci === chain.length - 1;
                    const color = num === 1 ? 'var(--accent-green)' : isCurrent ? 'var(--accent-purple)' : 'var(--text-muted)';
                    html += `<span style="color:${color};font-weight:${isCurrent ? '700' : '400'};font-size:${isCurrent ? '14px' : '12px'}">${num}</span>`;
                });
                if (n === 1) html += `<span style="color:var(--accent-green);margin-left:6px;font-weight:700">= 1 🎉 Happy!</span>`;
                else if (action === 'cycle') html += `<span style="color:var(--accent-red);margin-left:6px">🔄 cycle!</span>`;
                html += `</div></div>`;
            }

            // HashSet bucket for seen numbers
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-set">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> seen <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (seen.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                seen.forEach(v => {
                    let cls = 'ds-item ds-set-item';
                    if (v === squareSum && action === 'cycle') cls += ' ds-miss';
                    if (v === n) cls += ' ds-active';
                    html += `<span class="${cls}">${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">current n</div><div class="pointer-detail-value p-purple">${n}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">steps</div><div class="pointer-detail-value p-green">${seen.length}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 48: Contains Duplicate II — sliding window with HashSet bucket
        if (currentProbId === '48' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const k = meta.k ?? 0;
            const windowSet = meta.windowSet || [];
            const action = meta.action || '';
            const checkedVal = meta.checkedVal;
            const removedVal = meta.removedVal;
            const winStart = meta.winStart ?? 0;
            const winEnd = meta.winEnd ?? -1;
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">nums — duplicate within distance <span style="color:var(--accent-green);font-weight:700">k=${k}</span>? Uses a <span style="color:var(--accent-purple);font-weight:700">HashSet</span> as sliding window</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete) classes += ' pointer-merge';
                if (idx >= winStart && idx <= winEnd && !isComplete) classes += ' active-window';
                if (idx === iPtr) { classes += ' pointer-1'; pointerLabels = `<div class="pointer-label p1">i</div>`; }
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // Bridge
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (action === 'found') {
                html += `<span style="color:var(--accent-blue);font-weight:600">${checkedVal}</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">in</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700">windowSet</span>`;
                html += `<span style="color:var(--text-muted)">?</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700;margin-left:6px">YES → DUPLICATE FOUND! 🎯</span>`;
            } else if (action === 'add') {
                html += `<span style="color:var(--accent-blue);font-weight:600">${checkedVal}</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">in</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700">windowSet</span>`;
                html += `<span style="color:var(--text-muted)">?</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700;margin:0 6px">NO</span>`;
                html += `<span style="color:var(--text-muted)">→ add to set</span>`;
            } else if (action === 'evict') {
                html += `<span style="color:var(--accent-orange);font-weight:600">window size > k=${k}</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">→ evict</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700">${removedVal}</span>`;
                html += `<span style="color:var(--text-muted);margin-left:4px">from set (oldest element)</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">No duplicates found within distance k=${k}</span>`;
            }
            html += `</div></div>`;

            // HashSet bucket visual
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-set">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> windowSet <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (windowSet.length === 0) {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            } else {
                windowSet.forEach(v => {
                    let cls = 'ds-item ds-set-item';
                    if (v === checkedVal && action === 'found') cls += ' ds-active';
                    if (v === removedVal && action === 'evict') cls += ' ds-miss';
                    html += `<span class="${cls}">${v}</span>`;
                });
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">i</div><div class="pointer-detail-value p1">${iPtr >= 0 ? `idx ${iPtr}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">window</div><div class="pointer-detail-value p-purple">[${winStart}..${winEnd}]</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">k</div><div class="pointer-detail-value p-green">${k}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // Problem 49: Longest Consecutive Sequence — HashSet bucket + chain bar
        if (currentProbId === '49' && state.nums1) {
            const iPtr = state.pointers?.i ?? -1;
            const meta = state.arrayMeta || {};
            const longest = meta.longest ?? 0;
            const currentSeq = meta.currentSeq || [];
            const currentNum = meta.currentNum;
            const action = meta.action || '';
            const isStart = meta.isStart;
            const checkingNum = meta.checkingNum;
            const numSet = meta.numSet || [];
            const isComplete = state.isComplete || false;

            let html = `<div class="array-inner">`;
            html += `<div class="array-label">nums — find longest consecutive sequence using a <span style="color:var(--accent-purple);font-weight:700">HashSet</span> (O(n))</div>`;
            html += `<div class="array-visualization">`;

            state.nums1.forEach((val, idx) => {
                let classes = 'array-item';
                let pointerLabels = '';
                if (isComplete) classes += ' pointer-merge';
                // Highlight current sequence members
                if (currentSeq.includes(val) && !isComplete) classes += ' active-window';
                // Highlight current number being examined
                if (val === currentNum && action !== 'done' && !isComplete) {
                    if (isStart === true) classes += ' highlight-char'; // green glow = START
                    else if (isStart === false) classes += ' visited';
                    pointerLabels = `<div class="pointer-label p1">n</div>`;
                }
                html += `<div class="${classes}">${val}${pointerLabels}<div class="array-index">${idx}</div></div>`;
            });

            html += `</div>`;

            // ── "Is it a Start?" bridge ──
            html += `<div class="sum-bridge"><div class="sum-bridge-label">`;
            if (action === 'skip') {
                html += `<span style="color:var(--accent-orange);font-weight:600">n = ${currentNum}:</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">Is <b>${currentNum - 1}</b> in</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700">numSet</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">?</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700;margin:0 4px">YES ✓</span>`;
                html += `<span style="color:var(--text-muted)">→ part of an existing chain.</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700;margin-left:4px">SKIP</span>`;
            } else if (action === 'start') {
                html += `<span style="color:var(--accent-blue);font-weight:600">n = ${currentNum}:</span>`;
                html += `<span style="color:var(--text-muted);margin:0 6px">Is <b>${currentNum - 1}</b> in</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700">numSet</span>`;
                html += `<span style="color:var(--text-muted);margin:0 4px">?</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700;margin:0 4px">NO ✗</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700;margin-left:4px">→ SEQUENCE START! 🚀 Count forward.</span>`;
            } else if (action === 'extend') {
                html += `<span style="color:var(--text-muted)">checking:</span>`;
                html += `<span style="color:var(--accent-purple);font-weight:700;margin:0 6px">${checkingNum}</span>`;
                html += `<span style="color:var(--text-muted)">in numSet?</span>`;
                html += `<span style="color:var(--accent-green);font-weight:700;margin-left:6px">YES → extend chain! ⚡</span>`;
            } else if (action === 'chainend') {
                html += `<span style="color:var(--text-muted)">checking:</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700;margin:0 6px">${checkingNum}</span>`;
                html += `<span style="color:var(--text-muted)">in numSet?</span>`;
                html += `<span style="color:var(--accent-red);font-weight:700;margin-left:6px">NO → chain ends here. 🛑</span>`;
            } else if (action === 'compare') {
                html += `<span style="color:var(--accent-green);font-weight:700">sequence length ${currentSeq.length} ${currentSeq.length >= longest ? '≥' : '<'} best ${longest}</span>`;
                if (currentSeq.length >= longest) html += `<span style="color:var(--accent-green);margin-left:6px">→ NEW BEST! 🏆</span>`;
            } else if (isComplete) {
                html += `<span style="color:var(--accent-green);font-weight:700">✓ Longest consecutive run = ${longest}</span>`;
            }
            html += `</div></div>`;

            // ── Chain Bar (the "explosion" / sequence building visual) ──
            if (currentSeq.length > 0 || action === 'chainend') {
                html += `<div class="chain-bar">`;
                currentSeq.forEach((v, si) => {
                    if (si > 0) html += `<span class="chain-arrow">→</span>`;
                    html += `<span class="chain-num">${v}</span>`;
                });
                if (action === 'extend' && checkingNum !== null) {
                    html += `<span class="chain-arrow">→</span>`;
                    html += `<span class="chain-num chain-new">${checkingNum}</span>`;
                }
                if (action === 'chainend' && checkingNum !== null) {
                    html += `<span class="chain-arrow">→</span>`;
                    html += `<span class="chain-num chain-fail">${checkingNum}</span>`;
                }
                html += `</div>`;
            }

            // ── HashSet Bucket Visual ──
            html += `<div class="ds-container">`;
            html += `<div class="ds-bucket ds-set">`;
            html += `<div class="ds-bucket-label"><span class="ds-brace">{</span> numSet <span class="ds-brace">}</span></div>`;
            html += `<div class="ds-bucket-items">`;
            if (numSet.length > 0) {
                numSet.forEach(v => {
                    let itemClass = 'ds-item ds-set-item';
                    // Ping the item being looked up
                    if (action === 'skip' && v === currentNum - 1) itemClass += ' ds-active';
                    else if (action === 'start' && v === currentNum) itemClass += ' ds-active';
                    else if (action === 'extend' && v === checkingNum) itemClass += ' ds-active';
                    else if (action === 'chainend' && v === checkingNum) itemClass += ' ds-miss';
                    // Highlight chain members
                    else if (currentSeq.includes(v)) itemClass += ' ds-active';
                    html += `<span class="${itemClass}">${v}</span>`;
                });
            } else {
                html += `<span style="color:var(--text-muted);font-size:11px;">empty</span>`;
            }
            html += `</div></div></div>`;

            html += `<div class="pointer-info">
                <div class="pointer-detail"><div class="pointer-detail-label">checking</div><div class="pointer-detail-value p1">${currentNum ?? '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">chain</div><div class="pointer-detail-value p-purple">${currentSeq.length > 0 ? `len ${currentSeq.length}` : '—'}</div></div>
                <div class="pointer-detail"><div class="pointer-detail-label">longest</div><div class="pointer-detail-value p-green">${longest}</div></div>
            </div>`;
            html += `</div>`;
            arrayContainer.innerHTML = html;
        }

        // ── Post-render: apply value-changed animation to mutated cells ──
        if (changedIndices.size > 0) {
            const items = arrayContainer.querySelectorAll('.array-item');
            items.forEach(item => {
                const idxEl = item.querySelector('.array-index');
                if (idxEl) {
                    const idx = parseInt(idxEl.textContent, 10);
                    if (!isNaN(idx) && changedIndices.has(idx)) {
                        item.classList.add('val-changed');
                    }
                }
            });
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
    prevArraySnapshot = null; // reset change-detection on re-init

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
    
    const isArrayProb = isArrayProblem();
    const isBFS = currentAlgorithm === 'bfs';
    const isTrueMobile = window.matchMedia('(pointer: coarse)').matches;

    if (isArrayProb) {
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

    // Show/hide testcase selector and populate with problem-specific labels
    const testcaseSelector = document.getElementById('testcaseSelector');
    const testcaseSelect = document.getElementById('testcaseSelect');
    const mobileTestcaseSelector = document.getElementById('mobileTestcaseSelector');
    const mobileTestcaseSelect = document.getElementById('mobileTestcaseSelect');
    const hasEdgeCase = algorithm.generateEdgeCaseHistory || prob.edgeCaseTree;

    // Helper to populate a testcase <select>
    function populateTestcaseSelect(sel, labels) {
        sel.innerHTML = '';
        Object.keys(labels).forEach(key => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = labels[key];
            sel.appendChild(opt);
        });
        // Ensure current selection is valid; if not, reset to 'normal'
        if (!labels[currentTestCase]) currentTestCase = 'normal';
        sel.value = currentTestCase;
    }

    if (testcaseSelector) testcaseSelector.style.display = hasEdgeCase ? '' : 'none';
    if (mobileTestcaseSelector) mobileTestcaseSelector.style.display = hasEdgeCase ? '' : 'none';

    if (hasEdgeCase) {
        const labels = prob.testCaseLabels || { normal: 'Example', edge: 'Edge Case' };
        if (testcaseSelect) populateTestcaseSelect(testcaseSelect, labels);
        if (mobileTestcaseSelect) populateTestcaseSelect(mobileTestcaseSelect, labels);
    }
    
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
    if (isArrayProblem()) {
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
        // Dynamic testcase: look up generator by key (e.g. 'edge' → generateEdgeCaseHistory, 'tc2' → generateTc2History)
        if (currentTestCase === 'edge' && algorithm.generateEdgeCaseHistory) {
            history = algorithm.generateEdgeCaseHistory();
        } else if (currentTestCase !== 'normal') {
            const genKey = `generate${currentTestCase.charAt(0).toUpperCase() + currentTestCase.slice(1)}History`;
            if (algorithm[genKey]) {
                history = algorithm[genKey]();
            } else {
                history = algorithm.generateHistory();
            }
        } else {
            history = algorithm.generateHistory();
        }
        currentStep = 0;
        render();
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
            line.setAttribute("data-side", "L");
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
            line.setAttribute("data-side", "R");
            svg.appendChild(line);
            drawTree(node.right);
        }
    }
    
    // Use edge case tree if available and selected
    const activeTree = (currentTestCase === 'edge' && prob.edgeCaseTree) ? prob.edgeCaseTree : prob.tree;

    drawTree(activeTree);
    
    // Generate history based on algorithm
    if (currentTestCase === 'edge' && algorithm.generateEdgeCaseHistory) {
        history = algorithm.generateEdgeCaseHistory(activeTree);
    } else if (currentTestCase !== 'normal') {
        const genKey = `generate${currentTestCase.charAt(0).toUpperCase() + currentTestCase.slice(1)}History`;
        if (algorithm[genKey]) {
            history = algorithm[genKey](activeTree);
        } else {
            history = algorithm.generateHistory(activeTree);
        }
    } else {
        history = algorithm.generateHistory(activeTree);
    }
    currentStep = 0;
    render();
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
        if (isArrayProblem()) return; // array problem, no tree to scale
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
        if (isArrayProblem()) return; // array problem, no tree to scale
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
    if (problemListBtn) {
        problemListBtn.removeEventListener('click', openProblemModal);
        problemListBtn.addEventListener('click', openProblemModal);
    }

    // Prev/Next problem navigation — use named handlers to avoid stacking
    const prevProblemBtn = document.getElementById('prevProblemBtn');
    const nextProblemBtn = document.getElementById('nextProblemBtn');
    if (prevProblemBtn) {
        if (prevProblemBtn._handler) prevProblemBtn.removeEventListener('click', prevProblemBtn._handler);
        prevProblemBtn._handler = () => {
            const ids = Object.keys(problemDB);
            const idx = ids.indexOf(currentProbId);
            const prevId = ids[(idx - 1 + ids.length) % ids.length];
            selectProblem(prevId);
        };
        prevProblemBtn.addEventListener('click', prevProblemBtn._handler);
    }
    if (nextProblemBtn) {
        if (nextProblemBtn._handler) nextProblemBtn.removeEventListener('click', nextProblemBtn._handler);
        nextProblemBtn._handler = () => {
            const ids = Object.keys(problemDB);
            const idx = ids.indexOf(currentProbId);
            const nextId = ids[(idx + 1) % ids.length];
            selectProblem(nextId);
        };
        nextProblemBtn.addEventListener('click', nextProblemBtn._handler);
    }

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
        currentTestCase = "normal"; // Reset test case when switching algorithms
        init();
    });

    // Test case selector (desktop — in action bar)
    const testcaseSelectEl = document.getElementById('testcaseSelect');
    if (testcaseSelectEl) {
        testcaseSelectEl.addEventListener('change', (e) => {
            currentTestCase = e.target.value;
            // Sync mobile testcase selector
            const mobileTc = document.getElementById('mobileTestcaseSelect');
            if (mobileTc) mobileTc.value = currentTestCase;
            init();
        });
    }

    // Test case selector (mobile — in viz module)
    const mobileTestcaseSelectEl = document.getElementById('mobileTestcaseSelect');
    if (mobileTestcaseSelectEl) {
        mobileTestcaseSelectEl.addEventListener('change', (e) => {
            currentTestCase = e.target.value;
            // Sync desktop testcase selector
            const desktopTc = document.getElementById('testcaseSelect');
            if (desktopTc) desktopTc.value = currentTestCase;
            init();
        });
    }

    const mobileAlgoSelect = document.getElementById('mobileAlgorithmSelect');
    if (mobileAlgoSelect) {
        mobileAlgoSelect.addEventListener('change', (e) => {
            currentAlgorithm = e.target.value;
            // Sync desktop selector
            document.getElementById('algorithmSelect').value = currentAlgorithm;
            currentTestCase = "normal"; // Reset test case when switching algorithms
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

function updateSpeedButtons() {
    const label = speedPresets[currentSpeedIndex].label;
    const desktopBtn = document.getElementById('desktopSpeedBtn');
    const mobileBtn = document.getElementById('mobileSpeedBtn');
    if (desktopBtn) desktopBtn.querySelector('.speed-label').textContent = label;
    if (mobileBtn) mobileBtn.querySelector('.speed-label').textContent = label;
}

function cycleSpeed() {
    currentSpeedIndex = (currentSpeedIndex + 1) % speedPresets.length;
    autoPlaySpeed = speedPresets[currentSpeedIndex].ms;
    updateSpeedButtons();

    // If autoplay is running, restart interval with new speed
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (currentStep < history.length - 1) {
                changeStep(1);
            } else {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
                updatePlayButtons(false);
                setTimeout(() => {
                    currentStep = 0;
                    render();
                }, 3000);
            }
        }, autoPlaySpeed);
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
window.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    init();
});

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
        } else if (!isArrayProblem()) {
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