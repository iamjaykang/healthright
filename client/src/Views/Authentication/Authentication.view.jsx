import React from "react";
import SignInForm from "../../Components/Users/SignInForm/SignInForm.component";
import SignUpForm from "../../Components/Users/SignUpForm/SignUpForm.component";
import { selectUserIsLoading } from "../../stores/user/user.selector";
import { useSelector } from "react-redux";
import "./Authentication.css";
import Spinner from "../../Components/Spinner/Spinner.component";

const Authentication = () => {
  const isLoading = useSelector(selectUserIsLoading);

  if (isLoading) return <Spinner />;
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
