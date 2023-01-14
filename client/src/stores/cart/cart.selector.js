import { createSelector } from "reselect";

//select the cart slice of the state
const selectCartReducer = (state) => state.cart;

//select the cartItems from the cart slice
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

//select the isCartOpen from the cart slice
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

//select the cartCount from the cart items
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

//select the cartTotal from the cart items
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
);
