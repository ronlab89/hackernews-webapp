import React from 'react'
import '../assets/css/dropdown.css'
import angular from '../assets/images/image-138.png'
import reactjs from '../assets/images/image-140.png'
import vue from '../assets/images/image-141.png' 

const Dropdown = () => {
  return (
    <section className='drop-section'>
        <div className="dropdown">
            <span className='drop-text'>Select your news</span>
        </div>
        <input type="checkbox" className='drop-check' id="drop" />
        <ul className='drop-menu'>
            <li className='drop-item'>
                <div className="drop-framework">
                    <img src={angular} alt="Angular Logo" />
                    <span>Angular</span>
                </div>
            </li>
            <li className='drop-item'>
                <div className="drop-framework"> 
                    <img src={reactjs} alt="ReactJS Logo" />
                    <span>Reactjs</span>
                </div>
            </li>
            <li className='drop-item'>
                <div className="drop-framework">
                    <img src={vue} alt="VueJS Logo" />
                    <span>Vuejs</span>
                </div>
            </li>

        </ul>
    </section>
  )
}

export default Dropdown