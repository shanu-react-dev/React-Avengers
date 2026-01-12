//! In the first line we have getDatabase for creating an instance to the realtime database. ref which Creates a reference (path) to a location in the database set which Writes (or overwrites) data at that location
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import Auth from "./Auth";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

//! This creates a Realtime Database instance connected to your Firebase project.
// const db = getDatabase(app); // It will give the instance for database which we interact with

const App = () => {
  // const putData = () => {
  //   set(ref(db, "users/shanu"), {
  //     //! Writing data to teh firebase
  //     id: 1,
  //     name: "Shanu",
  //     age: 21,
  //   });
  // };
  return (
    <div>
      <h1>Firebase with React</h1>
      {/* <button onClick={putData}>Put Data</button> */}

      {/* <Auth /> */}

      {/* <Signup /> */}

      <SignIn />
    </div>
  );
};

export default App;
