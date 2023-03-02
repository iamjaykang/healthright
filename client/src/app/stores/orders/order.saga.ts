import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import agent from "../../api/agent";
import {
  fetchAllOrdersFailed,
  fetchAllOrdersSuccess,
  fetchOrderByIdFailed,
  FetchOrderByIdLoading,
  fetchOrderByIdSuccess,
} from "./order.action";
import { ORDERS_ACTION_TYPES } from "./order.types";

export function* fetchAllOrders() {
  try {
    const ordersArray = yield* call(agent.Orders.list);
    yield* put(fetchAllOrdersSuccess(ordersArray));
  } catch (error) {
    yield* put(fetchAllOrdersFailed(error as Error));
  }
}

export function* fetchOrderById({ payload }: FetchOrderByIdLoading) {
  try {
    const order = yield* call(agent.Orders.details, payload);
    yield* put(fetchOrderByIdSuccess(order));
  } catch (error) {
    yield* put(fetchOrderByIdFailed(error as Error));
  }
}

// Saga to listen to fetch all users loading
export function* onFetchAllOrdersLoading() {
  yield* takeLatest(
    ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_LOADING,
    fetchAllOrders
  );
}

// Saga to listen to fetch order by id loading
export function* onFetchOrderByIdLoading() {
  yield* takeLatest(
    ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_LOADING,
    fetchOrderById
  );
}

export function* ordersSaga() {
  yield* all([call(onFetchAllOrdersLoading), call(onFetchOrderByIdLoading)]);
}
