const generateMinDepthHistory = (tree) => {
    const history = [];
    let stack = [];
    let callId = 0;

    const record = (node, line, msg, extra = {}) => {
        history.push({
            nodeId: node?.id || null,
            line,
            stack: JSON.parse(JSON.stringify(stack)),
            msg,
            ...extra
        });
    };

    const dfs = (node, depth) => {
        if (!node) {
            record(null, 2, `Node is None, returning 0`);
            return 0;
        }

        const frameId = ++callId;
        stack.push({ id: frameId, nodeId: node.id, depth });
        record(node, 1, `Entering minDepth(${node.v})`);

        // Base case: leaf node
        if (!node.left && !node.right) {
            record(node, 3, `✓ Leaf node ${node.v} found, returning 1`);
            stack.pop();
            return 1;
        }

        let leftDepth = Infinity;
        let rightDepth = Infinity;

        if (node.left) {
            leftDepth = dfs(node.left, depth + 1);
            record(node, 4, `Left depth calculated: ${leftDepth}`);
        }

        if (node.right) {
            rightDepth = dfs(node.right, depth + 1);
            record(node, 5, `Right depth calculated: ${rightDepth}`);
        }

        const result = Math.min(leftDepth, rightDepth) + 1;
        record(node, 6, `min(${leftDepth}, ${rightDepth}) + 1 = ${result}`);
        stack.pop();
        return result;
    };

    dfs(tree, 1);

    history.push({
        nodeId: null,
        line: -1,
        stack: [],
        msg: `✓ Algorithm complete! Minimum depth calculated successfully.`,
        isComplete: true
    });

    return history;
};

export default generateMinDepthHistory;