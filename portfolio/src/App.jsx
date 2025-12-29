import React from "react";
import NavbarContainer from "./componets/navbar/NavbarContainer";
import "./index.css";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Project from "./componets/pages/Project";
import Contact from "./componets/pages/Contact";

const App = () => {
  return (
    <div>
      <NavbarContainer />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
