import { SIDE_PANEL_ACTION_TYPES } from "./sidePanel.types";

const INITIAL_STATE = {
  isSidePanelOpen: false,
};

export const sidePanelReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SIDE_PANEL_ACTION_TYPES.SET_IS_SIDE_PANEL_OPEN:
      return {
        ...state,
        isSidePanelOpen: payload,
      };

    default:
      return state;
  }
};
