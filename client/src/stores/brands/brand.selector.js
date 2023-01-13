export const selectBrandsMap = (state) =>
  state.brands.brands.reduce((acc, brand) => {
    // Destructure the title and items fields from the brand data
    const { title, items } = brand;

    // Add the brand as the key and the items as the value to the map
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
