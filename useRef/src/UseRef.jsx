import React, { useRef } from "react";

const UseRef = () => {
  let countRef = useRef(0);
  function incre() {
    countRef.current = countRef.current + 1;
  }
  return (
    <div>
      <h1>{countRef.current} Value from useRef</h1>
      <button onClick={incre}>Incre</button>
    </div>
  );
};

export default UseRef;
