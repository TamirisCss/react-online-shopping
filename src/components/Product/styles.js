import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const ProductContainer = styled.div`
  width: 350px;
  margin-bottom: 1.5rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  padding: 5px;
  background-color: ${themeColors.dark_white};
  border: 2px solid ${themeColors.blue_color};
  border-radius: 10px;
`;

export const ProductItem = styled.div`
  width: 100%;
  .imageContainer {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const ProductInfos = styled.div`
  p {
    font-size: 0.9rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Details = styled.p`
  color: ${themeColors.blue_color};
  cursor: pointer;
`;
