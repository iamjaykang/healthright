import { PRODUCTS_ACTION_TYPES } from "./product.types";

const initialState = {
  isLoading: false,
  productsArray: [],
  filteredProductsArray: [],
  adminProductsArray: [],
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
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsArray: payload,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        adminProductsArray: payload,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        filteredProductsArray: payload,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsArray: [...state.productsArray.data, payload],
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
