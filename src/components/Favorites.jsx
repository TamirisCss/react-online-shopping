import React from "react";
import FavoriteContext from "../FavoriteContext";
import { useContext } from "react";
import Card from './Card'


const Favorites = () => {
  
    const { favoriteItems } = useContext(FavoriteContext);
    return (
        <div>
            {favoriteItems.length === 0 ? (
                <h1>your cart is empty</h1>
            ) : (
              favoriteItems.map(({title, image, price, category }) => (
                <div><Card title={title} image={image} price={price} category={category}/></div>
              ))
            )}
        </div>
    );
};

export default Favorites;
