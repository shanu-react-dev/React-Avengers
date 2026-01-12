import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

const Auth = () => {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "amarjeetjtpr@gmail.com",
      "shanu123"
    ).then((value) => {
      console.log(value);
    });
  };
  return (
    <div>
      <h1>Authentication in firebase</h1>
      <button onClick={signupUser}>Create User</button>
    </div>
  );
};

export default Auth;
