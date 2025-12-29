import React, { Fragment, useState } from "react";

const App = () => {
  let [data, setData] = useState(null);
  (async function fetchApi(params) {
    let data = await fetch("https://api.github.com/users");
    let finalData = await data.json();
    console.log(finalData);
    setData(finalData);
  })();
  return (
    <>
      {data == null ? (
        // "loading"
        console.log("loading.......")
      ) : (
        <>
          {data?.map((ele, index) => {
            return (
              <Fragment>
                <li>{ele.login}</li>
              </Fragment>
            );
          })}
        </>
      )}
    </>
  );
};

export default App;
