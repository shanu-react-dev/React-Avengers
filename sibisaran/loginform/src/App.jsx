import React, { useState } from "react";
import { useFormik } from "formik";
import Formvalidate from "./FormSchema";
import "./App.css";

export const App = () => {
  let [showPassword, setShowPassword] = useState(false);
  const formData = {
    username: "",
    password: "",
  };

  const formdata = useFormik({
    initialValues: formData,
    validationSchema: Formvalidate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  let { handleChange, handleSubmit, values, errors, touched } = formdata;
  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label htmlFor="username">Enter your Name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your name"
          required
          onChange={handleChange}
        />
        {touched.username && errors.username ? <p>Hii</p> : null}
        <label htmlFor="password">Enter your password</label>
        <div className="pass">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
          />
          <button onClick={() => setShowPassword(!showPassword)} className="showpass">
            {showPassword ? "HidePassword" : "Show Password"}
          </button>
        </div>
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <button type="submit" className="last">Submit</button>
      </form>
    </div>
  );
};

export default App;
