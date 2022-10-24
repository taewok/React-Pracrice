import React, { useEffect } from 'react';
import "../SCSS/Background.scss"

const Background = () => {
    useEffect(()=>{
        let focus = document.querySelector(".focus");
      let focusHalfWidth = focus.offsetWidth/2;
      document.onmousemove = (e)=>{
        focus.style.left = e.pageX - focusHalfWidth+"px";
        focus.style.top = e.pageY - focusHalfWidth+"px";
      }
      })
    return (
        <div className='hero'>
            <h1>Highlights</h1>
            <div className='focus'></div>
        </div>
    );
};

export default Background;