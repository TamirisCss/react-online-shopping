import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  CardMedia,
  Container,
  Stack,
  Box,
  Card,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import CartContext from "../CartContext";
import FavoriteContext from "../FavoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Grid from "@mui/material/Grid";
import "../style.css/Products.css";
import { StackedBarChart } from "@mui/icons-material";

const CartProduct = (
  { id, image, price, title, category, showTrash = false, quantity },
  index
) => {
  const { addToCart, removeItem } = useContext(CartContext);
  const { favoriteItems, addFavorite } = useContext(FavoriteContext);

  const isCardInFavouriteItems = () => {
    const result = favoriteItems.find((item) => item.id === id);
    return result !== undefined;
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      <CardMedia
        sx={{
          display: "flex",
          width: 170,
          height: "auto",
        }}
      >
        <img src={image} alt="#" className="imageProduct " />
      </CardMedia>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "2rem",
          width: "30rem",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{`Price: $${price}`}</Typography>
        {quantity && <Typography>{`Quantity: ${quantity}`}</Typography>}
        <Typography>{`Category: ${category}`}</Typography>
        <Link to={`/productDetails/${id}`}>
          <Button style={{ color: "#b388ff", textAlign: "end" }} size="small">
            More details
          </Button>
        </Link>
        <Box>
          <IconButton
            style={{ color: "#b388ff" }}
            onClick={() => addFavorite(id, image, title, price, category)}
            aria-label="add to favorites"
          >
            {isCardInFavouriteItems() ? <Favorite /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton
            style={{ color: "#b388ff" }}
            aria-label="add to cart"
            onClick={() => addToCart(id, image, title, price, category)}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton>
            {showTrash && (
              <DeleteOutlinedIcon
                style={{ color: "#b388ff" }}
                onClick={() => removeItem(index)}
              >
                Remove
              </DeleteOutlinedIcon>
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CartProduct;
