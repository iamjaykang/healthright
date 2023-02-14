import React from "react";

const AdminNav = () => {
  return (
    <nav className="dashboard-nav">
      <ul className="dashboard-nav-list">
        <li className="dashboard-nav-list-item">
          <a href="/admin/dashboard" className="dashboard-nav-item">
            Overview
          </a>
        </li>
        <li className="dashboard-nav-list-item">
          <a href="/admin/dashboard/orders" className="dashboard-nav-item">
            Orders
          </a>
        </li>
        <li className="dashboard-nav-list-item">
          <a href="/admin/dashboard/products" className="dashboard-nav-item">
            Products
          </a>
        </li>
        <li className="dashboard-nav-list-item">
          <a href="/admin/dashboard/customers" className="dashboard-nav-item">
            Customers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
