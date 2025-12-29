import React, { useContext } from "react";
import { Data } from "./Jio";

const Consumer = () => {
  let data = useContext(Data);
  console.log(data);
  return <div></div>;
};

export default Consumer;
