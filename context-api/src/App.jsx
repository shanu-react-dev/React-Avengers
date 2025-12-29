import Consumer from "./components/Consumer";
import Eashwar from "./components/Eashwar";
import Jio from "./components/Jio";

const App = () => {
  return (
    <div>
      <Jio>
        <Consumer />
        <Eashwar />
      </Jio>
    </div>
  );
};

export default App;
