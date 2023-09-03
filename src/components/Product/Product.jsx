import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { CartContext, FavoriteContext } from "../../contexts";

import * as S from "./styles";

const Product = (
  {
    id,
    image,
    price,
    title,
    category,
    quantity,
    rating,
    showCategory,
    showRating,
    showTrash = false,
    showDetails = true,
  },
  index
) => {
  const { addToCart, removeItem } = useContext(CartContext);
  const { favoriteItems, addFavorite } = useContext(FavoriteContext);

  const isCardInFavouriteItems = () => {
    const result = favoriteItems.find((item) => item.id === id);
    return result !== undefined;
  };

  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/productDetails/${id}`);
  };

  const truncateTitle = (text, limit) => {
    if (!text) {
      return "";
    }

    const words = text.split(" ");
    if (words.length <= limit) {
      return text;
    }

    let truncatedText = "";
    for (let i = 0; i < limit; i++) {
      truncatedText += words[i] + " ";
    }
    return truncatedText.trim() + "...";
  };

  return (
    <S.ProductContainer>
      <S.ProductCard className="productDetails">
        <S.ProductItem key={id}>
          <div className="imageContainer">
            <img src={image} alt="#" className="imageProduct " />
          </div>

          <S.ProductInfos>
            <p>{truncateTitle(title, 6)}</p>
            <p>{`Price: $${price}`}</p>
            {quantity && <p>{`Quantity: ${quantity}`}</p>}
            {showCategory && <p>{`Category: ${category}`}</p>}
            {showRating && <p>{`Rating: ${rating}`}</p>}
          </S.ProductInfos>
        </S.ProductItem>
        <S.IconsContainer className="iconsContainer">
          <IconButton
            style={{ color: "#92B5E8", padding: "0" }}
            onClick={() => addFavorite(id, image, title, price, category)}
            aria-label="add to favorites"
          >
            {isCardInFavouriteItems() ? <Favorite /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton
            style={{ color: "#92B5E8" }}
            aria-label="add to cart"
            onClick={() => addToCart(id, image, title, price, category)}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton>
            {showTrash && (
              <DeleteOutlinedIcon
                style={{ color: "#92B5E8" }}
                onClick={() => removeItem(index)}
              >
                Remove
              </DeleteOutlinedIcon>
            )}
          </IconButton>
        </S.IconsContainer>

        {showDetails && (
          <S.Details onClick={handleProductDetails}>more details...</S.Details>
        )}
      </S.ProductCard>
    </S.ProductContainer>
  );
};

export default Product;
