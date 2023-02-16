import { SIDEPANEL_ACTION_TYPES } from "./sidepanel.types";

const INITIAL_STATE = {
  isSidepanelOpen: false,
};

export const sidepanelReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SIDEPANEL_ACTION_TYPES.SET_IS_SIDEPANEL_OPEN:
      return {
        ...state,
        isSidepanelOpen: payload,
      };

    default:
      return state;
  }
};
