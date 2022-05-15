import React, { useState, useEffect } from 'react'

const favoriteContext = React.createContext();

const FavoriteProvider = ({children}) => {
    
    const [favoriteNews, setFavoriteNews] = useState([]);

    const updateFavoriteNews = (favorite) => {
        // console.log(favorite);
        const update = [...favoriteNews]
        const isFavorite = favoriteNews.indexOf(favorite.id);
        if(isFavorite >= 0) {
            update.splice(isFavorite, 1);
        }else {
            update.push(favorite)
        }
        setFavoriteNews(update);
    }

    console.log(favoriteNews);
    
    // let favoriteSet;
    // const localFavorite = localStorage.getItem('favorite');
    // if(localFavorite) {
    //     favoriteSet = localFavorite;
    // }
    
    // useEffect(() => {
    //     localStorage.setItem('favorite', favoriteNews);
    //   }, [favoriteNews]);

  return (
      <favoriteContext.Provider value={{favoriteNews: favoriteNews, setFavoriteNews: setFavoriteNews, updateFavoriteNews}}> 
          {children}
      </favoriteContext.Provider>
  )
}

export {FavoriteProvider, favoriteContext};