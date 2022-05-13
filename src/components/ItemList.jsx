import React from 'react'

const ItemList = ({liStyle, divStyle, img, altImage, liText, value, handleClickFramework}) => {
  return (
    <li className={liStyle}>
        <div className={divStyle}>
            <img src={img} alt={altImage} />
            <span id={value} onClick={handleClickFramework}>{liText}</span>
        </div>
    </li>
  )
}

export default ItemList