import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../../../assets/data/navLinks.json";
import CartIcon from "../../../../Components/CartIcon/CartIcon.component";
import NavDropdown from "../../../../Components/NavDropdown/NavDropdown.component";
import {useDispatch} from 'react-redux'
import './Navbar.css'
import { signOutLoading } from "../../../../stores/user/user.action";

const Navbar = ({ currentUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [hovered, setHovered] = useState(null);
  let timeoutId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (hovered) {
      setDropdownOpen({ [hovered]: true });
    }
  }, [hovered]);

  const handleMouseEnter = (id) => {
    clearTimeout(timeoutId);
    setHovered(id);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen({ [hovered]: false });
      setHovered(null);
    }, 300);
  };

  const signOutUser = () => dispatch(signOutLoading())

  return (
    <nav className="navbar">
      <ul className="navbar-group">
        {navLinks.map((navLink) =>
          navLink.title === "Sign In" && currentUser ? (
            <li className="nav-item" key={navLink.id}>
              <NavLink className="nav-link" to="#" onClick={signOutUser}>
                <span>Sign Out</span>
              </NavLink>
            </li>
          ) : (
            <li
              className="nav-item"
              key={navLink.id}
              onMouseEnter={() => handleMouseEnter(navLink.id)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="nav-link" to={navLink.to}>
                <span>{navLink.title}</span>
              </NavLink>
              {navLink.dropdown && (
                <NavDropdown
                  key={`dropdown-${navLink.id}`}
                  dropdown={navLink.dropdown}
                  dropdownOpen={dropdownOpen[navLink.id]}
                  onMouseEnter={() => handleMouseEnter(navLink.id)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </li>
          )
        )}
        <li className="nav-item">
          <CartIcon isMobileMenu={false}/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
