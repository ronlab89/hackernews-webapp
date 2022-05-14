import React from 'react'

const ItemList = ({liStyle, divStyle, img, altImage, liText, value, setFrameworkValue, setCheck, check}) => {

  const handleClickFrameworks = (e) => {
    e.preventDefault();
    const idFramework = e.target.id;
    idFramework !== '' && setFrameworkValue(idFramework);
    setCheck(!check); 
}

  return (
    <li className={liStyle}>
        <div className={divStyle}>
            <img src={img} alt={altImage} />
            <span id={value} onClick={handleClickFrameworks}>{liText}</span>
        </div>
    </li>
  )
}

export default ItemList