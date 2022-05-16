import React, { useContext, useState } from 'react'
import moment from 'moment';
import '../assets/css/newsCard.css'
import timeIcon from '../assets/images/iconmonstr-time-2.svg'
import heartFav from '../assets/images/iconmonstr-favorite-3.svg'

import { favoriteContext } from '../context/favoriteContext';


const Favorites = () => {

  const {favoritesCard} = useContext(favoriteContext);

    const [url, setUrl] = useState(false);

    const handleClickUrl = (e) => {
        e.preventDefault();
        setUrl(!url);
    }
  
  return (
    <section className='news-section'>
      <section className='card-container'>
        <>
    {
        favoritesCard.map(item => {
          return (
            <article className='general-card' key={item.id}>    
                <div className="card">
                <div className="card-body">
                    <div className="card-info" onClick={handleClickUrl}>
                        <img src={timeIcon} alt="Clock Icon" className='time-icon' />
                        <span>{moment().fromNow(item.created)} by {item.author}</span>
                        <p>{item.story}</p>
                    </div>
                    <div className="card-fav">
                        <div className="">
                            <img src={heartFav} alt="Heart Logo" />
                        </div>
                    </div>
                </div>
                {url &&
                <div className="card-url"><a href={item.url} target='_blank'>{item.url}</a></div>
            }
            </div>
        </article>
        )
        })
    }
    
    </>
      </section>
    </section>
  )
}

export default Favorites