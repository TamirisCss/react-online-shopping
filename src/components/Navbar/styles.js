import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const Nav = styled.nav`
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 2rem;
`;

export const Logo = styled.h1`
  color: ${themeColors.blue_color};
  cursor: pointer;
`;

export const NavContent = styled.u`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  color: ${themeColors.blue_color};
`;
