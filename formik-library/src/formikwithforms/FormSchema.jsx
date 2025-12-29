import * as validation from "yup";

const formvalid = validation.object({
  username: validation.string().min(2).required("Please enter full Name"),
  password: validation.string().min(8).required("Enter Valid Password"),
});

export default formvalid;
