import React from 'react';
import "../Css/CardFlip.scss"

const CardFlip = () => {
    return (
        <ul>
            <li>
                <div className='front'>2</div>
                <div className='back'>1</div>
            </li>
            <li>
                <div className='front'>2</div>
                <div className='back'>1</div>
            </li>
            <li>
                <div className='front'>2</div>
                <div className='back'>1</div>
            </li>
        </ul>
    );
};

export default CardFlip;