import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import SignupForm from './SignupForm'

export default function SignupComponent() {
    return (
        <>
        <div className='h-full flex justify-center items-center '>
        <Card className='bg-dark-bg md:w-[60%] xl:w-[30%] lg:w-[40%] shadow-lg shadow-violet-100 text-dark-text'>
      <CardHeader>
        <CardTitle className='text-center text-xl'>Sign Up </CardTitle>
        
            <SignupForm />
        
      </CardHeader>
      
      
    </Card>
        </div>
        </>
        
    
      )
    }