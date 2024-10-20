
"use client"

import React from 'react'
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
    });
    function submitHandler() {

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
                            <Input {...field} placeholder='Enter password' />
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
                            <Input {...field} placeholder='Confirm password' />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
            >

            </FormField>
            <Button type='submit' className=' my-6 bg-dark-light-violet w-[100%] hover:bg-dark-dark-violet'>Submit</Button>
        </form>
    </Form>
    </>
  )
}

export default SignupForm