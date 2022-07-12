import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";


const Categories = () => {


  return (
    <AppBar
      position="static"
      style={{
        background: "#651fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Toolbar style={{ alignItems: "center" }}>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/women's%20clothing"
        >
          Woman's section
        </Link>
      </Toolbar>
      <Toolbar>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/men's%20clothing"
        >
          Men's section
        </Link>
      </Toolbar>
      <Toolbar>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/jewelery"
        >
          Jewelery
        </Link>
      </Toolbar>
      <Toolbar>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/electronics"
        >
          Electronics
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Categories;