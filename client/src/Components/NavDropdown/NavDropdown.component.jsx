import React from "react";
import { NavLink } from "react-router-dom";
import "./NavDropdown.css";

const NavDropdown = ({
  dropdown,
  dropdownOpen,
}) => {
  return (
    <ul
      className={`dropdown ${dropdownOpen ? "open" : ""}`}
    >
      {dropdown.map((item) => (
        <li className="dropdown-item" key={item.title}>
          <NavLink to={item.to}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavDropdown;
