import React from "react";
import { useContext, useState, useEffect } from "react";

//Components
import CartProduct from "../CartProduct/CartProduct";

import emptyCart from "../../images/empty-cart-img.jpeg";

import "./Cart.css";
import { CartContext } from "../../contexts";

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
    // eslint-disable-next-line
    arrayUnique.map((element) => {
      const newArrray = cartItems.filter((item) => item.id === element.id);
      element.quantity = newArrray.length;
    });
    setGroupItems(arrayUnique);
    return () => {};
    // eslint-disable-next-line
  }, [cartItems]); // toda vez que o cart item mudar

  return (
    <div
      className="cartContainer"
      style={{
        display: "flex",
        flexWrap: "row",
        padding: "2rem",
      }}
    >
      <div>
        {cartItems.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <img src={emptyCart} alt="cart empty" />
          </div>
        ) : (
          <div
            className="cartItems"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50rem",
            }}
          >
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1px",
                }}
              >
                <div>
                  <h1>{`Total items: ${quantityItems}`}</h1>
                  <h1>{`Total price: $${priceItem.toFixed(2)}`}</h1>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
