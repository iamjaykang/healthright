import { createSelector } from "reselect";

const selectHamburgerMenuReducer = (state) => {
  return state.hamburgerMenu;
};

export const selectIsHamburgerMenuOpen = createSelector(
  [selectHamburgerMenuReducer],
  (hamburgerMenuSlice) => hamburgerMenuSlice.isHamburgerMenuOpen
);
