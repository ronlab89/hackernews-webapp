import React, { useContext, useState } from 'react'
import moment from 'moment';
import '../assets/css/newsCard.css'
import timeIcon from '../assets/images/iconmonstr-time-2.svg'
import favNews from '../assets/images/iconmonstr-favorite-3.svg'

import { favoriteContext } from '../context/favoriteContext';

const NewsCard = ({news}, key) => {
    const {favoriteNews, setFavoriteNews} = useContext(favoriteContext);
    const {author, story_title, story_url, created_at} = news;

    console.log('nanoid: ', key);
    console.log('id: ', news.nanoid);

    const [url, setUrl] = useState(false);

    const handleClickFav = (e) => {
        e.preventDefault();
        setFavoriteNews(favoriteNews.filter(item => item.author !== news.author));
    }

    const handleClickUrl = (e) => {
        e.preventDefault();
        setUrl(!url);
    }

  return (
    <article className='general-card'>    
            <div className="card">
            <div className="card-body">
                <div className="card-info" onClick={handleClickUrl}>
                    <img src={timeIcon} alt="Clock Icon" className='time-icon' />
                    <span>{moment().fromNow(created_at)} by {author}</span>
                    <p>{story_title}</p>
                </div>
                <div className="card-fav">
                    <div className="favorite" onClick={handleClickFav}>
                        <img src={favNews} alt="Heart Logo" />
                    </div>
                </div>
            </div>
            {url &&
            <div className="card-url"><a href={story_url} target='_blank'>{story_url}</a></div>
            }
        </div>
    </article>
  )
}

export default NewsCard