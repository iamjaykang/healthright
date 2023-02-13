import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavDropdown.css";

const MobileNavDropdown = ({
  dropdown,
  dropdownOpen,
  closeMenu
}) => {
  return (
    <ul
      className={`mobile-dropdown ${dropdownOpen ? "open" : ""}`}
    >
      {dropdown.map((item) => (
        <li className="dropdown-item" key={item.title}>
          <NavLink to={item.to} onClick={closeMenu}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavDropdown;
