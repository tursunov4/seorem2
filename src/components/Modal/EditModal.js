import React, { useState } from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
import Input from '../Input/Input'
function EditModal({setOpen, open , item}) {
    const [username , setUsername] = useState('')
    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname ] = useState('')
    const [age ,setAge]  = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [number , setNumber] = useState('')
    console.log(item.image)
    const submitForm =(e)=>{
        const usernameValue = username ? username :item.username
        const firsnamevalu = firstname ? firstname : item.first_name      
        const lastnamevalu = lastname ? lastname : item.last_name      
        const ageval = address ? age :item.age
        const emailVal = email ? email : item.email
        const addressVal = address ? address : item.address
        const numberVal = number ? number : item.phone_number
        e.preventDefault()
        setOpen(false)
        const form = new FormData()
        form.append('username' , usernameValue)
        form.append('first_name' , firsnamevalu)
        form.append('last_name' , lastnamevalu)
        form.append('age' , ageval )
        form.append('email',emailVal )
        form.append('address' , addressVal)
        form.append('phone_number' , numberVal)
        http.put(`/suppliers/${item.id}/` , form).then((res) =>{
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
        <h1 className='text-[30px] text-blue-700 mx-auto mb-6 font-bold'>Edit Suppliers</h1>
        <form onSubmit={submitForm} id='formsave'>
        <Input  value={item.username} plc={'enter your username'} handleChange={(e)=>setUsername(e.target.value)} type={'text'} />
        <Input value={item.first_name} plc={'enter your firstname '} handleChange={(e)=>setFirstname(e.target.value)} type={'text'} />
        <Input value={item.last_name} plc={'enter your lastname '} handleChange={(e)=>setLastname(e.target.value)} type={'text'} />
        <Input  value={item.email} plc={'enter your email '} handleChange={(e)=>setEmail(e.target.value)} type={'email'} />
        <Input value={item.age} plc={'enter your age '} handleChange={(e)=>setAge(e.target.value)} type={'number'} />
        <Input value={item.address} plc={'enter your address '} handleChange={(e)=>setAddress(e.target.value)} type={'address'} />
        <Input value={item.phone_number} plc={'enter your phone number '} handleChange={(e)=>setNumber(e.target.value)} type={'number'} />
        
        </form>
        <button form='formsave' className='py-2 px-10 mt-4  bg-blue-500  rounded-md block mx-auto '>Save</button>

    </div>

     </ReactModal>
  )
}

export default EditModal