import React from "react";
import CartContext from "../CartContext";
import { useContext, useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import Box from "@mui/material/Box";
import emptyCart from "../images/empty-cart-img.jpeg";
import { textAlign } from "@mui/system";
import { Card, Grid, Container } from "@mui/material";
import Fill from "./Fill";

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
    <Container  style={{ display:'flex', margin:'8rem' }}>
        <Grid>
          {cartItems.length === 0 ? (
            <div>
              <h2>Your basket is empty</h2>
              <img src={emptyCart} alt="cart empty" />
            </div>
          ) : (
            <Card sx={{
              display: "flex",
              flexDirection:'column'
            }} >
              {groupItems.map(
                ({ id, title, image, price, category, quantity }, index) => (
                  <CartProduct
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
              {cartItems.length > 0 && (
                <Card
                  style={{
                    display: "flex",
                  }}
                >
                  <div>
                    <h1>{`Total items: ${quantityItems}`}</h1>
                    <h1>{`Total price: $${priceItem.toFixed(2)}`}</h1>
                  </div>
                </Card>
              )}
            </Card>
          )}
        </Grid>
        <Fill />
  
    </Container>
  );
};

export default Cart;
