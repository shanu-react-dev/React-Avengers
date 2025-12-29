import React, { useState } from "react";

const App = () => {
  //   let [name, setName] = useState(null);
  //   let [age, setAge] = useState(null);
  //   let [contact, setContact] = useState(null);
  //   let [password, setPassword] = useState(null);

  let [data, setData] = useState({
    fullName: "",
    age: "",
    contact: "",
    password: "",
    email: "",
  });

  let { fullName, age, contact, password, email } = data;

  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      fullName: "",
      age: "",
      contact: "",
      password: "",
      email: "",
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label htmlFor="fullName">Enter Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          onChange={handleChange}
        />

        <label htmlFor="age">Enter Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} />

        <label htmlFor="contact">Enter contact</label>
        <input type="tel" name="contact" id="contact" onChange={handleChange} />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <label htmlFor="email">Enter email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
};

export default App;
