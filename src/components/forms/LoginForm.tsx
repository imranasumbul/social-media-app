import React from 'react'
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

const loginSchema = z.object({
    email: z.string().email({message: "Enter a valid email"}),
    password: z.string().min(8, {message: "Password should be at least 8 characters long"})
})
function LoginForm() {
    const form = useForm<z.infer <typeof loginSchema> >({
        resolver: zodResolver(loginSchema)
    });

  return (
    <>
    </>
  )
}

export default LoginForm