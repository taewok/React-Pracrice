import { useState } from "react";
import { Link, Route, Routes} from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";

function App() {
  const [user, setUser] = useState([
    {
      num: 1,
      name: "taewok1",
    },
    {
      num: 2,
      name: "taewok2",
    },
    {
      num: 3,
      name: "taewok3",
    },
    {
      num: 4,
      name: "taewok4",
    },
  ]);
  return (
    <div className="App">
      <nav>
        {user.map((user) => (
          <Link to={`/About?name=${user.name}`} key={user.num}>
            {user.name}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
