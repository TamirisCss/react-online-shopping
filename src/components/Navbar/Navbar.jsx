import React, { Link } from "react-router-dom";
import { useContext } from "react";

import FavoriteContext from "../../FavoriteContext";
import CartContext from "../../CartContext";

import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <div className="nav-bar">
      <div
        style={{ backgroundColor: "#FFFFFF", width: "100%" }}
        position="static"
      >
        <div>
          <div
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            <Link style={{ color: "#b388ff" }} className="logo" to="/">
              Online Shopping
            </Link>
          </div>

          <div style={{ flexGrow: 1, color: "#b388ff" }} />
          <div style={{ color: "none" }} sx={{ display: { md: "flex" } }}>
            <IconButton
              style={{ color: "#b388ff" }}
              size="large"
              aria-label="show 4 new mails"
            >
              <div
                divContent={favoriteItems.length}
                style={{ color: "#b388ff" }}
              >
                <Link to="/favorites">
                  <StarIcon style={{ color: "#b388ff" }} />
                </Link>
              </div>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ color: "#b388ff" }}
            >
              <div divContent={cartItems.length} style={{ color: "#b388ff" }}>
                <Link to="/cart">
                  <ShoppingCartIcon style={{ color: "#b388ff" }} />
                </Link>
              </div>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
