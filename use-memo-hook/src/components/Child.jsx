import React from "react";

const Child = (props) => {
  console.log("I am from Child component");
  console.log(props);
  props.data();
  return (
    <div>
      <h1>Hii I have multiple cars::</h1>
    </div>
  );
};

export default React.memo(Child);
