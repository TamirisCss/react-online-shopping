import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";

import * as S from "./styles";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const { data } = useSearch();
  let params = useParams();

  useEffect(() => {
    const filteredCategory = data.filter(
      (item) => item.category === params.type
    );
    setCategory(filteredCategory);
    // eslint-disable-next-line
  }, [data, params.type]);

  return (
    <S.CategoriesContainer>
      {category.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </S.CategoriesContainer>
  );
};

export default Categories;
