import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ value, onSearch, onChange }) => {
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
      <div
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
          value={value}
          onChange={(e) => {
            onChange(e);
            onSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
