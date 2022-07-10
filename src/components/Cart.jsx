import React from "react";
import CartContext from "../CartContext";
import { useContext, useState, useEffect } from "react";
import Product from "./Product";
import Box from "@mui/material/Box";
import emptyCart from "../images/empty-cart-img.jpeg";

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
        groupItems.map(
          ({ id, title, image, price, category, quantity }, index) => (
            <div style={{ padding: "6rem" }} key={id} className="smallCard">
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
            </div>
          )
        )
      )}

      {cartItems.length > 0 && (
        <div style={{}}>
          <div
            style={{
              display: "inline-block",
              padding: "20px",
              backgroundColor: "#651fff",
              marginBottom: "6rem",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                padding: "80px",
                height: "20rem",
                width: "50rem",
                borderRadius: "10px",
                backgroundColor: "#F8F8FF",
               
              }}
            >
              <h1>{`Total items: ${quantityItems}`}</h1>
              <h1>{`Total price: $${priceItem}`}</h1>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
