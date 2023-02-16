import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./product.types";

export const fetchProductsLoading = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING);

export const fetchProductsSuccess = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsArray);

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsByVendorLoading = (vendor) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING, vendor);

export const fetchProductsByVendorSuccess = (productsArray) =>
  createAction(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_SUCCESS,
    productsArray
  );

export const fetchProductsByVendorFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_FAILED, error);

export const addProductLoading = (productData) =>
  createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_LOADING, productData);

export const addProductSuccess = (product) =>
  createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_SUCCESS, product);

export const addProductFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_FAILED, error);
