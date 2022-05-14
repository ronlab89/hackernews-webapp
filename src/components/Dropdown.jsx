import React, { useState, useEffect } from 'react'

import '../assets/css/dropdown.css'
import angular from '../assets/images/image-138.png'
import reactjs from '../assets/images/image-140.png'
import vue from '../assets/images/image-141.png' 

import ItemList from './ItemList'


const Dropdown = ({setFrameworkValue}) => {

    const [check, setCheck] = useState(false);

    const handleClickDrop = (e) => {
        e.preventDefault();
        setCheck(!check);
    }

  return (
    <section className='drop-section'>
        <div className="dropdown" onClick={handleClickDrop}>
            <span className='drop-text'>Select your news</span>
        </div>
        <ul className={`drop-menu ${check ? 'drop-active' : 'drop-disabled'}`}>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={angular} altImage='Angular Logo' liText='Angular' value={'angular'} setFrameworkValue={setFrameworkValue} setCheck={setCheck} check={check}/>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={reactjs} altImage='ReactJS Logo' liText='Reactjs' value={'reactjs'} setFrameworkValue={setFrameworkValue} setCheck={setCheck} check={check}/>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={vue} altImage='VueJS Logo' liText='Vuejs' value={'vuejs'} setFrameworkValue={setFrameworkValue} setCheck={setCheck} check={check}/>
        </ul>
    </section>
  )
}

export default Dropdown