import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../../app/common/productCard/ProductCard.component";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../app/common/spinner/Spinner.common";
import { fetchProductsByVendorLoading } from "../../../app/stores/products/product.action";
import { selectProductsFilteredByVendorArray, selectProductsIsLoading } from "../../../app/stores/products/product.selector";

const BrandPreview = () => {
  const { vendor } = useParams();
  const fetchProductsByVendor = useSelector(selectProductsIsLoading);

  const filteredProductsByVendorArray = useSelector(selectProductsFilteredByVendorArray)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByVendorLoading(vendor));
  }, [vendor, dispatch]);

  if (fetchProductsByVendor) return <Spinner />;

  return (
    <div className="app__preview-content-container--brand">
      <h2 className="app__content-title">{vendor.toUpperCase()}</h2>
      <div className="app__preview-item-list--brand">
        {filteredProductsByVendorArray &&
          filteredProductsByVendorArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BrandPreview;
