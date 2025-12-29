import React, { useState } from "react";
import UseRef from "./UseRef";
import RevisionUseref from "./RevisionUseref";
import "./index.css";

const App = () => {
  let [state, setState] = useState(0);
  console.log("State value is rendering: " + state);
  function increment() {
    setState(state + 1);
  }
  return (
    <div>
      {/* <h1>{state} from useState hook</h1>
      <button onClick={increment}>Increment</button>
      <UseRef /> */}
      <RevisionUseref />
    </div>
  );
};

export default App;
