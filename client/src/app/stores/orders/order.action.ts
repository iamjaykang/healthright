import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import {
    OrderResponse,
    OrdersResponse,
  } from "../../models/apiResponses.model";
  import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
  import { ORDERS_ACTION_TYPES } from "./order.types";

  export type FetchAllOrdersLoading =
  Action<ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_LOADING>;

export type FetchAllOrdersSuccess = ActionWithPayload<
ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_SUCCESS,
OrdersResponse
>;

export type FetchAllOrdersFailed = ActionWithPayload<
ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_FAILED,
  Error
>;

export type FetchOrderByIdLoading = ActionWithPayload<
ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_LOADING,
  number
>;

export type FetchOrderByIdSuccess = ActionWithPayload<
ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_SUCCESS,
  OrderResponse
>;

export type FetchOrderByIdFailed = ActionWithPayload<
ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_FAILED,
  Error
>;

// Action to get all CUSTOMERS loading
export const fetchAllOrdersLoading = withMatcher(
    (): FetchAllOrdersLoading =>
      createAction(ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_LOADING)
  );
  
  // Action to get all CUSTOMERS success
  export const fetchAllOrdersSuccess = withMatcher(
    (ordersData: OrdersResponse): FetchAllOrdersSuccess =>
      createAction(
        ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_SUCCESS,
        ordersData
      )
  );
  
  // Action to get all CUSTOMERS failed
  export const fetchAllOrdersFailed = withMatcher(
    (error: Error): FetchAllOrdersFailed =>
      createAction(ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_FAILED, error)
  );
  
  // Action to get CUSTOMER by id loading
  export const fetchOrderByIdLoading = withMatcher(
    (orderId: number): FetchOrderByIdLoading =>
      createAction(
        ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_LOADING,
        orderId
      )
  );
  
  // Action to get CUSTOMER by id success
  export const fetchOrderByIdSuccess = withMatcher(
    (orderData: OrderResponse): FetchOrderByIdSuccess =>
      createAction(
        ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_SUCCESS,
        orderData
      )
  );
  
  // Action to get CUSTOMER by id failed
  export const fetchOrderByIdFailed = withMatcher(
    (error: Error): FetchOrderByIdFailed =>
      createAction(ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_FAILED, error)
  );