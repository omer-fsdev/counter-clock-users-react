
import LifeCycleMethods from "./components/LifeCycleMethods";
import Clock from "./components/Clock";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useState } from "react";
import User from "./components/User";

function App() {
  const [clock, setClock] = useState(true)

  return (
    <div className="container-fluid">
      <LifeCycleMethods /> 
      <hr /><hr />
      <button className="container-fluid btn px-4 text-end btn-lg btn-warning fw-semibold  text-dark" onClick={()=>setClock(!clock)}>{clock ? "⏫ HIDE CLOCK" : "⏬ SHOW CLOCK"}</button>
      {clock && <Clock />}
      <hr /><hr />
      <User/>
    </div>
  );
}

export default App;
