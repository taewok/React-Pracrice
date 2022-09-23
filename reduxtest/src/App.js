import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./SliceReducer";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  const [cityList, setCityList] = useState();
  useEffect(() => {
    const city = async () => {
      const getCityList = await axios.get(
        "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"
      );
      setCityList(getCityList.data.regcodes);
    };
    city();
  }, []);

  return (
    <div className="App">
      <select>
        {cityList && cityList.map((data)=>(
          <option key={data.code}>{data.name}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
