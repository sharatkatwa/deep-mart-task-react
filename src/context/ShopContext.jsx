import { createContext, useContext, useState } from "react";

const Shop = createContext();

export const ShopProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("CartItems")) || []);
  console.log("cartItems:", cartItems);

  const minusCart = (product) => {
    if (product.cartQuantity > 1) {
      const updatedCart = cartItems.map((elem) =>
        elem.id === product.id ? { ...elem, cartQuantity: elem.cartQuantity - 1 } : elem,
      );
      setCartItems(updatedCart);
      localStorage.setItem("CartItems", JSON.stringify(updatedCart));

      return;
    }
    const updatedCart = cartItems.filter((elem) => product.id !== elem.id);
    setCartItems(updatedCart);
    localStorage.setItem("CartItems", JSON.stringify(updatedCart));
    return;
  };

  const directRemoveCart = (product) => {
    const updatedCart = cartItems.filter((elem) => product.id !== elem.id);
    setCartItems(updatedCart);
    localStorage.setItem("CartItems", JSON.stringify(updatedCart));
    return;
  };

  const addCart = (product) => {
    const inCart = cartItems.find((item) => product.id === item.id);

    if (inCart) {
      const updatedCart = cartItems.map((elem) =>
        elem.id === product.id ? { ...elem, cartQuantity: 1 + elem.cartQuantity } : elem,
      );
      setCartItems(updatedCart);
      localStorage.setItem("CartItems", JSON.stringify(updatedCart));
      //   setIsCartOpen(true);
      return;
    }

    const newCart = { ...product, cartQuantity: 1 };
    const updatedCart = [...cartItems, newCart];
    setCartItems(updatedCart);
    localStorage.setItem("CartItems", JSON.stringify(updatedCart));
    setIsCartOpen(true);

    return;
  };

  return (
    <Shop.Provider value={{ cartItems, setCartItems, isCartOpen, setIsCartOpen, addCart, minusCart, directRemoveCart }}>
      {children}
    </Shop.Provider>
  );
};
export const UseShop = () => useContext(Shop);
