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
  fetchProductAdminFailed,
  fetchProductAdminSuccess,
  updateProductSuccess,
  updateProductFailed,
  deleteProductSuccess,
  deleteProductFailed,
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

export function* fetchProductForAdmin({ payload: productId }) {
  try {
    const productData = yield call(agent.Products.detailsForAdmin, productId);
    yield put(fetchProductAdminSuccess(productData));
  } catch (error) {
    yield put(fetchProductAdminFailed(error));
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

export function* updateProduct({ payload }) {
  const { productId, newProductData } = payload;
  try {
    const ProductData = yield call(
      agent.Products.update,
      productId,
      newProductData
    );
    yield put(updateProductSuccess(ProductData));
  } catch (error) {
    yield put(updateProductFailed(error));
  }
}

export function* deleteProduct({ payload: productId }) {
  try {
    const ProductData = yield call(
      agent.Products.delete,
      productId
    );
    yield put(deleteProductSuccess(ProductData));
  } catch (error) {
    yield put(deleteProductFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING, fetchProducts);
}

export function* onFetchProductsAdmin() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING,
    fetchProductsForAdmin
  );
}

export function* onFetchProductAdmin() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_LOADING,
    fetchProductForAdmin
  );
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

export function* onUpdateProduct() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_LOADING, updateProduct);
}

export function* onDeleteProduct() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_LOADING, deleteProduct);
}

export function* productsSaga() {
  yield all([
    call(onFetchProducts),
    call(onFetchProductsAdmin),
    call(onFetchProductAdmin),
    call(onFetchProductsByVendor),
    call(onUpdateProduct),
    call(onDeleteProduct),
    call(onAddProduct),
  ]);
}
