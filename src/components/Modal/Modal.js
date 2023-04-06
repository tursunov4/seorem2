import {BsImage} from 'react-icons/bs'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
import Input from '../Input/Input'
function Modal({setOpen, open}) {
    const [username , setUsername] = useState('')
    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname ] = useState('')
    const [age ,setAge]  = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [number , setNumber] = useState('')
    const [image , setImage] = useState({})
    const submitForm =(e)=>{
        e.preventDefault()
        setOpen(false)
        const form = new FormData()
        form.append('username' , username)
        form.append('first_name' , firstname)
        form.append('last_name' , lastname )
        form.append('age' , age )
        form.append('email',email )
        form.append('address' , address)
        form.append('phone_number' , number)
        form.append('image' , image)
        http.post('/suppliers/' , form).then((res) =>{
            if(res.status === 201){
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
        <h1 className='text-[30px] text-blue-700 mx-auto mb-6 font-bold'>Add Suppliers</h1>
        <form onSubmit={submitForm} id='formsave'>
        <Input plc={'enter your username'} handleChange={(e)=>setUsername(e.target.value)} type={'text'} />
        <Input plc={'enter your firstname '} handleChange={(e)=>setFirstname(e.target.value)} type={'text'} />
        <Input plc={'enter your lastname '} handleChange={(e)=>setLastname(e.target.value)} type={'text'} />
        <Input plc={'enter your email '} handleChange={(e)=>setEmail(e.target.value)} type={'email'} />
        <Input plc={'enter your age '} handleChange={(e)=>setAge(e.target.value)} type={'number'} />
        <Input plc={'enter your address '} handleChange={(e)=>setAddress(e.target.value)} type={'address'} />
        <Input plc={'enter your phone number '} handleChange={(e)=>setNumber(e.target.value)} type={'number'} />
         <label className='flex gap-3 items-center mb-6' >
          <span className='text-blue-800'>Choose image</span>
            <BsImage size={35} color={'blue'}/>
          <input  className='w-0 h-0 overflow-hidden' onChange={(e)=> setImage(e.target.files[0])} type="file"  />
         </label>
        </form>
        <button form='formsave' className='py-2 px-10 mt-4  bg-blue-500  rounded-md block mx-auto '>Save</button>

    </div>

     </ReactModal>
  )
}

export default Modal