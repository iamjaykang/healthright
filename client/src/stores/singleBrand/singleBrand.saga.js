import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  getBrandsAndDocuments,
  getSingleBrandAndDocuments,
} from "../../utils/firebase/firebase.utils";

import {
  fetchSingleBrandFailed,
  fetchSingleBrandSuccess,
} from "./singleBrand.action";

import { SINGLE_BRAND_ACTION_TYPES } from "./singleBrand.types";

// function to fetch brand asynchronously
export function* fetchSingleBrandAsync({ payload: brand }) {
  try {
    // call the getSingleBrandAndDocuments function from the firebase.utils file, passing in "brand" as an argument
    const singleBrandData = yield call(getSingleBrandAndDocuments, brand);

    // Dispatch the fetchSingleBrandSuccess action with the brandArray as the payload
    yield put(fetchSingleBrandSuccess(singleBrandData));
  } catch (error) {
    // Dispatch the fetchSingleBrandFailed action with the error as the payload
    yield put(fetchSingleBrandFailed(error));
  }
}

// Watches for the FETCH_SINGLE_BRAND_LOADING action and calls the fetchSingleBrandAsync function

export function* onFetchSingleBrand() {
  yield takeLatest(
    SINGLE_BRAND_ACTION_TYPES.FETCH_SINGLE_BRAND_LOADING,
    fetchSingleBrandAsync
  );
}

// Combine all the saga functions into one root saga
export function* singleBrandSaga() {
  yield all([call(onFetchSingleBrand)]);
}
