import React from 'react'

const ItemList = ({liStyle, divStyle, img, altImage, liText, handleClickFramework}) => {
  return (
    <li className={liStyle} onClick={handleClickFramework}>
        <div className={divStyle}>
            <img src={img} alt={altImage} />
            <span>{liText}</span>
        </div>
    </li>
  )
}

export default ItemList