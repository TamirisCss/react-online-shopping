import { createContext, useState } from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [trashIcon, setTrashIcon] = useState(false);

  const addToCart = (id, image, title, price, category) => {
    setCartItems((prevState) => [
      ...prevState,
      { id, image, title, price, category },
    ]);

    setTrashIcon(() => {
      return <DeleteOutlinedIcon />;
    });
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
        trashIcon,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
