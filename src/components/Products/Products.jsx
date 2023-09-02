import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";

import * as S from "./styles";

const Products = () => {
  const { data, loading, searchValue } = useSearch();

  const filterSearch = (product) => {
    return (
      product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const shuffledData = shuffleArray(data);

  return (
    <S.ProductsContainer>
      {loading && <CircularProgress />}
      {shuffledData
        .filter(filterSearch)
        .map(({ id, image, title, price, category }) => (
          <div key={id}>
            <Product
              id={id}
              image={image}
              title={title}
              price={price}
              category={category}
            />
          </div>
        ))}
    </S.ProductsContainer>
  );
};

export default Products;
