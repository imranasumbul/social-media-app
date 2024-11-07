
import React from 'react'
import { UserInterface } from './UserInterface';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import RecommendedButtons from './RecommendedButtons'
//import { useSession } from 'next-auth/react';

function RecommendedWrapper({name, username, id, profileImage}: UserInterface) {
  console.log(profileImage); //i did it so that i could deploy successfully
  //const session = useSession();
  return (
    <Card className='text-dark-text bg-neutral-800 border-none'>
  <CardHeader >
    <div className='flex space-x-2'>
      <div className='h-7 w-7 rounded-full bg-red-300'></div>
      <div className='mb-2'>
        <CardTitle className='font-normal'>{name}</CardTitle>
        <CardDescription className='text-neutral-400'>{username} </CardDescription>
      </div>
      
    </div>
    
    <RecommendedButtons userId={id} />
    
    
  </CardHeader>
  
  
</Card>

  )
}

export default RecommendedWrapper