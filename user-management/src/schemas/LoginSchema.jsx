import * as login from "yup";

export const loginSchema = login.object({
  email: login
    .string()
    .email("Enter valid Email")
    .required("Enter valid email"),
  password: login
    .string()
    .min(8, "At least 8 characters")
    .max(20, "Maxlength is 20")
    .required("Password is mandatory"),
});
