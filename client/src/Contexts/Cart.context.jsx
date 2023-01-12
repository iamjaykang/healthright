import React, { createContext, useState, useEffect } from "react";
import { useReducer } from "react";

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
  cartItems: null,
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
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  UPDATE_ITEM_QUANTITY: "UPDATE_ITEM_QUANTITY",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_IS_CART_OPEN: "ADD_ITEM_TO_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    //handle the ADD_ITEM_TO_CART action and update the cartItems in state
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload),
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //using useReducer hook to handle state

  const [{ cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (productToAdd) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
      payload: productToAdd,
    });
  };

  console.log(cartItems);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems, cartTotal]);

  // const addItemToCart = (productToAdd) => {
  //   setCartItems(addCartItem(cartItems, productToAdd));
  // };

  // const updateItemQuantity = (itemId, intent) => {
  //   setCartItems(updateCartItemQuantity(cartItems, itemId, intent));
  // };

  // const removeItem = (itemId) => {
  //   setCartItems(removeCartItem(cartItems, itemId));
  // };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    // updateItemQuantity,
    // removeItem,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};