import React from "react";

const Child = (props) => {
  console.log("I am child component");
  return (
    <div>
      <h1>{props.state}</h1>
    </div>
  );
};

export default React.memo(Child);
