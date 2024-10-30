"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

function RecommendedButtons({userId}: {userId: string}) {
    const router = useRouter();
  return (
    <>
    <button onClick={() => router.push(`/api/users/${userId}`)}
     className='bg-dark-light-violet text-white py-1 hover:bg-dark-dark-violet rounded-lg'
        
        >View Profile</button>
    </>
  )
}

export default RecommendedButtons