import { HAMBURGER_MENU_ACTION_TYPES } from "./hamburgerMenu.types";

const INITIAL_STATE = {
  isHamburgerMenuOpen: false,
};

const hamburgerMenuReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case HAMBURGER_MENU_ACTION_TYPES.SET_IS_HAMBURGER_MENU_OPEN:
      return {
        ...state,
        isHamburgerMenuOpen: payload,
      };
    default:
      return state;
  }
};

export default hamburgerMenuReducer;
