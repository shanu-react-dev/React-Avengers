import React from "react";
import Child from "./Child";
import ObjectParent from "./ObjectParent";

const App = () => {
  let obj = {
    name: "Shanu",
    age: 23,
    isStudent: true,
    isMarried: false,
    wifeName: "Sailaja",
  };
  return (
    <div>
      {/* <Child
        name="Tinku"
        age={24}
        isStudent={false}
        isMarried={true}
        wifeName="Rinki"
      /> */}
      {/* <Child data={obj} /> */}
      {/* <hr /> */}
      {/* <Child /> */}

      <ObjectParent />
    </div>
  );
};

export default App;
