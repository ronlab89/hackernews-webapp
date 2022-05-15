import React, { useState, useEffect } from 'react'

const favoriteContext = React.createContext();

const FavoriteProvider = ({children}) => {
    
    let favoriteSet;
    const localFavorite = localStorage.getItem('favorite');
    if(localFavorite) {
        favoriteSet = localFavorite;
    }
    const [favoriteNews, setFavoriteNews] = useState([]);
    
    useEffect(() => {
        localStorage.setItem('favorite', favoriteNews);
      }, [favoriteNews]);

  return (
      <favoriteContext.Provider value={{favoriteNews: favoriteNews, setFavoriteNews: setFavoriteNews}}> 
          {children}
      </favoriteContext.Provider>
  )
}

export {FavoriteProvider, favoriteContext};