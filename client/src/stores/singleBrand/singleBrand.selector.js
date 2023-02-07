import { createSelector } from "reselect";

const selectSingleBrandReducer = (state) => state.singleBrand;

export const selectSingleBrand = createSelector(
  [selectSingleBrandReducer],
  (singleBrandSlice) => singleBrandSlice.brand
);

export const selectShouldNavigate = createSelector(
    [selectSingleBrandReducer],
    (singleBrandSlice) => singleBrandSlice.shouldNavigate
)

export const selectSingleBrandIsLoading = createSelector(
  [selectSingleBrandReducer],
  (singleBrandSlice) => singleBrandSlice.isLoading
);
