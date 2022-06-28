import React from "react";
import FavoriteContext from "../FavoriteContext";
import { useContext } from "react";
import FavouriteCard from "./Product";
import emptyFav from "../images/empty-fav-img.png";
import Box from "@mui/material/Box";

const Favorites = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <Box>
      {favoriteItems.length === 0 ? (
        <div>
          <h2>Your favorite is empty</h2>
          <img src={emptyFav} alt="favorite empty" />
        </div>
      ) : (
        favoriteItems.map(({ id, title, image, price, category }) => (
          <FavouriteCard
            id={id}
            title={title}
            image={image}
            price={price}
            category={category}
          />
        ))
      )}
    </Box>
  );
};

export default Favorites;
