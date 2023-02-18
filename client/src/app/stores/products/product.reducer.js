import { PRODUCTS_ACTION_TYPES } from "./product.types";

const initialState = {
  isLoading: false,
  productsArray: [],
  filteredProductsArray: [],
  adminProductsArray: [],
  adminProduct: null,
  success: false,
  message: "",
  error: null,
  shouldNavigate: false,
};

const productsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        productsArray: payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_LOADING:
      return {
        ...state,
        isLoading: true,
        adminProduct: null,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        adminProduct: payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING:
      return {
        ...state,
        isLoading: true,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        adminProductsArray: payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING:
      return {
        ...state,
        isLoading: true,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        filteredProductsArray: payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        adminProduct:payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
        message: payload.message,
        success: payload.success,
      };
    default:
      return state;
  }
};

export default productsReducer;
