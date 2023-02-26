import { User } from "firebase/auth";
import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import {
  AdditionalInformation,
  UserData,
  UserFormValues,
} from "../../models/user.model";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export type GoogleSignInLoading =
  Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_LOADING>;

export type EmailSignInLoading = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_LOADING,
  { email: string; password: string }
>;

export type AdminEmailSignInLoading = ActionWithPayload<
  USER_ACTION_TYPES.ADMIN_SIGN_IN_LOADING,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpLoading = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_LOADING,
  UserFormValues
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutLoading = Action<USER_ACTION_TYPES.SIGN_OUT_LOADING>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export type SetRequiredAdminAuth = ActionWithPayload<
  USER_ACTION_TYPES.SET_REQUIRES_ADMIN_AUTH,
  boolean
>;

export type SetAuthIsSignUp = ActionWithPayload<
  USER_ACTION_TYPES.SET_AUTH_FORM_TYPE,
  boolean
>;

// Action to set the current user
export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

// Action to check the user session
export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

// Action to indicate that the google sign in process has started
export const googleSignInLoading = withMatcher(
  (): GoogleSignInLoading =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_LOADING)
);

// Action to indicate that the email sign in process has started
export const emailSignInLoading = withMatcher(
  (email: string, password: string): EmailSignInLoading =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_LOADING, { email, password })
);

// Action to indicate that the email sign in process has started
export const adminEmailSignInLoading = withMatcher(
  (email: string, password: string): AdminEmailSignInLoading =>
    createAction(USER_ACTION_TYPES.ADMIN_SIGN_IN_LOADING, { email, password })
);

// Action to indicate that the sign in process was successful
export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
  }
);

// Action to indicate that the sign in process failed
export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

// Action to indicate that the sign up process has started
export const signUpLoading = withMatcher(
  (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): SignUpLoading =>
    createAction(USER_ACTION_TYPES.SIGN_UP_LOADING, {
      email,
      password,
      firstName,
      lastName,
    })
);

// Action to indicate that the sign up process was successful
export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    });
  }
);

// Action to indicate that the sign up process failed
export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

// Action to indicate that the sign out process has started
export const signOutLoading = withMatcher(
  (): SignOutLoading => createAction(USER_ACTION_TYPES.SIGN_OUT_LOADING)
);

// Action to indicate that the sign out process was successful
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

// Action to indicate that the sign out process failed
export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);

// Action to set requires admin auth
export const setRequiresAdminAuth = withMatcher(
  (requiresAdminAuth: boolean): SetRequiredAdminAuth =>
    createAction(USER_ACTION_TYPES.SET_REQUIRES_ADMIN_AUTH, requiresAdminAuth)
);

// Action to set auth form type
export const setAuthIsSignUp = withMatcher(
  (authIsSignUp: boolean): SetAuthIsSignUp =>
    createAction(USER_ACTION_TYPES.SET_AUTH_FORM_TYPE, authIsSignUp)
);
