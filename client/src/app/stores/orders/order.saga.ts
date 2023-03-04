import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import agent from "../../api/agent";
import {
  addOrderFailed,
  AddOrderLoading,
  addOrderSuccess,
  deleteOrderFailed,
  DeleteOrderLoading,
  deleteOrderSuccess,
  fetchAllOrdersFailed,
  fetchAllOrdersSuccess,
  fetchOrderByIdFailed,
  FetchOrderByIdLoading,
  fetchOrderByIdSuccess,
  updateOrderFailed,
  UpdateOrderLoading,
  updateOrderSuccess,
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

export function* addOrder({ payload }: AddOrderLoading) {
  try {
    const orderData = yield* call(agent.Orders.create, payload);
    yield* put(addOrderSuccess(orderData));
  } catch (error) {
    yield* put(addOrderFailed(error as Error));
  }
}

export function* updateOrder({ payload }: UpdateOrderLoading) {
  const { orderId, newOrderFormData } = payload;
  try {
    const newOrderData = yield* call(
      agent.Orders.update,
      orderId,
      newOrderFormData
    );
    yield* put(updateOrderSuccess(newOrderData));
  } catch (error) {
    yield* put(updateOrderFailed(error as Error));
  }
}

export function* deleteOrder({ payload: orderId }: DeleteOrderLoading) {
  try {
    const orderData = yield* call(agent.Orders.delete, orderId);
    yield* put(deleteOrderSuccess(orderData));
  } catch (error) {
    yield* put(deleteOrderFailed(error as Error));
  }
}

// Saga to listen to fetch all orders loading
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

export function* onAddOrderLoading() {
  yield* takeLatest(ORDERS_ACTION_TYPES.ADD_ORDER_LOADING, addOrder);
}

export function* onUpdateOrderLoading() {
  yield* takeLatest(ORDERS_ACTION_TYPES.UPDATE_ORDER_LOADING, updateOrder);
}

export function* onDeleteOrderLoading() {
  yield* takeLatest(ORDERS_ACTION_TYPES.DELETE_ORDER_LOADING, deleteOrder);
}

export function* ordersSaga() {
  yield* all([
    call(onFetchAllOrdersLoading),
    call(onFetchOrderByIdLoading),
    call(onAddOrderLoading),
    call(onUpdateOrderLoading),
    call(onDeleteOrderLoading),
  ]);
}
