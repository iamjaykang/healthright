import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartSidepanel from "./cartSidepanel/CartSidepanel.layout";
import Navbar from "./navbar/Navbar.layout";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../app/stores/user/user.selector";
import MobileNav from "./mobileNav/MobileNav.layout";
import { ImLeaf } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { setHamburgerMenuIsOpen } from "../../stores/hamburgerMenu/hamburgerMenu.action";
import { selectIsHamburgerMenuOpen } from "../../stores/hamburgerMenu/hamburgerMenu.selector";
import { IoIosSearch } from "react-icons/io";
import { searchProductsLoading } from "../../stores/products/product.action";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isHamburgerMenuOpen = useSelector(selectIsHamburgerMenuOpen);

  const [hmDropdownOpen, setHmDropdownOpen] = useState({});

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const toggleHamburgerMenu = () => {
    dispatch(setHamburgerMenuIsOpen(!isHamburgerMenuOpen));
    setHmDropdownOpen({});
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetSearchForm = () => {
    setSearchTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(searchProductsLoading(searchTerm));
      resetSearchForm();
    } catch (error) {
      throw error;
    }
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
          <form className="app__header-search-form" onSubmit={handleSubmit}>
            <input
              className="app__header-search-input"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button
              className="app__header-search-btn"
              type="submit"
              onClick={() => {
                // TODO: handle search button click
              }}
            >
              <IoIosSearch />
            </button>
          </form>
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
