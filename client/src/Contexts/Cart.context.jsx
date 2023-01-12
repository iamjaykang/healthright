import React, { createContext } from "react";
import { useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAadd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const updateCartItemQuantity = (cartItems, itemId, intent) => {
  // find the cart item with the matching itemId
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemId);

  // if the item exists and the intent is "increment", increment the quantity
  if (existingCartItem && intent === "increment") {
    return cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if the item exists and the intent is "decrement" and the quantity is greater than 1, decrement the quantity
  if (
    existingCartItem &&
    intent === "decrement" &&
    existingCartItem.quantity > 1
  ) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  // if the item exists and the intent is "decrement" but the quantity is 1, remove the item from the cart
  if (
    existingCartItem &&
    intent === "decrement" &&
    existingCartItem.quantity === 1
  ) {
    return cartItems.filter((cartItem) => cartItem.id !== itemId);
  }

  // return the original cart items if no changes were made
  return cartItems;
};

const removeCartItem = (cartItems, itemId) => {
  // find the cart item with the matching itemId
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemId);

  // if the item exists and the intent is "decrement" but the quantity is 1, remove the item from the cart
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== itemId);
  }

  // return the original cart items if no changes were made
  return cartItems;
};

// actual value you want to access
export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  removeItem: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
  cartTotal: 0,
});

//defining action type

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  //handle the SET_CART_ITEMS action and update the state

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };

    //handle the SET_IS_CART_OPEN action and update the state

    case "SET_IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  //using useReducer hook to handle state

  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const setIsCartOpen = (isCartOpen) =>
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen));

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const updateItemQuantity = (itemId, intent) => {
    const newCartItems = updateCartItemQuantity(cartItems, itemId, intent);

    updateCartItemsReducer(newCartItems);
  };

  const removeItem = (itemId) => {
    const newCartItems = removeCartItem(cartItems, itemId);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    updateItemQuantity,
    removeItem,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
