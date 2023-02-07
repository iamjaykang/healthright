import { createSelector } from "reselect";

// Selector that accesses the "products" slice of the store
const selectProductsReducer = (state) => state.products;

// Selector that returns the "products" property from the "products" slice
export const selectProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.productsArray.data
);

// Selector that returns the products array
export const selectProductsArray = createSelector(
  [selectProducts],
  (products) => products
);

// Selector that returns a map of vendors and their respective products
export const selectVendorsMap = createSelector(
  [selectProducts],
  (products) => {
    // If there are no products, return an empty object
    if (!products) return {};
    // Map the products array to an object where each vendor is a key, and their respective products are the values
    return products.reduce((acc, product) => {
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
