"use client"

import React from 'react'
import ProfileFollowBtn from './ProfileFollowBtn'
import ProfileMessageBtn from './ProfileMessageBtn'
import { ProfileInterface } from './ProfileInterface'
// import { useSession } from 'next-auth/react'

function ProfileInfo({profileImage, userId, name, username, bio, followersCount, followingCount}: ProfileInterface) {
  //const session = useSession();
  console.log(name, username, followersCount, profileImage, bio, userId) //did it just to remove build error
  return (
    <>
    <div className='flex my-6 justify-around items-center'>
        <div className='space-y-4'>
          <div className='h-12 mt-4 w-12 rounded-full bg-green-400 border-[2px] border-white'>

          </div>
          <p>
            {name}<br/>
            <span className='text-neutral-400'>{username}</span>
            

          </p>
        </div>
        <div className='space-y-4'>
          <div className='flex flex-col justify-center items-center '>
            <p className='font-semibold text-2xl'>{followersCount}</p>
            <p>followers</p>
          </div >
          { }
         <ProfileFollowBtn />
        </div>
        <div className='space-y-4'>
          <div className='flex flex-col justify-center items-center '>
            <p className='font-semibold text-2xl'>{followingCount}</p>
            <p>followings</p>
          </div >
          <ProfileMessageBtn />
        </div>
        
        
      </div>
       
      
      
    
    
    
    </>
  )
}

export default ProfileInfo