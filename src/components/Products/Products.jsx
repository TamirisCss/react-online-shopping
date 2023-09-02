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

  return (
    <S.ProductsContainer>
      {loading && <CircularProgress />}
      {data
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
