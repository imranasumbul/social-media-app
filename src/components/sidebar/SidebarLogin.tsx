"use client"

import React from 'react'
import { BiLogIn, BiLogOut } from 'react-icons/bi';

import {signIn, signOut, useSession} from "next-auth/react"
function SidebarLogin() {
  const {data : session} = useSession();
  if(session){
    return (
      
      <div onClick={() => signOut()} className='flex justify-between items-center space-x-2'>
      <div className='
      h-10
      w-10 
      cursor-pointer 
      rounded-lg 
      hover:bg-violet-300 
      hover:bg-opacity-20 
      flex 
      items-center 
      justify-center
      transition'>
         <BiLogOut size={22} />
      </div>
      <div className='
      w-[70%] 
      hidden 
      md:block
      
      cursor-pointer
      hover:text-white
      
      transition
      '>
          Logout
      </div>
  </div>

      
    )
  }


  return (
    
<div onClick={() => {
  console.log("kiki");
  signIn();
}} className='flex justify-between items-center space-x-2'>
      <div className='
      h-10
      w-10 
      cursor-pointer 
      rounded-lg 
      hover:bg-violet-300 
      hover:bg-opacity-20 
      flex 
      items-center 
      justify-center
      transition'>
         <BiLogIn size={22} />
      </div>
      <div className='
      w-[70%] 
      hidden 
      md:block
      
      cursor-pointer
      hover:text-white
      
      transition
      '>
          Login
      </div>
  </div>
  )
}

export default SidebarLogin