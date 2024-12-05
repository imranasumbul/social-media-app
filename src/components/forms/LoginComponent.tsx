import React from 'react'
import {
    Card,
    
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import LoginForm from './LoginForm'
  
function LoginComponent() {
  return (
    <>
    <div className='h-screen flex justify-center items-center '>
    <Card className=' md:w-[60%] xl:w-[30%] lg:w-[40%] w-[90%] text-dark-text'>
  <CardHeader>
    <CardTitle className='text-center text-xl'>Login </CardTitle>
    
        <LoginForm/>
    
  </CardHeader>
  
  
</Card>
    </div>
    </>
    

  )
}

export default LoginComponent