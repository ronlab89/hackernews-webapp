import React, { useContext } from 'react'
import NewsCardFav from '../components/NewsCardFav';
import { favoriteContext } from '../context/favoriteContext'
import {nanoid} from 'nanoid'

const Favorites = () => {

  const {favoriteNews} = useContext(favoriteContext);
  return (
    <section className='card-container'>
      {
          favoriteNews.map(news => {
                  return <NewsCardFav key={nanoid(6)} news={news}/>
          })
      }
    </section>
  )
}

export default Favorites