import React from 'react'

const ButtonView = ({type, className, onClick, text}) => {
  return (
    <button
    type={type}
    className={className}
    onClick={onClick}
    >
    {text}
    </button>
  )
}

export default ButtonView