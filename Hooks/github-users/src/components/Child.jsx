import React from "react";

const Child = ({ data, updaterFunction }) => {
  console.log(data, updaterFunction);
  function changeName() {
    updaterFunction({ ...data, name: "Shivam" });
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Child;
