import { getBrandsAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { BRANDS_ACTION_TYPES } from "./brand.types";

export const fetchBrandsLoading = () =>
  createAction(BRANDS_ACTION_TYPES.FETCH_BRANDS_LOADING);

export const fetchBrandsSuccess = (brandsArray) =>
  createAction(BRANDS_ACTION_TYPES.FETCH_BRANDS_SUCCESS, brandsArray);

export const fetchBrandsFailed = (error) =>
  createAction(BRANDS_ACTION_TYPES.FETCH_BRANDS_FAILED, error);

export const fetchBrandsAsync = () => async (dispatch) => {
  dispatch(fetchBrandsLoading());

  try {
    const brandsArray = await getBrandsAndDocuments("brands");
    dispatch(fetchBrandsSuccess(brandsArray));
  } catch (error) {
    dispatch(fetchBrandsFailed(error));
  }
};
