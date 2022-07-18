import React from "react";
import CartContext from "../CartContext";
import { useContext, useState, useEffect } from "react";
import Product from "./Product";
import Box from "@mui/material/Box";
import emptyCart from "../images/empty-cart-img.jpeg";
import { textAlign } from "@mui/system";

import "../style.css/Cart.css";

const Cart = () => {
  const [quantityItems, setQuantityItems] = useState(0);
  const [groupItems, setGroupItems] = useState([]);
  const [priceItem, setPriceItem] = useState(0);
  const { cartItems } = useContext(CartContext);

  const filterPrice = () => {
    const sum = cartItems.map(({ price }) => price).reduce((a, b) => a + b, 0);
    setPriceItem(sum);
  };

  const increase = () => {
    setQuantityItems(cartItems.length);
  };

  useEffect(() => {
    filterPrice();
    increase();
    const arrayUnique = [
      ...new Map(cartItems.map((item) => [item.id, item])).values(),
    ];
    arrayUnique.map((element) => {
      const newArrray = cartItems.filter((item) => item.id === element.id);
      element.quantity = newArrray.length;
    });
    setGroupItems(arrayUnique);
    return () => {};
  }, [cartItems]); // toda vez que o cart item mudar

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
          <img src={emptyCart} alt="cart empty" />
        </div>
      ) : (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {groupItems.map(
            ({ id, title, image, price, category, quantity }, index) => (
              <Product
                index={index}
                id={id}
                title={title}
                image={image}
                price={price}
                category={category}
                showTrash={true}
                quantity={quantity}
              />
            )
          )}
        </Box>
      )}

      {cartItems.length > 0 && (
        <Box
          className="totalPrice"
          sx={{
            padding: "3rem",
            width: "350px",
            borderRadius: "10px",
            backgroundColor: "#F8F8FF",
            margin: "1rem auto",
            textAlign: "center",
          }}
        >
          <h1>{`Total items: ${quantityItems}`}</h1>
          <h1>{`Total price: $${priceItem.toFixed(2)}`}</h1>
        </Box>
      )}
    </div>
  );
};

export default Cart;
