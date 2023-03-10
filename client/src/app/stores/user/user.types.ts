export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_LOADING = "user/GOOGLE_SIGN_IN_LOADING",
  EMAIL_SIGN_IN_LOADING = "user/EMAIL_SIGN_IN_LOADING",
  SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "user/SIGN_IN_FAILED",
  SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS",
  SIGN_UP_FAILED = "user/SIGN_UP_FAILED",
  SIGN_UP_LOADING = "user/SIGN_UP_LOADING",
  SIGN_OUT_LOADING = "user/SIGN_OUT_LOADING",
  SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED",
  SET_REQUIRES_ADMIN_AUTH = "user/SET_REQUIRES_ADMIN_AUTH",
  SET_AUTH_FORM_TYPE = "user/SET_AUTH_FORM_TYPE",
  ADMIN_SIGN_IN_LOADING = "user/ADMIN_SIGN_IN_LOADING",
}
