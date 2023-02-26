import { createSelector } from "reselect";
import { RootState } from "../store";
import { HamburgerState } from "./hamburgerMenu.reducer";

const selectHamburgerMenuReducer = (state: RootState): HamburgerState => {
  return state.hamburgerMenu;
};

export const selectIsHamburgerMenuOpen = createSelector(
  [selectHamburgerMenuReducer],
  (hamburgerMenuSlice) => hamburgerMenuSlice.isHamburgerMenuOpen
);
