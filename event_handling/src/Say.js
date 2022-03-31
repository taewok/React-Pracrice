import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:'green'}} onClick={() => setColor("green")}>초록색</button>
      <button style={{color:'red'}} onClick={() => setColor("red")}>빨간색</button>
      <button style={{color:'blue'}} onClick={() => setColor("blue")}>파란색</button>
    </div>
  );
};

export default Say;
//이벤트 이름은 카멜 표기법으로 작성
//예를 들어 HTML의 onclick은 리액트에서는 onClick으로 작성
//첫단어는 소문자 그 다음 단어들은 대문자 ex)gerMathScore