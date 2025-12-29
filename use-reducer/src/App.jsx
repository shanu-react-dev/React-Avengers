import { useReducer } from "react";

let reducer = (state, action) => {
  //   console.log(state);
  //   console.log(action);
  if (action.type == "increment") {
    return state + 1;
  } else if (action.type == "decrement") {
    return state - 1;
  }
};

let initialValue = 0;
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default App;
