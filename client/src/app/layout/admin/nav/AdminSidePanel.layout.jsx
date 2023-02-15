import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsCardList,BsPerson } from "react-icons/bs";
import { TiLeaf } from "react-icons/ti";

const AdminSidePanel = () => {
  return (
    <nav className="dashboard__sidepanel fixed-left">
      <div className="dashboard__sidepanel-branding">Healthright</div>
      <ul className="dashboard__sidepanel-list">
        <li className="dashboard__sidepanel-list-item">
          <AiOutlineHome />
          <NavLink to="/admin/dashboard" className="dashboard__sidepanel-item">
            Overview
          </NavLink>
        </li>
        <li className="dashboard__sidepanel-list-item">
          <BsCardList />
          <NavLink
            to="/admin/dashboard/orders"
            className="dashboard__sidepanel-item"
          >
            Orders
          </NavLink>
        </li>
        <li className="dashboard__sidepanel-list-item">
          <TiLeaf />
          <NavLink
            to="/admin/dashboard/products"
            className="dashboard__sidepanel-item"
          >
            Products
          </NavLink>
        </li>
        <li className="dashboard__sidepanel-list-item">
          <BsPerson />
          <NavLink
            to="/admin/dashboard/customers"
            className="dashboard__sidepanel-item"
          >
            Customers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidePanel;
