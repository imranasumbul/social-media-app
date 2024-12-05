
import React from 'react'
import { IconType } from 'react-icons'
import SidebarItemWrapper from './SidebarItemWrapper'

interface sidebarItemProps {
    label: string,
    href: string,
    icon: IconType
}

function SidebarItem({label, href, icon:Icon}: sidebarItemProps) {
    
    return (
        
            <SidebarItemWrapper href={href} icon={<Icon size={22} />} text={label} />
           
        
    )
}

export default SidebarItem