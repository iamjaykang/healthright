import { createAction } from "../../utils/reducer/reducer.utils";
import { PAYMENTS_ACTION_TYPES } from "./payment.types";

export const setClientSecretLoading = (items) =>
  createAction(PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_LOADING, items);

export const setClientSecretSuccess = (clientSecret) =>
  createAction(PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_SUCCESS, clientSecret);

export const setClientSecretFailed = (error) =>
  createAction(PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_FAILED, error);
