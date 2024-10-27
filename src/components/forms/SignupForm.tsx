"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from 'axios';

const signupSchema = z.object({
    email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(8, { message: "Password should be at least 8 characters long" }),
  confirmPassword: z.string().min(8, { message: "Confirm password must match password" }),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
        code: "custom", // Required field indicating it's a custom error
        path: ["confirmPassword"], // Where the issue will be shown
        message: "Passwords do not match",
    });
  }
})
function SignupForm() {
    const [ifUserAlreadyExists, setIfUserAlreadyExists] = useState(false);
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
    });
    type registerFormvalues = z.infer< typeof signupSchema >;
    
    async function submitHandler(data : registerFormvalues) {
        try{
            const response = await axios.post("/api/register", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);

        }catch(error: any){
            if (error.response && error.response?.status === 400) {
                console.log("User already registered.");
                setIfUserAlreadyExists(true);
                 // Properly call your dialog function
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
        
        

    }
  return (
    
    <>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
            <FormField control={form.control}
            name='email'
            render={({field}) => {
                return (
                    <FormItem className='my-4'>
                        <FormLabel>
                            Enter your email Address
                        </FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Enter email' />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
            >

            </FormField>
            <FormField control={form.control}
            name='password'
            render={({field}) => {
                return (
                    <FormItem className='my-4'>
                        <FormLabel>
                            Enter your password
                        </FormLabel>
                        <FormControl>
                            <Input type='password' {...field} placeholder='password' />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
            >

            </FormField>
            
            <FormField control={form.control}
            name='confirmPassword'
            render={({field}) => {
                return (
                    <FormItem className='my-4'>
                        <FormLabel>
                            Confirm your password
                        </FormLabel>
                        <FormControl>
                            <Input type='password' {...field} placeholder='password' />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
            >

            </FormField>
            <Button type='submit' className=' my-2 bg-dark-light-violet w-[100%] hover:bg-dark-dark-violet'>Submit</Button>
            <div className='w-[100%] flex justify-center my-2'>
               <span>Already have an account? <a href='/login' className='underline hover:text-white font-semibold'>Login</a></span>
            </div>
        </form>
    </Form>
    
    <Dialog open={ifUserAlreadyExists} onOpenChange={setIfUserAlreadyExists}>
    <DialogContent className="bg-dark-bg">
      <DialogHeader>
        <DialogTitle className="text-dark-text">User Email already exists</DialogTitle>
        <DialogDescription>
          Please login to your account to continue
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
   
    
    </>
    
    
  )
}

export default SignupForm