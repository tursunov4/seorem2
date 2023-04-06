import React, { useEffect, useState } from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import http from '../../axios'
import Button from '../../components/Button/Button'
import DeletModal from '../../components/Modal/DeletModal'
import Modal from '../../components/Modal/Modal'
import EditModal from '../../components/Modal/EditModal'
function Suppliers() {
  const [open , setOpen] = useState(false)
  const [openDelet , setOpenDelet] = useState(false)
  const [editOpen , setEditOpen] = useState(false)
  const [item , setItem] = useState({})
    const [state ,setState ] = useState([])
    const [id , setId] = useState('')
    useEffect(()=>{
        http.get('/suppliers/' ).then((res) =>{
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
      <EditModal open={editOpen} setOpen={setEditOpen} item ={item} />
      <DeletModal api={'suppliers'} id={id} open={openDelet} setOpen={setOpenDelet} />
      <Modal  open={open} setOpen={setOpen}  />
        <div className='flex items-center mb-10 ml-[20%] justify-between'>
            <h3 className='text-[24px] font-bold'>
                Suppliers :{state.length}
            </h3>
            <div>
              <Button onClick={addSuppliers} title={'Add Suppliers'}  bg={'bg-blue-500'} />
            </div>
        </div >
         <div className=' flex justify-center mb-5   text-center '>
         <table className='table-auto border-2'>
          <thead className='border-2'>
            <tr className='border-2'>
              <th className='py-3 px-4' >T/R</th>
              <th className='py-3 px-4'>Username</th>
              <th className='py-3 px-4'>Email</th>
              <th className='py-3 px-4'>First Name</th>
              <th className='py-3 px-4'>Last Name</th>
              <th className='py-3 px-4'>Age</th>
              <th className='py-3 px-4'>Phone</th>
              <th className='py-3 px-4'>Address</th>
              <th className='py-3 px-4'>Image</th>
              <th className='py-3 px-4'>Actions</th>
            </tr>
          </thead>
          <tbody className='border-2'>
            {
                state?.map((item, index) =>(
            <tr className='border-2 ' key={index} >
              <td  className='py-3 px-4 bg-slate-100' >{index + 1}</td>
              <td  className='py-3 px-4 bg-slate-100'>{item.username}</td>
              <td  className='py-3 px-4 bg-slate-100'>{item.email}</td>
              <td  className='py-3 px-4 bg-slate-100'>{item.first_name}</td>
              <td  className='py-3 px-4 bg-slate-100'>{item.last_name}</td>
              <td className='py-3 px-4 bg-slate-100' >{item.age}</td>
              <td className='py-3 px-4 bg-slate-100'>{item.phone_number}</td>
              <td  className='py-3 px-4 bg-slate-100'>{item.address}</td>
              <td  className='py-3 px-4 bg-slate-100'><img className='rounded-full' src={item.image} alt="hello" width={40} height={60} /> </td>
              <td className=" className='py-3 px-4 bg-slate-100' gap-2 flex"> 
              <RiDeleteBin5Line  className='cursor-pointer' size={30}  color='red' onClick={ ()=>deleteSupliers(item.id)}   /> 
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

export default Suppliers