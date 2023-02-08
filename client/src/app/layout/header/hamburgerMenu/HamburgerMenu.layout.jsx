import React, { useState } from "react";
import { action as toggleMenu } from "redux-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import mobileNavLinks from "../../../../assets/data/mobileNavLinks.json";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../../../../components/cartIcon/CartIcon.component";
import Menu from "../../../utils/menu/menu";
import "./HamburgerMenu.css";
import burgerIcon from "../../../../assets/images/bars-solid.svg";
import { signOutLoading } from "../../../../app/stores/user/user.action";
import MobileNavDropdown from "../../../../components/mobileNavDropdown/MobileNavDropdown.component";

const HamburgerMenu = ({ currentUser }) => {
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
            <NavLink className="bm-link" to="#" onClick={signOutUser}>
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
              className="bm-link"
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

export default HamburgerMenu;
