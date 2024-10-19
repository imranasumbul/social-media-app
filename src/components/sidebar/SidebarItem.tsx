

import React from 'react'
import { IconType } from 'react-icons'
import SidebarItemWrapper from './SidebarItemWrapper'
import { useRouter } from 'next/router'
interface sidebarItemProps {
    label: string,
    href: string,
    icon: IconType
}

function SidebarItem({label, href, icon:Icon}: sidebarItemProps) {
    
    return (
        
            <SidebarItemWrapper icon={<Icon size={28} color='white' />} text={label} />
           
        
    )
}

export default SidebarItem