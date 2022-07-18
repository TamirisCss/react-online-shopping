import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const SearchBar = ({ onChange }) => {
  return (
    <div
      className="search-input"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3rem",
        borderColor: "#651fff",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          color: "#651fff",
          borderColor: "#651fff",
          background: "#F8F8FF",
        }}
      >
        <TextField
          style={{ color: "#651fff" }}
          fullWidth
          label="FilterSearch"
          id="Filter"
          onChange={onChange}
        />
      </Box>
    </div>
  );
};
export default SearchBar;
