import { takeLatest, all, call, put } from "redux-saga/effects";
import agent from "../../api/agent";
import {
  addCustomerFailed,
  addCustomerSuccess,
  fetchAllCustomersFailed,
  fetchAllCustomersSuccess,
} from "./customer.action";
import { CUSTOMERS_ACTION_TYPES } from "./customer.types";

export function* fetchAllCustomers() {
  try {
    const customersArray = yield call(agent.Users.list);
    yield put(fetchAllCustomersSuccess(customersArray));
  } catch (error) {
    yield put(fetchAllCustomersFailed(error));
  }
}

export function* addCustomer({ payload }) {
  try {
    const customerData = yield call(agent.Users.create, payload);
    yield put(addCustomerSuccess(customerData));
  } catch (error) {
    yield put(addCustomerFailed(error));
  }
}

// Saga to listen to fetch all users loading
export function* onFetchAllCustomersLoading() {
  yield takeLatest(
    CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING,
    fetchAllCustomers
  );
}

export function* onAddCustomerLoading() {
  yield takeLatest(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING, addCustomer);
}

export function* customersSaga() {
  yield all([call(onFetchAllCustomersLoading), call(onAddCustomerLoading)]);
}
