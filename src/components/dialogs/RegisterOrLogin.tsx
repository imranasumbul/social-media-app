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
            <DialogContent className='bg-slate-950'>
                <DialogHeader>
                <DialogTitle className='text-white'>Login to continue</DialogTitle>
                <DialogDescription>
                We cannot let you perform this action without signing in
                </DialogDescription>
                <div className='flex justify-between'>
                <Button onClick={() => router.push("/login")} className='bg-violet-600 w-[45%] text-white hover:bg-violet-800'>
                        Login
                    </Button> 
                    <Button onClick={() => router.push("/signup")} className='bg-violet-600 w-[45%] hover:bg-violet-800'>
                        Sign Up</Button>  
                </div>
                                 
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>

  )
}

export default RegisterOrLogin