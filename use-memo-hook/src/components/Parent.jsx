import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [state, setState] = useState(0);

  let myarr = [
    "Porsche",
    "Bugatti",
    "Aston Martin",
    "VolksWagen",
    "Ford Mustang",
  ];

  let fullName = () => {
    console.log(`I am Amarjeet Kumar. My age is ${state}`);
  };

  let myFavCar = "BMW M5 CS";

  // let arr = useMemo(() => fullName, []);

  let fun = useCallback(() => fullName, []);

  console.log("I am from parent component");

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <Child data={fun} />
    </div>
  );
};

export default Parent;
