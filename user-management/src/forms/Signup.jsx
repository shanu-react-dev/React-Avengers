import { useFormik } from "formik";
import { validationSchema } from "../schemas/SignupSchema";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

let initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  contact: "",
  gender: "",
  age: "",
  imgUrl: "",
};
const Signup = () => {
  let navigate = useNavigate();
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/users?email=${data.email}`
        );

        if (res.data.length > 0) {
          toast.error("User already exists", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          return;
        }

        await axios.post("http://localhost:5000/users", data);

        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/login");
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });
  function handleWheel(e) {
    e.currentTarget.blur();
  }

  return (
    <div>
      <h1>Signup Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Enter First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        <p>
          {touched.firstName && errors.firstName ? `${errors.firstName}` : null}
        </p>
        <label htmlFor="lastName">Enter Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        <p>
          {touched.lastName && errors.lastName ? `${errors.lastName}` : null}
        </p>
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <p>{touched.email && errors.email ? `${errors.email}` : null}</p>
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <p>
          {touched.password && errors.password ? `${errors.password}` : null}
        </p>
        <label htmlFor="contact">Enter contact</label>
        <input
          type="text"
          id="contact"
          placeholder="contact"
          name="contact"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contact}
        />
        <p>{touched.contact && errors.contact ? `${errors.contact}` : null}</p>

        <label htmlFor="gender">Select Gender</label>
        <input
          type="radio"
          name="gender"
          id="male"
          onChange={handleChange}
          onBlur={handleBlur}
          value="male"
          checked={values.gender === "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          onChange={handleChange}
          onBlur={handleBlur}
          value="female"
          checked={values.gender === "female"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="others"
          onChange={handleChange}
          onBlur={handleBlur}
          value="others"
          checked={values.gender === "others"}
        />
        <label htmlFor="others">Others</label>
        <p>{touched.gender && errors.gender ? `${errors.gender}` : null}</p>

        <label htmlFor="age">Enter age</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          onWheel={handleWheel}
        />
        <p>{touched.age && errors.age ? `${errors.age}` : null}</p>

        <label htmlFor="imgUrl">Enter Image Url</label>
        <input
          type="url"
          name="imgUrl"
          id="imgUrl"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.imgUrl}
        />
        <p>{touched.imgUrl && errors.imgUrl ? `${errors.imgUrl}` : null}</p>

        <button type="submit">Register Now</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Signup;
