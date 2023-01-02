import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import './header.css'

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <Link className="brand" to="/">
          <img className="logo" alt="logo" src={Logo} />
        </Link>
        <nav className="navbar">
          <NavLink className="nav-link">Shop</NavLink>
        </nav>
      </header>{" "}
    </Fragment>
  );
};

export default Header;
