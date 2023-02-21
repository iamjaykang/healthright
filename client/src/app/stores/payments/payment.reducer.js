import { PAYMENTS_ACTION_TYPES } from "./payment.types";

const INITIAL_STATE = {
  isLoading: false,
  clientSecret: null,
  error: null,
  success: false,
  message: null,
};

const paymentsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_LOADING:
      return {
        ...state,
        isLoading: true,
        clientSecret: null,
        message: null,
        success: false,
      };
    case PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clientSecret: payload.data,
        success: payload.success,
        message: payload.message,
        error: null,
      };
    case PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_FAILED:
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

export default paymentsReducer;
