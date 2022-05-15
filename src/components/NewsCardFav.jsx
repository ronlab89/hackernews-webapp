import React, { useContext, useState } from 'react'
import moment from 'moment';
import '../assets/css/newsCard.css'
import timeIcon from '../assets/images/iconmonstr-time-2.svg'
import heart from '../assets/images/iconmonstr-favorite-2.svg'
import heartFav from '../assets/images/iconmonstr-favorite-3.svg'
import { favoriteContext } from '../context/favoriteContext';

const NewsCardFav = (newsFav) => {
    const {favoriteNews, setFavoriteNews} = useContext(favoriteContext);
    // const {id, author, story, url: story_url, created, fav: favoriteHeart} = newsFav;

    const [favorite, setFavorite] = useState(false);
    const [url, setUrl] = useState(false);

    const favNews = favorite ? heart : heartFav;

    const handleClickFav = (e) => {
        e.preventDefault();
        setFav(!favorite);
        setFavoriteNews(favoriteNews.filter(item => item));
    }

    const handleClickUrl = (e) => {
        e.preventDefault();
        setUrl(!url);
    }

  return (
    <>
    {
        favoriteNews.map(item => {
            <article className='general-card'>    
                <div className="card">
                <div className="card-body">
                    <div className="card-info" onClick={handleClickUrl}>
                        <img src={timeIcon} alt="Clock Icon" className='time-icon' />
                        <span>{moment().fromNow(item.created)} by {item.author}</span>
                        <p>{item.story}</p>
                    </div>
                    <div className="card-fav">
                        <div className="favorite" onClick={handleClickFav}>
                            <img src={favNews} alt="Heart Logo" />
                        </div>
                    </div>
                </div>
                {url &&
                <div className="card-url"><a href={item.url} target='_blank'>{item.url}</a></div>
            }
            </div>
        </article>
        })
    }
    </>
  )
}

export default NewsCardFav