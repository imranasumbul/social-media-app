"use client"

import React from 'react'

import BackArrow from './BackArrow'
import { useSession } from 'next-auth/react'

function Header({label}: {label: string}) {
  const session = useSession();
  return (
    <div className='flex items-center border-neutral-700 border-b-[2px]'>
        <BackArrow />
        <span className=''>{label}</span>
        {JSON.stringify(session)}
    </div>
  )
}

export default Header