import React, { useState, useEffect } from 'react'

const favoriteContext = React.createContext();

const FavoriteProvider = ({children}) => {

    let favoriteSet;
    const localFavorite = JSON.parse(localStorage.getItem('favorites')) || [];
    if(localFavorite) {
        favoriteSet = localFavorite;
    }

    let favoriteSetCard;
    const localFavoriteCard = JSON.parse(localStorage.getItem('favoriteCard')) || [];
    if(localFavoriteCard) {
        favoriteSetCard = localFavoriteCard;
    }
    
    const [favoriteNews, setFavoriteNews] = useState(favoriteSet);
    const [favoritesCard, setFavoritesCard] = useState(favoriteSetCard);

    const updateFavoriteNews = (id) => {
            const update = [...favoriteNews]
            const isFavorite = favoriteNews.indexOf(id);
            if(isFavorite >= 0) {
                update.splice(isFavorite, 1);
            }else {
                update.push(id)
            }
            setFavoriteNews(update);
            localStorage.setItem('favorites', JSON.stringify(update));
        }
        
        const updateFavoritesCard = (favorite) => {
            const update = [...favoritesCard]
            const isFavorite = favoriteNews.indexOf(favorite.id);
            if(isFavorite >= 0) {
                update.splice(isFavorite, 1);
            }else {
                update.push(favorite)
            }
            setFavoritesCard(update);
            localStorage.setItem('favoriteCard', JSON.stringify(update));
        }

  return (
      <favoriteContext.Provider value={{favoriteNews: favoriteNews, setFavoriteNews: setFavoriteNews, updateFavoriteNews, updateFavoritesCard, favoritesCard: favoritesCard, setFavoritesCard:setFavoritesCard}}> 
          {children}
      </favoriteContext.Provider>
  )
}

export {FavoriteProvider, favoriteContext};