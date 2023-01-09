import React from "react";
import { NavLink } from "react-router-dom";
import "./NavDropdown.css";

const NavDropdown = ({
  dropdown,
  dropdownOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <ul
      className={`dropdown ${dropdownOpen ? "open" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
