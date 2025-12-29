import React, { useState } from "react";
import LoggedIn from "./components/LoggedIn";
import NotLoggedIn from "./components/NotLoggedIn";

const App = () => {
  let [isLoggedin, setIsLoggedIn] = useState(true);
  let userObj = {
    username: "Mr. Bean",
    favouriteShow: "Oggy and Cockroach",
    permission: "You are allowed to explore anything in this app",
  };
  //   Conditional rendering using if and else
  //   if (isLoggedin) {
  //     return <LoggedIn data={userObj} />;
  //   } else {
  //     return <NotLoggedIn />;
  //   }
  console.log(isLoggedin);
  function handleButton() {
    setIsLoggedIn(!isLoggedin);
  }

  return (
    <>
      {isLoggedin ? <LoggedIn data={userObj} /> : <NotLoggedIn />}
      <button onClick={handleButton}>{isLoggedin ? "Logout" : "login"}</button>
    </>
  );
};

export default App;
