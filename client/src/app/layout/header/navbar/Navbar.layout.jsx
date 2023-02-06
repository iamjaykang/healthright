import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../../../assets/data/navLinks.json";
import CartIcon from "../../../../components/cartIcon/CartIcon.component";
import NavDropdown from "../../../../components/navDropdown/NavDropdown.component";
import { useDispatch } from "react-redux";
import "./Navbar.css";
import { signOutLoading } from "../../../../stores/user/user.action";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = ({ currentUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [hovered, setHovered] = useState(null);
  let timeoutId;
  const dispatch = useDispatch();

  useEffect(() => {
    // if a nav item is being hovered over, set the corresponding dropdown to open
    if (hovered) {
      setDropdownOpen({ [hovered]: true });
    }
  }, [hovered]);

  // function to handle mouse enter event on a nav item
  const handleMouseEnter = (id) => {
    // clear any previous timeout to close the dropdown
    clearTimeout(timeoutId);
    setHovered(id);
  };

  // function to handle mouse leave event on a nav item
  const handleMouseLeave = (id) => {
    // set a timeout to close the dropdown after 300ms
    timeoutId = setTimeout(() => {
      if (hovered === id) {
        setDropdownOpen({ [hovered]: false });
        setHovered(null);
      }
    }, 300);
  };

  const signOutUser = () => dispatch(signOutLoading());

  return (
    <nav className="navbar">
      <ul className="navbar-group">
        {navLinks.map((navLink) =>
          // if the navLink title is "Sign In" and there is a current user, set navLink to "Sign Out"
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
              onMouseEnter={() =>
                navLink.dropdown && handleMouseEnter(navLink.id)
              }
              onMouseLeave={() =>
                navLink.dropdown && handleMouseLeave(navLink.id)
              }
            >
              <NavLink className="nav-link" to={navLink.to}>
                <span>{navLink.title}</span>
                {/* if the navLink dropdown exists and is hovered over render expandMoreIcon else expandLessIcon */}
                {navLink.dropdown &&
                  (dropdownOpen && hovered === navLink.id ? (
                    <span>
                      <ExpandLessIcon />
                    </span>
                  ) : (
                    <span>
                      <ExpandMoreIcon />
                    </span>
                  ))}
              </NavLink>
              {navLink.dropdown && (
                <NavDropdown
                  key={`dropdown-${navLink.id}`}
                  dropdown={navLink.dropdown}
                  dropdownOpen={dropdownOpen[navLink.id]}
                />
              )}
            </li>
          )
        )}
        <li className="nav-item">
          <CartIcon isMobileMenu={false} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
