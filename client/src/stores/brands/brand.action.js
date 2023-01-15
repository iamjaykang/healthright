import { createAction } from "../../utils/reducer/reducer.utils";
import { BRANDS_ACTION_TYPES } from "./brand.types";

export const fetchBrandsLoading = () =>
  createAction(BRANDS_ACTION_TYPES.FETCH_BRANDS_LOADING);

export const fetchBrandsSuccess = (brandsArray) =>
  createAction(BRANDS_ACTION_TYPES.FETCH_BRANDS_SUCCESS, brandsArray);

export const fetchBrandsFailed = (error) =>
  createAction(BRANDS_ACTION_TYPES.FETCH_BRANDS_FAILED, error);
