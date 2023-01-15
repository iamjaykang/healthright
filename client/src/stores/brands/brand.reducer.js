import { BRANDS_ACTION_TYPES } from "./brand.types";

const INITIAL_STATE = {
  brands: [],
  isLoading: false,
  error: null,
};

export const brandsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case BRANDS_ACTION_TYPES.FETCH_BRANDS_LOADING:
      return { ...state, isLoading: true };
    case BRANDS_ACTION_TYPES.FETCH_BRANDS_SUCCESS:
      return { ...state, brands: payload, isLoading: false };
    case BRANDS_ACTION_TYPES.FETCH_BRANDS_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
