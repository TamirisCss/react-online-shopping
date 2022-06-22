import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, image, title, price, category) => {
    if (cartItems.some((item) => item.id === id)) {
      increaseQuantity(id);
    } else {
      setCartItems((prevState) => [
        ...prevState,
        { id, image, title, price, category, quantity: 1 },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIndex].quantity = cartItems[itemIndex].quantity + 1;
    setCartItems(cartItems);
  };

  const decreaseQuantity = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (cartItems[itemIndex].quantity > 1) {
      cartItems[itemIndex].quantity = cartItems[itemIndex].quantity - 1;
      setCartItems(cartItems);
    } else {
      removeItem(id);
    }
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
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
