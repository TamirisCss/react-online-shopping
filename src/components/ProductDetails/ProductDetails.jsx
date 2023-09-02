import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Product from "../Product/Product";

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
    console.log(getItem);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {idData && (
        <>
          <div sx={{ flexGrow: 1 }}>
            <div container spacing={2}>
              <div style={{ padding: "6rem" }} item xs={10} md={12}>
                <Product
                  image={idData.image}
                  title={idData.title}
                  price={idData.price}
                  category={idData.category}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {!idData && (
        <div sx={{ minHeight: "60vh" }}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
