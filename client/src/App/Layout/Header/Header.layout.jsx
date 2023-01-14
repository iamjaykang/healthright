import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import "./Header.css";
import CartDropdown from "../../../Components/CartDropdown/CartDropdown.component";
import Navbar from "./Navbar/Navbar.layout";
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
          <img className="logo" alt="logo" src={Logo} />
        </Link>
        <Navbar currentUser={currentUser} />
        {isCartOpen && <CartDropdown />}
      </header>{" "}
    </>
  );
};

export default Header;
