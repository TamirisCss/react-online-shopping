import { margin } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div
      position="static"
      style={{
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        color: "#b388ff",
        padding: "40px",
        outlineStyle: 'auto',
        margin:'2rem'
        
      }}
    >
      <div>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/women's%20clothing"
        >
        Woman's section 
        </Link>
      </div>
      <div>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/men's%20clothing"
        >
          Men's section
        </Link>
      </div>
      <div>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/jewelery"
        >
          Jewelery
        </Link>
      </div>
      <div>
        <Link
          style={{ color: "#b388ff" }}
          className="logo"
          to="/category/electronics"
        >
          Electronics
        </Link>
      </div>
    </div>
  );
};

export default Categories;
