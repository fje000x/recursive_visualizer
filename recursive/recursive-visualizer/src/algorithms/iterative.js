// This file implements the iterative depth-first search algorithm for traversing trees.

function iterativeDFS(root) {
    if (!root) return 0;

    const stack = [{ node: root, depth: 1 }];
    let maxDepth = 0;

    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        maxDepth = Math.max(maxDepth, depth);

        if (node.right) {
            stack.push({ node: node.right, depth: depth + 1 });
        }

        if (node.left) {
            stack.push({ node: node.left, depth: depth + 1 });
        }
    }

    return maxDepth;
}

export default iterativeDFS;