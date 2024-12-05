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
import EditForm from './EditForm'
interface RegisterOrLoginProps{
    triggerItem: React.ReactNode
}
function EditUserComponent({triggerItem}:RegisterOrLoginProps) {
    return (
    <>
        <Dialog >
            <DialogTrigger>{triggerItem}</DialogTrigger>
            <DialogContent className=''>
                <DialogHeader>
                <DialogTitle className='text-white'>Update your Information</DialogTitle>
                <DialogDescription>
                <EditForm />
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
    )
}

export default EditUserComponent