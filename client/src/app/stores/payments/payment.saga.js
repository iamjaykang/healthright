import { all, call, put, takeLatest } from "redux-saga/effects";
import agent from "../../api/agent";
import {
  setClientSecretFailed,
  setClientSecretSuccess,
} from "./payment.action";
import { PAYMENTS_ACTION_TYPES } from "./payment.types";

export function* setClientSecret({ payload }) {
  try {
    const clientSecret = yield call(agent.Payments.create, payload);
    yield put(setClientSecretSuccess(clientSecret));
  } catch (error) {
    yield put(setClientSecretFailed(error));
  }
}

export function* onSetClientSecret() {
  yield takeLatest(
    PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_LOADING,
    setClientSecret
  );
}

export function* paymentsSaga() {
  yield all([call(onSetClientSecret)]);
}
