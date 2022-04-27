import React, { Component, useState } from 'react';
import CSSModule from './CSSModule';
import SassComponent from './SassComponent'
import classNames from 'classnames';
import './App.css';

function App() {
  const [clas,setClas] = useState(false);
  return (
    <div>
      <SassComponent></SassComponent>
      <CSSModule/>
      <div>
        <span className={classNames('a',{clas})}>LOVE</span>
        <button onClick={()=>{
          setClas(true)
        }}>클릭</button>
      </div>
    </div>
  );
}

export default App;
