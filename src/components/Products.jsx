import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Product from "./Product";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterSearch = (product) => {
    return (
      product.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const hasProducts = data.length > 0;

  return (
    <>
      {hasProducts ? (
        <SearchBar onChange={onSearchChange} />
      ) : (
        loading && (
          <h1>
            <CircularProgress />
          </h1>
        )
      )}
      <Box
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
            <div>
              <Product
                id={id}
                image={image}
                title={title}
                price={price}
                category={category}
              />
            </div>
          ))}
      </Box>
    </>
  );
};

export default Products;
