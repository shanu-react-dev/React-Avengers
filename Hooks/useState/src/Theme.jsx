import React from "react";
import { useState } from "react";

const Theme = () => {
  let [theme, setTheme] = useState("light");
  let changeTheme = () => {
    setTheme((ele) => {
      console.log(ele);
      return ele === "light" ? "dark" : "light";
    });
  };
  return (
    <div className={theme}>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Theme;
