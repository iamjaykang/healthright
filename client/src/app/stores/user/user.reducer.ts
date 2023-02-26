import { AnyAction } from "redux";
import { UserData } from "../../models/user.model";
import {
  adminEmailSignInLoading,
  emailSignInLoading,
  googleSignInLoading,
  setAuthIsSignUp,
  setRequiresAdminAuth,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutLoading,
  signOutSuccess,
  signUpFailed,
  signUpLoading,
  signUpSuccess,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly requiresAdminAuth: boolean;
  readonly authIsSignUp: boolean;
  readonly success: boolean;
  readonly message: string | null;
};

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
  requiresAdminAuth: false,
  authIsSignUp: false,
  success: false,
  message: null,
};

const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction) => {
  if (
    emailSignInLoading.match(action) ||
    googleSignInLoading.match(action) ||
    adminEmailSignInLoading.match(action) ||
    signOutLoading.match(action) ||
    signUpLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      message: null,
      error: null,
    };
  }

  if (setAuthIsSignUp.match(action)) {
    return {
      ...state,
      authIsSignUp: action.payload,
    };
  }

  if (setRequiresAdminAuth.match(action)) {
    return {
      ...state,
      requiresAdminAuth: action.payload,
    };
  }

  if (signUpSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      success: true,
      currentUser: action.payload,
      error: null,
      message: "Sign up success"
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      success: true,
      currentUser: action.payload,
      message: "Sign in success",
      error: null,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      success: true,
      message: "Sign out success",
      isLoading: false,
      error: null,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;
};

export default userReducer;
