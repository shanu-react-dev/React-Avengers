import { useState } from "react";

const ControlledForm = () => {
  let [username, setUsername] = useState(null);
  let [password, setPassword] = useState(null);

  let handleChange = (e) => {
    console.log(e.target);
    let { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    if (name == "username") {
      setUsername(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(e);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h4>Login Form</h4>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          onChange={handleChange}
          name="username"
        />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledForm;
