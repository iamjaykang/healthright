import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSidePanelOpen } from "../../../stores/sidePanel/sidePanel.selector";
import { RxHamburgerMenu } from "react-icons/rx";
import { setIsSidePanelOpen } from "../../../stores/sidePanel/sidePanel.action";

const AdminHeader = () => {
  const isSidePanelOpen = useSelector(selectIsSidePanelOpen);
  const dispatch = useDispatch();

  const toggleSidePanel = () => {
    dispatch(setIsSidePanelOpen(!isSidePanelOpen));
  };

  return (
    <>
    <div className={`dashboard__overlay${isSidePanelOpen && "--active"}`} onClick={toggleSidePanel}></div>
    <header className="dashboard__header fixed-top shadow-sm">
        <button className="hamburger" onClick={toggleSidePanel}>
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
            <li className="dashboard__user-dropdown-list-item">Sign Out</li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
};

export default AdminHeader;
