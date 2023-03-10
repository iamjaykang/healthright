import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartSidepanel from "./cartSidepanel/CartSidepanel.layout";
import Navbar from "./navbar/Navbar.layout";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../stores/user/user.selector";
import MobileNav from "./mobileNav/MobileNav.layout";
import { ImLeaf } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { setHamburgerMenuIsOpen } from "../../stores/hamburgerMenu/hamburgerMenu.action";
import { selectIsHamburgerMenuOpen } from "../../stores/hamburgerMenu/hamburgerMenu.selector";
import Searchbar from "../../common/searchbar/Searchbar.common";
import { UserData } from "../../models/user.model";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser) as UserData;

  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);

  const [hmDropdownOpen, setHmDropdownOpen] = useState({});

  const dispatch = useDispatch();

  const toggleHamburgerMenu = () => {
    dispatch(setHamburgerMenuIsOpen(!isHamburgerMenuOpen));
    setHmDropdownOpen({});
  };

  return (
    <>
      <header className="app__header shadow-sm">
        <div className="app__header-content-container">
          <Link className="app__header-brand" to="/">
            <span className="app__header--brand-title">Healthright</span>
            <span className="app__header--logo">
              <ImLeaf className="leaf-icon" />
            </span>
          </Link>
          <div className="app__searchbar-container">
          <Searchbar setHmDropdownOpen={setHmDropdownOpen}/>
          </div>
          <div className="app__header-nav-container">
            <Navbar currentUser={currentUser} />
          </div>
          <div className="app__header-nav-container--mobile">
            <button
              className="app__hamburger-menu-btn"
              onClick={toggleHamburgerMenu}
            >
              <RxHamburgerMenu className="app__hamburger-menu-icon" />
            </button>
            <MobileNav
              currentUser={currentUser}
              toggleHamburgerMenu={toggleHamburgerMenu}
              isHamburgerMenuOpen={isHamburgerMenuOpen}
              hmDropdownOpen={hmDropdownOpen}
              setHmDropdownOpen={setHmDropdownOpen}
            />
          </div>
          <CartSidepanel />
        </div>
      </header>
    </>
  );
};

export default Header;
