import { takeLatest, all, call, put } from "redux-saga/effects";

import { getBrandsAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchBrandsSuccess, fetchBrandsFailed } from "./brand.action";

import { BRANDS_ACTION_TYPES } from "./brand.types";

// function to fetch brands asynchronously
export function* fetchBrandsAsync() {
  try {
    // call the getBrandsAndDocuments function from the firebase.utils file, passing in "brands" as an argument
    const brandsArray = yield call(getBrandsAndDocuments, "brands");
    // Dispatch the fetchBrandsSuccess action with the brandsArray as the payload
    yield put(fetchBrandsSuccess(brandsArray))
  } catch (error) {
    // Dispatch the fetchBrandsFailed action with the error as the payload
    yield put(fetchBrandsFailed(error))
  }
}

// Watches for the FETCH_BRANDS_LOADING action and calls the fetchBrandsAsync function
export function* onFetchBrands() {
  yield takeLatest(BRANDS_ACTION_TYPES.FETCH_BRANDS_LOADING, fetchBrandsAsync);
}

// Combine all the saga functions into one root saga
export function* brandsSaga() {
  yield all([call(onFetchBrands)]);
}