import React from "react";
import "../style.css/Cart.css";
import CartContext from "../CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {!cartItems ? (
        <h1>your cart is empty</h1>
      ) : (
        cartItems.map((item) => (
          <div>
            <img className="cart-image" src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
