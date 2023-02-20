import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSidepanelOpen } from "../../../stores/sidepanel/sidepanel.selector";
import { RxHamburgerMenu } from "react-icons/rx";
import { setIsSidepanelOpen } from "../../../stores/sidepanel/sidepanel.action";
import { signOutLoading } from "../../../stores/user/user.action";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const isSidepanelOpen = useSelector(selectIsSidepanelOpen);
  const dispatch = useDispatch();

  const toggleSidepanel = () => {
    dispatch(setIsSidepanelOpen(!isSidepanelOpen));
  };

  const signOutUser = () => dispatch(signOutLoading());
  return (
    <>
      <div
        className={`dashboard__overlay${isSidepanelOpen ? "--active" : ""}`}
        onClick={toggleSidepanel}
      ></div>
      <header className="dashboard__header fixed-top shadow-sm">
        <button className="hamburger" onClick={toggleSidepanel}>
          <span className="hamburger__box">
            <span className="hamburger__inner">
              <RxHamburgerMenu
                style={{
                  width: "2rem",
                  height: "2rem",
                  viewBox: "0 0 30 30",
                }}
              />
            </span>
          </span>
        </button>
        <div className="dashboard__user-info">
          <div className="dashboard__user-name">Jay Kang</div>
          <div className="dashboard__user-dropdown">
            <ul className="dashboard__user-dropdown-list">
              <li className="dashboard__user-dropdown-list-item">Profile</li>
              <li className="dashboard__user-dropdown-list-item">Settings</li>
              <li className="dashboard__user-dropdown-list-item">
                <Link onClick={signOutUser}>Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
