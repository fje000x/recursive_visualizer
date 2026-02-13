// This file implements the breadth-first search algorithm for traversing trees.

function bfs(root) {
    if (!root) return 0;

    let queue = [{ node: root, depth: 1 }];
    let maxDepth = 0;

    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        maxDepth = Math.max(maxDepth, depth);

        if (node.left) {
            queue.push({ node: node.left, depth: depth + 1 });
        }

        if (node.right) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }

    return maxDepth;
}

export default bfs;