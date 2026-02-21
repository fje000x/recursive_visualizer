// ═══════════════════════════════════════════════════════════════
// quizDB.js — Hand-written quiz questions for problems 1–13
// Each problem key maps to an object keyed by algorithm name.
// Every algorithm gets its own quiz (5–7 questions each).
// ═══════════════════════════════════════════════════════════════

const quizDB = {
    // ── Problem 1 — Shortest Path in Binary Tree (Min Depth) ──
    "1": {
        recursive: [
            {
                question: "What value does the algorithm return when it reaches a null node?",
                choices: ["0", "1", "-1", "infinity"],
                answer: 0,
                explanation: "A null node has no depth, so the base case returns 0."
            },
            {
                question: "If a node has only a right child, what does the algorithm do?",
                choices: [
                    "Return 1 + shortestPath(right)",
                    "Return 0",
                    "Return min(left, right) + 1",
                    "Skip the node entirely"
                ],
                answer: 0,
                explanation: "When the left child is null, we can't count that as a valid path. We must follow the right subtree: 1 + shortestPath(right)."
            },
            {
                question: "Why can't we simply return min(left, right) + 1 at every node?",
                choices: [
                    "A null child returns 0, which would make min() pick it — but that's not a valid leaf path",
                    "min() is too slow for trees",
                    "It causes a stack overflow",
                    "The tree must be balanced first"
                ],
                answer: 0,
                explanation: "If a node has only one child, the null side returns 0. Taking min would give 1, but that's not a real root-to-leaf path. We need to follow only the non-null child."
            },
            {
                question: "What is the time complexity of the recursive DFS approach?",
                choices: ["O(n)", "O(log n)", "O(n²)", "O(h)"],
                answer: 0,
                explanation: "Every node is visited exactly once, giving O(n) time."
            },
            {
                question: "In the worst case (a completely skewed tree), what is the space complexity?",
                choices: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
                answer: 0,
                explanation: "A skewed tree has height n, so the call stack grows to O(n)."
            },
            {
                question: "At a leaf node (no left or right child), what does the algorithm return?",
                choices: ["1", "0", "The node's value", "infinity"],
                answer: 0,
                explanation: "A leaf is a valid endpoint. Its path length contribution is 1 (itself)."
            }
        ],
        bfs: [
            {
                question: "Why is BFS naturally suited for finding the shortest path in a tree?",
                choices: [
                    "BFS explores level by level, so the first leaf it finds is the closest to the root",
                    "BFS uses less memory than DFS",
                    "BFS processes nodes alphabetically",
                    "BFS avoids recursion overhead"
                ],
                answer: 0,
                explanation: "BFS guarantees we process all nodes at depth d before depth d+1. The first leaf encountered must be the shallowest."
            },
            {
                question: "What data structure does BFS use to track nodes to visit?",
                choices: ["Queue (FIFO)", "Stack (LIFO)", "Priority queue", "Hash set"],
                answer: 0,
                explanation: "BFS uses a queue (deque) for first-in-first-out ordering — this ensures level-by-level processing."
            },
            {
                question: "Each element in the BFS queue stores what information?",
                choices: [
                    "The node and its current depth level",
                    "Only the node value",
                    "The node and its parent",
                    "The node and its children count"
                ],
                answer: 0,
                explanation: "We enqueue (node, level) pairs so we can track depth without recomputation."
            },
            {
                question: "When BFS finds a leaf, what does it do?",
                choices: [
                    "Return the current level immediately",
                    "Continue searching for more leaves",
                    "Push the leaf back onto the queue",
                    "Calculate min of all leaf levels"
                ],
                answer: 0,
                explanation: "Since BFS explores level-by-level, the first leaf found is guaranteed to be at minimum depth — we return immediately."
            },
            {
                question: "What is the space complexity of the BFS approach?",
                choices: ["O(n)", "O(h)", "O(1)", "O(log n)"],
                answer: 0,
                explanation: "In the worst case (a complete tree), the last level has about n/2 nodes, all in the queue at once — O(n) space."
            }
        ],
        iterative: [
            {
                question: "The iterative DFS uses a stack. Unlike BFS, why can't it stop at the first leaf?",
                choices: [
                    "DFS goes deep, not wide — the first leaf found isn't necessarily the shallowest",
                    "Stacks can't hold depth information",
                    "DFS only works on balanced trees",
                    "It processes nodes in reverse order"
                ],
                answer: 0,
                explanation: "DFS dives deep first. The first leaf found could be the deepest one. We must check all leaves and track the minimum."
            },
            {
                question: "What is stored on the stack in this approach?",
                choices: [
                    "(node, depth) tuples",
                    "Only node references",
                    "Node values only",
                    "(node, parent) tuples"
                ],
                answer: 0,
                explanation: "We push (node, depth) pairs so we track each node's level as we explore."
            },
            {
                question: "What is the initial value of 'shortest' before we start popping from the stack?",
                choices: ["Infinity (float('inf'))", "0", "1", "-1"],
                answer: 0,
                explanation: "We initialize shortest to infinity so that any real leaf depth will be smaller."
            },
            {
                question: "When we find a leaf, what operation do we perform?",
                choices: [
                    "shortest = min(shortest, current_level)",
                    "Return the current level",
                    "Push the leaf's children",
                    "Increment a counter"
                ],
                answer: 0,
                explanation: "We update 'shortest' with the minimum of the current value and this leaf's depth, then continue exploring."
            },
            {
                question: "Compared to BFS, when is iterative DFS less efficient for this problem?",
                choices: [
                    "When the shortest path is near the root — BFS would find it first without exploring deeper",
                    "When the tree is balanced",
                    "When the tree has only left children",
                    "It's never less efficient"
                ],
                answer: 0,
                explanation: "DFS must visit all leaves to guarantee the minimum. BFS stops at the first leaf it finds — which is always the shallowest."
            }
        ]
    },

    // ── Problem 2 — Longest Path in Binary Tree (Max Depth) ──
    "2": {
        recursive: [
            {
                question: "What is the base case in the recursive max depth algorithm?",
                choices: [
                    "If node is None, return 0",
                    "If node is a leaf, return 0",
                    "If node has no left child, return 1",
                    "If depth exceeds n, return"
                ],
                answer: 0,
                explanation: "A null node contributes 0 depth — this is the recursion's stopping point."
            },
            {
                question: "What does 'return max(left, right) + 1' actually compute?",
                choices: [
                    "The taller subtree's depth, plus 1 for the current node",
                    "The sum of both subtrees",
                    "The number of nodes in the tree",
                    "The height minus 1"
                ],
                answer: 0,
                explanation: "We take the deeper subtree (max of left, right) and add 1 for the current node's contribution to the path."
            },
            {
                question: "In a tree with just a root node (no children), what is the max depth?",
                choices: ["1", "0", "2", "Undefined"],
                answer: 0,
                explanation: "The root itself is at depth 1. Both children are null (returning 0), so max(0, 0) + 1 = 1."
            },
            {
                question: "How does the call stack relate to the tree structure during recursion?",
                choices: [
                    "Each frame on the call stack corresponds to a node being processed — the stack depth equals the current path depth",
                    "The call stack stores all nodes at once",
                    "The stack only holds leaf nodes",
                    "There's no relationship"
                ],
                answer: 0,
                explanation: "As we recurse deeper into the tree, each recursive call adds a frame. The max stack depth equals the tree's height."
            },
            {
                question: "Why doesn't max depth need special handling for one-child nodes (unlike min depth)?",
                choices: [
                    "max(0, something) naturally picks the non-null side — there's no incorrect shortcut",
                    "It uses a different algorithm entirely",
                    "One-child nodes don't exist in max depth problems",
                    "It handles them the same way as min depth"
                ],
                answer: 0,
                explanation: "For max depth, max(0, right_depth) correctly picks the non-null subtree. For min depth, min(0, right_depth) would incorrectly pick 0."
            }
        ],
        bfs: [
            {
                question: "How does BFS compute the maximum depth of a tree?",
                choices: [
                    "Process the tree level by level, incrementing a counter after each level — the final count is the depth",
                    "Find the first leaf and return its level",
                    "Count all nodes and divide by 2",
                    "Track the longest path from any node"
                ],
                answer: 0,
                explanation: "BFS drains one level at a time. Each complete level increments the depth counter. When the queue empties, we have the total depth."
            },
            {
                question: "Inside the BFS loop, what does 'size = len(q)' capture?",
                choices: [
                    "The number of nodes at the current level, so we process exactly one level per outer iteration",
                    "The total nodes remaining",
                    "The maximum queue capacity",
                    "The depth of the tree"
                ],
                answer: 0,
                explanation: "By snapshotting the queue size, we know exactly how many nodes belong to the current level. The inner loop processes only those nodes."
            },
            {
                question: "Unlike min depth BFS, max depth BFS doesn't stop at the first leaf. Why?",
                choices: [
                    "We need to exhaust every level to know the deepest one — a leaf at level 2 doesn't mean there aren't nodes at level 5",
                    "Max depth BFS uses a different queue",
                    "It stops at the last leaf instead",
                    "Max depth is always the same as min depth"
                ],
                answer: 0,
                explanation: "Finding a leaf early just means that branch is done — other branches may go deeper. We continue until the queue is fully empty."
            },
            {
                question: "What is the time complexity of BFS max depth?",
                choices: ["O(n)", "O(n log n)", "O(h)", "O(n²)"],
                answer: 0,
                explanation: "Every node is enqueued and dequeued exactly once — O(n) total work."
            },
            {
                question: "For a perfectly balanced tree with n nodes, what's the max queue size during BFS?",
                choices: ["About n/2", "n", "log n", "1"],
                answer: 0,
                explanation: "The bottom level of a perfect binary tree contains roughly n/2 nodes, all in the queue simultaneously."
            }
        ],
        iterative: [
            {
                question: "How does iterative DFS track the maximum depth?",
                choices: [
                    "Push (node, depth) pairs onto a stack, update 'deepest' at every pop",
                    "Count the number of pops",
                    "Track only leaf nodes in a separate list",
                    "Use two stacks — one for nodes, one for depths"
                ],
                answer: 0,
                explanation: "Each stack entry carries its depth. After popping, we update deepest = max(deepest, current_depth)."
            },
            {
                question: "What value is 'deepest' initialized to?",
                choices: ["0", "1", "Infinity", "-1"],
                answer: 0,
                explanation: "We start at 0 and update upward — any node's depth will be at least 1, so the first pop immediately updates it."
            },
            {
                question: "In iterative DFS, do we process left or right child first? Does it matter for max depth?",
                choices: [
                    "We push right then left (so left is popped first), but the order doesn't affect the final max depth",
                    "Left must go first or the answer is wrong",
                    "Right must go first for correctness",
                    "Only one child is pushed"
                ],
                answer: 0,
                explanation: "For max depth, we visit every node regardless. The traversal order (left-first or right-first) doesn't change the final answer."
            },
            {
                question: "When is iterative DFS preferred over recursive DFS?",
                choices: [
                    "When the tree is very deep and might cause a stack overflow with recursion",
                    "When the tree is balanced",
                    "When we need BFS behavior",
                    "It's never preferred"
                ],
                answer: 0,
                explanation: "Iterative DFS uses the heap (explicit stack) instead of the call stack, avoiding stack overflow on extremely deep trees."
            },
            {
                question: "Both iterative DFS and BFS visit every node. What's the key difference in how they traverse?",
                choices: [
                    "DFS explores one branch fully before backtracking; BFS processes all nodes at depth d before d+1",
                    "DFS is faster",
                    "BFS uses less memory",
                    "There is no difference"
                ],
                answer: 0,
                explanation: "DFS dives deep (LIFO stack), while BFS goes wide (FIFO queue). Both are O(n), but their traversal order differs."
            }
        ]
    },

    // ── Problem 3 — Merge Two Sorted Arrays ──
    "3": {
        twoPointers: [
            {
                question: "Why does this algorithm fill arr1 from the back (right to left) instead of from the front?",
                choices: [
                    "Filling from the back avoids overwriting values in arr1 that haven't been processed yet",
                    "It's just a convention — front-to-back would also work",
                    "Sorting is faster in reverse",
                    "The array is stored backwards in memory"
                ],
                answer: 0,
                explanation: "arr1 has m real values at the front plus n empty slots at the back. Writing from the end prevents us from clobbering values we still need to compare."
            },
            {
                question: "What condition keeps the main while loop running?",
                choices: [
                    "While both i >= 0 AND j >= 0",
                    "While k >= 0",
                    "While i >= 0 OR j >= 0",
                    "While arr1 is not sorted"
                ],
                answer: 0,
                explanation: "We compare elements from both arrays. Once either is exhausted, the main comparison loop stops."
            },
            {
                question: "After the main loop, if j >= 0 (elements remain in arr2), what do we do?",
                choices: [
                    "Copy remaining arr2 elements into arr1",
                    "Nothing — they're already in place",
                    "Sort arr1 again",
                    "Discard them"
                ],
                answer: 0,
                explanation: "Remaining arr2 elements are all smaller. We copy them to the front of arr1. If i >= 0 instead, those arr1 elements are already in place."
            },
            {
                question: "Why is the space complexity O(1)?",
                choices: [
                    "We merge in-place using arr1's extra allocated space — no new array is created",
                    "We use a helper array internally",
                    "The two arrays are the same",
                    "Space doesn't count for input arrays"
                ],
                answer: 0,
                explanation: "arr1 was pre-allocated with m + n slots. We write directly into it, using no additional data structure."
            },
            {
                question: "If arr1 = [1, 3, 5, 0, 0, 0] (m=3) and arr2 = [2, 4, 6] (n=3), which value is placed at k=5 first?",
                choices: ["6", "5", "3", "4"],
                answer: 0,
                explanation: "i points to 5, j points to 6. Since 6 > 5, we place 6 at position 5 (the last slot)."
            }
        ]
    },

    // ── Problem 4 — Filter Values In Place (Remove Element) ──
    "4": {
        twoPointers: [
            {
                question: "What does pointer k represent in this algorithm?",
                choices: [
                    "The write position — the boundary of the 'kept' section",
                    "The total number of removed elements",
                    "The current read position",
                    "The end of the array"
                ],
                answer: 0,
                explanation: "k tracks where the next kept value should go. Everything before k is in the valid result."
            },
            {
                question: "When nums[i] == val (matches the target), what happens?",
                choices: [
                    "We skip it — i advances but k stays put",
                    "We swap nums[i] and nums[k]",
                    "We delete the element",
                    "We set nums[i] to 0"
                ],
                answer: 0,
                explanation: "When the value matches, we simply don't copy it. k doesn't move, effectively 'removing' it from the result."
            },
            {
                question: "What is the key insight that makes this O(1) space?",
                choices: [
                    "We overwrite in-place — kept values shift left to fill gaps, no extra array needed",
                    "We use a hash map",
                    "We sort first",
                    "Python lists auto-resize"
                ],
                answer: 0,
                explanation: "The two-pointer technique writes kept values into the front of the same array, using only two integer variables (i and k)."
            },
            {
                question: "After the algorithm, are the elements after index k meaningful?",
                choices: [
                    "No — they are leftover garbage. Only indices 0..k-1 hold the valid result",
                    "Yes — they contain the removed elements in order",
                    "Yes — the array is fully sorted",
                    "They are all zeros"
                ],
                answer: 0,
                explanation: "The problem only cares about the first k elements. Values beyond k are irrelevant ('don't care' region)."
            },
            {
                question: "If all elements equal val, what does the algorithm return?",
                choices: ["0", "1", "n (length of array)", "-1"],
                answer: 0,
                explanation: "Every element is skipped — k never increments. The result is 0 (empty valid section)."
            }
        ]
    },

    // ── Problem 5 — Deduplicate Sorted Array ──
    "5": {
        twoPointers: [
            {
                question: "Why does this algorithm work only on sorted arrays?",
                choices: [
                    "In a sorted array, all duplicates are adjacent — comparing neighbors is sufficient",
                    "Sorted arrays are smaller",
                    "It uses binary search internally",
                    "Unsorted arrays can't have duplicates"
                ],
                answer: 0,
                explanation: "Sorting groups identical values together. We only need to compare each element with the previous unique element (nums[k-1])."
            },
            {
                question: "Why does k start at 1 instead of 0?",
                choices: [
                    "The first element is always unique — it's automatically part of the result",
                    "Index 0 is reserved for the length",
                    "k=0 would cause an out-of-bounds error",
                    "It's an off-by-one fix"
                ],
                answer: 0,
                explanation: "In a non-empty sorted array, the first element has no predecessor to be a duplicate of. It always stays."
            },
            {
                question: "The condition 'nums[i] != nums[k-1]' compares the current element to what?",
                choices: [
                    "The last unique element that was written into the result",
                    "The previous element in the original array",
                    "The first element of the array",
                    "The element at position i-1"
                ],
                answer: 0,
                explanation: "nums[k-1] is the most recent unique value kept. If nums[i] differs, it's a new unique value."
            },
            {
                question: "For input [1,1,2,2,3], what value does the algorithm return?",
                choices: ["3", "5", "2", "4"],
                answer: 0,
                explanation: "There are 3 unique values (1, 2, 3). The first 3 positions of the array will hold [1, 2, 3]."
            },
            {
                question: "How does this differ from Problem 4 (Remove Element)?",
                choices: [
                    "Instead of comparing against a fixed target value, we compare against the last written unique value",
                    "It uses a hash set",
                    "It requires extra space",
                    "It only works on integers"
                ],
                answer: 0,
                explanation: "Both use the same i/k two-pointer pattern. The only difference is the comparison: fixed target (P4) vs. dynamic last-unique (P5)."
            }
        ]
    },

    // ── Problem 6 — Trim Excess Duplicates (Remove Duplicates II) ──
    "6": {
        twoPointers: [
            {
                question: "This problem allows at most 2 copies of each value. What comparison enforces that limit?",
                choices: [
                    "nums[i] != nums[k-2] — if the current value equals the one 2 positions back, it's a third+ copy",
                    "nums[i] != nums[k-1]",
                    "nums[i] != nums[i-2]",
                    "A counter tracks duplicates"
                ],
                answer: 0,
                explanation: "nums[k-2] is the value written 2 positions ago. If nums[i] equals it, positions k-2 and k-1 already have 2 copies — a third would violate the constraint."
            },
            {
                question: "Why does k start at 2?",
                choices: [
                    "The first 2 elements are always valid — at most 2 of the same value",
                    "We need room for the comparison offset",
                    "The first 2 are always duplicates",
                    "k=0 would skip elements"
                ],
                answer: 0,
                explanation: "With the 'at most 2' rule, the first two elements can never violate it. They stay unconditionally."
            },
            {
                question: "How would you generalize this to allow at most K copies?",
                choices: [
                    "Compare nums[i] != nums[k-K] and start k at K",
                    "Use K nested loops",
                    "Sort K times",
                    "Use a hash map with counts"
                ],
                answer: 0,
                explanation: "The pattern generalizes: compare against the element K positions back in the write zone. Start k at K."
            },
            {
                question: "For input [1,1,1,2,2,3], what is the output length?",
                choices: ["5", "6", "4", "3"],
                answer: 0,
                explanation: "Result is [1,1,2,2,3] — the third '1' is trimmed. Length = 5."
            },
            {
                question: "What's the relationship between Problems 5 and 6?",
                choices: [
                    "Problem 5 is the special case where K=1; Problem 6 uses K=2. Same pattern, different offset",
                    "They use completely different algorithms",
                    "Problem 6 is harder because it uses recursion",
                    "Problem 5 only works on integers"
                ],
                answer: 0,
                explanation: "Problem 5: at most 1 copy → compare nums[i] vs nums[k-1]. Problem 6: at most 2 → compare nums[i] vs nums[k-2]. Same two-pointer template."
            }
        ]
    },

    // ── Problem 7 — Find the Dominant Element (Boyer-Moore Voting) ──
    "7": {
        boyerMoore: [
            {
                question: "What is the core idea behind Boyer-Moore Voting?",
                choices: [
                    "If an element appears more than n/2 times, it will survive a process of pairing off different elements",
                    "Sort and pick the middle element",
                    "Count every element with a hash map",
                    "Use divide and conquer"
                ],
                answer: 0,
                explanation: "Boyer-Moore imagines 'canceling' different values against each other. The majority element has more copies than all others combined, so it's the last one standing."
            },
            {
                question: "When 'count' drops to 0, what happens?",
                choices: [
                    "The current candidate is replaced by the next element",
                    "The algorithm terminates",
                    "Count is reset to the array length",
                    "The candidate is confirmed as the answer"
                ],
                answer: 0,
                explanation: "count=0 means equal cancellations so far. We pick a new candidate from the next element and start fresh."
            },
            {
                question: "If the input is [2, 2, 1, 1, 2], walk through: what is the candidate after processing index 3 (value 1)?",
                choices: [
                    "1 (count=1, after the second 1 becomes candidate when count hit 0)",
                    "2 (still the original)",
                    "No candidate",
                    "The algorithm doesn't track this"
                ],
                answer: 0,
                explanation: "Step by step: [2]→c=2,cnt=1 → [2]→c=2,cnt=2 → [1]→cnt=1 → [1]→cnt=0. After index 3, count is 0. At index 4 (value 2), candidate becomes 2 again."
            },
            {
                question: "Why doesn't this algorithm need extra space (hash map, sorting, etc.)?",
                choices: [
                    "It uses only 2 variables (candidate and count) — O(1) space",
                    "It modifies the input array",
                    "Python handles memory automatically",
                    "It stores candidates in a stack"
                ],
                answer: 0,
                explanation: "The entire state is just one candidate value and one counter — constant space regardless of array size."
            },
            {
                question: "Does this algorithm guarantee the result is actually a majority element?",
                choices: [
                    "Only if the problem guarantees a majority exists — otherwise a verification pass is needed",
                    "Yes, always — it mathematically proves the majority",
                    "No, it always requires a second pass",
                    "Only for sorted arrays"
                ],
                answer: 0,
                explanation: "Boyer-Moore finds a candidate. If the problem states a majority always exists (like LeetCode 169), no verification is needed. Otherwise, you'd need a second pass to confirm."
            },
            {
                question: "What is the time complexity?",
                choices: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
                answer: 0,
                explanation: "Single pass through the array — every element is examined exactly once."
            }
        ]
    },

    // ── Problem 8 — Cycle Array Elements (Rotate Array) ──
    "8": {
        reverse: [
            {
                question: "The 'reverse three times' strategy: what are the three reversal ranges?",
                choices: [
                    "1) Reverse all, 2) Reverse first k, 3) Reverse remaining n-k",
                    "1) Reverse first half, 2) Reverse second half, 3) Reverse all",
                    "1) Reverse k elements, 2) Reverse all, 3) Reverse k again",
                    "1) Swap pairs, 2) Shift, 3) Reverse"
                ],
                answer: 0,
                explanation: "Step 1 puts the right chunk at the front (in wrong internal order). Steps 2 and 3 fix each chunk's internal order."
            },
            {
                question: "Why do we compute k = k % n before reversing?",
                choices: [
                    "Rotating by n is a full cycle (back to original) — modulo removes redundant full rotations",
                    "To handle negative k values",
                    "It makes the array smaller",
                    "Python requires it for array indexing"
                ],
                answer: 0,
                explanation: "If k >= n, rotating by n returns the array to its original state. k % n gives the effective rotation amount."
            },
            {
                question: "After reversing the entire array [1,2,3,4,5] with k=2, what does it look like?",
                choices: ["[5,4,3,2,1]", "[4,5,1,2,3]", "[3,4,5,1,2]", "[2,1,5,4,3]"],
                answer: 0,
                explanation: "Reversing the whole array flips everything: [1,2,3,4,5] → [5,4,3,2,1]. Then the sub-reversals fix each section."
            },
            {
                question: "What is the space complexity of this approach?",
                choices: ["O(1)", "O(n)", "O(k)", "O(log n)"],
                answer: 0,
                explanation: "Each reversal is done in-place by swapping elements — no extra array needed."
            },
            {
                question: "Why is this approach preferred over creating a new rotated array?",
                choices: [
                    "It achieves O(1) space instead of O(n) — important for large arrays",
                    "It's faster (O(log n) vs O(n))",
                    "New arrays aren't allowed in Python",
                    "The new array approach doesn't work"
                ],
                answer: 0,
                explanation: "Both are O(n) time, but the reverse trick uses O(1) extra space, which matters for memory-constrained environments."
            }
        ]
    },

    // ── Problem 9 — Best Moment to Trade (Buy & Sell Stock I) ──
    "9": {
        onePass: [
            {
                question: "What two variables does this algorithm track as it scans the array?",
                choices: [
                    "minPrice (lowest price seen) and maxProfit (best profit so far)",
                    "buyDay and sellDay indices",
                    "Two pointers (left and right)",
                    "A running sum and average"
                ],
                answer: 0,
                explanation: "We track the cheapest buying opportunity and the best profit achievable. At each price, we either update the min or check if selling now beats our record."
            },
            {
                question: "Why do we update minPrice when prices[i] < minPrice?",
                choices: [
                    "A lower buying price gives more room for profit on any future selling day",
                    "We need to buy at the lowest price overall",
                    "The algorithm resets at every valley",
                    "To handle negative prices"
                ],
                answer: 0,
                explanation: "Any future sell will yield a higher profit if we bought lower. We greedily track the best buying opportunity seen so far."
            },
            {
                question: "If prices only decrease [7, 6, 4, 3, 1], what does the algorithm return?",
                choices: ["0", "-1", "1", "6"],
                answer: 0,
                explanation: "Every day is a new minPrice, but no day offers a profit (selling is always at a loss). maxProfit stays at 0."
            },
            {
                question: "Why can't we just find the global min and global max?",
                choices: [
                    "The max might come before the min — we can't sell before we buy",
                    "There could be multiple maxima",
                    "It would be O(n²)",
                    "Global min/max don't exist in all arrays"
                ],
                answer: 0,
                explanation: "Time flows forward. If the highest price is at index 0 and lowest at index 4, that's not a valid trade. We need max AFTER min."
            },
            {
                question: "This is a single-pass O(n) algorithm. What would the brute force approach be?",
                choices: [
                    "Check every (buy, sell) pair — O(n²)",
                    "Sort the array — O(n log n)",
                    "Use dynamic programming — O(n²) space",
                    "Binary search for max — O(log n)"
                ],
                answer: 0,
                explanation: "Brute force checks all i < j pairs to find max(prices[j] - prices[i]). That's O(n²). The single-pass approach avoids this by tracking the running minimum."
            }
        ]
    },

    // ── Problem 10 — Best Moment to Trade II (Buy & Sell Stock II) ──
    "10": {
        greedy: [
            {
                question: "Unlike Problem 9 (one trade), this allows unlimited trades. What's the greedy insight?",
                choices: [
                    "Collect every upward movement — if tomorrow's price is higher than today's, 'trade' that gain",
                    "Find the single biggest price swing",
                    "Buy at every valley, sell at every peak",
                    "Hold until the highest price"
                ],
                answer: 0,
                explanation: "Every positive day-over-day difference is a gain we can capture. Summing all positive deltas gives the maximum total profit."
            },
            {
                question: "For prices [1, 2, 3, 4, 5], the algorithm captures gains at every step. What's the total profit?",
                choices: ["4", "5", "3", "1"],
                answer: 0,
                explanation: "Gains: (2-1)+(3-2)+(4-3)+(5-4) = 1+1+1+1 = 4. This equals buying at 1 and selling at 5."
            },
            {
                question: "For prices [3, 3, 3, 3, 3] (flat), what is the profit?",
                choices: ["0", "3", "15", "-1"],
                answer: 0,
                explanation: "No price ever exceeds the previous one. Every difference is 0. Total profit = 0."
            },
            {
                question: "Why is the greedy approach correct here (but not for one-trade-only)?",
                choices: [
                    "With unlimited trades, we can capture every small gain — there's no tradeoff between 'using up' our one trade",
                    "Greedy is always correct for stock problems",
                    "It uses a different data structure",
                    "It processes the array backwards"
                ],
                answer: 0,
                explanation: "In Problem 9, buying locks you in — you pick one window. Here, with unlimited trades, every profitable window can be independently captured."
            },
            {
                question: "Is this algorithm actually executing buy/sell operations?",
                choices: [
                    "No — it's mathematically equivalent. Summing consecutive gains equals the profit from optimal buy/sell pairs",
                    "Yes — it tracks actual trade dates",
                    "It uses limit orders",
                    "It simulates a trading API"
                ],
                answer: 0,
                explanation: "The algorithm never identifies specific buy/sell days. It just sums up all positive consecutive differences, which provably equals the optimal multi-trade profit."
            }
        ]
    },

    // ── Problem 11 — Can You Reach the End? (Jump Game) ──
    "11": {
        greedy: [
            {
                question: "What does the 'farthest' variable track?",
                choices: [
                    "The maximum index reachable from any position we've visited so far",
                    "The current position",
                    "The number of jumps taken",
                    "The last index of the array"
                ],
                answer: 0,
                explanation: "At each index i, we update farthest = max(farthest, i + nums[i]). This tracks the absolute farthest we could ever land."
            },
            {
                question: "If i > farthest during the loop, what does that mean?",
                choices: [
                    "We've reached a position we can't actually get to — there's a gap. Return False",
                    "We've gone past the end",
                    "We need to jump backwards",
                    "The algorithm needs to restart"
                ],
                answer: 0,
                explanation: "If our current index i exceeds farthest, no previous position could reach here. We're stuck."
            },
            {
                question: "For input [2, 3, 1, 1, 4], can we reach the end?",
                choices: ["Yes", "No"],
                answer: 0,
                explanation: "From 0: farthest=2. From 1: farthest=max(2,4)=4. Index 4 is the last index — we can reach it."
            },
            {
                question: "For input [3, 2, 1, 0, 4], can we reach the end?",
                choices: ["No", "Yes"],
                answer: 0,
                explanation: "From 0: farthest=3. From 1: farthest=3. From 2: farthest=3. From 3: farthest=3. At index 4: i(4) > farthest(3) — stuck."
            },
            {
                question: "Why is this greedy and not dynamic programming?",
                choices: [
                    "We only need one pass with a single variable — no need to store results for subproblems",
                    "DP can't solve reachability problems",
                    "Greedy is always faster",
                    "This problem has no overlapping subproblems"
                ],
                answer: 0,
                explanation: "The greedy insight: we don't need to know which path leads to farthest — just whether any path reaches the end. One running maximum suffices."
            },
            {
                question: "What is the time and space complexity?",
                choices: ["O(n) time, O(1) space", "O(n²) time, O(n) space", "O(n log n) time, O(1) space", "O(n) time, O(n) space"],
                answer: 0,
                explanation: "Single pass through the array, tracking just one variable (farthest) — O(n) time, O(1) space."
            }
        ]
    },

    // ── Problem 12 — Fewest Jumps to the End (Jump Game II) ──
    "12": {
        greedy: [
            {
                question: "This algorithm uses L and R pointers to define a 'window'. What does this window represent?",
                choices: [
                    "All indices reachable using exactly the current number of jumps",
                    "A sliding window for substring problems",
                    "The current and next elements only",
                    "The sorted portion of the array"
                ],
                answer: 0,
                explanation: "L..R defines the 'zone' of positions reachable in the current jump count. We scan this zone to find the next zone's boundary."
            },
            {
                question: "Why is this approach called 'BFS-like'?",
                choices: [
                    "Each 'jump' expands a frontier (like a BFS level) — positions reachable in 1 jump, then 2, then 3...",
                    "It uses a queue",
                    "It processes nodes in breadth-first order literally",
                    "It was invented for graphs, not arrays"
                ],
                answer: 0,
                explanation: "BFS explores all nodes at distance d before d+1. Here, the array indices reachable in d jumps form a 'level'. Each zone expansion is one BFS level."
            },
            {
                question: "Inside the inner loop, what is 'farthest' tracking?",
                choices: [
                    "The maximum index reachable by jumping from any position in the current zone [L..R]",
                    "The value of the current element",
                    "The number of elements scanned",
                    "The jump count"
                ],
                answer: 0,
                explanation: "For each i in [L, R], we compute i + nums[i]. 'farthest' tracks the maximum of all these — the boundary of the next zone."
            },
            {
                question: "After scanning the current zone, how are L and R updated?",
                choices: [
                    "L = R + 1, R = farthest — the next zone starts just past the current one",
                    "L stays, R = farthest",
                    "Both shift by 1",
                    "L = farthest, R = end"
                ],
                answer: 0,
                explanation: "The next zone starts right after the current one (L = R + 1) and extends to the farthest reachable index (R = farthest)."
            },
            {
                question: "When does the while loop terminate?",
                choices: [
                    "When R >= len(nums) - 1 — the current zone includes the last index",
                    "When farthest == 0",
                    "When L == R",
                    "When jumps > n"
                ],
                answer: 0,
                explanation: "Once R reaches or passes the last index, we can reach the end with 'jumps' jumps."
            },
            {
                question: "Why is the time complexity O(n) even with nested loops?",
                choices: [
                    "Each index is visited exactly once across all zone expansions — the inner loops partition the array",
                    "The inner loop runs at most log(n) times",
                    "It's actually O(n²) in the worst case",
                    "The outer loop runs O(1) times"
                ],
                answer: 0,
                explanation: "The zones [L..R] never overlap and together cover every index exactly once. Total work across all iterations = n."
            }
        ]
    },

    // ── Problem 13 — Researcher Impact Score (H-Index) ──
    "13": {
        sorting: [
            {
                question: "What does the h-index measure?",
                choices: [
                    "The maximum value h such that at least h papers have at least h citations each",
                    "The total number of citations",
                    "The average citation count",
                    "The most-cited paper's count"
                ],
                answer: 0,
                explanation: "h-index = the largest h where h papers each have ≥ h citations. It balances quantity (number of papers) and quality (citation count)."
            },
            {
                question: "Why do we sort in descending order?",
                choices: [
                    "So that citations[i] gives the (i+1)-th highest cited paper — we can check if it has at least i+1 citations",
                    "Ascending order gives wrong results",
                    "It makes the loop faster",
                    "Descending sort is more cache-friendly"
                ],
                answer: 0,
                explanation: "After descending sort, position i tells us: 'the top (i+1) papers each have at least citations[i] citations.' We check if citations[i] >= i+1."
            },
            {
                question: "What does the condition 'citations[i] >= i + 1' check?",
                choices: [
                    "Whether the (i+1)-th most-cited paper has enough citations to support h = i+1",
                    "Whether the paper has more citations than the next one",
                    "Whether i is within bounds",
                    "Whether the total exceeds a threshold"
                ],
                answer: 0,
                explanation: "At position i (0-indexed), we have i+1 papers with citations >= citations[i]. If citations[i] >= i+1, then h = i+1 is valid."
            },
            {
                question: "For citations = [3, 0, 6, 1, 5], what is the h-index?",
                choices: ["3", "5", "6", "1"],
                answer: 0,
                explanation: "Sorted descending: [6,5,3,1,0]. i=0: 6≥1 ✓(h=1). i=1: 5≥2 ✓(h=2). i=2: 3≥3 ✓(h=3). i=3: 1≥4 ✗. Answer: h=3."
            },
            {
                question: "Why does the algorithm 'break' as soon as citations[i] < i+1?",
                choices: [
                    "Once a paper fails the threshold, all subsequent papers (with fewer citations) will also fail",
                    "To save time on large arrays",
                    "It's a safety check for empty arrays",
                    "Breaking is optional — it would work without it"
                ],
                answer: 0,
                explanation: "Since the array is sorted descending, if paper i doesn't have enough citations, paper i+1 (with equal or fewer citations) won't either. The break is correct and efficient."
            },
            {
                question: "What is the time complexity, and what dominates it?",
                choices: [
                    "O(n log n) — the sort dominates; the scan is O(n)",
                    "O(n) — just one loop",
                    "O(n²) — nested comparisons",
                    "O(1) — constant time"
                ],
                answer: 0,
                explanation: "Sorting takes O(n log n). The subsequent linear scan is O(n). Overall: O(n log n)."
            }
        ]
    }
};
