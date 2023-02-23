import { PRODUCTS_ACTION_TYPES } from "./product.types";

const initialState = {
  isLoading: false,
  productsArray: [],
  filteredProductsArray: [],
  adminProductsArray: [],
  searchedProducts: [],
  adminProduct: null,
  product: null,
  success: false,
  message: "",
  error: null,
  shouldNavigate: false,
};

const productsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    // Fetch Products reducer
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        productsArray: [],
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
      // Fetch Product by name reducer
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_LOADING:
      return {
        ...state,
        isLoading: true,
        product: null,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        product: payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        message: payload.message,
        success: payload.success,
      };
      // Fetch Product for admin
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
      // Fetch products for admin
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING:
      return {
        ...state,
        isLoading: true,
        adminProductsArray: [],
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
      // Fetch products by vendor
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING:
      return {
        ...state,
        filteredProductsArray: [],
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
      // Add product
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
      // Update products
    case PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
        adminProduct: null,
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
      // Delete products
    case PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
        message: payload.message,
        success: payload.success,
      };
      // Search products by term
    case PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
        searchedProducts: [],
        message: "",
        success: false,
      };
    case PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        searchedProducts: payload.data,
        message: payload.message,
        success: payload.success,
      };
    case PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_FAILED:
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
