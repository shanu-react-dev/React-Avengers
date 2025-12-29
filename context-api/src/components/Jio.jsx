import React from "react";
import { createContext } from "react";
import Consumer from "./Consumer";

export let Data = createContext();
// console.log(Provider);

const Jio = ({ children }) => {
  console.log(children);
  let myData = {
    plan: 349,
    ProviderName: "Jio",
  };
  return <Data.Provider value={myData}>{children}</Data.Provider>;
};

export default Jio;
