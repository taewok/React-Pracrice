import React, { useState } from "react";
import CSSModule from "./CSSModule";
import SassComponent from "./SassComponent";
import classNames from "classnames";
import "./App.css";


function App() {
  const [clas, setClas] = useState(false);

  return (
    <div>
      <SassComponent></SassComponent>
      <CSSModule />
      <span className={classNames("a", { clas })}>LOVE</span>
      <button
        onClick={() => {
          setClas(true);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
