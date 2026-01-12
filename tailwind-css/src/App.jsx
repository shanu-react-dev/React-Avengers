import React from "react";
import "./style.css";

const App = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="h-screen w-screen bg-[#1a1a2a] flex items-center justify-center">
      <form
        className="h-70 w-1/4 bg-blue-300 flex flex-col items-center justify-center gap-2 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h3 className="text-blue-950 text-3xl text-center font-medium mb-6">
          Login Form
        </h3>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-4/6 border-2 border-blue-800 outline-0 p-2 rounded-2xl"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-4/6 border-2 border-blue-800 outline-0 p-2 rounded-2xl"
        />
        <input
          type="submit"
          value="Login"
          className="w-4/6 bg-blue-950 p-2.5 text-blue-100 rounded-2xl"
        />
      </form>
    </div>
  );
};

export default App;
