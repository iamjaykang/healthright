import { createSelector } from "reselect";

// Selector that accesses the "brands" slice of the store
const selectSingleBrandReducer = (state) => state.singleBrand;

// Selector that returns the "brands" property from the "brands" slice
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
