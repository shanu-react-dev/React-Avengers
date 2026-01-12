import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let signin = () => {
    signInWithEmailAndPassword(auth, email, password).then((data) => {
      console.log(data);
      console.log("you signed in successfully");
    });
  };
  return (
    <div>
      <h1>Sign in here</h1>
      <label htmlFor="email">Enter your email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Enter Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signin}>Sign In</button>
    </div>
  );
};

export default SignIn;
