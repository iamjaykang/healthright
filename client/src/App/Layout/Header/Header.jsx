import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import navLinks from "../../../assets/data/navLinks.json";
import "./header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <Link className="brand" to="/">
          <img className="logo" alt="logo" src={Logo} />
        </Link>
        <nav className="navbar">
          {navLinks.map((navLink) => (
            <NavLink key={navLink.id} className="nav-link" to={navLink.to}>
              {navLink.title}
            </NavLink>
          ))}
        </nav>
      </header>{" "}
    </Fragment>
  );
};

export default Header;
