import React, { useEffect, useState } from "react";
import SignInForm from "./signInForm/SignInForm.component";
import SignUpForm from "./signUpForm/SignUpForm.component";
import {
  selectAuthIsSignUp,
  selectCurrentUser,
  selectUserIsLoading,
} from "../../app/stores/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import "./Authentication.css";
import Spinner from "../../app/common/spinner/Spinner.common";
import { useNavigate } from "react-router-dom";
import { setAuthIsSignUp } from "../../app/stores/user/user.action";

const AuthenticationPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUserIsLoading);
  const navigate = useNavigate();
  const authIsSignUp = useSelector(selectAuthIsSignUp);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(setAuthIsSignUp(!authIsSignUp));
  };

  useEffect(() => {
    if (!isLoading && currentUser) {
      navigate("/");
    }
  }, [isLoading, currentUser, navigate]);

  if (isLoading) return <Spinner />;
  switch (authIsSignUp) {
    case true:
      return (
        <div className="auth-container">
          <h2>SIGN UP</h2>
          <p className="form-action-container">
            <span>Sign up with your email and password or</span>
            <button className="link-btn" onClick={handleOnclick}>
              Sign in instead
            </button>
          </p>
          <SignUpForm />
        </div>
      );

    default:
      return (
        <div className="auth-container">
          <h2>SIGN IN</h2>
          <p className="form-action-container">
            <span>Sign in with your email and password or</span>
            <button className="link-btn" onClick={handleOnclick}>
              Sign up instead
            </button>
          </p>
          <SignInForm />
        </div>
      );
  }
};

export default AuthenticationPage;
