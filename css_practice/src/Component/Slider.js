import React from "react";
import "../SCSS/Slider.scss";

const Slider = () => {
  return (
    <div>
      <input type="radio" id="slide1" name="btn"></input>
      <input type="radio" id="slide2" name="btn"></input>
      <input type="radio" id="slide3" name="btn"></input>
        <div className="conbox con1">1</div>
        <div className="conbox con2">2</div>
        <div className="conbox con3">3</div>
      <div className="label_box">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
    </div>
  );
};

export default Slider;
