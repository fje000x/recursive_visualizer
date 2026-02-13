import React from 'react';
import './QueueVisualizer.css';

const QueueVisualizer = ({ queue }) => {
    return (
        <div className="queue-visualizer">
            <h3>Queue Visualization</h3>
            <div className="queue-container">
                {queue.length === 0 ? (
                    <div className="empty-queue">Queue is empty</div>
                ) : (
                    queue.map((item, index) => (
                        <div key={index} className="queue-item">
                            {item}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default QueueVisualizer;