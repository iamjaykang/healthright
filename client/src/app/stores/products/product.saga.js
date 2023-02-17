import { takeLatest, call, put, all } from "redux-saga/effects";
import agent from "../../api/agent";
import {
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProductsByVendorSuccess,
  fetchProductsByVendorFailed,
  addProductSuccess,
  addProductFailed,
  fetchProductsAdminSuccess,
  fetchProductsAdminFailed,
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

export function* fetchProductsForAdmin() {
  try {
    const adminProductsArray = yield call(agent.Products.listForAdmin);
    yield put(fetchProductsAdminSuccess(adminProductsArray));
  } catch (error) {
    yield put(fetchProductsAdminFailed(error));
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

export function* addProduct({ payload }) {
  try {
    const productData = yield call(agent.Products.create, payload);
    yield put(addProductSuccess(productData));
  } catch (error) {
    yield put(addProductFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING, fetchProducts);
}

export function* onFetchProductsAdmin() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING, fetchProductsForAdmin);
}

export function* onFetchProductsByVendor() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING,
    fetchProductsByVendor
  );
}

export function* onAddProduct() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_LOADING, addProduct);
}

export function* productsSaga() {
  yield all([
    call(onFetchProducts),
    call(onFetchProductsAdmin),
    call(onFetchProductsByVendor),
    call(onAddProduct),
  ]);
}
