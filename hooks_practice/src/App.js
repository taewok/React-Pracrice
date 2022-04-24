
import { useState } from 'react';
import './App.css';
import UseCallback from './Use(Memo,Callback)';
import UseEffect from './UseEffect';
import UseReducer from './UseReducer';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={()=>{
        setVisible(!visible);
      }}>
        {visible ? '숨기기': '보이기'}
      </button>
      <hr></hr>
      {visible && <UseEffect></UseEffect>}
      <br></br>
      <hr></hr>
      <UseReducer></UseReducer>
      <hr></hr>
      <br></br>
      <UseCallback></UseCallback>
    </div>
  )
}

export default App;
