import { AnyAction } from "redux";
import { Customer } from "../../models/user.model";
import {
  addCustomerFailed,
  addCustomerLoading,
  addCustomerSuccess,
  deleteCustomerFailed,
  deleteCustomerLoading,
  deleteCustomerSuccess,
  fetchAllCustomersFailed,
  fetchAllCustomersLoading,
  fetchAllCustomersSuccess,
  fetchCustomerByIdFailed,
  fetchCustomerByIdLoading,
  fetchCustomerByIdSuccess,
  updateCustomerFailed,
  updateCustomerLoading,
  updateCustomerSuccess,
} from "./customer.action";

export type CustomerState = {
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly customersArray: Customer[];
  readonly customer: Customer;
  readonly success: boolean;
  readonly message: string | null;
};

const CUSTOMER_INITIAL_STATE = {
  isLoading: false,
  error: null,
  customersArray: [],
  customer: null,
  success: false,
  message: null,
};

const customersReducer = (
  state = CUSTOMER_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchAllCustomersLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      customersArray: [],
      message: null,
      error: null,
      success: false,
    };
  }

  if (
    addCustomerLoading.match(action) ||
    updateCustomerLoading.match(action) ||
    deleteCustomerLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      customer: null,
      message: null,
      error: null,
      success: false,
    };
  }

  if (fetchCustomerByIdLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      customer: null,
      message: null,
      error: null,
      success: false,
    };
  }

  if (fetchAllCustomersSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      customersArray: action.payload.data,
      success: action.payload.success,
      message: action.payload.message,
      error: null,
    };
  }

  if (
    fetchCustomerByIdSuccess.match(action) ||
    updateCustomerSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      customer: action.payload.data,
      success: action.payload.success,
      message: action.payload.message,
      error: null,
    };
  }

  if (deleteCustomerSuccess.match(action) || addCustomerSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      customer: null,
      success: action.payload.success,
      message: action.payload.message,
      error: null,
    };
  }

  if (
    fetchAllCustomersFailed.match(action) ||
    fetchCustomerByIdFailed.match(action) ||
    addCustomerFailed.match(action) ||
    updateCustomerFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      success: false,
      message: action.payload.message,
      error: action.payload.stack,
    };
  }

  if (deleteCustomerFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      customer: null,
      success: true,
      message: "User deleted successfully",
      error: null,
    };
  }

  return state;
};

export default customersReducer;
