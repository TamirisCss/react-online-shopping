import styled from "styled-components";

export const FavContainer = styled.div`
  margin: 2rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const EmptyFavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.5rem;
    text-align: center;
  }

  img {
    height: 300px;
    object-fit: contain;
  }
`;
