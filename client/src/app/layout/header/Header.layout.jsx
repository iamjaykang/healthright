import React from "react";
import { Link } from "react-router-dom";
import CartDropdown from "./cartDropdown/CartDropdown.layout";
import Navbar from "./navbar/Navbar.layout";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../app/stores/user/user.selector";
import { selectIsCartOpen } from "../../../app/stores/cart/cart.selector";
import MobileNav from "./mobileNav/MobileNav.layout";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <header className="app__header shadow-sm">
        <Link className="app__header-brand" to="/">
          <span className="app__header-logo">Healthright</span>
        </Link>
        <div className="app__header-nav-container">
          <Navbar currentUser={currentUser} />
        </div>
        <div className="app__header-nav-container--mobile">
          <MobileNav currentUser={currentUser} />
        </div>
        {isCartOpen && <CartDropdown />}
      </header>
    </>
  );
};

export default Header;
