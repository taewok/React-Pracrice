
import { useState } from 'react';
import './App.css';
import UseCallback from './Use(Memo,Callback)';
import UseEffect from './UseEffect';
import UseReducer from './UseReducer';
//함수 컴포넌트의 사용을 첫째로 두고 꼭 필요한 상황에서만 클래스형 컴포넌트로 구현
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
