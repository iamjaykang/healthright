import { createSelector } from "reselect";

const selectPaymentsReducer = (state) => {
    return state.payments;
  };
  

export const selectClientSecret = createSelector(
  [selectPaymentsReducer],
  (paymentsSlice) => paymentsSlice.clientSecret
);

export const selectPaymentsIsLoading = createSelector(
  [selectPaymentsReducer],
  (paymentsSlice) => paymentsSlice.isLoading
);

export const selectPaymentsIsSuccess = createSelector(
  [selectPaymentsReducer],
  (paymentsSlice) => paymentsSlice.success
);

export const selectPaymentsMessage = createSelector(
  [selectPaymentsReducer],
  (paymentsSlice) => paymentsSlice.message
);
