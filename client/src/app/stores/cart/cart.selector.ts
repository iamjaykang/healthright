import { createSelector } from "reselect";
import { CartItemData } from "../../models/product.model";
import { RootState } from "../store";

import { CartState } from "./cart.reducer";

//select the cart slice of the state
const selectCartReducer = (state: RootState): CartState => state.cart;

//select the cartItems from the cart slice
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice): CartItemData[] => cartSlice.cartItems
);

//select the isCartOpen from the cart slice
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

//select the cartCount from the cart items
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

//select the cartTotal from the cart items
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
);
