import { Action, ActionWithPayload } from "../../models/actionTypes.model";
import {
    OrderResponse,
    OrdersResponse,
  } from "../../models/apiResponses.model";
import { OrderFormValues } from "../../models/order.model";
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

export type AddOrderLoading = ActionWithPayload<
  ORDERS_ACTION_TYPES.ADD_ORDER_LOADING,
  OrderFormValues
>;

export type AddOrderSuccess = ActionWithPayload<
  ORDERS_ACTION_TYPES.ADD_ORDER_SUCCESS,
  OrderResponse
>;

export type AddOrderFailed = ActionWithPayload<
  ORDERS_ACTION_TYPES.ADD_ORDER_FAILED,
  Error
>;

export type UpdateOrderLoading = ActionWithPayload<
  ORDERS_ACTION_TYPES.UPDATE_ORDER_LOADING,
  { orderId: number; newOrderFormData: OrderFormValues }
>;

export type UpdateOrderSuccess = ActionWithPayload<
  ORDERS_ACTION_TYPES.UPDATE_ORDER_SUCCESS,
  OrderResponse
>;

export type UpdateOrderFailed = ActionWithPayload<
  ORDERS_ACTION_TYPES.UPDATE_ORDER_FAILED,
  Error
>;

export type DeleteOrderLoading = ActionWithPayload<
  ORDERS_ACTION_TYPES.DELETE_ORDER_LOADING,
  number
>;

export type DeleteOrderSuccess = ActionWithPayload<
  ORDERS_ACTION_TYPES.DELETE_ORDER_SUCCESS,
  OrderResponse
>;

export type DeleteOrderFailed = ActionWithPayload<
  ORDERS_ACTION_TYPES.DELETE_ORDER_FAILED,
  Error
>;


// Action to get all Orders loading
export const fetchAllOrdersLoading = withMatcher(
    (): FetchAllOrdersLoading =>
      createAction(ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_LOADING)
  );
  
  // Action to get all Orders success
  export const fetchAllOrdersSuccess = withMatcher(
    (ordersData: OrdersResponse): FetchAllOrdersSuccess =>
      createAction(
        ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_SUCCESS,
        ordersData
      )
  );
  
  // Action to get all Orders failed
  export const fetchAllOrdersFailed = withMatcher(
    (error: Error): FetchAllOrdersFailed =>
      createAction(ORDERS_ACTION_TYPES.FETCH_ALL_ORDERS_FAILED, error)
  );
  
  // Action to get Order by id loading
  export const fetchOrderByIdLoading = withMatcher(
    (orderId: number): FetchOrderByIdLoading =>
      createAction(
        ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_LOADING,
        orderId
      )
  );
  
  // Action to get Order by id success
  export const fetchOrderByIdSuccess = withMatcher(
    (orderData: OrderResponse): FetchOrderByIdSuccess =>
      createAction(
        ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_SUCCESS,
        orderData
      )
  );
  
  // Action to get Order by id failed
  export const fetchOrderByIdFailed = withMatcher(
    (error: Error): FetchOrderByIdFailed =>
      createAction(ORDERS_ACTION_TYPES.FETCH_ORDER_BY_ID_FAILED, error)
  );

  // Action to add ORDERS loading
export const addOrderLoading = withMatcher(
  (orderFormData: OrderFormValues): AddOrderLoading =>
    createAction(ORDERS_ACTION_TYPES.ADD_ORDER_LOADING, orderFormData)
);

// Action to add ORDERS success
export const addOrderSuccess = withMatcher(
  (orderData: OrderResponse): AddOrderSuccess =>
    createAction(ORDERS_ACTION_TYPES.ADD_ORDER_SUCCESS, orderData)
);

// Action to add ORDERS failed
export const addOrderFailed = withMatcher(
  (error: Error): AddOrderFailed =>
    createAction(ORDERS_ACTION_TYPES.ADD_ORDER_FAILED, error)
);

// Action to update ORDERS loading
export const updateOrderLoading = withMatcher(
  (
    orderId: number,
    newOrderFormData: OrderFormValues
  ): UpdateOrderLoading =>
    createAction(ORDERS_ACTION_TYPES.UPDATE_ORDER_LOADING, {
      orderId,
      newOrderFormData,
    })
);

// Action to update ORDERS success
export const updateOrderSuccess = withMatcher((newOrderData: OrderResponse): UpdateOrderSuccess =>
  createAction(ORDERS_ACTION_TYPES.UPDATE_ORDER_SUCCESS, newOrderData));

// Action to update ORDERS failed
export const updateOrderFailed = withMatcher((error: Error): UpdateOrderFailed =>
  createAction(ORDERS_ACTION_TYPES.UPDATE_ORDER_FAILED, error));

// Action to delete ORDER loading
export const deleteOrderLoading = withMatcher((orderId: number): DeleteOrderLoading =>
  createAction(ORDERS_ACTION_TYPES.DELETE_ORDER_LOADING, orderId));

// Action to delete ORDER success
export const deleteOrderSuccess = withMatcher((orderData: OrderResponse): DeleteOrderSuccess =>
  createAction(ORDERS_ACTION_TYPES.DELETE_ORDER_SUCCESS, orderData));

// Action to delete ORDER failed
export const deleteOrderFailed = withMatcher((error: Error): DeleteOrderFailed =>
  createAction(ORDERS_ACTION_TYPES.DELETE_ORDER_FAILED, error));
