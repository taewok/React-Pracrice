import React from 'react';
import '../SCSS/Button.scss'

const Button = () => {
    return (
        <div>
            <button className="btn">BUTTON</button>
            <button className='btn2'>
                <span className='btn2_span'></span>
                BUTTON
            </button>
        </div>
    );
};

export default Button;