import React from 'react'
import {MdSupportAgent} from 'react-icons/md'
import {IoPersonSharp} from 'react-icons/io5'
import {AiFillSetting} from 'react-icons/ai'
import {  NavLink, Outlet } from 'react-router-dom'
import Header from '../Header/Header'
function Sidebar() {
  return (
  <div className="flex gap-2">
      <div className='w-[20%] sticky top-0 bg-slate-100 h-[100vh] pt-10 px-4'>
            <ul  >
                <NavLink to={'/mainpage'}  className='flex  items-center bg-white p-2 rounded-md mb-6  gap-5 hover:bg-slate-50 active:bg-slate-100'>
                     <MdSupportAgent size={20} />
                    <span className='font-bold text-[20px] '>Suppiers</span>
                </NavLink>
                <NavLink to={'/mainpage/clients'}  className='flex  items-center bg-white p-2 rounded-md mb-6  gap-5 hover:bg-slate-50 active:bg-slate-100'>
                     <IoPersonSharp size={20} />
                    <span className='font-bold text-[20px] '>Clients</span>
                </NavLink>
                <NavLink  className='flex  items-center bg-white p-2 rounded-md mb-6  gap-5 hover:bg-slate-50 active:bg-slate-100'>
                     <AiFillSetting size={20} />
                    <span className='font-bold text-[20px] '>Settings</span>
                </NavLink>
            </ul>           
            
    </div>
    <div className='w-[80%] mr-4'> 
        <Header/>
    <Outlet />
    </div>

  </div>
  )
}

export default Sidebar