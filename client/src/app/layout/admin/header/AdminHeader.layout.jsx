import React from "react";

const AdminHeader = () => {
  return (
    <header className="dashboard__header fixed-top">
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
  );
};

export default AdminHeader;
