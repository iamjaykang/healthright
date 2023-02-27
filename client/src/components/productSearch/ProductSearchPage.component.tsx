import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../app/common/productCard/ProductCard.component";
import Spinner from "../../app/common/spinner/Spinner.common";
import { Product } from "../../app/models/product.model";
import { searchProductsLoading } from "../../app/stores/products/product.action";
import {
  selectProductsIsLoading,
  selectSearchedProductsArray,
} from "../../app/stores/products/product.selector";

const ProductSearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") as string;

  const dispatch = useDispatch();

  const searchedProducts = useSelector(
    selectSearchedProductsArray
  ) as Product[];

  const searchProductsIsLoading = useSelector(selectProductsIsLoading);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchProductsLoading(searchTerm));
    }
  }, [dispatch,searchTerm]);

  if (searchProductsIsLoading) {
    <Spinner />;
  }

  return (
    <div className="app__preview-container--product">
      <h2 className="app__content-title">Search results for "{searchTerm}"</h2>
      <div className="app__preview-item-list--product">
        {searchedProducts &&
          searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductSearchPage;
