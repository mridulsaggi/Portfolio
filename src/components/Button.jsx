import React from 'react'

const Button = ({name,isbeam=false,containerclass}) => {
  return (
    <button className={`btn ${containerclass}`}>
      {isbeam &&
        <span className='flex relative h-3 w-3'>
            <span className='btn-ping'/>
            <span className='btn-ping_dot'/>
        </span>
      }
      {name}
    </button>
  )
}

export default Button
