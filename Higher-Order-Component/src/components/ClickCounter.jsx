import React, { useState } from "react";
import WithHoC from "../HoC/WithHoC";

const ClickCounter = ({ count, handleClick }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default WithHoC(ClickCounter);
