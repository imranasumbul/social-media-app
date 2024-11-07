"use client"

import React from 'react'

import BackArrow from './BackArrow'


function Header({label}: {label: string}) {
  
  return (
    <div className='flex items-center border-neutral-700 border-b-[2px]'>
        <BackArrow />
        <span className=''>{label}</span>
        
    </div>
  )
}

export default Header