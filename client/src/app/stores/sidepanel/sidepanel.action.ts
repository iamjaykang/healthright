import { ActionWithPayload } from "../../models/actionTypes.model";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { SIDEPANEL_ACTION_TYPES } from "./sidepanel.types";

export type SetIsSidepanelOpen = ActionWithPayload<
  SIDEPANEL_ACTION_TYPES.SET_IS_SIDEPANEL_OPEN,
  boolean
>;

export const setIsSidepanelOpen = withMatcher(
  (isSidepanelOpen: boolean): SetIsSidepanelOpen =>
    createAction(SIDEPANEL_ACTION_TYPES.SET_IS_SIDEPANEL_OPEN, isSidepanelOpen)
);
