import React from 'react'

const ItemList = ({liStyle, divStyle, img, altImage, liText}) => {
  return (
    <li className={liStyle}>
        <div className={divStyle}>
            <img src={img} alt={altImage} />
            <span>{liText}</span>
        </div>
    </li>
  )
}

export default ItemList