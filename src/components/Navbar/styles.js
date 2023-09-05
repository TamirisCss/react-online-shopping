import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${themeColors.white};

  padding: 0 2rem;
  width: calc(100% - 4rem);

  @media screen and (max-width: 554px) {
    margin-bottom: 2rem;
  }
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

export const IconContainer = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -1rem;
  color: ${themeColors.grey};
  font-size: 1rem;
  font-weight: 700;
`;
