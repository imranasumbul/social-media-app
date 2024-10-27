

import React from 'react'
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import SignupForm from './SignupForm'



export default function SignupComponent() {
 
    return (
        <>
        <div className='h-full flex justify-center items-center '>
        <Card className='bg-dark-bg md:w-[60%] xl:w-[30%] lg:w-[40%] shadow-lg shadow-neutral-800 text-dark-text'>
      <CardHeader>
        <CardTitle className='text-center text-xl'>Sign Up </CardTitle>
            
              <SignupForm />
           
            
            
        
      </CardHeader>
      <CardFooter>
     
      </CardFooter>
      
      
    </Card>
        </div>
        </>
        
    
      )
    }