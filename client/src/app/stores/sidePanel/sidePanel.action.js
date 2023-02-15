import { createAction } from "../../utils/reducer/reducer.utils";
import { SIDE_PANEL_ACTION_TYPES } from "./sidePanel.types";

export const setIsSidePanelOpen = (isSidePanelOpen) =>
  createAction(SIDE_PANEL_ACTION_TYPES.SET_IS_SIDE_PANEL_OPEN, isSidePanelOpen);
