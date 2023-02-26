import React, { FC } from "react";
import { NavLink } from "react-router-dom";

export interface NavDropdownProps {
  dropdown: Array<{
    id: number;
    title: string;
    to: string;
  }>;
  dropdownOpen: boolean;
}

const NavDropdown: FC<NavDropdownProps> = ({
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
