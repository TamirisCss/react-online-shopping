import React from "react";
import FavoriteContext from "../FavoriteContext";
import { useContext } from "react";
import Card from './Card'


const Favorites = () => {
  
    const { favoriteItems } = useContext(FavoriteContext);
 
    return (
        <div>
            {favoriteItems.length === 0 ? (
                <h1>your favorite is empty</h1>
            ) : (favoriteItems.map(({ id, title, image, price, category }) => (
                <div><Card id={id} title={title} image={image} price={price} category={category}/></div>
              ))
            )}
        </div>
    );
};

export default Favorites;
