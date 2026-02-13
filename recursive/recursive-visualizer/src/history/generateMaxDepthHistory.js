const generateMaxDepthHistory = (tree) => {
    const history = [];
    let stack = [];
    let visited = new Set();
    let maxDepth = 0;
    let step = 0;

    const record = (node, line, msg, extra = {}) => {
        history.push({
            nodeId: node?.id || null,
            line,
            stack: JSON.parse(JSON.stringify(stack.map(s => ({ v: s.node.v, depth: s.depth })))),
            visited: [...visited],
            maxDepth,
            msg,
            ...extra
        });
    };

    record(null, 1, `Initializing iterative DFS for maximum depth...`);

    if (!tree) {
        record(null, 2, `Tree is empty, returning 0`);
        return history;
    }

    stack.push({ node: tree, depth: 1 });

    while (stack.length > 0 && step < 50) {
        step++;
        const { node, depth } = stack.pop();

        record(node, 6, `Processing node ${node.v} at depth ${depth}`, {
            currentStackItem: node.id
        });

        visited.add(node.id);
        maxDepth = Math.max(maxDepth, depth);
        record(node, 7, `Updated maximum depth to ${maxDepth}`);

        if (node.right) {
            stack.push({ node: node.right, depth: depth + 1 });
            record(node, 10, `→ Adding right child ${node.right.v} to stack (depth: ${depth + 1})`);
        }

        if (node.left) {
            stack.push({ node: node.left, depth: depth + 1 });
            record(node, 12, `→ Adding left child ${node.left.v} to stack (depth: ${depth + 1})`);
        }
    }

    record(null, 14, `✓ DFS complete! Maximum depth is ${maxDepth}`);

    history.push({
        nodeId: null,
        line: -1,
        stack: [],
        visited: [...visited],
        maxDepth,
        msg: `✓ Iterative DFS complete! Maximum depth is ${maxDepth}.`,
        isComplete: true
    });

    return history;
};

export default generateMaxDepthHistory;