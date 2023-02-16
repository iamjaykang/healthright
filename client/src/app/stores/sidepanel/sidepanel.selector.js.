import { createSelector } from "reselect";

const selectSidepanelReducer = (state) => state.sidepanel;

export const selectIsSidepanelOpen = createSelector(
  [selectSidepanelReducer],
  (sidepanelSlice) => sidepanelSlice.isSidepanelOpen
);
