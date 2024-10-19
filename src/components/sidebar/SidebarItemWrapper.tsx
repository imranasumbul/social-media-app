import { useRouter } from 'next/navigation'
import React from 'react'

interface sideBarWrapperProps {
    icon: React.ReactNode,
    text: string,
    href: string

}
function SidebarItemWrapper({icon, text, href}: sideBarWrapperProps) {
    const router = useRouter();
  return (
    <>
    <div onClick={() => router.push(href)} className='flex justify-between items-center space-x-2'>
        <div className='
        h-14
        w-14 
        cursor-pointer 
        rounded-lg 
        hover:bg-violet-300 
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