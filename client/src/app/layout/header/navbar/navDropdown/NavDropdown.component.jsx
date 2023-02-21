import React from "react";
import { NavLink } from "react-router-dom";

const NavDropdown = ({
  dropdown,
  dropdownOpen,
}) => {
  return (
    <ul
      className={`app__dropdown-list ${dropdownOpen ? "open" : ""}`}
    >
      {dropdown.map((item) => (
        <li className="app__dropdown-item" key={item.title}>
          <NavLink to={item.to}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavDropdown;
