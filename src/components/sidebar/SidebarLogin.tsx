"use client"

import React from 'react'
import SidebarItemWrapper from './SidebarItemWrapper'
import { BiLogIn, BiLogOut } from 'react-icons/bi';

import {useSession} from "next-auth/react"
function SidebarLogin() {
  const {data : session} = useSession();
  if(session){
    return (
      
  
      
      <SidebarItemWrapper href={'/logout'} icon={<BiLogOut size={22} />} text={"Logout"} />
      
    )
  }


  return (
    

    
    <SidebarItemWrapper href={'/login'} icon={<BiLogIn size={22} />} text={"Login"} />
    
  )
}

export default SidebarLogin