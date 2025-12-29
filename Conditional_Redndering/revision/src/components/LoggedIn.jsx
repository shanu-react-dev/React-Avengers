import React from "react";

const LoggedIn = (props) => {
  console.log(props);
  return (
    <div>
      <h1>I am {props.data.username}</h1>
      <h3>My favourite show is {props.data.favouriteShow}</h3>
      <p>{props.data.permission}</p>
    </div>
  );
};

export default LoggedIn;
