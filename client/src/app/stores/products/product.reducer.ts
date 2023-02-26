import { AnyAction } from "redux";
import { AdminProduct, Product } from "../../models/product.model";
import {
  addProductFailed,
  addProductLoading,
  addProductSuccess,
  deleteProductFailed,
  fetchProductAdminFailed,
  fetchProductAdminLoading,
  fetchProductAdminSuccess,
  fetchProductByNameFailed,
  fetchProductByNameLoading,
  fetchProductByNameSuccess,
  fetchProductsAdminFailed,
  fetchProductsAdminLoading,
  fetchProductsAdminSuccess,
  fetchProductsByVendorFailed,
  fetchProductsByVendorLoading,
  fetchProductsByVendorSuccess,
  fetchProductsFailed,
  fetchProductsLoading,
  fetchProductsSuccess,
  searchProductsFailed,
  searchProductsLoading,
  searchProductsSuccess,
  updateProductFailed,
  updateProductLoading,
  updateProductSuccess,
} from "./product.action";

export type ProductState = {
  isLoading: boolean;
  productsArray: Product[] | AdminProduct[];
  product: Product | AdminProduct | null;
  success: boolean;
  message: string | null;
  error: string | null;
};

const PRODUCT_INITIAL_STATE: ProductState = {
  isLoading: false,
  productsArray: [],
  product: null,
  success: false,
  message: null,
  error: null,
};

const productsReducer = (
  state = PRODUCT_INITIAL_STATE,
  action = {} as AnyAction
) => {

  if (
    fetchProductByNameLoading.match(action) ||
    fetchProductAdminLoading.match(action) ||
    addProductLoading.match(action) ||
    updateProductLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      error: null,
      product: null,
      message: null,
      success: false
    };
  }

  if (
    fetchProductsLoading.match(action) ||
    fetchProductsByVendorLoading.match(action) ||
    fetchProductByNameLoading.match(action) ||
    fetchProductsAdminLoading.match(action) ||
    searchProductsLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      error: null,
      productsArray: [],
      message: null,
      success: false
    };
  }

  if (
    fetchProductByNameSuccess.match(action) ||
    fetchProductAdminSuccess.match(action) ||
    addProductSuccess.match(action) ||
    updateProductSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: null,
      product: action.payload.data,
      message: action.payload.message,
      success: action.payload.success,
    };
  }

  if (
    fetchProductsSuccess.match(action) ||
    fetchProductsByVendorSuccess.match(action) ||
    fetchProductByNameSuccess.match(action) ||
    fetchProductsAdminSuccess.match(action) ||
    searchProductsSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: null,
      productsArray: action.payload.data,
      message: action.payload.message,
      success: action.payload.success,
    };
  }

  if (
    fetchProductsFailed.match(action) ||
    fetchProductsByVendorFailed.match(action) ||
    fetchProductsAdminFailed.match(action) ||
    fetchProductByNameFailed.match(action) ||
    searchProductsFailed.match(action) ||
    deleteProductFailed.match(action) ||
    updateProductFailed.match(action) ||
    fetchProductAdminFailed.match(action) ||
    addProductFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: action.payload.stack,
      message: action.payload.message,
      success: false,
    };
  }

  return state;
};

export default productsReducer;
