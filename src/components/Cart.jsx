import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import Card from "./Card";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>your cart is empty</h1>
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
