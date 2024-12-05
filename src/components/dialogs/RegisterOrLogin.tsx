"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
  
interface RegisterOrLoginProps{
    triggerItem: React.ReactNode
}
function RegisterOrLogin({triggerItem}:RegisterOrLoginProps) {
    const router = useRouter();
  return (
    <>
    
        <Dialog >
            <DialogTrigger>{triggerItem}</DialogTrigger>
            <DialogContent >
                <DialogHeader>
                <DialogTitle className='text-white'>Login to continue</DialogTitle>
                <DialogDescription>
                We cannot let you perform this action without signing in
                </DialogDescription>
                <div className='flex justify-between'>
                <Button onClick={() => router.push("/login")} className='bg-dark-light-violet w-[45%] text-dark-text hover:bg-dark-dark-violet'>
                        Login
                    </Button> 
                    <Button onClick={() => router.push("/signup")} className='bg-dark-light-violet w-[45%] hover:bg-dark-dark-violet'>
                        Sign Up</Button>  
                </div>
                                 
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>

  )
}

export default RegisterOrLogin