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
  fetchProductByNameSuccess,
  fetchProductByNameFailed,
  searchProductsSuccess,
  searchProductsFailed,
} from "./product.action";
import { PRODUCTS_ACTION_TYPES } from "./product.types";

// Fetch products
export function* fetchProducts() {
  try {
    const productsArray = yield call(agent.Products.list);
    yield put(fetchProductsSuccess(productsArray));
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

// Fetch product for admin
export function* fetchProductForAdmin({ payload: productId }) {
  try {
    const productData = yield call(agent.Products.detailsForAdmin, productId);
    yield put(fetchProductAdminSuccess(productData));
  } catch (error) {
    yield put(fetchProductAdminFailed(error));
  }
}

// Fetch ProductByName
export function* fetchProductByName({ payload: productName }) {
  try {
    const productData = yield call(agent.Products.detailsByName, productName);
    yield put(fetchProductByNameSuccess(productData));
  } catch (error) {
    yield put(fetchProductByNameFailed(error));
  }
}

// Fetch products for admin
export function* fetchProductsForAdmin() {
  try {
    const adminProductsArray = yield call(agent.Products.listForAdmin);
    yield put(fetchProductsAdminSuccess(adminProductsArray));
  } catch (error) {
    yield put(fetchProductsAdminFailed(error));
  }
}

// Fetch Products by vendor
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

// Add product
export function* addProduct({ payload }) {
  try {
    const productData = yield call(agent.Products.create, payload);
    yield put(addProductSuccess(productData));
  } catch (error) {
    yield put(addProductFailed(error));
  }
}

// Update Product
export function* updateProduct({ payload }) {
  const { productId, newProductData } = payload;
  try {
    const productData = yield call(
      agent.Products.update,
      productId,
      newProductData
    );
    yield put(updateProductSuccess(productData));
  } catch (error) {
    yield put(updateProductFailed(error));
  }
}

// Delete product
export function* deleteProduct({ payload: productId }) {
  try {
    const productData = yield call(agent.Products.delete, productId);
    yield put(deleteProductSuccess(productData));
  } catch (error) {
    yield put(deleteProductFailed(error));
  }
}

// Search products
export function* searchProductsBySearchTerm({ payload: searchTerm }) {
  try {
    const searchedProducts = yield call(
      agent.Products.searchByTerm,
      searchTerm
    );
    yield put(searchProductsSuccess(searchedProducts));
  } catch (error) {
    yield put(searchProductsFailed(error));
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

export function* onFetchProductByName() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_LOADING,
    fetchProductByName
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

export function* onSearchProductsBySearchTerm() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_LOADING,
    searchProductsBySearchTerm
  );
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
    call(onFetchProductByName),
    call(onSearchProductsBySearchTerm),
  ]);
}
