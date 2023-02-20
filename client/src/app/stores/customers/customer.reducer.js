import { CUSTOMERS_ACTION_TYPES } from "./customer.types";


const INITIAL_STATE = {
  isLoading: false,
  error: null,
  customersArray: [],
  customer: null,
  success: false,
  message: null,
};

const customersReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING:
      return {
        ...state,
        isLoading: true,
        customersArray: [],
        message: null,
        success: false
      };
    case CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customersArray: payload.data,
        success: payload.success,
        message: payload.message,
        error: null,
      };
    case CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        message: payload.message,
        error: payload.error,
      };
    case CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_LOADING:
      return {
        ...state,
        isLoading: true,
        customer: null,
        message: null,
        success: false
      };
    case CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customer: payload.data,
        success: payload.success,
        message: payload.message,
        error: null,
      };
    case CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        message: payload.message,
        error: payload.error,
      };
    case CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING:
      return {
        ...state,
        isLoading: true,
        customer: null,
        message: null
      };
    case CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: null,
      };
    case CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        message: payload.message,
        error: payload.error,
      };
    case CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_LOADING:
      return {
        ...state,
        isLoading: true,
        customer: null,
        message: null
      };
    case CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        success: payload.success,
        message: payload.message,
        error: null,
      };
    case CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        message: payload.message,
        error: payload.error,
      };
    case CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_LOADING:
      return {
        ...state,
        isLoading: true,
        message: null
      };
    case CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload.success,
        message: payload.message,
        error: null,
      };
    case CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        message: payload.message,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default customersReducer;
