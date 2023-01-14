import { createSelector } from "reselect";

// Selector that accesses the "brands" slice of the store
const selectBrandReducer = (state) => state.brands;

// Selector that returns the "brands" property from the "brands" slice
export const selectBrands = createSelector(
  [selectBrandReducer],
  (brandsSlice) => brandsSlice.brands
);

// Selector that returns a map of brands to items
export const selectBrandsMap = createSelector([selectBrands], (brands) => {
    // Using the reduce method to create a new object where the key is the lowercase version of the "title" property of each brand, and the value is the "items" property of that brand
    return brands.reduce((acc, brand) => {

    // Destructure the title and items fields from the brand data
    const { title, items } = brand;

    // Add the brand as the key and the items as the value to the map
    acc[title.toLowerCase()] = items;

    return acc;
  }, {})
});