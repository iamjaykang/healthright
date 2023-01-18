import React from "react";
import { Link } from "react-router-dom";
import CartDropdown from "../../../Components/CartDropdown/CartDropdown.component";
import Navbar from "./Navbar/Navbar.layout";
import './Header.css'
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../stores/user/user.selector";
import { selectIsCartOpen } from "../../../stores/cart/cart.selector";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <header className="header">
        <Link className="brand" to="/">
          <span className="logo">Healthright</span>
        </Link>
        <Navbar currentUser={currentUser} />
        {isCartOpen && <CartDropdown />}
      </header>{" "}
    </>
  );
};

export default Header;
