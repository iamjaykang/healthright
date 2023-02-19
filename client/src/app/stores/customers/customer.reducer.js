import { CUSTOMERS_ACTION_TYPES } from "./customer.types";


const INITIAL_STATE = {
  isLoading: false,
  error: null,
  customersArray: [],
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
        success: payload.success,
        message: payload.message,
        error: payload,
      };
    default:
      return state;
  }
};

export default customersReducer;
