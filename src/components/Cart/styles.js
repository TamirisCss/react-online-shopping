import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const CartContainer = styled.div`
  margin: 2rem;

  .title {
    width: 100%;
    color: ${themeColors.grey_3};
  }

  @media screen and (max-width: 486px) {
    margin: 2rem 1rem;
    .title {
      text-align: center;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 778px) {
    gap: 15px;
    justify-content: center;
  }
`;

export const CartSumaryContainer = styled.div`
  text-align: end;
  @media screen and (max-width: 786px) {
    text-align: center;
  }
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
