import React, { Dispatch, FC } from "react";
import { Link, NavLink } from "react-router-dom";
import mobileNavLinks from "../../../../assets/data/mobileNavLinks.json";
import CartIcon from "../../../common/cartIcon/CartIcon.common";
import { signOutLoading } from "../../../stores/user/user.action";
import MobileNavDropdown from "./mobileNavDropdown/MobileNavDropdown.layout";
import { useDispatch } from "react-redux";
import { setHamburgerMenuIsOpen } from "../../../stores/hamburgerMenu/hamburgerMenu.action";
import Searchbar from "../../../common/searchbar/Searchbar.common";
import { UserData } from "../../../models/user.model";

export interface MobileNavbarProps {
  currentUser: UserData,
  toggleHamburgerMenu: () => void,
  isHamburgerMenuOpen: boolean,
  hmDropdownOpen: { [key: string]: boolean },
  setHmDropdownOpen: Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
}

const MobileNavbar: FC<MobileNavbarProps> = ({
  currentUser,
  toggleHamburgerMenu,
  isHamburgerMenuOpen,
  hmDropdownOpen,
  setHmDropdownOpen,
}) => {
  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(signOutLoading());
    dispatch(setHamburgerMenuIsOpen(false));
  };

  const closeMenu = () => {
    dispatch(setHamburgerMenuIsOpen(false));
    setHmDropdownOpen({});
  };

  const toggleHmDropdown = (id: string) => {
    setHmDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div
        className={`app__overlay${isHamburgerMenuOpen ? " show" : ""}`}
        onClick={toggleHamburgerMenu}
      />
      <nav
        className={`app__nav-container--mobile${
          isHamburgerMenuOpen ? " open" : ""
        }`}
      >
        <ul className="app__nav-group">
          <li className="app__nav-item">
            <div className="app__searchbar-container--mobile">
              <Searchbar />
            </div>
          </li>
          {mobileNavLinks.map((navLink) =>
            navLink.title === "Sign In" && currentUser ? (
              <li className="app__nav-item" key={navLink.id}>
                <NavLink className="app__nav-link" to="#" onClick={signOutUser}>
                  <span>Sign Out</span>
                </NavLink>
              </li>
            ) : (
              <li className="app__nav-item" key={navLink.id}>
                <NavLink
                  className="app__nav-link"
                  to={navLink.to || '#'}
                  onClick={
                    navLink.dropdown
                      ? () => {
                          toggleHmDropdown(String(navLink.id));
                        }
                      : closeMenu
                  }
                >
                  <span>{navLink.title}</span>
                </NavLink>
                {navLink.dropdown && (
                  <div
                    className={`app__dropdown--mobile ${
                      hmDropdownOpen[navLink.id] ? "open" : ""
                    }`}
                  >
                    <MobileNavDropdown
                      key={`app__dropdown-${navLink.id}`}
                      dropdownOpen={hmDropdownOpen[navLink.id]}
                      dropdown={navLink.dropdown}
                      closeMenu={closeMenu}
                    />
                  </div>
                )}
              </li>
            )
          )}
          <li className="app__nav-item">
            <Link onClick={closeMenu} to="/checkout">
              <CartIcon isMobileMenu={true} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
