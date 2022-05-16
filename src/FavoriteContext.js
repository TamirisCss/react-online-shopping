import { createContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvide({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavorite = (id, image, title, price, category) => {
    //addicionando o item no favorite se o item ainda nao estiver adicionado
    console.log(favoriteItems)
    if(favoriteItems.find(element => element.id == id) === undefined) {
      // se nao tiver o item
      setFavoriteItems((prevState) => [...prevState, { id, image, title, price, category }]);
    } else { // se tiver algum item
      alert('item is already add')
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;