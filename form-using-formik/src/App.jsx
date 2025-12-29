import { useFormik } from "formik";
import validateInput from "./FormSchema";
import { useState } from "react";

const initialdata = {
  username: "",
  password: "",
};
const App = () => {
  let [showPassword, setShowPassword] = useState(false);
  const formData = useFormik({
    initialValues: initialdata,
    validationSchema: validateInput,
    onSubmit: (data) => data.value,
  });

  console.log(showPassword);

  let { handleChange, handleSubmit, values, errors, touched } = formData;
  //   console.log(formData);
  //   console.log(errors);
  //   console.log(values);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Login FOrm</h1>
        <label htmlFor="username">enter username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
        {touched ? <p>{errors.username}</p> : null}

        <label htmlFor="password">password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? "showPassword" : "hidePassword"}
        </button>
        {touched ? <p>{errors.password}</p> : null}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
