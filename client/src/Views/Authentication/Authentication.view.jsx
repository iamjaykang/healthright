import React, { useEffect, useState } from "react";
import SignInForm from "../../Components/Users/SignInForm/SignInForm.component";
import SignUpForm from "../../Components/Users/SignUpForm/SignUpForm.component";
import {
  selectCurrentUser,
  selectUserIsLoading,
} from "../../stores/user/user.selector";
import { useSelector } from "react-redux";
import "./Authentication.css";
import Spinner from "../../App/Common/Spinner/Spinner.common";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUserIsLoading);
  const navigate = useNavigate();
  const [formType, setFormType] = useState("sign in");

  useEffect(() => {
    if (!isLoading && currentUser) {
      navigate("/");
    }
  }, [isLoading, currentUser, navigate]);

  if (isLoading) return <Spinner />;
  switch (formType) {
    case "sign up":
      return (
        <div className="auth-container">
          <h2>{formType.toUpperCase()}</h2>
          <SignUpForm setFormType={setFormType} />
        </div>
      );

    default:
      return (
        <div className="auth-container">
          <h2>{formType.toUpperCase()}</h2>
          <SignInForm setFormType={setFormType} />
        </div>
      );
  }
};

export default Authentication;
