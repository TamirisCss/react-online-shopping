import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 2rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartSumaryContainer = styled.div`
  text-align: end;
`;

export const EmptyCartContent = styled.div`
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
