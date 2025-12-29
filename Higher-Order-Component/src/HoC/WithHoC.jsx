import { useState } from "react";

const WithHoC = (OriginalComponent) => {
  //   console.log(OriginalComponent);
  const NewComponent = () => {
    // let myName = "Logeshwari";
    let [count, setCount] = useState(0);
    let handleClick = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} handleClick={handleClick} />;
  };
  return NewComponent;
};

export default WithHoC;
