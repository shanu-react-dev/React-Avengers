import React from "react";
import NavContainer from "./components/Navbar/NavContainer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavContainer />
      <Outlet />
    </div>
  );
};

export default Layout;
