import { useFormik } from "formik";
import { loginSchema } from "../schemas/LoginSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  let navigate = useNavigate();
  let { handleBlur, handleSubmit, errors, handleChange, touched, values } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async function (data) {
        const res = await axios.get(
          `http://localhost:5000/users?email=${data.email}`
        );
        console.log(res);

        const allData = await axios.get(`http://localhost:5000/users`);
        console.log(allData);
        allData.data.map((ele, index) => {
          if (ele.email === res.data[0].email) {
            navigate("/");
          } else {
            console.log("Please provide valid credentials");
          }
        });
      },
    });
  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <p>{errors.email && touched.email ? `${errors.email}` : null}</p>
        <label htmlFor="password">Enter your Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <p>
          {errors.password && touched.password ? `${errors.password}` : null}
        </p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
