import { SINGLE_BRAND_ACTION_TYPES } from "./singleBrand.types";

const INITIAL_STATE = {
  brand: [],
  isLoading: false,
  error: null,
  shouldNavigate: false,
};

export const singleBrandReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_LOADING:
      return { ...state, isLoading: true };
    case SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_SUCCESS:
      if (!payload || payload.length === 0) {
        return {
          ...state,
          error: "not found",
          isLoading: false,
          shouldNavigate: true,
        };
      }
      return {
        ...state,
        brand: payload,
        isLoading: false,
        error: null,
        shouldNavigate: false,
      };
    case SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
