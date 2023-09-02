import React from "react";

import ariAvatar from "../../images/ari-avatar.jpeg";
import tamiAvatar from "../../images/tami-avatar.jpg";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.ProfileContainer>
        <S.ImgContainer>
          <img alt="Ariane Cretani" src={tamiAvatar} />
        </S.ImgContainer>
        <p>Tamiris Cristine</p>
      </S.ProfileContainer>
      <S.ProfileContainer>
        <S.ImgContainer>
          <img alt="Ariane Cretani" src={ariAvatar} />
        </S.ImgContainer>
        <p>Ariane Crestani</p>
      </S.ProfileContainer>
    </S.FooterContainer>
  );
};

export default Footer;
