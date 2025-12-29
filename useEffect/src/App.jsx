import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const App = () => {
  // let [count, setCount] = useState(0);
  // let [value, setvalue] = useState(10);
  //! Without any dependency
  // useEffect(() => {
  //   console.log("Count value is: " + count);
  // });

  //! With empty dependency
  // useEffect(() => {
  //   console.log("Count value is: " + count);
  // }, []);

  //! With dependency
  // useEffect(() => {
  //   console.log("Count value is: " + count);
  // }, [count]);

  // let increCount = () => {
  //   setCount(count + 1);
  // };

  // let handleValue = () => {
  //   setvalue(value + 1);
  // };
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={increCount}>Increase count value</button>
      <h1>{value}</h1>
      <button onClick={handleValue}>Increase value</button> */}

      <Timer />
    </div>
  );
};

export default App;
