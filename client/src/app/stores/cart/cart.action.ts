import { ActionWithPayload } from "../../models/actionTypes.model";
import { CartItemData, Product } from "../../models/product.model";
import {
  addCartItem,
  removeCartItem,
  updateCartItemQuantity,
} from "../../utils/cart/cart.utils";
import {
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItemData[]
>;

// This function creates an action object to set isCartOpen state to true or false
export const setIsCartOpen = withMatcher(
  (isCartOpen: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen)
);

export const setCartItems = withMatcher((cartItems: CartItemData[]) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

// This function creates an action object to add a new item to the cart items
// it receives the current cart items and the product to add
// it uses the addCartItem utility function to add the item to the cart
// and sets the new cart items as the payload of the action object
export const addItemToCart = withMatcher(
  (cartItems: CartItemData[], productToAdd: Product, quantity?: number) => {
    const newCartItems = addCartItem(cartItems, productToAdd, quantity);
    return setCartItems(newCartItems);
  }
);

// This function creates an action object to update the quantity of an item in the cart
// it receives the current cart items, the id of the item to update, and the intent (increment or decrement)
// it uses the updateCartItemQuantity utility function to update the quantity of the item
// and sets the new cart items as the payload of the action object
export const updateItemQuantity = withMatcher(
  (cartItems: CartItemData[], itemId: number, intent: string) => {
    const newCartItems = updateCartItemQuantity(cartItems, itemId, intent);

    return setCartItems(newCartItems);
  }
);

// This function creates an action object to remove item in the cart
// it receives the current cart items, the id of the item to remove in the cart
// it uses the removeCartItem utility function to remove the item in the cart
// and sets the new cart items as the payload of the action object
export const removeItem = withMatcher(
  (cartItems: CartItemData[], itemId: number) => {
    const newCartItems = removeCartItem(cartItems, itemId);
    return setCartItems(newCartItems);
  }
);
