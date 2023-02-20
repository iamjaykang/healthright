import { createAction } from "../../utils/reducer/reducer.utils";
import { CUSTOMERS_ACTION_TYPES } from "./customer.types";

// Action to get all CUSTOMERS loading
export const fetchAllCustomersLoading = () =>
  createAction(CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING);

// Action to get all CUSTOMERS success
export const fetchAllCustomersSuccess = (customersArray) =>
  createAction(
    CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_SUCCESS,
    customersArray
  );

// Action to get all CUSTOMERS failed
export const fetchAllCustomersFailed = (error) =>
  createAction(CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_FAILED, error);

// Action to get all CUSTOMERS loading
export const fetchCustomerByIdLoading = (customerId) =>
createAction(CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_LOADING, customerId);

// Action to get all CUSTOMERS success
export const fetchCustomerByIdSuccess = (customerData) =>
  createAction(
    CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_SUCCESS,
    customerData
  );

// Action to get all CUSTOMERS failed
export const fetchCustomerByIdFailed = (error) =>
  createAction(CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_FAILED, error);

// Action to add CUSTOMERS loading
export const addCustomerLoading = (customerFormData) =>
  createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING, customerFormData);

// Action to add CUSTOMERS success
export const addCustomerSuccess = (customerData) =>
  createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_SUCCESS, customerData);

// Action to add CUSTOMERS failed
export const addCustomerFailed = (error) =>
  createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_FAILED, error);

// Action to add CUSTOMERS loading
export const updateCustomerLoading = (customerId, newCustomerFormData) =>
  createAction(
    CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_LOADING,
    customerId,
    newCustomerFormData
  );

// Action to add CUSTOMERS success
export const updateCustomerSuccess = (customerData) =>
  createAction(CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_SUCCESS, customerData);

// Action to add CUSTOMERS failed
export const updateCustomerFailed = (error) =>
  createAction(CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_FAILED, error);

// Action to add CUSTOMERS loading
export const deleteCustomerLoading = (customerId) =>
  createAction(
    CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_LOADING,
    customerId,
  );

// Action to add CUSTOMERS success
export const deleteCustomerSuccess = (customerData) =>
  createAction(CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_SUCCESS, customerData);

// Action to add CUSTOMERS failed
export const deleteCustomerFailed = (error) =>
  createAction(CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_FAILED, error);
