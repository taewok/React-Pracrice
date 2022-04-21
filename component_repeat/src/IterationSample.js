import React, { useState } from "react";

const IterationSample = () => {
    const [name,setName] = useState([
        {id:1,text:'눈사람'},
        {id:2,text:'얼음'},
        {id:3,text:'눈'},
        {id:4,text:'바람'}
    ]);
    const [inputText,setInputText] = useState('');
    const [nextId,setNextId] = useState('');

    const onChange = (e)=>{
        setInputText(e.target.value);
    }
    const onClick = ()=>{
        const nextNames = name.concat({
            id:nextId,
            text:inputText
            
        })
        setNextId(nextId+1);
        setName(nextNames);
        setInputText('');
    }
    const onRemove = (id) =>{
        const nextNames = name.filter((name)=>name.id != id);
        setName(nextNames)
    }
    const enter = (enter) =>{
        if(enter.key === 'Enter'){
            onClick();
        }
        console.log(enter.key)
    }
    const nameList = name.map((name)=><li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>)
  return (
      <>
        <input value={inputText} onChange={onChange} onKeyUp={enter}></input>
        <button onClick={onClick} >추가</button>
        <ul>{nameList}</ul>
      </>
  );
};

export default IterationSample;
