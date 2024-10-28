"use client"

import React from 'react'
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { getSession, signIn } from "next-auth/react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const loginSchema = z.object({
    email: z.string().email({message: "Enter a valid email"}),
    password: z.string().min(8, {message: "Password should be at least 8 characters long"})
})
function LoginForm() {
    const router = useRouter();
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    type loginFormvalues = z.infer<typeof loginSchema>
    async function submitHandler( data : loginFormvalues) {
       try{
        const result = await signIn("credentials", {
            redirect: false, 
            email: data.email,
            password: data.password,
          });
          console.log(result)
          if(result?.ok){
              await getSession();
              router.push("/");
      
          }else{
            toast.error(`${result?.error}`, {
                style:  {
                    background: ' rgba(24, 24, 34, 0.991)',
                    color: 'rgb(223, 226, 232)',
                    border: '1px solid white' 
                }
            })
        }

       }catch(err){
        console.log(err)
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
                        <FormLabel >
                            Enter your email Address
                        </FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='johndoe@gmail.com' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )
            }}
            >

            </FormField>
            <FormField control={form.control}
            name='password'
            render={({field}) => {
                return (
                    <FormItem className='my-4' >
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
            <Button type='submit' className=' my-2 bg-dark-light-violet w-[100%] hover:bg-dark-dark-violet'>Submit</Button>
            <div className='w-[100%] flex justify-center my-2'>
               <span>Don &apos; t have an account? <a href='/signup' className='underline hover:text-white font-semibold'>Signup</a></span>
            </div>
        </form>
    </Form>
    </>
  )
}

export default LoginForm