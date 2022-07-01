import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import CartContext from "../CartContext";
import FavoriteContext from "../FavoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Product = ({ id, image, price, title, category }) => {
  const { addToCart, trashIcon } = useContext(CartContext);

  const { favoriteItems, addFavorite } = useContext(FavoriteContext);

  const isCardInFavouriteItems = () => {
    const result = favoriteItems.find((item) => item.id === id);
    return result !== undefined;
  };

  return (
    <>
      <Box
        sx={{
          padding: "4rem",
        }}
      >
        <Card sx={{ alignContent: "baseline", width: "100%", height: "100%" }}>
          <CardContent>
            <div key={id} className="">
              <div className="iconsContainer">
                <IconButton
                  color="primary"
                  onClick={() => addFavorite(id, image, title, price, category)}
                  aria-label="add to favorites"
                >
                  {isCardInFavouriteItems() ? (
                    <Favorite />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>

                <IconButton
                  sx={{ color: "primary.main" }}
                  aria-label="add to cart"
                  onClick={() => addToCart(id, image, title, price, category)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <IconButton>{trashIcon}</IconButton>
              </div>

              <div className="imageContainer">
                <img src={image} alt="#" className="imageProduct " />
              </div>

              <h6>{title}</h6>
              <h6>{`Price: ${price}`}</h6>
              <h6>{`Category: ${category}`}</h6>
            </div>
            <Link to={`/productDetails/${id}`}>
              <Button size="small">More details</Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Product;
