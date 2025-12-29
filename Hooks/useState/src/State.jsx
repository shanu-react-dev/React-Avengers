import { useState } from "react";
const State = () => {
  let [initialVal, updaterFun] = useState(0);
  console.log(initialVal);
  function incre() {
    updaterFun((ele) => {
      console.log(ele);
      return ele + 1;
    });
    updaterFun((ele) => {
      console.log(ele);
      return ele + 1;
    });
  }
  return (
    <div>
      <h1>Hello</h1>
      <h1>{initialVal}</h1>
      {/* <button onClick={() => updaterFun(initialVal + 1)}>Increment</button> */}

      <button onClick={incre}>Incre</button>
    </div>
  );
};

export default State;
