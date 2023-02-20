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
export const addCustomerLoading = (customerFormData) =>
  createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING, customerFormData);

// Action to get all CUSTOMERS success
export const addCustomerSuccess = (customerData) =>
  createAction(
    CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_SUCCESS,
    customerData
  );

// Action to get all CUSTOMERS failed
export const addCustomerFailed = (error) =>
  createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_FAILED, error);
