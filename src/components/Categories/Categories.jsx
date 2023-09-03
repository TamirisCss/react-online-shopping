import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";

import * as S from "./styles";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const { data } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    const filteredCategory = data.filter(
      (item) => item.category === params.type
    );

    setTimeout(() => {
      setCategory(filteredCategory);
      setIsLoading(false);
    }, 2000);
  }, [data, params.type]);

  return (
    <S.CategoriesContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        category.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))
      )}
    </S.CategoriesContainer>
  );
};

export default Categories;
