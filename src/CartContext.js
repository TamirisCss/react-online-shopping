import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

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
  };

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
