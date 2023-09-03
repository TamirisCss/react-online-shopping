import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext";

import * as S from "./styles";

const CategoriesMenu = () => {
  const { data } = useSearch();

  const navigate = useNavigate();

  const getUniqueCategories = () => {
    const uniqueCategories = data.reduce((categories, item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    }, []);

    return uniqueCategories;
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <S.CategoryContainer>
      {getUniqueCategories().map((category) => (
        <S.CategoryItem
          key={category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </S.CategoryItem>
      ))}
    </S.CategoryContainer>
  );
};

export default CategoriesMenu;
