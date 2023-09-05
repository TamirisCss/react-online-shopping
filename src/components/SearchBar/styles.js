import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const SearchBarContainer = styled.div`
  @media screen and (max-width: 486px) {
    position: absolute;
    top: 4rem;
    left: 2rem;
  }
  @media screen and (max-width: 486px) {
    left: 0;
    width: 100%;
    background-color: ${themeColors.white};
    padding-left: 2rem;
    padding-bottom: 10px;
  }
`;

export const SearchBarInput = styled.input`
  border: 2px solid ${themeColors.blue_color};
  padding: 7px 1rem;
  color: ${themeColors.grey_2};
  outline: none;
  border-radius: 5px;

  &::placeholder {
    color: ${themeColors.grey};
  }
`;
