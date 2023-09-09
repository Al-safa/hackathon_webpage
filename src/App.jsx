import { Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import Register from "./routes/Register"

export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}
