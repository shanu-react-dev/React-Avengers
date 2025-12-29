// import { useState } from "react";
import { useState } from "react";
import State from "./State";
import Theme from "./Theme";
import "./index.css";
const App = () => {
  let [state, setState] = useState(0);
  // let [initialVal, updaterFun] = useState(0);
  // console.log(initialVal);
  // console.log(updaterFun);

  // function Incre() {
  //   updaterFun(function (para) {
  //     console.log(para);
  //     return para + 1;
  //   });
  //   updaterFun(function (para) {
  //     console.log(para);
  //     return para + 1;
  //   });
  // }
  // async;

  return (
    <div className="app">
      {/* <h1>{initialVal}</h1>
      <button onClick={Incre}>Incre</button> */}

      <h1>I am from App Component</h1>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Incre</button>
      {/* <State />
      <Theme /> */}
    </div>
  );
};

export default App;
