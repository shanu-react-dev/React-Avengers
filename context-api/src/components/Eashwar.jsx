import React, { useContext } from "react";
import { Data } from "./Jio";

const Eashwar = () => {
  let mydata = useContext(Data);
  console.log(mydata);
  return <div>Eashwar</div>;
};

export default Eashwar;
