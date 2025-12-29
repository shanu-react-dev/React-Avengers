import * as validation from "yup";
const Formvalidate = validation.object({
  username: validation.string().min(2).required("Enter the userName"),
  password: validation.string().min(8).required("Password not match"),
});
export default Formvalidate;
