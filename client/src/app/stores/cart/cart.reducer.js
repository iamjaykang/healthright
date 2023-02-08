import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
  };

  export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
  
    //handle the SET_CART_ITEMS action and update the state
  
    switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: payload,
        };
  
      //handle the SET_IS_CART_OPEN action and update the state
  
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload,
        };
  
      default:
        return state;
    }
  };