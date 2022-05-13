import React, { useState } from 'react'
import '../assets/css/dropdown.css'
import angular from '../assets/images/image-138.png'
import reactjs from '../assets/images/image-140.png'
import vue from '../assets/images/image-141.png' 
import ItemList from './ItemList'

const Dropdown = () => {

    const [check, setCheck] = useState(false);
    const [angularValue, setAngularValue] = useState('');
    const [reactValue, setReactValue] = useState('');
    const [vueValue, setVueValue] = useState('');

    const handleClickDrop = (e) => {
        e.preventDefault();
        setCheck(!check);
    }

    const handleClickAngular = (e) => {
        e.preventDefault();
        setAngularValue('angular');
    }

    const handleClickReact = (e) => {
        e.preventDefault();
        setReactValue('reactjs');
    }

    const handleClickVue = (e) => {
        e.preventDefault();
        setVueValue('vuejs');
    }

  return (
    <section className='drop-section'>
        <div className="dropdown" onClick={handleClickDrop}>
            <span className='drop-text'>Select your news</span>
        </div>
        <ul className={`drop-menu ${check ? 'drop-active' : 'drop-disabled'}`}>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={angular} altImage='Angular Logo' liText='Angular' handleClickFramework={handleClickAngular}/>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={reactjs} altImage='ReactJS Logo' liText='Reactjs' handleClickFramework={handleClickReact}/>
            <ItemList liStyle='drop-item' divStyle='drop-framework' img={vue} altImage='VueJS Logo' liText='Vuejs' handleClickFramework={handleClickVue}/>
        </ul>
    </section>
  )
}

export default Dropdown