import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const storage = JSON.parse(localStorage.getItem("cartItems"));
  const [cartItems, setCartItems] = useState(storage ?? []);

  const addToCart = (id, image, title, price, category) => {
    setCartItems((prevState) => [
      ...prevState,
      { id, image, title, price, category },
    ]);
  };

  const removeItem = (index) => {
    const cartItem = [...cartItems];
    cartItem.splice(index, 1);
    setCartItems(cartItem);
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(localStorage.getItem("cartItems"));
  }, [cartItems.length]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
