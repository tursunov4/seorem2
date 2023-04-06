import React from 'react'

function Button({title ,onClick, bg , form}) {
  return (
     <button onClick={onClick} form={form} className={`px-5 py-3 rounded-md block mx-auto mt-3 text-white font-bold ${bg} hover:opacity-80 active:opacity-60 `} >{title}</button>
  )
}

export default Button