import React from "react";
import { action as toggleMenu } from "redux-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import navLinks from "../../../../assets/data/navLinks.json";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../../../../Components/CartIcon/CartIcon.component";
import Menu from "../../../../utils/menu/menu";
import "./HamburgerMenu.css";
import burgerIcon from "../../../../assets/images/bars-solid.svg";
import { signOutLoading } from "../../../../stores/user/user.action";

const HamburgerMenu = ({ currentUser }) => {
  const isOpen = useSelector((state) => state.burgerMenu.isOpen);
  const dispatch = useDispatch();


  const closeMenu = () => {
    dispatch(toggleMenu(false));
  };

  const signOutUser = () => dispatch(signOutLoading());

  return (
    <Menu
      right
      isOpen={isOpen}
      customBurgerIcon={<img src={burgerIcon} alt='burger-icon' />}
      width={300}
    >
      {navLinks.map((navLink) =>
        navLink.title === "Sign In" && currentUser ? (
          <div key={navLink.id}>
            <NavLink className="bm-link" to="#" onClick={signOutUser}>
              <span>Sign Out</span>
            </NavLink>
          </div>
        ) : (
          <div key={navLink.id}>
            <NavLink onClick={closeMenu} className="bm-link" to={navLink.to}>
              <span>{navLink.title}</span>
            </NavLink>
          </div>
        )
      )}
      <div>
        <Link onClick={closeMenu} to="/check-out">
          <CartIcon />
        </Link>
      </div>
    </Menu>
  );
};

export default HamburgerMenu;
