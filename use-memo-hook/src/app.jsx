// import React, { useMemo, useState } from "react";

import Parent from "./components/Parent";

// const App = () => {
//   let [state, setState] = useState(0);
//   let [val, setval] = useState(0);

//   useMemo(() => {
//     for (let i = 0; i <= 100000; i++) {
//       console.log(i);
//     }
//   }, [val]);

//   let handleChange = (e) => {
//     setval(e.target.value);
//   };
//   return (
//     <div>
//       <h1>{state}</h1>
//       <input type="number" onChange={handleChange} />
//       <button onClick={() => setState(state + 1)}>Increment</button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
