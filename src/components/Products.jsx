import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Card from "./Card";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterSearch = (product) => {
    return product.title.toLowerCase().includes(searchValue);
  };

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
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
      <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <Grid
          container
          spacing={{
            xs: 3,
            md: 4,
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data
            .filter(filterSearch)
            .map(({ id, image, title, price, category }) => (
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  category={category}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
