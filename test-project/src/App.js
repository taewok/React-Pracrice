import React, { useCallback, useState } from "react";
import "./App.scss";

const App = () => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(4);
  const [text, setText] = useState("");
  const [list, setList] = useState([
    {
      number: 1,
      text: "할일1",
      check: true,
    },
    {
      number: 2,
      text: "할일1",
      check: true,
    },
    {
      number: 3,
      text: "할일1",
      check: true,
    },
  ]);
  const onChange = useCallback((text) => {
    setValue(text.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      const nextList = {
        number: number,
        text: value,
        check: false,
      };
      setNumber(number+1);
      setList(list.concat(nextList));
      setValue("");
      e.preventDefault();
    },
    [value]
  );
  const onRemove = useCallback((id)=>{
    setList(list.filter((list)=>list.number != id))
  },[list])
  return (
    <div className="main_box">
      <div className="title">
        <h1>
          <b>입력</b>
        </h1>
      </div>
      <div className="insert">
        <form onSubmit={onSubmit}>
          <input
            placeholder="내용을 입력해주세요"
            value={value}
            onChange={onChange}
          />
          <button type="submit">+</button>
        </form>
      </div>
      <div className="list_box">
        <ul>
          {list.map((list) => (
            <div>
              <input type="checkbox" />
              <li key={list.number}>{list.text}{list.number}</li>
              <button onClick={()=>onRemove(list.number)}>X</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
