import { AnyAction } from "redux";
import {
  setClientSecretFailed,
  setClientSecretLoading,
  setClientSecretSuccess,
} from "./payment.action";

export type PaymentState = {
  readonly isLoading: boolean;
  readonly clientSecret: string | null;
  readonly error: Error | null;
  readonly success: boolean;
  readonly message: string | null;
};

const PAYMENT_INITIAL_STATE: PaymentState = {
  isLoading: false,
  clientSecret: null,
  error: null,
  success: false,
  message: null,
};

const paymentsReducer = (
  state = PAYMENT_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setClientSecretLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      clientSecret: null,
      message: null,
      success: false,
    };
  }

  if (setClientSecretSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      clientSecret: action.payload.data,
      success: action.payload.success,
      message: action.payload.message,
      error: null,
    };
  }

  if (setClientSecretFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      success: false,
      message: action.payload.message,
      error: action.payload.error,
    };
  }

  return state;
};

export default paymentsReducer;
