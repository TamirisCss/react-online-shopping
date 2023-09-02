import styled from "styled-components";
import { themeColors } from "../../styles/theme-colors";

export const FooterContainer = styled.footer`
  background-color: ${themeColors.blue_color};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
`;

export const ImgContainer = styled.div`
  width: 60px;
  height: 60px;

  img {
    border-radius: 50%;
    width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
