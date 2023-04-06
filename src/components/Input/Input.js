import React from 'react'

function Input({type, value, plc ,handleChange}) {
  return (
     <input defaultValue={value}  onChange={handleChange} type={type} placeholder={plc} className='py-2 px-3 mb-3 w-[100%] rounded-md border-2 outline-none ' />
  )
}

export default Input