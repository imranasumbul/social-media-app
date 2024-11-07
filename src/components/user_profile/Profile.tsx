
import React from 'react'
// import axios from 'axios';
import prisma from '@/lib/prismadb';
import ProfileInfo from './ProfileInfo';
// import { ProfileInterface } from './ProfileInterface';
// import getAuth from '@/actions/getAuth';
async function fetchUsers(userId: string){
    try{
      

      const existingUser = await prisma.user.findUnique({
          where: {
              id: userId
          },
          select: {
              hashedPassword: false,
              followingIds: true,
              name: true,
              username: true,
              bio: true,
              profileImage: true
          }
      })
      const followersCount = await prisma.user.count({
          where: {
              followingIds: {
                  has: userId
              }
          }
      })
      const followingCount = existingUser?.followingIds.length;
      return {...existingUser, followersCount, followingCount};

  }catch(e){
      console.log(e);
      return undefined;
  }
}
async function Profile({userId}: {userId : string}) {
    const userDetails = await fetchUsers(userId);
    //const isLoggedIn = await getAuth();
 
  return (
    <>
    <ProfileInfo userId={userId} profileImage={userDetails?.profileImage} name={userDetails?.name} username={userDetails?.username} bio={userDetails?.bio} followersCount={userDetails?.followersCount} followingCount={userDetails?.followingCount} />
    {/* <div className='text-red-200'>hiii{isLoggedIn}</div> */}
    
    </>
  )
}

export default Profile