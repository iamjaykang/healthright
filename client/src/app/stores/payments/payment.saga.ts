import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import agent from "../../api/agent";
import {
  setClientSecretFailed,
  SetClientSecretLoading,
  setClientSecretSuccess,
} from "./payment.action";
import { PAYMENTS_ACTION_TYPES } from "./payment.types";

export function* setClientSecret({ payload }: SetClientSecretLoading) {
  try {
    const clientSecret = yield* call(agent.Payments.create, payload);
    if (clientSecret) {
      yield* put(setClientSecretSuccess(clientSecret));
    }
  } catch (error) {
    yield* put(
      setClientSecretFailed({
        error: error as Error,
        message: (error as Error).message,
      })
    );
  }
}

export function* onSetClientSecret() {
  yield* takeLatest(
    PAYMENTS_ACTION_TYPES.SET_CLIENT_SECRET_LOADING,
    setClientSecret
  );
}

export function* paymentsSaga() {
  yield* all([call(onSetClientSecret)]);
}
