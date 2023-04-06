import React from 'react'
import { useNavigate } from 'react-router-dom'
function Access() {
    const navigate = useNavigate()
  return (
    <div className='accses'>
       <div className='flex items-center justify-center h-full'>
        <div>
        <h2 className='accses-text font-bold mb-5'>Welcome our company</h2>
       <ul className='flex items-center justify-center gap-8'>
        <li>
            <button onClick={()=>navigate('/register')} className='px-5 py-2 bg-blue-500   text-white font-bold rounded-md hover:opacity-80 active:opacity-60'>Register</button>
        </li>
        <li>
            <button onClick={() => navigate('/login')} className='px-5 py-2 bg-red-500   text-white font-bold rounded-md hover:opacity-80 active:opacity-60'>Login</button>
        </li>
       </ul>
        </div>
       </div>
    </div>
  
  )
}

export default Access