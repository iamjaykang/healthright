import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import agent from "../../api/agent";
import {
  addCustomerFailed,
  AddCustomerLoading,
  addCustomerSuccess,
  deleteCustomerFailed,
  DeleteCustomerLoading,
  deleteCustomerSuccess,
  fetchAllCustomersFailed,
  fetchAllCustomersSuccess,
  fetchCustomerByIdFailed,
  FetchCustomerByIdLoading,
  fetchCustomerByIdSuccess,
  updateCustomerFailed,
  UpdateCustomerLoading,
  updateCustomerSuccess,
} from "./customer.action";
import { CUSTOMERS_ACTION_TYPES } from "./customer.types";

export function* fetchAllCustomers() {
  try {
    const customersArray = yield* call(agent.Users.list);
    yield* put(fetchAllCustomersSuccess(customersArray));
  } catch (error) {
    yield* put(fetchAllCustomersFailed(error as Error));
  }
}

export function* fetchCustomerById({ payload }: FetchCustomerByIdLoading) {
  try {
    const customer = yield* call(agent.Users.details, payload);
    yield* put(fetchCustomerByIdSuccess(customer));
  } catch (error) {
    yield* put(fetchCustomerByIdFailed(error as Error));
  }
}

export function* addCustomer({ payload }: AddCustomerLoading) {
  try {
    const customerData = yield* call(agent.Users.create, payload);
    yield* put(addCustomerSuccess(customerData));
  } catch (error) {
    yield* put(addCustomerFailed(error as Error));
  }
}

export function* updateCustomer({ payload }: UpdateCustomerLoading) {
  const { customerId, newCustomerFormData } = payload;
  try {
    const newCustomerData = yield* call(
      agent.Users.update,
      customerId,
      newCustomerFormData
    );
    yield* put(updateCustomerSuccess(newCustomerData));
  } catch (error) {
    yield* put(updateCustomerFailed(error as Error));
  }
}

export function* deleteCustomer({ payload: customerId }: DeleteCustomerLoading) {
  try {
    const customerData = yield* call(agent.Users.delete, customerId);
    yield* put(deleteCustomerSuccess(customerData));
  } catch (error) {
    yield* put(deleteCustomerFailed(error as Error));
  }
}

// Saga to listen to fetch all users loading
export function* onFetchAllCustomersLoading() {
  yield* takeLatest(
    CUSTOMERS_ACTION_TYPES.FETCH_ALL_CUSTOMERS_LOADING,
    fetchAllCustomers
  );
}

// Saga to listen to fetch customer by id loading
export function* onFetchCustomerByIdLoading() {
  yield* takeLatest(
    CUSTOMERS_ACTION_TYPES.FETCH_CUSTOMER_BY_ID_LOADING,
    fetchCustomerById
  );
}

export function* onAddCustomerLoading() {
  yield* takeLatest(CUSTOMERS_ACTION_TYPES.ADD_CUSTOMER_LOADING, addCustomer);
}

export function* onUpdateCustomerLoading() {
  yield* takeLatest(
    CUSTOMERS_ACTION_TYPES.UPDATE_CUSTOMER_LOADING,
    updateCustomer
  );
}

export function* onDeleteCustomerLoading() {
  yield* takeLatest(
    CUSTOMERS_ACTION_TYPES.DELETE_CUSTOMER_LOADING,
    deleteCustomer
  );
}

export function* customersSaga() {
  yield* all([
    call(onFetchAllCustomersLoading),
    call(onAddCustomerLoading),
    call(onUpdateCustomerLoading),
    call(onFetchCustomerByIdLoading),
    call(onDeleteCustomerLoading),
  ]);
}
