import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  email: '',
  password: '',
  currentUser: null,
  isLoading: false,
  error: null,
};

// SET_CURRENT_USER: "user/SET_CURRENT_USER",
// CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
// GOOGLE_SIGN_IN_LOADING: "user/GOOGLE_SIGN_IN_LOADING",
// EMAIL_SING_IN_LOADING: "user/EMAIL_SING_IN_LOADING",
// SIGN_IN_SUCESS: 'user/SIGN_IN_SUCCESS',
// SIGN_IN_FAILED: 'user/SIGN_IN_FAILED'

const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  //handle the SET_CURRENT_USER action and update the currentUser in state

  switch (type) {
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_LOADING:
      return {
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
