import React, { useState } from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
import Input from '../Input/Input'
function ClientsEditModal({setOpen, open , item}) {
    const [username , setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [number , setNumber] = useState('')
    const [image ,setImage] = useState({})
    console.log(item.image)
    const submitForm =(e)=>{
        const usernameValue = username ? username :item.name
        const addressVal = address ? address : item.address
        const numberVal = number ? number : item.phone_number
        e.preventDefault()
        setOpen(false)
        const form = new FormData()
        form.append('name' , usernameValue)
        form.append('address' , addressVal)
        form.append('phone_number' , numberVal)
        form.append('image' , image)
        http.put(`/clients/${item.id}/` , form).then((res) =>{
             if(res.status ===200) {
                window.location.reload()
             }
        })
    }
  return (
     <ReactModal   onRequestClose={()=>setOpen(false)} isOpen={open} style ={
        {
          overlay :{
            background: 'rgba(0,0,0,0.4)'
          },
        content:{
         width :"500px",
         padding :'20px',
         margin:"0 auto",
         borderRadius :'15px'
        }
      }    }   >
    <div>
        <h1 className='text-[30px] text-blue-700 mx-auto mb-6 font-bold'>Edit Clients</h1>
        <form onSubmit={submitForm} id='formsave'>
        <Input  value={item.name} plc={'enter your username'} handleChange={(e)=>setUsername(e.target.value)} type={'text'} />
        <Input value={item.address} plc={'enter your address '} handleChange={(e)=>setAddress(e.target.value)} type={'address'} />
        <Input value={item.phone_number} plc={'enter your phone number '} handleChange={(e)=>setNumber(e.target.value)} type={'number'} />
        <input  onChange={(e) => setImage(e.target.files[0])} type="file" />
        </form>
        <button form='formsave' className='py-2 px-10 mt-4  bg-blue-500  rounded-md block mx-auto '>Save</button>

    </div>

     </ReactModal>
  )
}

export default ClientsEditModal