import { createSelector } from "reselect";

// Selector that accesses the "products" slice of the store
const selectProductsReducer = (state) => state.products;

// Selector that returns the "products" property from the "products" slice
export const selectProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsArray = createSelector(
  [selectProducts],
  (products) => products
);

// Selector that returns a map of products
export const selectProductsMap = createSelector(
  [selectProducts],
  (products) => {
    return products.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {});
  }
);

export const selectProductsIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);
