import { Fragment } from "react";

const Child = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* <h1>I am Child Component</h1>
      <h1>Number data from parent: {data}</h1>
      <h1>String data from parent: {name}</h1>
      <h2>Boolean Data from parent: {married}</h2>
      <h2>Undefined data from parent: {job}</h2>
      <h2>Null data from parent: {kids}</h2> */}
      {/* {data.map((e, key) => {
        console.log(e);
        return (
          <Fragment key={key}>
            <h1>{e}</h1>
          </Fragment>
        );
      })} */}

      {data.map((ele, key) => {
        return (
          <Fragment key={key}>
            <h1>{ele}</h1>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Child;
