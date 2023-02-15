import { createSelector } from "reselect";

const selectSidePanelReducer = (state) => state.sidePanel;

export const selectIsSidePanelOpen = createSelector(
  [selectSidePanelReducer],
  (sidePanelSlice) => sidePanelSlice.isSidePanelOpen
);
