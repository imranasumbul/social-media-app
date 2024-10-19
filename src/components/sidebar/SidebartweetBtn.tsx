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
        <button onClick={tweetBtnOnClick} className='lg:block hover:bg-sky-500 text-lg rounded-full hidden w-[100%] py-2 bg-blue-400'>Post</button>
        <div onClick={tweetBtnOnClick} className='lg:hidden flex justify-center items-center hover:bg-sky-500 rounded-full p-2  bg-blue-400 '>
            <FaFeather size={24} color='white' />
        </div>
        </>
        
    

    
  )
}

export default SidebartweetBtn