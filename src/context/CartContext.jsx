import React, { createContext, useState, useContext, useEffect } from 'react';
import { incrementProductSold } from '../data/sata';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on startup
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('fastfoodCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem('fastfoodCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // Increment sales counter for this product
    incrementProductSold(product.id);

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    // Increment sales counter when increasing quantity
    incrementProductSold(productId);

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          return newQuantity < 1 ? item : { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};