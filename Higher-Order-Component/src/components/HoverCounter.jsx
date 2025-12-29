import React, { useState } from "react";
import WithHoC from "../HoC/WithHoC";

const HoverCounter = ({ count, handleClick }) => {
  return (
    <div>
      <h1 onMouseOver={handleClick}>
        I am count from Hover component and the value is: {count}
      </h1>
    </div>
  );
};

export default WithHoC(HoverCounter);
