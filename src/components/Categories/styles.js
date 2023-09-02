import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const CategoryContainer = styled.div`
  margin: 1rem 2rem;

  background: ${themeColors.white};
  display: flex;
  justify-content: space-around;
  border: ${themeColors.blue_color} 2px solid;
`;

export const CategoryItem = styled.h3`
  color: ${themeColors.blue_color};
  cursor: pointer;
`;
