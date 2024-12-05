import React from 'react'
import Recommended from './Recommended'
import { useSession } from 'next-auth/react'

function FollowBar() {
  const session = useSession();
  console.log(session)
  return (
    <div className='px-6 hidden lg:block'>
        <div className='w-[100%] py-2 text-center bg-neutral-800 rounded-lg'>
            Who to follow
            
        </div>
        <Recommended />
        
    </div>
  )
}

export default FollowBar