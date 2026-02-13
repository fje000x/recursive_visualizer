// This file contains the implementation of the minimum depth algorithm for binary trees.

function minDepth(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);

    if (!root.left) return rightDepth + 1;
    if (!root.right) return leftDepth + 1;

    return Math.min(leftDepth, rightDepth) + 1;
}

export default minDepth;