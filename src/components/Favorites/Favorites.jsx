import React, { useContext } from "react";

import emptyFav from "../../images/empty-fav-img.png";
import { FavoriteContext } from "../../contexts";
import Product from "../Product/Product";

import * as S from "./styles";

const Favorites = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <S.FavContainer>
      {favoriteItems.length === 0 ? (
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
