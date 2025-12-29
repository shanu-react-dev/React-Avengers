import React from "react";
import Child from "./Child";

const Parent = () => {
  // let num = 100;
  // let name = "Sachin Tendulkar";
  // let married = true;
  // let job = undefined;
  // let kids = null;

  // let userObj = {
  //   num: 100,
  //   name: "Satish",
  //   married: true,
  //   job: "Police",
  //   kids: "null",
  // };

  let arrOfFruits = ["papaya", "guava", "mango"];

  return (
    <div>
      Parent
      <h1>Hello from Parent</h1>
      {/* <Child data={num} name={name} married={married} job={job} kids={kids} /> */}
      {/* <Child {...userObj} /> */}
      <Child data={arrOfFruits} />
    </div>
  );
};

export default Parent;
