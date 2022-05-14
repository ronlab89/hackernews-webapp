import React from 'react'
import { useGetApi } from '../hooks/useGetApi';
import {nanoid} from 'nanoid'
import NewsCard from './NewsCard'
import Loading from './Loading'
import ButtonView from './ButtonView'

const PaintNews = ({frameworkValue}) => {

    const {data, loading, handleMore} = useGetApi(frameworkValue);

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
                            return <NewsCard key={nanoid(10)} news={news}/>
                        }
                    })
                }
                <div>
                <ButtonView type='button' className='btn-more' onClick={handleMore} text='More news'/>
                </div>
            </section>
            :
            <h1 className='welcome'>Welcome to the News App for frontend developers</h1>
        }
    </section>

  )
}

export default PaintNews