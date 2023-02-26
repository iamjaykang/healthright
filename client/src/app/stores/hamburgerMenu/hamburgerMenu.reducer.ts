import { AnyAction } from "redux";
import { setHamburgerMenuIsOpen } from "./hamburgerMenu.action";

export type HamburgerState = {
  isHamburgerMenuOpen: boolean;
};

const HAMBURGER_INITIAL_STATE: HamburgerState = {
  isHamburgerMenuOpen: false,
};

const hamburgerMenuReducer = (
  state = HAMBURGER_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setHamburgerMenuIsOpen.match(action)) {
    return {
      ...state,
      isHamburgerMenuOpen: action.payload,
    };
  }

  return state;
};

export default hamburgerMenuReducer;
