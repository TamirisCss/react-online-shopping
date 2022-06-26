import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState(0);

  const addToCart = (id, image, title, price, category) => {
    setQuantityItems(quantityItems + 1);

    setCartItems((prevState) => [
      ...prevState,
      { id, image, title, price, category },
    ]);
  };

  return (
    <CartContext.Provider value={{ quantityItems, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
