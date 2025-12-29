import React from "react";
import Logo from "./Logo";
import Navlists from "./Navlists";

const NavbarContainer = () => {
  return (
    <div className="navbar">
      <Logo />
      <Navlists />
    </div>
  );
};

export default NavbarContainer;
