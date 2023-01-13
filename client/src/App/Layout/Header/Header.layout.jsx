import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import "./Header.css";
import CartDropdown from "../../../Components/CartDropdown/CartDropdown.component";
import { CartContext } from "../../../Contexts/Cart.context";
import Navbar from "./Navbar/Navbar.layout";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../stores/user/user.selector";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

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
