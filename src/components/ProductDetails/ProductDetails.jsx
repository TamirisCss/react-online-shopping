import React from "react";
import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";
import * as S from "./styles";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useSearch();

  const product = data.find((item) => item.id === parseInt(id));

  return (
    <S.ProductDetailsContainer>
      {product ? (
        <div>
          <Product
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            rating={product.rating.rate}
            showDetails={false}
            showCategory={true}
            showRating={true}
          />
        </div>
      ) : (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
    </S.ProductDetailsContainer>
  );
};

export default ProductDetails;
