import React from "react";

const ObjectChild = ({ data = {} }) => {
  console.log(data);
  let {
    name = "Not Available",
    age = "NA",
    isMarried = "NA",
    wifeName = "NA",
  } = data;
  return (
    <div>
      <h1>Details about me</h1>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Married: {isMarried ? "yes" : "No"}</h3>
      <h3>Wife Name: {wifeName}</h3>
    </div>
  );
};

export default ObjectChild;
