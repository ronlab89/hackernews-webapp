import React from 'react'
import '../assets/css/dropdown.css'
import angular from '../assets/images/image-138.png'
import reactjs from '../assets/images/image-140.png'
import vue from '../assets/images/image-141.png' 

const Dropdown = () => {
  return (
    <section className='drop-section'>
        {/* <form>
            <select className='dropdown'>
                <option className='drop-text' hidden selected>Select your news</option>
                <option value="angular" className='drop-text'>
                    <img src={angular} alt="Angular Logo" />
                    <span>Angular</span>
                </option>
                <option value="reactjs" className='drop-text'>
                    <img src={reactjs} alt="ReactJS Logo" />
                    <span>Reactjs</span>
                </option>
                <option value="vuejs" className='drop-text'>
                    <img src={vue} alt="VueJS Logo" />
                    <span>Vuejs</span>
                </option>
            </select>
        </form> */}

        <div className="dropdown">
            <span className='drop-text'>Select your news</span>
        </div>
        <input type="checkbox" className='drop-check' id="drop" />
        <ul className='drop-menu'>
            <li className='drop-item'>
                <img src={angular} alt="Angular Logo" />
                <span>Angular</span>
            </li>
            <li className='drop-item'>
                <img src={reactjs} alt="ReactJS Logo" />
                <span>Reactjs</span>
            </li>
            <li className='drop-item'>
                <img src={vue} alt="VueJS Logo" />
                <span>Vuejs</span>
            </li>

        </ul>
    </section>
  )
}

export default Dropdown