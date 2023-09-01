import React from "react";
import FavoriteContext from "../FavoriteContext";
import { useContext } from "react";
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
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {favoriteItems.map(({ id, title, image, price, category }) => (
            <div
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              category={category}
            ></div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Favorites;
