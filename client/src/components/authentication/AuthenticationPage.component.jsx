import React, { useEffect } from "react";
import SignInForm from "./signInForm/SignInForm.component";
import SignUpForm from "./signUpForm/SignUpForm.component";
import {
  selectAuthIsSignUp,
  selectCurrentUser,
  selectUserIsLoading,
} from "../../app/stores/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
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
        <div className="app__auth-container">
          <h2>SIGN UP</h2>
          <p className="app__auth-form-action-container">
            <span>Sign up with your email and password or</span>
            <button
              className="app__auth-form-action-btn"
              onClick={handleOnclick}
            >
              Sign in instead
            </button>
          </p>
          <div className="app__auth-form-container">
            <SignUpForm />
          </div>
        </div>
      );

    default:
      return (
        <div className="app__auth-container">
          <h2>SIGN IN</h2>
          <p className="app__auth-form-action-container">
            <span>Sign in with your email and password or</span>
            <button
              className="app__auth-form-action-btn"
              onClick={handleOnclick}
            >
              Sign up instead
            </button>
          </p>
          <div className="app__auth-form-container">
            <SignInForm />
          </div>
        </div>
      );
  }
};

export default AuthenticationPage;
