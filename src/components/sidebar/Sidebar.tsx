

import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import { BiLogOut } from 'react-icons/bi'
import SidebartweetBtn from './SidebartweetBtn'
import RegisterOrLogin from '../dialogs/RegisterOrLogin'


function Sidebar() {
    
    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "/users/123",
            icon: FaUser
        },
        {
            label: "Logout",
            href: "/",
            icon: BiLogOut
        }
    ]
  return (
    <div className='col-span-1 h-full pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 flex flex-col justify-center lg:w-[230px]'>
                <SidebarLogo/>
                {items.map((item) => {
                    return (
                        <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon} />
                    )
                    
                })}
                <RegisterOrLogin triggerItem={<SidebartweetBtn />}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar