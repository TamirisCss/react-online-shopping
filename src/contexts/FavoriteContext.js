import { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext([]);

export function FavoriteProvider({ children }) {
  const storage = JSON.parse(localStorage.getItem("favoriteItems"));
  const [favoriteItems, setFavoriteItems] = useState(storage || []);

  const addFavorite = (id, image, title, price, category) => {
    const existingItem = favoriteItems.find((item) => item.id === id);

    if (existingItem) {
      // If the item is already in favorites, remove it
      const updatedFavorites = favoriteItems.filter((item) => item.id !== id);
      setFavoriteItems(updatedFavorites);
    } else {
      // Otherwise, add it to favorites
      const newItem = { id, image, title, price, category };
      setFavoriteItems([...favoriteItems, newItem]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    // eslint-disable-next-line
  }, [favoriteItems]);

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
