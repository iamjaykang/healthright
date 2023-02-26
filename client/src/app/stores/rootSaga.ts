import { all, call } from "redux-saga/effects";
import { customersSaga } from "./customers/customer.saga";
import { paymentsSaga } from "./payments/payment.saga";
import { productsSaga } from "./products/product.saga";
import { userSaga } from "./user/user.saga";

export function* rootSaga() {
  yield all([
    call(userSaga),
    call(productsSaga),
    call(customersSaga),
    call(paymentsSaga),
  ]);
}
