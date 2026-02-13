import React from 'react';

const NodeLabel = ({ node }) => {
    return (
        <div className="node-label">
            <span className="node-value">{node.value}</span>
            {node.left && <span className="node-children">L: {node.left.value}</span>}
            {node.right && <span className="node-children">R: {node.right.value}</span>}
        </div>
    );
};

export default NodeLabel;