import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import {
  CustomerResponse,
  CustomersResponse,
} from "../../models/apiResponses.model";
import { CustomerFormValues } from "../../models/user.model";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CUSTOMERS_ACTION_TYPES } from "./customer.types";

export type FetchAllCustomersLoading =
  Action<CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING>;

export type FetchAllCustomersSuccess = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_SUCCESS,
  CustomersResponse
>;

export type FetchAllCustomersFailed = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_FAILED,
  Error
>;

export type FetchCustomerByIdLoading = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_LOADING,
  number
>;

export type FetchCustomerByIdSuccess = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_SUCCESS,
  CustomerResponse
>;

export type FetchCustomerByIdFailed = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_FAILED,
  Error
>;

export type AddCustomerLoading = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING,
  CustomerFormValues
>;

export type AddCustomerSuccess = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_SUCCESS,
  CustomerResponse
>;

export type AddCustomerFailed = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_FAILED,
  Error
>;

export type UpdateCustomerLoading = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_LOADING,
  { customerId: number; newCustomerFormData: CustomerFormValues }
>;

export type UpdateCustomerSuccess = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_SUCCESS,
  CustomerResponse
>;

export type UpdateCustomerFailed = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_FAILED,
  Error
>;

export type DeleteCustomerLoading = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_LOADING,
  number
>;

export type DeleteCustomerSuccess = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_SUCCESS,
  CustomerResponse
>;

export type DeleteCustomerFailed = ActionWithPayload<
  CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_FAILED,
  Error
>;

// Action to get all CUSTOMERS loading
export const fetchAllCustomersLoading = withMatcher(
  (): FetchAllCustomersLoading =>
    createAction(CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING)
);

// Action to get all CUSTOMERS success
export const fetchAllCustomersSuccess = withMatcher(
  (customersData: CustomersResponse): FetchAllCustomersSuccess =>
    createAction(
      CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_SUCCESS,
      customersData
    )
);

// Action to get all CUSTOMERS failed
export const fetchAllCustomersFailed = withMatcher(
  (error: Error): FetchAllCustomersFailed =>
    createAction(CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_FAILED, error)
);

// Action to get CUSTOMER by id loading
export const fetchCustomerByIdLoading = withMatcher(
  (customerId: number): FetchCustomerByIdLoading =>
    createAction(
      CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_LOADING,
      customerId
    )
);

// Action to get CUSTOMER by id success
export const fetchCustomerByIdSuccess = withMatcher(
  (customerData: CustomerResponse): FetchCustomerByIdSuccess =>
    createAction(
      CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_SUCCESS,
      customerData
    )
);

// Action to get CUSTOMER by id failed
export const fetchCustomerByIdFailed = withMatcher(
  (error: Error): FetchCustomerByIdFailed =>
    createAction(CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_FAILED, error)
);

// Action to add CUSTOMERS loading
export const addCustomerLoading = withMatcher(
  (customerFormData: CustomerFormValues): AddCustomerLoading =>
    createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING, customerFormData)
);

// Action to add CUSTOMERS success
export const addCustomerSuccess = withMatcher(
  (customerData: CustomerResponse): AddCustomerSuccess =>
    createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_SUCCESS, customerData)
);

// Action to add CUSTOMERS failed
export const addCustomerFailed = withMatcher(
  (error: Error): AddCustomerFailed =>
    createAction(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_FAILED, error)
);

// Action to update CUSTOMERS loading
export const updateCustomerLoading = withMatcher(
  (
    customerId: number,
    newCustomerFormData: CustomerFormValues
  ): UpdateCustomerLoading =>
    createAction(CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_LOADING, {
      customerId,
      newCustomerFormData,
    })
);

// Action to update CUSTOMERS success
export const updateCustomerSuccess = withMatcher((newCustomerData: CustomerResponse): UpdateCustomerSuccess =>
  createAction(CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_SUCCESS, newCustomerData));

// Action to update CUSTOMERS failed
export const updateCustomerFailed = withMatcher((error: Error): UpdateCustomerFailed =>
  createAction(CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_FAILED, error));

// Action to delete CUSTOMER loading
export const deleteCustomerLoading = withMatcher((customerId: number): DeleteCustomerLoading =>
  createAction(CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_LOADING, customerId));

// Action to delete CUSTOMER success
export const deleteCustomerSuccess = withMatcher((customerData: CustomerResponse): DeleteCustomerSuccess =>
  createAction(CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_SUCCESS, customerData));

// Action to delete CUSTOMER failed
export const deleteCustomerFailed = withMatcher((error: Error): DeleteCustomerFailed =>
  createAction(CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_FAILED, error));
