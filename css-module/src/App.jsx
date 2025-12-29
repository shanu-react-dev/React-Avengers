import React from "react";
import styles from "./app.module.css";
// import "./index.css";
import Demo from "./Demo";
import Login from "./Login/Login";

const App = () => {
  return (
    <div className={styles.myapp}>
      {/* App
      <h1 id={styles.myname}>Shanu is a good person...</h1>
      <Demo /> */}

      <Login />
    </div>
  );
};

export default App;
