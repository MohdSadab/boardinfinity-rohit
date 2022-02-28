import React from 'react'

// controlled input form
const Input = ({onChangeHandler,type="text"}) => {
  return (
    <input  type={type} onChange={onChangeHandler}  className='form-control'/>
  )
}

export default Input