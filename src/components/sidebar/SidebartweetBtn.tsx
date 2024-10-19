"use client";

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaFeather } from 'react-icons/fa'

function SidebartweetBtn() {
    const router = useRouter();
    function tweetBtnOnClick(){
        router.push("/hi");
    }
  return (
        <>
        <div className='p-4'>
            <button onClick={tweetBtnOnClick} className=' lg:block hover:bg-violet-800 text-lg rounded-full hidden w-[100%] py-2 bg-violet-600'>Post</button>
            <div onClick={tweetBtnOnClick} className=' lg:hidden flex justify-center items-center hover:bg-violet-800 rounded-full p-2  bg-violet-600 '>
                <FaFeather size={24} color='white' />
            </div>
        </div>
        
        </>
        
    

    
  )
}

export default SidebartweetBtn