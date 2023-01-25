import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.component";
import { useSelector, useDispatch } from "react-redux";
import "./BrandPreview.css";
import Spinner from "../../App/Common/Spinner/Spinner.common";
import { fetchSingleBrandLoading } from "../../stores/singleBrand/singleBrand.action";
import {
  selectShouldNavigate,
  selectSingleBrand,
  selectSingleBrandIsLoading,
} from "../../stores/singleBrand/singleBrand.selector";

const BrandPreview = () => {
  const { brand } = useParams();
  const singleBrandItems = useSelector(selectSingleBrand);
  const singleBrandIsLoading = useSelector(selectSingleBrandIsLoading);
  const shouldNavigate = useSelector(selectShouldNavigate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/not-found");
    }
  }, [navigate, shouldNavigate]);

  useEffect(() => {
      dispatch(fetchSingleBrandLoading(brand));
  }, [dispatch, brand,shouldNavigate]);

  if (singleBrandIsLoading) return <Spinner />;

  return (
    <>
      <h2 className="preview-title">{brand.toUpperCase()}</h2>
      <div className="preview-item-container">
        {singleBrandItems &&
          singleBrandItems.items &&
          singleBrandItems.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default BrandPreview;
