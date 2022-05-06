import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Card = ({ id, image, price, title, category }) => {
  return (
    <div key={id} className="productItem">
      <div className="iconsContainer">
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div className="imageContainer">
        <img src={image} alt="#" className="imageProduct " />
      </div>
      <div className="card-info">
        <h6>{title}</h6>
        <h6>{`Price: ${price}`}</h6>
        <h6>{`Category: ${category}`}</h6>
      </div>
      <Link to={`/productDetails/${id}`}>
        <Button size="small">More details</Button>
      </Link>
    </div>
  );
};

export default Card;