import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import AdminFooter from "./admin/footer/AdminFooter.layout";
import AdminHeader from "./admin/header/AdminHeader.layout";
import AdminSidepanel from "./admin/sidepanel/AdminSidepanel.layout";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ScrollRestoration />
      <AdminHeader />
      <div className="dashboard__body">
        <AdminSidepanel />
        <main className="dashboard__main-content">
          <Outlet />
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default Dashboard;
