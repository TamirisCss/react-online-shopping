import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";

const Products = () => {
  const { data, loading, searchValue } = useSearch();

  const filterSearch = (product) => {
    return (
      product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <>
      {loading && (
        <h1>
          <CircularProgress />
        </h1>
      )}
      <div
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
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
      </div>
    </>
  );
};

export default Products;
