import React from "react";
import Logo from "./Logo";
import Navlists from "./Navlists";
import Dropdown from "./Dropdown";

const NavbarContainer = () => {
  return (
    <div className="navbar">
      <Logo />
      <Navlists />
      <Dropdown />
    </div>
  );
};

export default NavbarContainer;
