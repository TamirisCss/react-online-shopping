import React from "react";
import FavoriteContext from "../FavoriteContext";
import { useContext } from "react";
import FavouriteCard from "./Card";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import emptyFav from "../images/empty-fav-img.png";
import Box from "@mui/material/Box";


const Favorites = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {favoriteItems.length === 0 ? (
        <div>
          <h2>Your favorite is empty</h2>
          <img src={emptyFav} alt="favorite empty" />
        </div>
      ) : (
        favoriteItems.map(({ id, title, image, price, category }) => (
          <Card sx={{ width: 275, margin: 2 }}>
            <CardContent>
              <FavouriteCard
                id={id}
                title={title}
                image={image}
                price={price}
                category={category}
              />
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Favorites;
