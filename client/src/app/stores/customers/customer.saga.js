import { takeLatest, all, call, put } from "redux-saga/effects";
import agent from "../../api/agent";
import { fetchAllCustomersFailed, fetchAllCustomersSuccess } from "./customer.action";
import { CUSTOMERS_ACTION_TYPES } from "./customer.types";

export function* fetchAllCustomers() {
  try {
    const usersArray = yield call(agent.Users.list);
    yield put(fetchAllCustomersSuccess(usersArray));
  } catch (error) {
    yield put(fetchAllCustomersFailed(error));
  }
}

// Saga to listen to fetch all users loading
export function* onFetchAllCustomersLoading() {
  yield takeLatest(CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING, fetchAllCustomers);
}

export function* customersSaga() {
  yield all([
    call(onFetchAllCustomersLoading)
  ]);
}
