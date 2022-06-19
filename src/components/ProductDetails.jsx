import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
    const { id } = useParams();
    const [idData, setIdData] = useState();

    useEffect(() => {
        const getItem = async (id) => {
            console.log(id);
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            console.log(response);
            const data = await response.json();
            setIdData(data);
            console.log(data);
        };
        getItem(id);
        console.log(getItem);
    }, []);

    return (
      <>
        {idData && (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid style={{ padding:'6rem'}} item xs={10} md={12}>
                  <Card
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
        {!idData && <h2>Loading...</h2>}
      </>
    );
};

export default ProductDetails;
