import React, { useState, useEffect } from 'react'

const favoriteContext = React.createContext();

const FavoriteProvider = ({children}) => {

    let favoriteSet;
    const localFavorite = JSON.parse(localStorage.getItem('favorites')) || [];
    if(localFavorite) {
        favoriteSet = localFavorite;
    }
    
    const [favoriteNews, setFavoriteNews] = useState(favoriteSet);

    const updateFavoriteNews = (favorite) => {
        const update = [...favoriteNews]
        const isFavorite = favoriteNews.indexOf(favorite.id);
        if(isFavorite >= 0) {
            update.splice(isFavorite, 1);
        }else {
            update.push(favorite)
        }
        setFavoriteNews(update);
        localStorage.setItem('favorites', JSON.stringify(update));
    }

    console.log(favoriteNews);

  return (
      <favoriteContext.Provider value={{favoriteNews: favoriteNews, setFavoriteNews: setFavoriteNews, updateFavoriteNews}}> 
          {children}
      </favoriteContext.Provider>
  )
}

export {FavoriteProvider, favoriteContext};