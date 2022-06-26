import React from "react";
import CartContext from "../CartContext";
import { useContext, useState, useEffect } from "react";
import Card from "./Card";
import Box from "@mui/material/Box";

import emptyCart from "../images/empty-cart-img.jpeg";

const Cart = () => {
  const [quantityItems, setQuantityItems] = useState(0);
  const [priceItem, setPriceItem] = useState(0);
  const { cartItems, removeItem } = useContext(CartContext);

  const filterPrice = () => {
    const sum =  cartItems.map(({ price }) => price).reduce((a, b) => a + b, 0);
    setPriceItem(sum);
  };
  const increase = () => {
    setQuantityItems(cartItems.length);
  };

  useEffect(() => {
    filterPrice();
    increase();

    return () => {};
  }, [cartItems]);// toda vez que o cart item mudar 

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        {cartItems.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <img src={emptyCart} alt="cart empty" />
          </div>
        ) : (
          cartItems.map(({ id, title, image, price, category, quantity }) => (
            <div key={id} className="smallCard">
              <Card
                id={id}
                title={title}
                image={image}
                price={price}
                category={category}
                quantity={quantity}
              />
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          ))
        )}
        <h1>{quantityItems}</h1>
        <h1>{priceItem}</h1>
      </Box>
    </div>
  );
};

export default Cart;
