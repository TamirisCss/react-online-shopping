import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import Card from "./Card";

import Box from "@mui/material/Box";

import { useCart } from "react-use-cart";

import emptyCart from "../images/empty-cart-img.jpeg";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

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
            </div>
          ))
        )}
      </Box>
    </div>
  );
};

export default Cart;
