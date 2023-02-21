import React, { useState } from "react";
import { action as toggleMenu } from "redux-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import mobileNavLinks from "../../../../assets/data/mobileNavLinks.json";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../../../common/cartIcon/CartIcon.common";
import Menu from "../../../utils/menu/menu";
import burgerIcon from "../../../../assets/images/bars-solid.svg";
import { signOutLoading } from "../../../stores/user/user.action";
import MobileNavDropdown from "./mobileNavDropdown/MobileNavDropdown.layout";

const MobileNav = ({ currentUser }) => {
  const isOpen = useSelector((state) => state.burgerMenu.isOpen);
  const [hmDropdownOpen, setHmDropdownOpen] = useState({});
  const dispatch = useDispatch();

  const closeMenu = () => {
    setHmDropdownOpen({});
    dispatch(toggleMenu(false));
  };

  const toggleHmDropdown = (id) => {
    setHmDropdownOpen((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  const signOutUser = () => dispatch(signOutLoading());

  return (
    <Menu
      right
      isOpen={isOpen}
      customBurgerIcon={<img src={burgerIcon} alt="burger-icon" />}
      width={300}
    >
      {mobileNavLinks.map((navLink) =>
        navLink.title === "Sign In" && currentUser ? (
          <div key={navLink.id}>
            <NavLink className="app__hamburger-menu-link" to="#" onClick={signOutUser}>
              <span>Sign Out</span>
            </NavLink>
          </div>
        ) : (
          <div key={navLink.id}>
            <NavLink
              onClick={
                navLink.dropdown
                  ? () => {
                      toggleHmDropdown(navLink.id);
                    }
                  : closeMenu
              }
              className="app__hamburger-menu-link"
              to={navLink.to}
            >
              <span>{navLink.title}</span>
            </NavLink>
            {navLink.dropdown && (
              <MobileNavDropdown
                key={`dropdown-${navLink.id}`}
                dropdown={navLink.dropdown}
                dropdownOpen={hmDropdownOpen[navLink.id]}
                closeMenu={closeMenu}
              />
            )}
          </div>
        )
      )}
      <div>
        <Link onClick={closeMenu} to="/checkout">
          <CartIcon isMobileMenu={true} />
        </Link>
      </div>
    </Menu>
  );
};

export default MobileNav;
