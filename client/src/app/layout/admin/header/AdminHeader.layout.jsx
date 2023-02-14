import React from 'react'

const AdminHeader = () => {
  return (
    <header className="dashboard-header fixed-top">
    <div className="dashboard-title">Healthright Dashboard</div>
    <div className="dashboard-user-info">
      <div className="dashboard-user-name">Jay Kang</div>
      <div className="dashboard-user-dropdown">
        <ul className="dashboard-user-dropdown-list">
          <li className="dashboard-user-dropdown-list-item">Profile</li>
          <li className="dashboard-user-dropdown-list-item">Settings</li>
          <li className="dashboard-user-dropdown-list-item">Sign Out</li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default AdminHeader