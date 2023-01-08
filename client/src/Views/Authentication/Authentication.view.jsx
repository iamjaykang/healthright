import React from "react";
import SignInForm from "../../Components/Users/SignInForm/SignInForm.component";
import SignUpForm from "../../Components/Users/SignUpForm/SignUpForm.component";
import './Authentication.css'

const Authentication = () => {

  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
