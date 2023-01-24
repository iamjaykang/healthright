import { createAction } from "../../utils/reducer/reducer.utils";
import { SINGLE_BRAND_ACTION_TYPES } from "./singleBrand.types";

export const fetchSingleBrandLoading = (brand) =>
  createAction(SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_LOADING, brand);

export const fetchSingleBrandSuccess = (singleBrandData) =>
  createAction(SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_SUCCESS, singleBrandData);

export const fetchSingleBrandFailed = (error) =>
  createAction(SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_FAILED, error);
