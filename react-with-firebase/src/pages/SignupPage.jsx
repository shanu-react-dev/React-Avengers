import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import { app } from "../firebase";

const db = getDatabase(app);

const SignupPage = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function putUser() {
    set(ref(db, "users/Shanu"), {
      username,
      password,
    });
  }
  return (
    <div>
      <h3>Signup Here</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={putUser}>Submit</button>
    </div>
  );
};

export default SignupPage;
