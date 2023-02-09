import { takeLatest, all, call, put, select } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
  signUpSuccess,
  signOutSuccess,
} from "./user.action";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

// Saga to get the snapshot of the user from firebase auth
export function* getSnapshotFromUserAuth(userAuth) {
  try {
    // call the firebase function to get the user snapshot
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
    );
    // dispatch the signin success action
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    //dispatch the signin failed action
    yield put(signInFailed(error));
  }
}

// Saga to handle the sign up functionality
export function* signUp({ payload }) {
  const {email, password } = payload;
  try {
    // call the firebase function to signup the user
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    //dispatch the signup success action
    yield put(signUpSuccess(user));
  } catch (error) {
    //dispatch the signup failed action
    yield put(signUpFailed(error));
  }
}

// Saga to handle the sign in after sign up functionality
export function* signInAfterSignUp({ payload: { user } }) {
  yield call(getSnapshotFromUserAuth, user);
}

// Saga to handle the signout functionality
export function* signOutCurrentUser() {
  try {
    // call the firebase function to signout the user
    yield call(signOutUser);
    //dispatch the signout success action
    yield put(signOutSuccess());
  } catch (error) {
    //dispatch the signout failed action
    yield put(signOutFailed(error));
  }
}

// Saga to handle the sign in with google functionality
export function* signInWithGoogle() {
  try {
    // call the firebase function to signin with google
    const { user } = yield call(signInWithGooglePopup);
    //call the getSnapshotFromUserAuth function
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    //dispatch the signin failed action
    yield put(signInFailed(error));
  }
}

// Saga to handle the sign in with email functionality
export function* signInWithEmail({ payload }) {
  const { email, password } = payload;
  try {
    // call the firebase function to signin with email and password
    const user = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    //call the getSnapshotFromUserAuth function
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    //dispatch the signin failed action
    yield put(signInFailed(error));
  }
}

// Saga to check if user is authenticated
export function* isUserAuthenticated() {
  try {
    // call the firebase function to get the current user
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    // call the getSnapshotFromUserAuth function
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    //dispatch the signin failed action
    yield put(signInFailed(error));
  }
}

// Saga to listen to the google signin loading action
export function* onGoogleSignInLoading() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_LOADING, signInWithGoogle);
}

// Saga to listen to the check user session action
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

// Saga to listen to the email signin loading action
export function* onEmailSignInLoading() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_LOADING, signInWithEmail);
}

// Saga to listen to the signup loading action
export function* onSignUpLoading() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_LOADING, signUp);
}

// Saga to listen to the signup success action
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// Saga to listen to the signout loading action
export function* onSignOutLoading() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_LOADING, signOutCurrentUser);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInLoading),
    call(onEmailSignInLoading),
    call(onSignUpLoading),
    call(onSignUpSuccess),
    call(onSignOutLoading),
  ]);
}
