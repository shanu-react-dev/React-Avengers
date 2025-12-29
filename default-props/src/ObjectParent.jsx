import React from "react";
import ObjectChild from "./ObjectChild";

const ObjectParent = () => {
  let obj = {
    name: "Shanu",
    age: 20,
    isMarried: true,
    wifeName: "Sundari",
  };
  return (
    <div>
      <ObjectChild data={obj} />
      <ObjectChild />
    </div>
  );
};

export default ObjectParent;
