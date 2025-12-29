import * as yup from "yup";

export let validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "at least three characters required")
    .max(30, "only 30 characters allowed")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(3, "at least three characters required")
    .max(30, "only 30 characters allowed")
    .required("Last name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "At least 8 characters")
    .max(20, "Maxlength is 20")
    .required("Password is mandatory"),
  contact: yup
    .string()
    .min(10, "Minimum 10 characters required")
    .max(10, "Maximum 10 characters required")
    .matches(/^\d{10}$/, "Contact must be exactly 10 digits")
    .required("Enter a valid contact number")
    .test("is-number", "Contact must contain only digits", (value) => {
      return /^\d+$/.test(value);
    }),
  gender: yup.string().required(),
  age: yup.number().min(18).max(150).required("This field is required"),
  imgUrl: yup.string().url().min(3).required("Enter valid URL"),
});
