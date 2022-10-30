import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input></input>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="About" element={<About />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
