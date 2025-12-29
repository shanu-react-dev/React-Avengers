import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "../style.css";
import { useFormik } from "formik";
import formvalid from "./FormSchema";

let formData = {
  username: "",
  password: "",
};

const App = () => {
  let { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: formData,
    validationSchema: formvalid,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  console.log(errors);
  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form action="">
        <h1>Login Form</h1>
        <label htmlFor="username">Enter username</label>
        <div className="icons">
          <FaUserAlt className="iconset" />
          <input
            type="text"
            id="username"
            placeholder="enter username"
            name="username"
            onChange={handleChange}
          />
          {touched ? <p>{errors.username}`</p> : null}
        </div>

        <label htmlFor="password">Enter Password</label>
        <div className="icons">
          <FaLock className="iconset" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          {touched ? <p>{errors.password}`</p> : null}
        </div>

        <button>Log in</button>
      </form>
    </div>
  );
};

export default App;
