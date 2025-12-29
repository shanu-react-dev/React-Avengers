import { useFormik } from "formik";
import { updateValidation } from "../schemas/UpdateSchema";

const Update = () => {
  let {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    values,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: updateValidation,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <h1>Update Your Profile</h1>
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

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default Update;
