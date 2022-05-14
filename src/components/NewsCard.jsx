import React, { useState } from 'react'
import moment from 'moment';
import '../assets/css/newsCard.css'
import timeIcon from '../assets/images/iconmonstr-time-2.svg'
import heart from '../assets/images/iconmonstr-favorite-2.svg'
import heartFav from '../assets/images/iconmonstr-favorite-3.svg'
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {author, story_title, story_url, created_at} = news;

    const [fav, setFav] = useState(false);
    const [url, setUrl] = useState(false);

    const handleClickFav = (e) => {
        e.preventDefault();
        setFav(!fav);
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
                        <img src={fav ? heartFav : heart} alt="Heart Logo" />
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