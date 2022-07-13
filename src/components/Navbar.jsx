import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteContext from "../FavoriteContext";
import CartContext from "../CartContext";
import { useContext } from "react";


const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <div className="nav-bar">
      <AppBar
        style={{ backgroundColor: "#FFFFFF"}}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link style={{ color: "#b388ff" }} className="logo" to="/">
              Online Shopping
            </Link>
          </Typography>

          <Box style={{ flexGrow: 1, color: "#b388ff" }} />
          <Box
            style={{ color: "none" }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <IconButton
              style={{ color: "#b388ff" }}
              size="large"
              aria-label="show 4 new mails"
            >
              <Badge
                badgeContent={favoriteItems.length}
                style={{ color: "#b388ff" }}
              >
                <Link to="/favorites">
                  <StarIcon style={{ color: "#b388ff" }} />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ color: "#b388ff" }}
            >
              <Badge
                badgeContent={cartItems.length}
                style={{ color: "#b388ff" }}
              >
                <Link to="/cart">
                  <ShoppingCartIcon style={{ color: "#b388ff" }} />
                </Link>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
