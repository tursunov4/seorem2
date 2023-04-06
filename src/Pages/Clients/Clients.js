import React, { useEffect, useState } from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import http from '../../axios'
import Button from '../../components/Button/Button'
import DeletModal from '../../components/Modal/DeletModal'
import ClientsModal from '../../components/Modal/ClientsModal'
import ClientsEditModal from '../../components/Modal/ClientsEditModal'
function Clients() {
  const [open , setOpen] = useState(false)
  const [openDelet , setOpenDelet] = useState(false)
  const [editOpen , setEditOpen] = useState(false)
  const [item , setItem] = useState({})
    const [state ,setState ] = useState([])
    const [id , setId] = useState('')
    useEffect(()=>{
        http.get('/clients/' ).then((res) =>{
            setState(res.data)
        })
    },[])
    const addSuppliers =()=>{
      setOpen(true)
    } 
    const deleteSupliers =(id) =>{
      setOpenDelet(true)
     setId(id)
    }
   const editSuppliers =(item) =>{
    setItem(item)

      setEditOpen(true)
  
   }
  return (
    <div>
      <ClientsEditModal open={editOpen} setOpen={setEditOpen} item ={item} />
      <DeletModal  api={'clients'} id={id} open={openDelet} setOpen={setOpenDelet} />
      <ClientsModal open={open} setOpen={setOpen}  />
        <div className='flex items-center mb-10 justify-between'>
            <h3 className='text-[24px] font-bold'>
                Clients :{state.length}
            </h3>
            <div>
              <Button onClick={addSuppliers} title={'Add Clients'}  bg={'bg-blue-500'} />
            </div>
        </div >
         <div className=' flex justify-center mb-5 text-center '>
         <table >
          <thead className='border-2'>
            <tr className='border-2'>
              <th className='py-3 px-4'>T/R</th>
              <th className='py-3 px-4' >Name</th>
              <th className='py-3 px-4'>Phone</th>
              <th className='py-3 px-4'>Address</th>
              <th className='py-3 px-4'>Image</th>
              <th className='py-3 px-4'>Actions</th>
            </tr>
          </thead>
          <tbody className='max-w-[100%] border-2'>
            {
                state?.map((item, index) =>(
            <tr className='border-2 bg-slate-100'  key={index} >
              <td  className='py-3 px-4' >{index + 1}</td>
              <td  className='py-3 px-4'>{item.name}</td>
              <td  className='py-3 px-4'>{item.phone_number}</td>
              <td className='py-3 px-4'>{item.address}</td>
              <td className='py-3 px-4'><img className='rounded-full' src={item.image} alt="hello" width={40} height={60} /> </td>
              <td className='py-3 px-4 flex gap-2' > 
              <RiDeleteBin5Line className='cursor-pointer' size={30}  color='red' onClick={ ()=>deleteSupliers(item.id)}   /> 
              <CiEdit onClick={() => editSuppliers(item)}  size={30} color='green' />
              </td>
            </tr>
                ))
            }
           
            
         
          </tbody>
        </table>
         </div>
         <div>
         
         </div>
    </div>
  )
}

export default Clients