// This file contains functions for calculating the layout of the tree nodes for visualization.

function calculateNodePositions(tree, width, height) {
    const positions = [];
    const totalNodes = countNodes(tree);
    const levelHeight = height / (Math.log2(totalNodes) + 1);
    
    function positionNodes(node, x, y, level) {
        if (!node) return;
        
        positions.push({ id: node.id, x, y });
        
        const offset = width / Math.pow(2, level + 1);
        positionNodes(node.left, x - offset, y + levelHeight, level + 1);
        positionNodes(node.right, x + offset, y + levelHeight, level + 1);
    }
    
    positionNodes(tree, width / 2, 0, 0);
    return positions;
}

function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

function getNodePosition(positions, nodeId) {
    const node = positions.find(pos => pos.id === nodeId);
    return node ? { x: node.x, y: node.y } : null;
}

export { calculateNodePositions, getNodePosition };