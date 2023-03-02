import { createSelector } from "reselect";
import { RootState } from "../store";
import { OrderState } from "./order.reducer";

const selectOrdersReducer = (state: RootState): OrderState =>
  state.orders;

export const selectOrdersArray = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice.ordersArray
);

export const selectOrder = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice.order
);

export const selectOrdersIsLoading = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice.isLoading
);

export const selectOrdersSuccess = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice.success
);
