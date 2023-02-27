import { createSelector } from "reselect";
import { Product, VendorMap } from "../../models/product.model";
import { RootState } from "../store";
import { ProductState } from "./product.reducer";

// accesses the "products" slice of the store
const selectProductsReducer = (state: RootState): ProductState =>
  state.products;

// returns the "productsArray" property from the "products" slice
export const selectProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.productsArray
);

// returns the "productsArray" property from the "products" slice
export const selectSearchedProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.searchedProductsArray
);

// returns the "product" property from the "products" slice
export const selectProduct = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.product
);
// returns a map of vendors and their respective products
export const selectVendorsMap = createSelector(
  [selectProductsArray],
  (productsArray: Product[] | undefined) => {
    // If there are no products, return an empty object
    if (!productsArray) return {};
    // Map the products array to an object where each vendor is a key, and their respective products are the values
    return productsArray.reduce<VendorMap>(
      (acc, product) => {
        const vendorName = product.vendor as string;
        if (!acc[vendorName]) {
          acc[vendorName] = [];
        }
        acc[vendorName].push(product);
        return acc;
      },
      {}
    );
  }
);

// returns the "isLoading" property from the "products" slice
export const selectProductsIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);

// returns the "success" property from the "products" slice
export const selectProductsSuccess = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.success
);
