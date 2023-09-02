import React from "react";
import TextField from "@mui/material/TextField";

import * as S from "./styles";

const SearchBar = ({ value, onSearch, onChange }) => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          onChange(e);
          onSearch(e.target.value);
        }}
      />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
