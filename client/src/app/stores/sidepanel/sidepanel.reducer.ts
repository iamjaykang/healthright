import { AnyAction } from "redux";
import { setIsSidepanelOpen } from "./sidepanel.action";

export type SidepanelState = {
  isSidepanelOpen: boolean;
};

const SIDEPANEL_INITIAL_STATE = {
  isSidepanelOpen: false,
};

export const sidepanelReducer = (
  state = SIDEPANEL_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsSidepanelOpen.match(action)) {
    return {
      ...state,
      isSidepanelOpen: action.payload,
    };
  }

  return state;
};
