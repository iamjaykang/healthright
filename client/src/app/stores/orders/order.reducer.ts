import { AnyAction } from "redux";
import { Order } from "../../models/order.model";
import {
  addOrderFailed,
  addOrderLoading,
  addOrderSuccess,
  deleteOrderFailed,
  deleteOrderLoading,
  deleteOrderSuccess,
  fetchAllOrdersFailed,
  fetchAllOrdersLoading,
  fetchAllOrdersSuccess,
  fetchOrderByIdFailed,
  fetchOrderByIdLoading,
  fetchOrderByIdSuccess,
  updateOrderFailed,
  updateOrderLoading,
  updateOrderSuccess,
} from "./order.action";

export type OrderState = {
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly ordersArray: Order[];
  readonly order: Order;
  readonly success: boolean;
  readonly message: string | null;
};

const ORDER_INITIAL_STATE = {
  isLoading: false,
  error: null,
  ordersArray: [],
  order: null,
  success: false,
  message: null,
};

const ordersReducer = (
  state = ORDER_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchAllOrdersLoading.match(action)) {
    return {
      ...state,
      isLoading: true,
      ordersArray: [],
      message: null,
      error: null,
      success: false,
    };
  }

  if (
    fetchOrderByIdLoading.match(action) ||
    addOrderLoading.match(action) ||
    updateOrderLoading.match(action) ||
    deleteOrderLoading.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
      order: null,
      message: null,
      error: null,
      success: false,
    };
  }

  if (fetchAllOrdersSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      ordersArray: action.payload.data,
      success: action.payload.success,
      message: action.payload.message,
      error: null,
    };
  }

  if (
    fetchOrderByIdSuccess.match(action) ||
    addOrderSuccess.match(action) ||
    updateOrderSuccess.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      order: action.payload.data,
      success: action.payload.success,
      message: action.payload.message,
      error: null,
    };
  }

  if (deleteOrderSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      product: null,
      success: true,
      message: "Order deleted successfully",
      error: null,
    };
  }

  if (
    fetchAllOrdersFailed.match(action) ||
    fetchOrderByIdFailed.match(action) ||
    addOrderFailed.match(action) ||
    updateOrderFailed.match(action) ||
    deleteOrderFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      success: false,
      message: action.payload.message,
      error: action.payload.stack,
    };
  }

  return state;
};

export default ordersReducer;
