import React from 'react'

const Dish = ({name, price, img}) => {
  return (
    <div className='dish'>
    <div className='dish-img'>
        <img src={img} alt={name} />
    </div>
    <div className="dish-info">
    <p className='dish-name'>{name}</p>
    <p className='dish-price'>{price}</p>
    </div>
    </div>
  )
}

export default Dish