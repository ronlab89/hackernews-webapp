import React from 'react'
import '../assets/css/views.css'
import ButtonView from './ButtonView'

const Views = () => {

    const handleClickAll = (e) => {
        e.preventDefault();
        console.log('Click from All');
    }

    const handleClickFav = (e) => {
        e.preventDefault();
        console.log('Click from favorites');
    }

  return (
    <section className='views'>
        <ButtonView type='button' className='btn-all' onClick={handleClickAll} text='All'/>
        <ButtonView type='button' className='btn-all' onClick={handleClickFav} text='My faves'/>
    </section>
  )
}

export default Views