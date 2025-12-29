import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import styles from "./Login.module.css";

const Login = () => {
  let [formdata, setformdata] = useState({
    username: "",
    password: "",
  });

  let handlechange = (e) => {
    let { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setformdata({
      username: "",
      password: "",
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlesubmit}>
        <h1>Login here</h1>

        <input
          type="text"
          name="username"
          placeholder="username"
          value={formdata.username}
          onChange={handlechange}
        />
        <input
          type="password"
          name="password"
          value={formdata.password}
          placeholder="Enter Password"
          onChange={handlechange}
        />

        <button>Login</button>

        <div className={styles.divider}>
          <div></div>
          <p>or</p>
          <div></div>
        </div>

        <div className={styles.socialIcons}>
          <FaGoogle title="google" />
          <FaGithub title="github" />
          <FaFacebook title="facebook" />
        </div>
      </form>
    </div>
  );
};

export default Login;
