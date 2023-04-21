import React from 'react'

const Filters = ({filter, index,style,}) => {
  return (
    <li key={index} className='filter' style={style} onClick={() => acitveFilter(filter)}>{filter}</li>
  )
}

export default Filters