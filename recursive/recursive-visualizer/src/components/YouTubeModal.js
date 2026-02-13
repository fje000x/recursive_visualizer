import React from 'react';
import './YouTubeModal.css'; // Assuming you have a CSS file for styling

const YouTubeModal = ({ isOpen, onClose, videos }) => {
    if (!isOpen) return null;

    return (
        <div className="youtube-modal-overlay">
            <div className="youtube-modal">
                <div className="youtube-modal-header">
                    <h2>YouTube Recommendations</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="youtube-modal-content">
                    {videos.length > 0 ? (
                        <div className="video-list">
                            {videos.map((video, index) => (
                                <div key={index} className="video-item">
                                    <h4>{video.title}</h4>
                                    <p>{video.reason}</p>
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Now</a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No recommendations available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default YouTubeModal;