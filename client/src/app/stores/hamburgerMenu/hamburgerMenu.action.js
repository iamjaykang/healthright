import { createAction } from "../../utils/reducer/reducer.utils";
import { HAMBURGER_MENU_ACTION_TYPES } from "./hamburgerMenu.types";

export const setHamburgerMenuIsOpen = (isHamburgerMenuOpen) =>
  createAction(
    HAMBURGER_MENU_ACTION_TYPES.SET_IS_HAMBURGER_MENU_OPEN,
    isHamburgerMenuOpen
  );
