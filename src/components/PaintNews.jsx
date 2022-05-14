import React from 'react'
import { useGetApi } from '../hooks/useGetApi';

import NewsCard from './NewsCard'
import Loading from './Loading'

const PaintNews = ({frameworkValue}) => {

    const {data, error, loading, newsGetData} = useGetApi(frameworkValue);

  return (
    <section className='news-section'>
        {
            loading && 
            <Loading />    
        }{
            (data !== null) ?
            <section className='card-container'>
                {
                    data.map(news => {
                        if(news.author !== null && news.story_title !== null && news.story_url !== null && news.created_at !== null){
                            return <NewsCard key={news.created_at_i} news={news}/>
                        }
                    })
                }
            </section>
            :
            <h1 className='welcome'>Welcome to the News App for frontend developers</h1>
        }
    </section>

  )
}

export default PaintNews