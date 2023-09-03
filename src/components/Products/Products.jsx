import React from "react";

import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";
import { useLoading } from "../../hooks/useLoading";
import Loading from "../Loading/Loading";

import * as S from "./styles";

const Products = () => {
  const { data, searchValue } = useSearch();
  const { isLoading } = useLoading;

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
      {isLoading ? (
        <Loading />
      ) : (
        shuffledData
          .filter(filterSearch)
          .map(({ id, image, title, price, category, rating }) => (
            <div key={id}>
              <Product
                id={id}
                image={image}
                title={title}
                price={price}
                category={category}
                rating={rating.rate}
              />
            </div>
          ))
      )}
    </S.ProductsContainer>
  );
};

export default Products;
