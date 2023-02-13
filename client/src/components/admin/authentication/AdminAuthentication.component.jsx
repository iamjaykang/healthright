import React from "react";
import AdminSignInForm from "./adminSignInForm/AdminSignInForm.component";

const AdminAuthenticationPage = () => {
  return (
    <div className="admin-sign-in-container">
      <h2>Admin Sign In</h2>
      <AdminSignInForm />
    </div>
  );
};

export default AdminAuthenticationPage;
