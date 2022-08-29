/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./Spin.css";

const Spin = () => {
  useEffect(()=>{
    const imgSpan = document.querySelectorAll(".box span");
    for (let index = 0; index < imgSpan.length; index++) {
      imgSpan[index].style.transform = `rotateY(calc(${index+1} * 45deg)) translateZ(400px)`
    }
  })
  return (
    <>
      <div className="box">
        <span>
          <img src="1.jpg"></img>
        </span>
        <span>
          <img src="2.jpg"></img>
        </span>
        <span>
          <img src="3.jpg"></img>
        </span>
        <span>
          <img src="4.jpg"></img>
        </span>
        <span>
          <img src="5.jpg"></img>
        </span>
        <span>
          <img src="6.jpg"></img>
        </span>
        <span>
          <img src="7.jpg"></img>
        </span>
        <span>
          <img src="8.jpg"></img>
        </span>
      </div>
    </>
  );
};

export default Spin;
