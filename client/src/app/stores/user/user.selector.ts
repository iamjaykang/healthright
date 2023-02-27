import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./user.reducer";

//select the cart slice of the state
const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);

export const selectUserIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoading
);

export const selectRequiresAdminAuth = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.requiresAdminAuth
);

export const selectAuthIsSignUp = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.authIsSignUp
);

export const selectAuthError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);

export const selectAuthSuccess = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.success
);

export const selectAuthMessage = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.message
);
