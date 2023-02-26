import { ActionWithPayload } from "../../models/actionTypes.model";
import { PaymentResponse } from "../../models/apiResponses.model";
import { CartItemData } from "../../models/product.model";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { PAYMENTS_ACTION_TYPES } from "./payment.types";

export type SetClientSecretLoading = ActionWithPayload<
  PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_LOADING,
  CartItemData[]
>;

export type SetClientSecretSuccess = ActionWithPayload<
  PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_SUCCESS,
  PaymentResponse
>;

export type SetClientSecretFailed = ActionWithPayload<
  PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_FAILED,
  { error: Error; message: string }
>;

export const setClientSecretLoading = withMatcher(
  (cartItems: CartItemData[]): SetClientSecretLoading =>
    createAction(PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_LOADING, cartItems)
);

export const setClientSecretSuccess = withMatcher(
  (clientSecret: PaymentResponse): SetClientSecretSuccess =>
    createAction(PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_SUCCESS, clientSecret)
);

export const setClientSecretFailed = withMatcher(
  (error: { error: Error; message: string }): SetClientSecretFailed =>
    createAction(PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_FAILED, error)
);
