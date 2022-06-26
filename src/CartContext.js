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

  const removeItem = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    cartItems.splice(itemIndex, 1);
    setCartItems(cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
