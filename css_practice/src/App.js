import React, { useEffect } from 'react';
import Background from './Component/Background';

function App() {
  useEffect(()=>{
    let focus = document.querySelector(".focus");
  let focusHalfWidth = focus.offsetWidth/2;
  document.onmousemove = (e)=>{
    focus.style.left = e.pageX - focusHalfWidth+"px";
    focus.style.top = e.pageY - focusHalfWidth+"px";
  }
  })
  return (
    <>
      <Background/>
    </>
  );
}

export default App;
