import React from 'react'
import { BsTwitter } from 'react-icons/bs'



function SidebarLogo() {
  return (
    <div className='
        h-14
        w-14 
        cursor-pointer 
        rounded-lg 
        hover:bg-blue-300 
        hover:bg-opacity-20 
        flex 
        items-center 
        justify-center
        transition'>
            <BsTwitter size={28} color='white' />
        </div>
    
  )
}

export default SidebarLogo