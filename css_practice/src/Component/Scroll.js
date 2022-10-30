import React, { useEffect } from "react";
import "../SCSS/Scroll.scss";
import axios from "axios";

const Scroll = () => {
    const key = "ogOXawrNeeKckedJw7whjeVYQ0PVA6GIJOkVCNTMTEM%2F9C37ZlRjaoDgkHDsmki2MCJlxZSCG9p9I1pe6pcwOA%3D%3D"
    useEffect(()=>{
        axios.get(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&bgnde=20160912&numOfRows=20&upkind=422400`)
        .then((data)=>{
            console.log(data.data.response.body);
        })
    },[])
  return (
    <div className="main">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      <div className="four"></div>
    </div>
  );
};

export default Scroll;
