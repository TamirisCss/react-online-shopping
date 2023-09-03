import React, { useContext, useState, useEffect } from "react";

import emptyFav from "../../images/empty-fav-img.png";
import { FavoriteContext } from "../../contexts";
import Product from "../Product/Product";

import { useLoading } from "../../hooks/useLoading";
import Loading from "../Loading/Loading";

import * as S from "./styles";

const Favorites = () => {
  const { favoriteItems } = useContext(FavoriteContext);
  const { isLoading } = useLoading;

  return (
    <S.FavContainer>
      {isLoading ? (
        <Loading />
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
