import { useContext, useState, useEffect } from "react";

import emptyCart from "../../images/empty-cart-img.jpeg";
import CircularProgress from "@mui/material/CircularProgress";

import { CartContext } from "../../contexts";
import Product from "../Product/Product";

import * as S from "./styles";

const Cart = (showTrash) => {
  const [quantityItems, setQuantityItems] = useState(0);
  const [priceItem, setPriceItem] = useState(0);
  const { cartItems, groupedItems } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

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

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <S.CartContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {cartItems.length === 0 ? (
            <S.EmptyCartContent>
              <p>Your basket is empty</p>
              <img src={emptyCart} alt="cart empty" />
            </S.EmptyCartContent>
          ) : (
            <S.ProductContainer>
              {groupedItems.map(
                ({ id, title, image, price, category, quantity }, index) => (
                  <Product
                    id={id}
                    image={image}
                    price={price}
                    title={title}
                    category={category}
                    quantity={quantity}
                    showTrash={showTrash}
                    showDetails={false}
                  />
                )
              )}
            </S.ProductContainer>
          )}
          {cartItems.length > 0 && (
            <S.CartSumaryContainer>
              <p>{`Total items: ${quantityItems}`}</p>
              <p>{`Total price: $${priceItem.toFixed(2)}`}</p>
            </S.CartSumaryContainer>
          )}
        </>
      )}
    </S.CartContainer>
  );
};

export default Cart;
