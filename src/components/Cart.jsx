import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import Card from "./Card";

import emptyCart from "../images/empty-cart-img.jpeg"

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
          <img src={emptyCart} alt="cart empty" />
        </div>
      ) : (
        cartItems.map(({ title, image, price, category }) => (
          <div>
            <Card
              title={title}
              image={image}
              price={price}
              category={category}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
