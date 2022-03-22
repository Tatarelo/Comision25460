import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0)
  const [cantidadTotal, setCantidadTotal] = useState(0)
  const [cartList, setCartList] = useLocalStorage("cartlist", []);
  const isInCart = (id) => cartList.find((item) => item.id === id);

  const deleteItem = (id) => {
    const item = cartList.find((item) => item.id === id);
    if (item.cantidad === 1) {
      setCartList(cartList.filter((item) => item.id !== id));
    } else {
      setCartList(
        cartList.map((prod) => {
          if (prod.id === item.id) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return prod;
        })
      );
    }
  };
  
  const agregarCart = (item) => {
    if (isInCart(item.id)) {
      setCartList(
        cartList.map((prod) => {
          if (prod.id === item.id) {
            return { ...item, cantidad: item.cantidad + prod.cantidad };
          }
          return prod;
        })
      );
    } else {
      setCartList([...cartList, item]);
    }
  };

  const vaciarCart = () => {
    setCartList([]);
  };

  useEffect(() => {
    const total = cartList.map((prod) => {
      return { ...prod, total: prod.cantidad * prod.precio};
    });
    setTotal(total.reduce(
      (previousValue, currentValue) => previousValue + currentValue.total,
      0
    ))
  },[cartList])

  useEffect(() => {
    const cantidadTotal = cartList.map((prod) => {
      return {...prod, cantidad: prod.cantidad}
    })
    setCantidadTotal(cantidadTotal.reduce(
      (previousValue, currentValue) => previousValue + currentValue.cantidad,
      0
    ))
  },[cartList])

  return (
    <CartContext.Provider
      value={{ cartList, agregarCart, vaciarCart, deleteItem, total, cantidadTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
