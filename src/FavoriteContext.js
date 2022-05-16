import { createContext, useState } from "react";

const FavoriteContext = createContext([]);

export function FavoriteProvide({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavorite = (id, image, title, price, category) => {
    let newArray = [... favoriteItems]
    //addicionando o item no favorite se o item ainda nao estiver adicionado
    if(favoriteItems.find(element => element.id == id) === undefined) {
      newArray.push({ id, image, title, price, category })  
    } else{
      //predicate pesquisa
      const index = favoriteItems.findIndex(element => element.id === id)
      console.log(index)
      newArray.splice(index, 1)
    }
    console.log(newArray)
    setFavoriteItems(newArray)
  };
 
  return (
    <FavoriteContext.Provider value={{favoriteItems, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;