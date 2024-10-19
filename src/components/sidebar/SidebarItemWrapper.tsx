import React from 'react'
import { IconType } from 'react-icons'
interface sideBarWrapperProps {
    icon: React.ReactNode,
    text: string

}
function SidebarItemWrapper({icon, text}: sideBarWrapperProps) {

  return (
    <>
    <div className='flex justify-between items-center space-x-2'>
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
            {icon}
        </div>
        <div className='
        w-[70%] 
        hidden 
        lg:block
        text-lg
        '>
            {text}
        </div>
    </div>

    
    </>

  )
}

export default SidebarItemWrapper