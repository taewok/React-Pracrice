import React from 'react';
import "../SCSS/LoadingSpinner.scss";

const LoadingSpinner = () => {
    return (
        <div className='container'>
            Loading...
            <div className='spinner-part'></div>
            <div className='spinner-part'></div>
            <div className='spinner-part'></div>
        </div>
    );
};

export default LoadingSpinner;