import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/LoginSchema";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { handleBlur, handleSubmit, errors, handleChange, touched, values } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginSchema,
      onSubmit: async (formData) => {
        try {
          const res = await axios.get(
            `http://localhost:5000/users?email=${formData.email}`
          );

          const user = res.data[0];

          if (!user || user.password !== formData.password) {
            toast.error("Invalid credentials");
            return;
          }

          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userName", user.firstName);
          localStorage.setItem("userImg", user.imgUrl);

          navigate("/");
        } catch (err) {
          console.log("Login error");
        }
      },
    });

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <p>{errors.email && touched.email ? errors.email : null}</p>

        <label>Enter your Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <p>{errors.password && touched.password ? errors.password : null}</p>

        <button type="submit">Login</button>
        <Link to="/signup">Signup</Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
