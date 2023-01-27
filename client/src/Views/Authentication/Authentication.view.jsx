import React, { useState } from "react";
import SignInForm from "../../Components/Users/SignInForm/SignInForm.component";
import SignUpForm from "../../Components/Users/SignUpForm/SignUpForm.component";
import { selectUserIsLoading } from "../../stores/user/user.selector";
import { useSelector } from "react-redux";
import "./Authentication.css";
import Spinner from "../../App/Common/Spinner/Spinner.common";

const Authentication = () => {
  const isLoading = useSelector(selectUserIsLoading);
  const [formType, setFormType] = useState("sign in");

  if (isLoading) return <Spinner />;
  switch (formType) {
    case "sign up":
      return (
        <div className="auth-container">
          <h2>{formType.toUpperCase()}</h2>
          <SignUpForm setFormType={setFormType}/>
        </div>
      );

    default:
      return (
        <div className="auth-container">
          <h2>{formType.toUpperCase()}</h2>
          <SignInForm setFormType={setFormType}/>
        </div>
      );
  }
};

export default Authentication;
