import React from "react";
import Props from "./Props";

const App = () => {
  return (
    <div>
      <Props name="Shanu" age={21} isStudent={true} />
      <Props name="Shanu" age="24" isStudent={false} />
    </div>
  );
};

export default App;
