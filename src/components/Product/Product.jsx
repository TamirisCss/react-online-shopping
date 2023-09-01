import { Link } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../../CartContext";
import FavoriteContext from "../../FavoriteContext";

import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Product = (
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
    <>
      <div
        sx={{
          padding: "2rem",
          alignItems: "baseline",
        }}
      >
        <div
          sx={{
            width: "370px",
            height: "500px",
            margin: "2rem",
          }}
        >
          <div>
            <div key={id} className="ProductCard">
              <div className="imageContainer">
                <img src={image} alt="#" className="imageProduct " />
              </div>

              <h6>{title}</h6>
              <h6>{`Price: $${price}`}</h6>
              {quantity && <h6>{`Quantity: ${quantity}`}</h6>}
              <h6>{`Category: ${category}`}</h6>
            </div>
            <div className="iconsContainer">
              <IconButton
                style={{ color: "#b388ff" }}
                onClick={() => addFavorite(id, image, title, price, category)}
                aria-label="add to favorites"
              >
                {isCardInFavouriteItems() ? (
                  <Favorite />
                ) : (
                  <FavoriteBorderIcon />
                )}
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
          <Link to={`/productDetails/${id}`}>
            <button
              style={{
                color: "#b388ff",
                outline: "none",
              }}
              size="small"
            >
              More details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
