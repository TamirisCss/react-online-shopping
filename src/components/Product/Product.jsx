import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { BsCartPlus, BsTrash3 } from "react-icons/bs";

import { CartContext, FavoriteContext } from "../../contexts";

import * as S from "./styles";

const Product = ({
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
}) => {
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
            <img src={image} alt="product img" />
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
          <S.IconContent
            onClick={() => addFavorite(id, image, title, price, category)}
            aria-label="add to favorites"
          >
            {isCardInFavouriteItems() ? (
              <MdOutlineFavorite size={25} />
            ) : (
              <MdFavoriteBorder size={25} />
            )}
          </S.IconContent>

          <S.IconContent
            aria-label="add to cart"
            onClick={() => addToCart(id, image, title, price, category)}
          >
            <BsCartPlus size={25} />
          </S.IconContent>
          <S.IconContent>
            {showTrash && (
              <BsTrash3 size={25} onClick={() => removeItem(id)}>
                Remove
              </BsTrash3>
            )}
          </S.IconContent>
        </S.IconsContainer>

        {showDetails && (
          <S.Details onClick={handleProductDetails}>more details...</S.Details>
        )}
      </S.ProductCard>
    </S.ProductContainer>
  );
};

export default Product;
