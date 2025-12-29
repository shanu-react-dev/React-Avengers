import React, { useEffect, useState } from "react";

const Timer = () => {
  let [timer, settimer] = useState(0);

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       settimer((prevtimer) => {
  //         return prevtimer + 1;
  //       });
  //     }, 1000);
  //     console.log(timer);

  //     return () => {
  //       console.log("It's time to stop");
  //       clearInterval(interval);
  //     };
  //   });

  let [apiData, setApiData] = useState(null);
  let fetchData = async () => {
    let mydata = await fetch("https://fakestoreapi.com/products");
    let finalData = await mydata.json();
    // console.log(finalData);
    setApiData(finalData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(apiData);
  return (
    <div>
      <h1>Timer is working: {timer}</h1>
    </div>
  );
};

export default Timer;
