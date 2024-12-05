"use client";


import React from 'react'
import { FaFeather } from 'react-icons/fa'

function SidebartweetBtn() {
    
    
  return (
        <>
        <div className='p-2'>
            <div className=' md:block hover:bg-dark-dark-violet text-lg font-normal rounded-lg hidden w-[100%] py-1 bg-dark-light-violet'>Post</div>
            <div className='font-semibold md:hidden flex justify-center items-center hover:bg-dark-dark-violet rounded-full p-2 bg-dark-light-violet '>
                <FaFeather size={20} />
            </div>
        </div>
        
        </>
        
    

    
  )
}

export default SidebartweetBtn