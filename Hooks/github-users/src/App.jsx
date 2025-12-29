import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {
  let [data, setData] = useState({
    name: "Shanu",
    age: 46,
    study: false,
  });

  //   (async function fetchData() {
  //     let data = await fetch("https://api.github.com/users");
  //     let finalData = await data.json();
  //     // console.log(finalData);
  //     setData(finalData);
  //   })();

  return (
    <div>
      <Child data={data} updaterFunction={setData} />
    </div>
  );
};

export default App;
