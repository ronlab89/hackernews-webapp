import React, { useState } from 'react'
import '../assets/css/dropdown.css'
import angular from '../assets/images/image-138.png'
import reactjs from '../assets/images/image-140.png'
import vue from '../assets/images/image-141.png' 

const Dropdown = () => {

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