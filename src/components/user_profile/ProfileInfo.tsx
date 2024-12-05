"use client"

import React from 'react'
import ProfileFollowBtn from './ProfileFollowBtn'
import ProfileMessageBtn from './ProfileMessageBtn'
import { ProfileInterface } from './ProfileInterface'
import { useSession } from 'next-auth/react'
import EditProfileBtn from './EditProfileBtn'

function ProfileInfo({profileImage, userId, name, username, bio, followersCount, followingCount}: ProfileInterface) {
  const session = useSession();
  console.log(session.data?.user.id)
  console.log(name, username, followersCount, profileImage, bio, userId) //did it just to remove build error
  return (
    <>
    <div className='grid grid-cols-3 p-3 w-[100%]'>
      <div className='flex flex-col justify-center items-center '>
        <div className='h-[55px] mt-4 w-[55px] rounded-full bg-green-400 border-[2px] border-white'>

        </div>
      </div>
      <div className='flex flex-col justify-center items-center' >
        <p className='font-semibold text-2xl'>{followersCount}</p>
        <p>followers</p>
      </div >
      <div className='flex flex-col justify-center items-center '>
        <p className='font-semibold text-2xl'>{followingCount}</p>
        <p>followings</p>
      </div >
      <div className='flex flex-col p-3 justify-center items-start text-left'>
       <p >
        {name}
        </p>
       <p className='text-sm text-neutral-400'>
        {username}
       </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {(session.data?.user.id === userId) ? null : <ProfileFollowBtn /> }
      </div>
      <div className='flex flex-col justify-center items-center'>
        {(session.data?.user.id === userId) ? <EditProfileBtn/> : <ProfileMessageBtn /> }
      </div>
      
    </div>
    

          {/* <p>
            {name}<br/>
            <span className='text-neutral-400'>{username}</span>
            

          </p>
        </div>
        <div className='space-y-4'>
          
          
         
        </div>
        <div className='space-y-4'>
          
          {(session.data?.user.id === userId) ? <EditProfileBtn /> : <ProfileFollowBtn /> }
        </div>
        
        
      </div>
       
      
       */}
    
    
    
    </>
  )
}

export default ProfileInfo