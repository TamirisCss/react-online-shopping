import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  .title {
    text-align: center;
    color: ${themeColors.grey_3};
  }

  .productDetails {
    height: 410px;
  }
`;
