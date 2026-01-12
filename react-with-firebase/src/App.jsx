import "./style.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import SignupPage from "./pages/SignupPage";

const db = getDatabase(app);

console.log(db);
const App = () => {
  const putdata = () => {
    set(ref(db, "users/shanu"), {
      username: "Sailaja",
      id: 1,
      password: "Sailaja123",
    });

    console.log("data uploaded");
  };
  return (
    <div className="text-2xl">
      {/* <button
        onClick={putdata}
        className="bg-blue-950 text-[#fff] p-2 rounded-2xl"
      >
        Put Data
      </button> */}

      <SignupPage />
    </div>
  );
};

export default App;
