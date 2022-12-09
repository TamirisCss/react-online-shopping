import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Product from "./Product";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ProductDetails = () => {
  const { id } = useParams();
  const [idData, setIdData] = useState();

  useEffect(() => {
    const getItem = async (id) => {
      console.log(id);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response);
      const data = await response.json();
      setIdData(data);
      console.log(data);
    };
    getItem(id);
  }, [id]);

  return (
    <>
      {idData && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid style={{ padding: "6rem" }} item xs={10} md={12}>
                <Product
                  image={idData.image}
                  title={idData.title}
                  price={idData.price}
                  category={idData.category}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      {!idData && (
        <Box sx={{ minHeight: "60vh" }}>
          <h2>Loading...</h2>
        </Box>
      )}
    </>
  );
};

export default ProductDetails;
