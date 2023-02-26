import {
  setCartItems,
  setIsCartOpen,
} from "./cart.action";
import { CartItemData } from "../../models/product.model";
import { AnyAction } from "redux";

export type CartState = {
  cartItems: CartItemData[];
  isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
