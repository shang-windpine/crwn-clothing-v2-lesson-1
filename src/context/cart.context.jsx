import { useEffect, createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem));
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }

  return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem));
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return (total + cartItem.quantity);
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => {
      return (total + cartItem.quantity * cartItem.price);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
