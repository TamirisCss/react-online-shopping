import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import Card from "./Card";
import emptyCart from "../images/empty-cart-img.jpeg";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { quantityItems } = useContext(CartContext);



  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
          <img src={emptyCart} alt="cart empty" />
        </div>
      ) : (
        cartItems.map(({ id, title, image, price, category }) => (
          <div>
            <Card
              id={id}
              title={title}
              image={image}
              price={price}
              category={category}
            />
          </div>
        ))
      )}
      <h1>{quantityItems}</h1>
    </div>
  );
};

export default Cart;
