import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";
import { useLoading } from "../../hooks/useLoading";
import Loading from "../Loading/Loading";

import * as S from "./styles";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const { data } = useSearch();
  const { isLoading } = useLoading;

  let params = useParams();

  useEffect(() => {
    const filteredCategory = data.filter(
      (item) => item.category === params.type
    );

    setCategory(filteredCategory);
  }, [data, params.type]);

  return (
    <S.CategoriesContainer>
      {isLoading ? (
        <Loading />
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
