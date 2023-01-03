import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import navLinks from "../../../assets/data/navLinks.json";
import "./Header.css";
import { UserContext } from "../../../Contexts/User";
import { signOutUser } from "../../../utils/firebase/firebase";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <Fragment>
      <header className="header">
        <Link className="brand" to="/">
          <img className="logo" alt="logo" src={Logo} />
        </Link>
        <nav className="navbar">
          {navLinks.map((navLink) =>
            navLink.title === "Sign In" && currentUser ? (
              <NavLink key={navLink.id} className="nav-link" to="#" onClick={handleSignOut}>
                <span>Sign Out</span>
              </NavLink>
            ) : (
              <NavLink key={navLink.id} className="nav-link" to={navLink.to}>
                <span>{navLink.title}</span>
              </NavLink>
            )
          )}
        </nav>
      </header>{" "}
    </Fragment>
  );
};

export default Header;
