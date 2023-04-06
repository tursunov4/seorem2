import React from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
import Button from '../Button/Button'
function DeletModal({id , setOpen , api, open}) {
    const deleteSupliers =() =>{
        http.delete(`/${api}/${id}`).then((res) =>{
           if(res.status === 204){
            setOpen(false)
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
         height:'200px',
         margin:"0 auto",
         borderRadius :'15px'
        }
      }    }   >
      <div>
        <h2 className=' text-[30px] text-blue-600 text-center mb-5 font-bold'>Caution</h2>
      <div className='flex justify-between'>
        <Button onClick={deleteSupliers} bg={'bg-red-500'} title={'Really Delet'}  />
        <Button onClick={() => setOpen(false)} bg={'bg-green-500'} title={'Close'}  />
      </div>
      </div>

     </ReactModal>
  )
}

export default DeletModal