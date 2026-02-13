import React from 'react';

const StackVisualizer = ({ stack }) => {
    return (
        <div className="stack-visualizer">
            <h3>Stack Visualization</h3>
            <div className="stack-container">
                {stack.length === 0 ? (
                    <div className="empty-stack">Stack is empty</div>
                ) : (
                    <ul>
                        {stack.map((item, index) => (
                            <li key={index} className="stack-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default StackVisualizer;