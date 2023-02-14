import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

// Action to set the current user
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// Action to check the user session
export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// Action to indicate that the google sign in process has started
export const googleSignInLoading = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_LOADING);

// Action to indicate that the email sign in process has started
export const emailSignInLoading = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_LOADING, { email, password });

// Action to indicate that the email sign in process has started
export const adminEmailSignInLoading = (email, password) =>
  createAction(USER_ACTION_TYPES.ADMIN_SIGN_IN_LOADING, { email, password });

// Action to indicate that the sign in process was successful
export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, {
    user,
  });
};

// Action to indicate that the sign in process failed
export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

// Action to indicate that the sign up process was successful
export const signUpSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
  });
};

// Action to indicate that the sign up process failed
export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, error);

// Action to indicate that the sign up process has started
export const signUpLoading = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_LOADING, {
    email,
    password,
  });

// Action to indicate that the sign out process has started
export const signOutLoading = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_LOADING);

// Action to indicate that the sign out process was successful
export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

// Action to indicate that the sign out process failed
export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

// Action to set requires admin auth
export const setRequiresAdminAuth = (requiresAdminAuth) =>
  createAction(USER_ACTION_TYPES.SET_REQUIRES_ADMIN_AUTH, requiresAdminAuth);

// Action to set auth form type
export const setAuthIsSignUp = (authIsSignUp) =>
  createAction(USER_ACTION_TYPES.SET_AUTH_FORM_TYPE, authIsSignUp);
