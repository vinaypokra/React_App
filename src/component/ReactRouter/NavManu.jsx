import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <h1>NavMenu</h1>
      <NavLink exact activeClassName="active_class" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/about">
        About us
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact us
      </NavLink>
    </>
  );
};
export default NavMenu;
