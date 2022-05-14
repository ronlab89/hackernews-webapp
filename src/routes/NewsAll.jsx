import React, { useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import PaintNews from '../components/PaintNews';

const NewsAll = () => {

  let frameworkSet;
  const frameworkLocal = localStorage.getItem('news');

  if(frameworkLocal) {
    frameworkSet = frameworkLocal;
  }

  const [frameworkValue, setFrameworkValue] = useState(frameworkSet);

  console.log(frameworkValue);

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