import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import PaintNews from '../components/PaintNews';

import { favoriteContext } from '../context/favoriteContext';

const NewsAll = () => {

  const {favoriteNews, setFavoriteNews} = useContext(favoriteContext);

  let frameworkSet;
  const frameworkLocal = localStorage.getItem('news');

  if(frameworkLocal) {
    frameworkSet = frameworkLocal;
  }

  const [frameworkValue, setFrameworkValue] = useState(frameworkSet);

//Local Storage Set
  useEffect(() => {
    localStorage.setItem('news', frameworkValue);
  }, [frameworkValue]);


  return (
    <>
      <Dropdown setFrameworkValue={setFrameworkValue}/>
      <PaintNews frameworkValue={frameworkValue}/>
    </>
  )
}

export default NewsAll