import { BRANDS_ACTION_TYPES } from "./brand.types";

const INITIAL_STATE = {
  brands: [],
};

export const brandsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case BRANDS_ACTION_TYPES.SET_BRANDS:
      return { ...state, brands: payload };

    default:
      return state;
  }
};
