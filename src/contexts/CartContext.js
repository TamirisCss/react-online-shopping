import { createContext, useState, useEffect } from "react";

const CartContext = createContext([]);

export function CartProvider({ children }) {
  const storage = JSON.parse(localStorage.getItem("cartItems"));
  const [cartItems, setCartItems] = useState(storage ?? []);

  const addToCart = (id, image, title, price, category) => {
    setCartItems((prevState) => [
      ...prevState,
      { id, image, title, price, category },
    ]);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const updateGroupedItems = (items) => {
    return items.reduce((grouped, item) => {
      if (grouped.some((groupedItem) => groupedItem.id === item.id)) {
        const existingItem = grouped.find(
          (groupedItem) => groupedItem.id === item.id
        );
        existingItem.quantity += 1;
      } else {
        grouped.push({ ...item, quantity: 1 });
      }
      return grouped;
    }, []);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(localStorage.getItem("cartItems"));
    // eslint-disable-next-line
  }, [cartItems.length]);

  const groupedItems = updateGroupedItems(cartItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        groupedItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
