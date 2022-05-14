import React, { useState } from 'react'
import '../assets/css/newsCard.css'
import timeIcon from '../assets/images/iconmonstr-time-2.svg'
import heart from '../assets/images/iconmonstr-favorite-2.svg'
import heartFav from '../assets/images/iconmonstr-favorite-3.svg'

const NewsCard = () => {

    const [fav, setFav] = useState(false);

    const handleClickFav = (e) => {
        e.preventDefault();
        setFav(!fav);
    }

  return (
    <article className='card-container'>
        <div className="card">
            <div className="card-body">
                <div className="card-info">
                    <img src={timeIcon} alt="Clock Icon" />
                    <span>Edit ago 3 hours</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="card-fav">
                    <div className="favorite" onClick={handleClickFav}>
                        <img src={fav ? heartFav : heart} alt="Heart Logo" />
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default NewsCard