import { createSelector } from "reselect";

// Selector that accesses the "products" slice of the store
const selectProductsReducer = (state) => state.products;

// Selector that returns the "productsArray" property from the "products" slice
export const selectProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.productsArray.data
);

// Selector that returns the "adminProductsArray" property from the "products" slice
export const selectAdminProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.adminProductsArray.data
);

// Selector that returns the "filteredProductsArray" property from the "products" slice
export const selectProductsFilteredByVendorArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.filteredProductsArray.data
);

// Selector that returns a map of vendors and their respective products
export const selectVendorsMap = createSelector(
  [selectProductsArray],
  (productsArray) => {
    // If there are no products, return an empty object
    if (!productsArray) return {};
    // Map the products array to an object where each vendor is a key, and their respective products are the values
    return productsArray.reduce((acc, product) => {
      if (!acc[product.vendor]) {
        acc[product.vendor] = [];
      }
      acc[product.vendor].push(product);
      return acc;
    }, {});
  }
);

// Selector that returns the "isLoading" property from the "products" slice
export const selectProductsIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);
