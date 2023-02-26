import React, { FC, MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

export interface MobileNavDropdownProps {
  dropdown: Array<{
    id: number;
    title: string;
    to: string;
  }>;
  dropdownOpen: boolean;
  closeMenu: MouseEventHandler<HTMLAnchorElement>;
}

const MobileNavDropdown: FC<MobileNavDropdownProps> = ({
  dropdown,
  dropdownOpen,
  closeMenu,
}) => {
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
