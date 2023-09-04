import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 778px) {
    gap: 15px;
    justify-content: center;
  }

  @media screen and (max-width: 486px) {
    margin: 2rem 1rem;
  }
`;
