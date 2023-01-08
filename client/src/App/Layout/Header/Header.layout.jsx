import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import navLinks from "../../../assets/data/navLinks.json";
import "./Header.css";
import { UserContext } from "../../../Contexts/User.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../../Components/CartIcon/CartIcon.component";
import CartDropdown from "../../../Components/CartDropdown/CartDropdown.component";
import { CartContext } from "../../../Contexts/Cart.context";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <header className="header">
        <Link className="brand" to="/">
          <img className="logo" alt="logo" src={Logo} />
        </Link>
        <nav className="navbar">
          {navLinks.map((navLink) =>
            navLink.title === "Sign In" && currentUser ? (
              <NavLink
                key={navLink.id}
                className="nav-link"
                to="#"
                onClick={signOutUser}
              >
                <span>Sign Out</span>
              </NavLink>
            ) : (
              <NavLink key={navLink.id} className="nav-link" to={navLink.to}>
                <span>{navLink.title}</span>
              </NavLink>
            )
          )}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>{" "}
    </Fragment>
  );
};

export default Header;
