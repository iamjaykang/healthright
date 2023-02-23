import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavDropdown = ({ dropdown, dropdownOpen, closeMenu }) => {
  return (
    <ul className={`app__dropdown-list--mobile ${dropdownOpen ? "open" : ""}`}>
      {dropdown.map((item) => (
        <li className="app__dropdown-item--mobile" key={item.title}>
          <NavLink to={item.to} onClick={closeMenu}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavDropdown;
