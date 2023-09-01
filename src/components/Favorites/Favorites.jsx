import React, { useContext } from "react";

import FavoriteContext from "../../FavoriteContext";
import emptyFav from "../../images/empty-fav-img.png";

const Favorites = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <div>
      {favoriteItems.length === 0 ? (
        <div>
          <h2>Your favorite is empty</h2>
          <img src={emptyFav} alt="favorite empty" />
        </div>
      ) : (
        <div
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {favoriteItems.map(({ id, title, image, price, category }) => (
            <div
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              category={category}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
