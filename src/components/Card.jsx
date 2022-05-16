import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useEffect } from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import FavoriteContext from "../FavoriteContext"

const Card = ({ id, image, price, title, category }) => {
  // const [favorite, setFavorite] = useState([]);
  
    //   //criar um novo array e set

    const { addToCart } = useContext(CartContext);
    const { addFavorite } = useContext(FavoriteContext)


    //favorite nao pode ser usado para modificar, somente setFavorite
    // const addFavorite = () => {
    //     for (let i = 0; i < favorite.length; i++) {
    //         const item = favorite[i];
    //         if (item.id === card.id) {
    //             favorite.splice(i);
    //             setFavorite(favorite);
    //             console.log("tirei o item", card.id, favorite);
    //             return;
    //         }
    //     }
    //     const newFavorites = [...favorite, card];
    //     setFavorite(newFavorites);
    //     console.log("adicionei o item", card.id, newFavorites);
    // };

    return (
        <div key={id} className="productItem">
            <div className="iconsContainer">
                <IconButton onClick={() => addFavorite( id, image, title, price, category)} aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>

                <IconButton
                    aria-label="add to cart"
                    onClick={() => addToCart(image, title, price, category)}
                >
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
