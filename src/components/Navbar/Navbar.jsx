import React, { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useSearch } from "../../contexts/SearchContext";

import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext, FavoriteContext } from "../../contexts";
import SearchBar from "../SearchBar/SearchBar";

import * as S from "./styles";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);
  const { setSearchValue } = useSearch();
  const [localSearchValue, setLocalSearchValue] = useState("");

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

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setLocalSearchValue(newValue);
    setSearchValue(newValue);
  };

  return (
    <S.Nav className="nav-bar">
      <S.Logo onClick={handleBackToHome}>Online Shopping</S.Logo>
      <S.NavContent>
        <SearchBar value={localSearchValue} onChange={handleSearchChange} />
        <div divContent={favoriteItems.length}>
          <StarIcon onClick={handleFavorites} />
        </div>
        <div divContent={cartItems.length}>
          <ShoppingCartIcon onClick={handleCart} />
        </div>
      </S.NavContent>
    </S.Nav>
  );
};

export default Navbar;
