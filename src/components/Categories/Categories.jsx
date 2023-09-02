import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const Categories = () => {
  const navigate = useNavigate();

  const handleWomenCategory = () => {
    navigate("/category/women's%20clothing");
  };

  const handleMenCategory = () => {
    navigate("/category/men's%20clothing");
  };

  const handleJeweleryCategory = () => {
    navigate("/category/jewelery");
  };

  const handleElectronicsCategory = () => {
    navigate("/category/electronics");
  };

  return (
    <S.CategoryContainer>
      <S.CategoryItem onClick={handleWomenCategory}>For Women</S.CategoryItem>
      <S.CategoryItem onClick={handleMenCategory}>For Men</S.CategoryItem>
      <S.CategoryItem onClick={handleJeweleryCategory}>Jewelery</S.CategoryItem>
      <S.CategoryItem onClick={handleElectronicsCategory}>
        Electronics
      </S.CategoryItem>
    </S.CategoryContainer>
  );
};

export default Categories;
