import React from "react";
import { useParams } from "react-router";

import Product from "../Product/Product";
import { useSearch } from "../../contexts/SearchContext";

import { useLoading } from "../../hooks/useLoading";
import Loading from "../Loading/Loading";

import * as S from "./styles";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useSearch();
  const { isLoading } = useLoading;

  const product = data.find((item) => item.id === parseInt(id));

  return (
    <S.ProductDetailsContainer>
      <p className="title">Details</p>
      {isLoading ? (
        <Loading />
      ) : (
        product && (
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
        )
      )}
    </S.ProductDetailsContainer>
  );
};

export default ProductDetails;
