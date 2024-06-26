// src/components/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css'; // Assume you have some CSS for styling

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};

export default LoadingScreen;
