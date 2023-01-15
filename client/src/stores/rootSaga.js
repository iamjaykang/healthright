import { all, call } from "redux-saga/effects";

import { brandsSaga } from "./brands/brand.saga";

export function* rootSaga() {
  yield all([call(brandsSaga)]);
}
