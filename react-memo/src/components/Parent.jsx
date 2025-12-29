import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [state, setstate] = useState({
    name: "Lokesh",
    age: 21,
    profession: "Developer",
  });
  console.log("I am parent component");
  return (
    <div>
      <h1>{state.name}</h1>
      <button onClick={() => setstate({ ...state, name: "Logeshwari" })}>
        Increment Count
      </button>
      <Child data={"Praveen"} state={state.name} />
    </div>
  );
};

export default Parent;
