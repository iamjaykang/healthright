import React from "react";
import AdminSignInForm from "./adminSignInForm/AdminSignInForm.component";

const AdminAuthenticationPage = () => {
  return (
    <div className="app">
      <div className="app__auth-container">
        <h2>ADMIN SIGN IN</h2>
        <div className="app__auth-form-container">
          <AdminSignInForm />
        </div>
      </div>
    </div>
  );
};

export default AdminAuthenticationPage;
