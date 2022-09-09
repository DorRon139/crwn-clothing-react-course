import {
  createContext,
  useReducer,
 } from "react";

 const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch(type){
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: payload.newCartItems,
        cartCount: payload.newCartCount,
        cartTotal: payload.newCartTotal,
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal
  } = state

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, currentCartItem) => total + currentCartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, currentCartItem) => total + currentCartItem.quantity * currentCartItem.price,
      0
    );

    dispatch({
      type: 'SET_CART_ITEMS',
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      }
    })
  }

  const setIsCartOpen = (isCartOpen) => {
    dispatch({
      type: 'SET_IS_CART_OPEN',
      payload: isCartOpen
    })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems)
  };
  const removeItemFromCart = (carItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, carItemToRemove);
    updateCartItemsReducer(newCartItems)
  };
  const clearItemFromCart = (cartItemToRemove) => {
    const newCartItems =  clearCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems)
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
