import React, { useContext, useState, useEffect } from "react";

import emptyFav from "../../images/empty-fav-img.png";
import CircularProgress from "@mui/material/CircularProgress";
import { FavoriteContext } from "../../contexts";
import Product from "../Product/Product";

import * as S from "./styles";

const Favorites = () => {
  const { favoriteItems } = useContext(FavoriteContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <S.FavContainer>
      {isLoading ? (
        <CircularProgress />
      ) : favoriteItems.length === 0 ? (
        <S.EmptyFavContent>
          <p>Your favorites is empty</p>
          <img src={emptyFav} alt="favorites empty" />
        </S.EmptyFavContent>
      ) : (
        <S.ProductContainer>
          {favoriteItems.map(({ id, title, image, price, category }) => (
            <Product
              key={id}
              id={id}
              image={image}
              price={price}
              title={title}
              category={category}
            />
          ))}
        </S.ProductContainer>
      )}
    </S.FavContainer>
  );
};

export default Favorites;
