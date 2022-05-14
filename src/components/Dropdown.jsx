import React, { useState, useEffect } from 'react'
import { useGetApi } from '../hooks/useGetApi'

import '../assets/css/dropdown.css'
import angular from '../assets/images/image-138.png'
import reactjs from '../assets/images/image-140.png'
import vue from '../assets/images/image-141.png' 

import ItemList from './ItemList'
import NewsCard from './NewsCard'
import Loading from './Loading'

const Dropdown = () => {

    const [check, setCheck] = useState(false);
    const [frameworkValue, setFrameworkValue] = useState(null);

    const {data, error, loading, newsGetData} = useGetApi();

    const handleClickDrop = (e) => {
        e.preventDefault();
        setCheck(!check);
    }

    const handleClickFrameworks = (e) => {
        e.preventDefault();
        const idFramework = e.target.id;
        idFramework !== '' && setFrameworkValue(idFramework);
        setCheck(!check); 
    }

    useEffect(() => {
        if(frameworkValue){
            newsGetData(frameworkValue);
        }
    }, [frameworkValue])

    console.log(data);

  return (
    <>
    <section className='drop-section'>
        <div className="dropdown" onClick={handleClickDrop}>
            <span className='drop-text'>Select your news</span>
        </div>
        <ul className={`drop-menu ${check ? 'drop-active' : 'drop-disabled'}`}>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={angular} altImage='Angular Logo' liText='Angular' value={'angular'} handleClickFramework={handleClickFrameworks}/>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={reactjs} altImage='ReactJS Logo' liText='Reactjs' value={'reactjs'} handleClickFramework={handleClickFrameworks}/>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={vue} altImage='VueJS Logo' liText='Vuejs' value={'vuejs'} handleClickFramework={handleClickFrameworks}/>
        </ul>
    </section>
    <section className='news-section'>
        {
            loading && 
            <Loading />    
        }{
            (data !== null) ?
            <NewsCard data={data}/> :
            <h1 className='welcome'>Welcome to the News App for frontend developers</h1>
        }
    </section>
    </>
  )
}

export default Dropdown