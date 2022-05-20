import React from "react";
import FavoriteContext from "../FavoriteContext";
import { useContext } from "react";
import Card from './Card'

import emptyFav from "../images/empty-fav-img.png";


const Favorites = () => {
  
    const { favoriteItems } = useContext(FavoriteContext);
 
    return (
        <div>
            {favoriteItems.length === 0 ? (
                <div>
                    <h2>Your favorite is empty</h2>
                    <img src={emptyFav} alt="favorite empty" />
                </div>
                
            ) : (favoriteItems.map(({ id, title, image, price, category }) => (
                <div><Card id={id} title={title} image={image} price={price} category={category}/></div>
              ))
            )}
        </div>
    );
};

export default Favorites;
