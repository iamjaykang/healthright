import { PRODUCTS_ACTION_TYPES } from "./product.types";

const initialState = {
  isLoading: false,
  productsArray: [],
  error: null,
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
    default:
      return state;
  }
};

export default productsReducer;
