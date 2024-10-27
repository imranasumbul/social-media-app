"use client"

import React from 'react'
import SidebarItemWrapper from './SidebarItemWrapper'
import { BiLogIn, BiLogOut } from 'react-icons/bi';

import {useSession, signIn, signOut} from "next-auth/react"
function SidebarLogin() {
  const {data : session} = useSession();
  if(session){
    return (
      <div onClick={() => signOut()}>
  
      
      <SidebarItemWrapper href={'/logout'} icon={<BiLogOut size={22} />} text={"Logout"} />
      </div>
    )
  }


  return (
    <div onClick={() => signIn()}>

    
    <SidebarItemWrapper href={'/login'} icon={<BiLogIn size={22} />} text={"Login"} />
    </div>
  )
}

export default SidebarLogin