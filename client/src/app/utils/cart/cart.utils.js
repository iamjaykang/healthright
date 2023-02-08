export const addCartItem = (cartItems, productToAdd) => {
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
  
  export const updateCartItemQuantity = (cartItems, itemId, intent) => {
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
  
  export const removeCartItem = (cartItems, itemId) => {
    // find the cart item with the matching itemId
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemId);
  
    // if the item exists and the intent is "decrement" but the quantity is 1, remove the item from the cart
    if (existingCartItem) {
      return cartItems.filter((cartItem) => cartItem.id !== itemId);
    }
  
    // return the original cart items if no changes were made
    return cartItems;
  };