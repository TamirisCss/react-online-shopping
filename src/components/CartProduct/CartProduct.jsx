import { Link } from "react-router-dom";
import { useContext } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./Products.css";
import { CartContext, FavoriteContext } from "../../contexts";

const CartProduct = (
  { id, image, price, title, category, showTrash = false, quantity },
  index
) => {
  const { addToCart, removeItem } = useContext(CartContext);
  const { favoriteItems, addFavorite } = useContext(FavoriteContext);

  const isCardInFavouriteItems = () => {
    const result = favoriteItems.find((item) => item.id === id);
    return result !== undefined;
  };

  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      <div
        sx={{
          display: "flex",
          width: 170,
          height: "auto",
        }}
      >
        <img src={image} alt="#" className="imageProduct " />
      </div>

      <div
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "2rem",
          width: "30rem",
        }}
      >
        <div>{title}</div>
        <div>{`Price: $${price}`}</div>
        {quantity && <div>{`Quantity: ${quantity}`}</div>}
        <div>{`Category: ${category}`}</div>
        <Link to={`/productDetails/${id}`}>
          <button style={{ color: "#b388ff", textAlign: "end" }} size="small">
            More details
          </button>
        </Link>
        <div>
          <IconButton
            style={{ color: "#b388ff" }}
            onClick={() => addFavorite(id, image, title, price, category)}
            aria-label="add to favorites"
          >
            {isCardInFavouriteItems() ? <Favorite /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton
            style={{ color: "#b388ff" }}
            aria-label="add to cart"
            onClick={() => addToCart(id, image, title, price, category)}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton>
            {showTrash && (
              <DeleteOutlinedIcon
                style={{ color: "#b388ff" }}
                onClick={() => removeItem(index)}
              >
                Remove
              </DeleteOutlinedIcon>
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
