import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const Category = () => {
  const [category, setCategory] = useState([]);
  let params = useParams();

  const getCategory = async (name) => {
    console.log(name);
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${name}`
    );
    console.log(response);
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    getCategory(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <Grid
          container
          spacing={{
            xs: 3,
            md: 4,
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {category.map((item) => (
            <Grid item xs={2} sm={4} md={4}>
              <Product
                key = {item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                category={item.category}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Category