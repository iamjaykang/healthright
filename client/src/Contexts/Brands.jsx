import React, { createContext, useState, useEffect } from "react";
import { getBrandsAndDocuments } from "../utils/firebase/firebase";

//actual value you want to access
export const BrandsContext = createContext({
  brandsMap: {},
});

export const BrandsProvider = ({ children }) => {
  const [brandsMap, setBrandsMap] = useState({});

  useEffect(() => {
    const getBrandsMap = async () => {
      // Retrieve the map of brands to items
      const brandMap = await getBrandsAndDocuments();

      // Set the brandsMap to the retrieved map
      setBrandsMap(brandMap);
    };

    // Call the getBrandsMap function
    getBrandsMap();
  }, []);

  // Create the value to be passed to the context provider
  const value = { brandsMap };

  // Render the context provider with the value
  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
};
