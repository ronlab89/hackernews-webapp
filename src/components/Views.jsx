import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/views.css'
import ButtonView from './ButtonView'

const Views = () => {

  return (
    <nav className='views'>
      <NavLink to={'/'}>
        <ButtonView className='btn-views' text='All'/>
      </NavLink>
      <NavLink to={'/favorites'}>
        <ButtonView className='btn-views' text='My faves'/>
      </NavLink>
    </nav>
  )
}

export default Views