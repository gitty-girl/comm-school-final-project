import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addTofavorites(user) {
    setFavorites((prev) => [...prev, user]);
  }

  function removeFromFavorites(login) {
    setFavorites((prev) => prev.filter((item) => item.login !== login));
  }

  function isFavorite(login) {
    return !!favorites.find((item) => item.login === login);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, removeFromFavorites, addTofavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error();
  }

  return context;
}

export { FavoritesContextProvider, useFavorites };
