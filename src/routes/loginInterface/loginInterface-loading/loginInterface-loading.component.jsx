import React from 'react';
import './loginInterface-loading.styles.scss';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner">
            </div>
            <div className='loading-text'>You are already logged in</div>
        </div>
    );
};

export default LoadingSpinner;