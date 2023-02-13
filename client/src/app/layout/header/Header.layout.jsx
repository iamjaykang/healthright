import React from "react";
import { Link } from "react-router-dom";
import CartDropdown from "./cartDropdown/CartDropdown.component";
import Navbar from "./navbar/Navbar.layout";
import "./Header.css";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../app/stores/user/user.selector";
import { selectIsCartOpen } from "../../../app/stores/cart/cart.selector";
import MobileNav from "./mobileNav/MobileNav.layout";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <header className="header">
        <Link className="brand" to="/">
          <span className="logo">Healthright</span>
        </Link>
        <div className="nav-outer-container">
          <Navbar currentUser={currentUser} />
        </div>
        <div className="hm-outer-container">
          <MobileNav currentUser={currentUser} />
        </div>
        {isCartOpen && <CartDropdown />}
      </header>
    </>
  );
};

export default Header;
