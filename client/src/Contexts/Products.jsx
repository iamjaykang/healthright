import React, { createContext, useState } from "react";

import PRODUCTS from "../assets/data/shopData.json";

//actual value you want to access
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
