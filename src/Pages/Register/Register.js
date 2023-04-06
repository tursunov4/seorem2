import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../../axios'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Context } from '../../Context/Context'
function Register() {
    const { bar} = useContext(Context)
    console.log(bar);
    const navigate = useNavigate()
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [password2 , setPassword2] = useState('')
    const handleSubmit =(e) =>{
        e.preventDefault()
        const form = new FormData()
        form.append('username', username)
        form.append('password', password)
        form.append('password2' , password2)
        http.post('/register/' , form ).then((res)=>{
         if(res.status === 201){
          navigate('/mainpage')         
         }
        }).catch((err) =>{
            console.log(err);
        })
    }
  return (
    <div className='flex items-center justify-center mt-[120px]'>
     <div className='py-12  w-[440px] rounded-md bg-slate-200 px-10'>
      <h2 className='text-[33px]  font-bold mb-7 text-center'>Register</h2>
        <form onSubmit={handleSubmit} id='form' >
         <Input handleChange={(e) =>setUsername(e.target.value)} type={'text'} plc={'Enter your username'}/>
         <Input  handleChange={(e) =>setPassword(e.target.value)} type={'password'} plc={'Enter your password'}/>
         <Input  handleChange={(e) =>setPassword2(e.target.value)} type={'password'} plc={'Repeat your password'}/>
         <Button form={'form'} title={'Submit'}  bg={'bg-green-500'} />
        </form>
     </div>
     
    </div>
  )
}

export default Register