import { createContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvide({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavorite = (image, title, price) => {
    setFavoriteItems((prevState) => [...prevState, { image, title, price }]);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;