import React from "react";
import CartContext from "../CartContext";
import { useContext, useState, useEffect } from "react";
import Product from "./Product";
import Box from "@mui/material/Box";
import emptyCart from "../images/empty-cart-img.jpeg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const [quantityItems, setQuantityItems] = useState(0);
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
        cartItems.map(({ id, title, image, price, category }, index) => (
          <div key={id} className="smallCard">
            <Product
              index={index}
              id={id}
              title={title}
              image={image}
              price={price}
              category={category}
              showTrash={true}
            />
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div
          style={{
            display: "inline-block",
            flexDirection: "wrap",
            padding: "20px",
            backgroundColor: "#cfe8fc",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              paddingTop: "80px",
              height: "20rem",
              width: "50rem",
              borderRadius: "10px",
              backgroundColor: "#f0efef",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h1>{`Total items: ${quantityItems}`}</h1>
            <h1>{`Total price: ${priceItem}`}</h1>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Cart;
