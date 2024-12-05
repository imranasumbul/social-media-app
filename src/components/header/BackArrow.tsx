
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

async function BackArrow() {
  return (
    <>
    
    <div className='h-10 w-10 rounded-lg md:flex hidden hover:bg-opacity-10 hover:bg-violet-200 justify-center items-center '>
        <BiArrowBack size={22}/>
        
         
    </div>
    </>
  )
}

export default BackArrow