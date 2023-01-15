import { createSelector } from "reselect";

//select the cart slice of the state
const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);

export const selectUserIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoading
);
