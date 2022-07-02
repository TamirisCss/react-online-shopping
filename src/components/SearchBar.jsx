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
        borderColor: "#651fff",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          color: "#651fff",
          borderRadius: "50px",
          borderColor: "#651fff",
        }}
      >
        <TextField
          style={{ color: "#651fff" }}
          fullWidth
          label="FilterSearch"
          id="Filter"
          onChange={onChange}
          borderRadius="10px"
  
        />
      </Box>
    </div>
  );
};
export default SearchBar;
