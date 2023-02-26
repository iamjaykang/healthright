import { createSelector } from "reselect";
import { RootState } from "../store";
import { SidepanelState } from "./sidepanel.reducer";

const selectSidepanelReducer = (state: RootState): SidepanelState =>
  state.sidepanel;

export const selectIsSidepanelOpen = createSelector(
  [selectSidepanelReducer],
  (sidepanelSlice) => sidepanelSlice.isSidepanelOpen
);
