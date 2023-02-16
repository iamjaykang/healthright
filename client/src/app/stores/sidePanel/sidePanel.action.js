import { createAction } from "../../utils/reducer/reducer.utils";
import { SIDEPANEL_ACTION_TYPES } from "./sidepanel.types";

export const setIsSidepanelOpen = (isSidepanelOpen) =>
  createAction(SIDEPANEL_ACTION_TYPES.SET_IS_SIDEPANEL_OPEN, isSidepanelOpen);
