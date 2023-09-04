import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const CategoryContainer = styled.div`
  margin: 1rem 2rem;

  background: ${themeColors.white};
  display: flex;
  justify-content: space-around;
  border: ${themeColors.blue_color} 2px solid;
  border-radius: 10px;

  @media screen and (max-width: 513px) {
    gap: 15px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 486px) {
    margin: 2.2rem 1rem 1rem 1rem;
  }
`;

export const CategoryItem = styled.h3`
  color: ${themeColors.blue_color};
  cursor: pointer;
  font-size: 1rem;

  @media screen and (max-width: 513px) {
    margin: 0;
  }
`;
