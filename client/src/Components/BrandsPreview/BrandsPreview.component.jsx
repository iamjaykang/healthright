import React, { useEffect } from "react";
import BrandsPreviewItem from "../BrandsPreviewItem/BrandsPreviewItem.component";
import "./BrandsPreview.css";
import { useSelector, useDispatch } from "react-redux";
import { selectBrandsMap } from "../../stores/brands/brand.selector";
import { setBrands } from "../../stores/brands/brand.action";
import { getBrandsAndDocuments } from "../../utils/firebase/firebase.utils";

const BrandsPreview = () => {
  const dispatch = useDispatch();

  const brandsMap = useSelector(selectBrandsMap);

  useEffect(() => {
    const getBrandsMap = async () => {
      // Retrieve the Map of brands to items
      const brands = await getBrandsAndDocuments();

      // Set the brands to the retrieved map
      dispatch(setBrands(brands));
    };

    // Call the getBrandsMap function
    getBrandsMap();
  }, [dispatch]);

  return (
    <>
      {brandsMap &&
        Object.keys(brandsMap).map((title) => {
          const products = brandsMap[title];
          return (
            <BrandsPreviewItem key={title} title={title} products={products} />
          );
        })}
    </>
  );
};

export default BrandsPreview;
