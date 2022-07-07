import { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext([]);

export function FavoriteProvide({ children }) {
  const storage = JSON.parse(localStorage.getItem("favoriteItems"));
  const [favoriteItems, setFavoriteItems] = useState(storage || []);

  const addFavorite = (id, image, title, price, category) => {
    let newArray = [... favoriteItems]
    //addicionando o item no favorite se o item ainda nao estiver adicionado
    if(favoriteItems.find(element => element.id == id) === undefined) {
      newArray.push({ id, image, title, price, category })  
    } else{
      //predicate pesquisa
      const index = favoriteItems.findIndex(element => element.id === id)
      console.log(index)
      newArray.splice(index,1)
    }
    console.log(newArray)
    setFavoriteItems(newArray)
  };
    useEffect(() => {
      localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
      // console.log(localStorage.getItem("favoriteItems"));
    }, [favoriteItems.length]);
 
  return (
    <FavoriteContext.Provider value={{favoriteItems, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;