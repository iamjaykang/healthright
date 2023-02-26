import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import { AdminProductFormValues } from "../../models/product.model";
import {
  ProductResponse,
  ProductsResponse,
} from "../../models/apiResponses.model";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./product.types";

export type FetchProductsLoading =
  Action<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING>;

export type FetchProductsSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  ProductsResponse
>;

export type FetchProductsFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED,
  Error
>;

export type FetchProductAdminLoading = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_LOADING,
  number
>;

export type FetchProductAdminSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_SUCCESS,
  ProductResponse
>;

export type FetchProductAdminFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_FAILED,
  Error
>;

export type FetchProductByNameLoading = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_LOADING,
  string
>;

export type FetchProductByNameSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_SUCCESS,
  ProductResponse
>;

export type FetchProductByNameFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_FAILED,
  Error
>;

export type FetchProductsAdminLoading =
  Action<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING>;

export type FetchProductsAdminSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_SUCCESS,
  ProductsResponse
>;

export type FetchProductsAdminFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_FAILED,
  Error
>;

export type FetchProductsByVendorLoading =
  ActionWithPayload<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING, string>;

export type FetchProductsByVendorSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_SUCCESS,
  ProductsResponse
>;

export type FetchProductsByVendorFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_FAILED,
  Error
>;

export type AddProductLoading = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.ADD_PRODUCT_LOADING,
  AdminProductFormValues
>;

export type AddProductSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.ADD_PRODUCT_SUCCESS,
  ProductResponse
>;

export type AddProductFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.ADD_PRODUCT_FAILED,
  Error
>;

export type UpdateProductLoading = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_LOADING,
  { productId: number; newProductData: AdminProductFormValues }
>;

export type UpdateProductSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_SUCCESS,
  ProductResponse
>;

export type UpdateProductFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_FAILED,
  Error
>;

export type DeleteProductLoading = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_LOADING,
  number
>;

export type DeleteProductSuccess =
  Action<PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_SUCCESS>;

export type DeleteProductFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_FAILED,
  Error
>;

export type SearchProductsLoading = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_LOADING,
  string
>;

export type SearchProductsSuccess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_SUCCESS,
  ProductsResponse
>;

export type SearchProductsFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_FAILED,
  Error
>;

// Fetch Products
export const fetchProductsLoading = withMatcher(
  (): FetchProductsLoading =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING)
);

export const fetchProductsSuccess = withMatcher(
  (productsArray: ProductsResponse): FetchProductsSuccess =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsArray)
);

export const fetchProductsFailed = withMatcher(
  (error: Error): FetchProductsFailed =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error)
);

// Fetch Product By ID for admin
export const fetchProductAdminLoading = withMatcher(
  (productId: number): FetchProductAdminLoading =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_LOADING, productId)
);

export const fetchProductAdminSuccess = withMatcher(
  (productData: ProductResponse): FetchProductAdminSuccess =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_SUCCESS, productData)
);

export const fetchProductAdminFailed = withMatcher(
  (error: Error): FetchProductAdminFailed =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_ADMIN_FAILED, error)
);

// Fetch Product By Name
export const fetchProductByNameLoading = withMatcher(
  (productName: string): FetchProductByNameLoading =>
    createAction(
      PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_LOADING,
      productName
    )
);

export const fetchProductByNameSuccess = withMatcher(
  (productData: ProductResponse): FetchProductByNameSuccess =>
    createAction(
      PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_SUCCESS,
      productData
    )
);

export const fetchProductByNameFailed = withMatcher(
  (error: Error): FetchProductByNameFailed =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_BY_NAME_FAILED, error)
);

// Fetch Products for admin
export const fetchProductsAdminLoading = withMatcher(
  (): FetchProductsAdminLoading =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_LOADING)
);

export const fetchProductsAdminSuccess = withMatcher(
  (adminProductsArray: ProductsResponse): FetchProductsAdminSuccess =>
    createAction(
      PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_SUCCESS,
      adminProductsArray
    )
);

export const fetchProductsAdminFailed = withMatcher(
  (error: Error): FetchProductsAdminFailed =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ADMIN_FAILED, error)
);

// Fetch Products By Vendor
export const fetchProductsByVendorLoading = withMatcher(
  (vendor: string): FetchProductsByVendorLoading =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_LOADING, vendor)
);

export const fetchProductsByVendorSuccess = withMatcher(
  (productsArray: ProductsResponse): FetchProductsByVendorSuccess =>
    createAction(
      PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_SUCCESS,
      productsArray
    )
);

export const fetchProductsByVendorFailed = withMatcher(
  (error: Error): FetchProductsByVendorFailed =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_BY_VENDOR_FAILED, error)
);

// Add Products
export const addProductLoading = withMatcher(
  (productData: AdminProductFormValues): AddProductLoading =>
    createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_LOADING, productData)
);

export const addProductSuccess = withMatcher(
  (productData: ProductResponse): AddProductSuccess =>
    createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_SUCCESS, productData)
);

export const addProductFailed = withMatcher(
  (error: Error): AddProductFailed =>
    createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCT_FAILED, error)
);

// Update Product
export const updateProductLoading = withMatcher(
  (
    productId: number,
    newProductData: AdminProductFormValues
  ): UpdateProductLoading =>
    createAction(PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_LOADING, {
      productId,
      newProductData,
    })
);

export const updateProductSuccess = withMatcher(
  (newProductData: ProductResponse): UpdateProductSuccess =>
    createAction(PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_SUCCESS, newProductData)
);

export const updateProductFailed = withMatcher(
  (error: Error): UpdateProductFailed =>
    createAction(PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT_FAILED, error)
);

// Delete Product
export const deleteProductLoading = withMatcher(
  (productId: number): DeleteProductLoading =>
    createAction(PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_LOADING, productId)
);

export const deleteProductSuccess = withMatcher(
  (): DeleteProductSuccess =>
    createAction(PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_SUCCESS)
);

export const deleteProductFailed = withMatcher(
  (error: Error): DeleteProductFailed =>
    createAction(PRODUCTS_ACTION_TYPES.DELETE_PRODUCT_FAILED, error)
);

// Search Products
export const searchProductsLoading = withMatcher(
  (searchTerm: string): SearchProductsLoading =>
    createAction(
      PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_LOADING,
      searchTerm
    )
);

export const searchProductsSuccess = withMatcher(
  (productsArray: ProductsResponse): SearchProductsSuccess =>
    createAction(
      PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_SUCCESS,
      productsArray
    )
);

export const searchProductsFailed = withMatcher(
  (error: Error): SearchProductsFailed =>
    createAction(PRODUCTS_ACTION_TYPES.SEARCH_PRODUCTS_BY_TERM_FAILED, error)
);
