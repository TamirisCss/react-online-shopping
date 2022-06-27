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
    const sum = cartItems.map(({ price }) => price).reduce((a, b) => a + b, 0);
    setPriceItem(sum);
  };
  const increase = () => {
    setQuantityItems(cartItems.length);
  };

  const duplicateItem = () => {

  }

  useEffect(() => {
    filterPrice();
    increase();

    return () => {};
  }, [cartItems]); // toda vez que o cart item mudar

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {cartItems.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <img src={emptyCart} alt="cart empty" />
          </div>
        ) : (
          cartItems.map(({ id, title, image, price, category, quantity },index) => (
            <div key={id} className="smallCard">
              <Card
                index={index}
                id={id}
                title={title}
                image={image}
                price={price}
                category={category}
                quantity={quantity}
              />
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))
        )}
      </Box>
      {cartItems.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Box
            sx={{
              paddingTop: "50px",
              height: "20rem",
              width: "30rem",
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h1>{`Quantity: ${quantityItems}`}</h1>
            <h1>{`Total price: ${priceItem}`}</h1>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Cart;
