import React, { useNavigate } from "react-router-dom";
import { useContext } from "react";

import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext, FavoriteContext } from "../../contexts";

import * as S from "./styles";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    console.log("Back to home");
  };

  const handleFavorites = () => {
    navigate("/favorites");
    console.log("Favorites");
  };

  const handleCart = () => {
    navigate("/cart");
    console.log("Cart");
  };

  return (
    <S.Nav className="nav-bar">
      <S.Logo onClick={handleBackToHome}>Online Shopping</S.Logo>

      <S.NavIcons>
        <div divContent={favoriteItems.length}>
          <StarIcon onClick={handleFavorites} />
        </div>
        <div divContent={cartItems.length}>
          <ShoppingCartIcon onClick={handleCart} />
        </div>
      </S.NavIcons>
    </S.Nav>
  );
};

export default Navbar;
