import React from "react";

import * as S from "./styles";

const Loading = () => {
  return (
    <S.SpinnerOverlay data-testid="spinner-overlay">
      <S.SpinnerContainer data-testid="spinner-container" />
    </S.SpinnerOverlay>
  );
};

export default Loading;
