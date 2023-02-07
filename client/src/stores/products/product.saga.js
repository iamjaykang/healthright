import { takeLatest, call, put, all } from "redux-saga/effects";
import agent from "../../app/api/agent";
import {
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProductsByVendorSuccess,
  fetchProductsByVendorFailed,
} from "./product.action";
import { PRODUCTS_ACTION_TYPES } from "./product.types";

export function* fetchProducts() {
  try {
    const productsArray = yield call(agent.Products.list);
    yield put(fetchProductsSuccess(productsArray));
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

export function* fetchProductsByVendor({ payload: vendor }) {
  try {
    const productsArray = yield call(
      agent.Products.listFilteredByVendor,
      vendor
    );
    yield put(fetchProductsByVendorSuccess(productsArray));
  } catch (error) {
    yield put(fetchProductsByVendorFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING, fetchProducts);
}

export function* onFetchProductsByVendor() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING,
    fetchProductsByVendor
  );
}

export function* productsSaga() {
  yield all([call(onFetchProducts), call(onFetchProductsByVendor)]);
}
