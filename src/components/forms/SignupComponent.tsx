

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
        <div className='h-screen flex justify-center items-center '>
        <Card className=' md:w-[60%] xl:w-[30%] lg:w-[40%] shadow-lg border-none text-dark-text'>
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