import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

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
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        {category.map((item) => (
          <CardContent>
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              category={item.category}
            />
          </CardContent>
        ))}
      </Box>
    </>
  );
};

export default Category;
