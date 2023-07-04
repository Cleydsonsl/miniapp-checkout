
import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [reload, setReload] = useState(false);

  const setCart = async (item) => {
    await AsyncStorage.setItem('cart', JSON.stringify(item))
    await setCartItems(item);
    setReload(true);
  }

  const getCart = async () => {
    let result = await AsyncStorage.getItem('cart')
    result = (result != null ? JSON.parse(result) : cartItems)

    if (result != cartItems) {
      await setCartItems(result)
    }

    return result
  };

  const addToCart = async (product) => {
    const cart = await getCart()

    const result = cart.filter(item => item.id === product.id).length === 0 
      ? [...cart, {...product, qtd: product.qtd || 1}]
      : cart.map(item => item.id === product.id ? {...item, qtd: item.qtd+1} : item)
    
    setCart(result)
  };

  const removeFromCart = async (product) => {
    const cart = await getCart()
    const updatedCartItems = cart.filter((item) => item.id !== product.id);
    
    setCart(updatedCartItems)
  };

  const sumQtd = async (product) => {
    const cart = await getCart()
    const updatedCartItems = cart.map((item) => item.id === product.id ? { ...item, qtd: item.qtd+1 } : item);
    setCart(updatedCartItems)
  }

  const removeQtd = async (product) => {
    const cart = await getCart()
    const filter = cart.filter((item) => item.id === product.id)[0];

    if (filter.qtd > 1) {
      const updatedCartItems = cartItems.map((item) => item.id === product.id ? { ...item, qtd: item.qtd-1 } : item);
      setCart(updatedCartItems)
    } else {
      removeFromCart(product)
    }
  }

  const clearCart = () => {
    setCart([])
  };

  const reloadCart = async () => {
    const result = await getCart()

    return result
  }

  return (
    <CartContext.Provider
      value={{
        getCart,
        addToCart,
        removeFromCart,
        sumQtd,
        removeQtd,
        clearCart,
        reloadCart,
        reload,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
