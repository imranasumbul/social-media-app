import React from 'react'
import UserInterface from './UserInterface'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import RecommendedButtons from './RecommendedButtons'


function RecommendedWrapper({name, username, id, profilePic}: UserInterface) {
  return (
    <Card className='text-dark-text bg-neutral-800 border-none'>
  <CardHeader >
    <div className='flex space-x-2'>
      <div className='h-7 w-7 rounded-full bg-red-300'></div>
      <div className='mb-2'>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{username} </CardDescription>
      </div>
      
    </div>
    
    <RecommendedButtons userId={id}/>
    
  </CardHeader>
  
  
</Card>

  )
}

export default RecommendedWrapper