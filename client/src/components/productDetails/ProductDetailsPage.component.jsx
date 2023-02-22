import React, { useEffect } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  selectProductsIsLoading,
} from "../../app/stores/products/product.selector";
import { fetchProductByNameLoading } from "../../app/stores/products/product.action";
import Spinner from "../../app/common/spinner/Spinner.common";

const ProductDetailsPage = () => {
  const { productName } = useParams();

  const dispatch = useDispatch();

  const product = useSelector(selectProduct);

  const isProductLoading = useSelector(selectProductsIsLoading);

  useEffect(() => {
    dispatch(fetchProductByNameLoading(productName));
  }, [dispatch, productName]);

  if (isProductLoading || !product) {
    return <Spinner />;
  }

  return (
    <div className="app__product-details">
      <h1 className="app__product-details--name">{product.name}</h1>
      <div className="app__product-details--vendor">{product.vendor}</div>
      <img
        src={product.productImage}
        alt={product.name}
        className="app__product-details--image"
      />
      <div className="app__product-details--category">{product.category}</div>
      <div className="app__product-details--price">${product.price}</div>
      <div className="app__product-details--description">
        {parse(product.description)}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
