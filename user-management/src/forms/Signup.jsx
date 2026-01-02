import { useFormik } from "formik";
import axios from "axios";
import { validationSchema } from "../schemas/SignupSchema";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contact: "",
      gender: "",
      age: "",
      imgUrl: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/users?email=${data.email}`
        );

        if (res.data.length > 0) {
          toast.error("User already exists");
          return;
        }

        await axios.post("http://localhost:5000/users", data);
        toast.success("Registration Successful");
        navigate("/login");
        resetForm();
      } catch (err) {
        console.log("Signup error");
      }
    },
  });

  const handleWheel = (e) => e.currentTarget.blur();

  return (
    <div>
      <h1>Signup Here</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        <p>{touched.firstName && errors.firstName ? errors.firstName : null}</p>
        <label>Enter Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        <p>{touched.lastName && errors.lastName ? errors.lastName : null}</p>
        <label>Enter Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <p>{touched.email && errors.email ? errors.email : null}</p>
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <p>{touched.password && errors.password ? errors.password : null}</p>
        <label>Enter Contact</label>
        <input
          type="text"
          name="contact"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contact}
        />
        <p>{touched.contact && errors.contact ? errors.contact : null}</p>
        <label>Select Gender</label>
        <input
          id="male"
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={handleChange}
          checked={values.gender === "others"}
        />{" "}
        Others
        <p>{touched.gender && errors.gender ? errors.gender : null}</p>
        <label>Enter Age</label>
        <input
          type="number"
          name="age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          onWheel={handleWheel}
        />
        <p>{touched.age && errors.age ? errors.age : null}</p>
        <label>Enter Image URL</label>
        <input
          type="url"
          name="imgUrl"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.imgUrl}
        />
        <p>{touched.imgUrl && errors.imgUrl ? errors.imgUrl : null}</p>
        <button type="submit">Register Now</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
