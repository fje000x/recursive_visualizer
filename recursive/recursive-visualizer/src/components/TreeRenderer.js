import React from 'react';
import './TreeRenderer.css';

const TreeRenderer = ({ tree }) => {
    const renderNode = (node) => {
        if (!node) return null;

        return (
            <div className="node" style={{ left: node.x, top: node.y }} id={node.id}>
                {node.v}
                {node.left && (
                    <svg className="line" style={{ position: 'absolute', left: node.x + 15, top: node.y + 15 }}>
                        <line x1="0" y1="0" x2={node.left.x - node.x} y2={node.left.y - node.y} stroke="black" />
                    </svg>
                )}
                {node.right && (
                    <svg className="line" style={{ position: 'absolute', left: node.x + 15, top: node.y + 15 }}>
                        <line x1="0" y1="0" x2={node.right.x - node.x} y2={node.right.y - node.y} stroke="black" />
                    </svg>
                )}
                <div className="children">
                    {renderNode(node.left)}
                    {renderNode(node.right)}
                </div>
            </div>
        );
    };

    return (
        <div className="tree-container">
            {renderNode(tree)}
        </div>
    );
};

export default TreeRenderer;