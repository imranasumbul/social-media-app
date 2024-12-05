"use client"
import React from 'react'
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
import { useRouter } from "next/navigation"
import reactToast from "@/lib/reactToast";

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
    type registerFormvalues = z.infer< typeof signupSchema >;
    const router = useRouter();
    async function submitHandler(data : registerFormvalues) {
        try{
            const response = await axios.post("/api/register", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            reactToast({message: `User created successfully. Please login to your account to continue`, type: "success", duration: 5000})
            
            router.push("/login");
        }catch(error){
            console.log(error);
            if(axios.isAxiosError(error) && error.response){
                
            reactToast({message: `${error.response.data.error}`, type: "error", duration: 5000})
            
                router.push("/login");
            }else{
                
            reactToast({message: `An unexpected error occured. Please try later`, type: "error", duration: 5000})
            

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
                                <FormLabel >
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
                    <Button type='submit' className=' bg-dark-light-violet w-[100%] hover:bg-dark-dark-violet'>Submit</Button>
                    <div className='w-[100%] flex justify-center my-2'>
                    <span>Already have an account? <a href='/login' className='underline hover:text-white font-semibold'>Login</a></span>
                    </div>
                </form>
            </Form>
    </> 
  )
}
export default SignupForm