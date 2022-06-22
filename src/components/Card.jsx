import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useEffect } from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import FavoriteContext from "../FavoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = ({ id, image, price, title, category, quantity }) => {
  const { addToCart } = useContext(CartContext);
  const { favoriteItems, addFavorite } = useContext(FavoriteContext);

  const isCardInFavouriteItems = () => {
    const result = favoriteItems.find((item) => item.id === id);
    return result !== undefined;
  };

  return (
    <div key={id} className="productItem">
      <div className="iconsContainer">
        <IconButton
          color="primary"
          onClick={() => addFavorite(id, image, title, price, category)}
          aria-label="add to favorites"
        >
          {isCardInFavouriteItems() ? <Favorite /> : <FavoriteBorderIcon />}
        </IconButton>

        <IconButton
          aria-label="add to cart"
          onClick={() => addToCart(id, image, title, price, category)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div className="imageContainer">
        <img src={image} alt="#" className="imageProduct " />
      </div>
      <div className="card-info">
        <h6>{title}</h6>
        <h6>{`Price: ${price}`}</h6>
        <h6>{`Category: ${category}`}</h6>
        <h6>{`Quantity: ${quantity}`}</h6>
      </div>
      <Link to={`/productDetails/${id}`}>
        <Button size="small">More details</Button>
      </Link>
    </div>
  );
};

export default Card;
