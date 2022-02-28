import React, { useEffect, useRef } from 'react'

const UnControlledInput = () => {

    // use for element ref
    const inputRef = useRef(null)

    useEffect(()=>{
        console.log(inputRef.current?.value);
        if(inputRef.current){
            inputRef.current.value ="Test"
            inputRef.current.focus();
        }
        
    },[])
    
  return (
    <>
    <input  type="text" ref={inputRef} className='form-control mb-5' placeholder='Un controlled Input' />
    </>
  )
}

export default UnControlledInput