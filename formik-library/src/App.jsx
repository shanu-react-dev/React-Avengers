import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./style.css";

const App = () => {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    // console.log(e.target);
    let { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
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
            minLength={8}
          />
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
        </div>

        <button>Log in</button>
      </form>
    </div>
  );
};

export default App;
