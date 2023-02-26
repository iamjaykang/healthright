import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { ActionWithPayload } from "../../models/actionTypes.model";
import { HAMBURGER_MENU_ACTION_TYPES } from "./hamburgerMenu.types";

export type SetIsHamburgerMenuOpen = ActionWithPayload<
  HAMBURGER_MENU_ACTION_TYPES.SET_IS_HAMBURGER_MENU_OPEN,
  boolean
>;

export const setHamburgerMenuIsOpen = withMatcher(
  (isHamburgerMenuOpen: boolean): SetIsHamburgerMenuOpen =>
    createAction(
      HAMBURGER_MENU_ACTION_TYPES.SET_IS_HAMBURGER_MENU_OPEN,
      isHamburgerMenuOpen
    )
);
