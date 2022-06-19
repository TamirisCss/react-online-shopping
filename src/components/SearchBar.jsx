import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { margin } from "@mui/system";

const SearchBar = ({ onChange }) => {
  return (
    <div
      className="search-input"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3rem",
        padding: "3rem",
       
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="FilterSearch"
          id="Filter"
          onChange={onChange}
          color="primary"
        />
      </Box>
    </div>
  );
};
export default SearchBar;
