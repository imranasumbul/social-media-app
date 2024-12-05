import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import updateUserProfile from '@/actions/updateProfile'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import reactToast from '@/lib/reactToast'
interface editProfile {
    name: string,
    username: string,
    bio: string
}
const profileEditSchema = z.object({
    name: z.string().min(4, {message: "Name must be a minimum of 4 characters"}),
    username: z.string(),
    bio: z.string().min(0),
    
})
function EditForm() {
    const user = useSession().data?.user;
    const router = useRouter();
    const form  = useForm<z.infer<typeof profileEditSchema>>({
        resolver: zodResolver(profileEditSchema),
        defaultValues: {
            name: user?.name,
            username: user?.username,
            bio: user?.bio,

        }
    });
    async function submitFunc(data :editProfile ){
        try{
            const userId = user?.id;
            console.log(form.formState.errors);
            console.log("inside")
            const res = await updateUserProfile({userId, ...data});
            if(res instanceof Error){
                reactToast({message: `${res.message}`, type: "error", duration: 5000});
            }else{
                reactToast({message: `User updated successfully`, type: "success", duration: 5000});
                router.push("/");
            }
            }catch(e){
                console.log(e);
                reactToast({message: `An unexpected error occured. Please try later`, type: "error", duration: 5000});
                router.push("/");
            }
    }
    return (
        <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitFunc)}>
            <FormField control={form.control}
                    name='name'
                    render={({field}) => {
                        return (
                            <FormItem className='my-4'>
                                <FormLabel className='text-dark-text'>
                                    Your name
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={user?.name} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}
                    >
                    </FormField>
                    <FormField control={form.control}
                    name='username'
                    render={({field}) => {
                        return (
                            <FormItem className='my-4'>
                                <FormLabel className='text-dark-text'>
                                    Your Username
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={user?.username} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}
                    >
                    </FormField>
                    <FormField control={form.control}
                    name='bio'
                    render={({field}) => {
                        return (
                            <FormItem className='my-4'>
                                <FormLabel className='text-dark-text'>
                                    Your Bio
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={(user?.bio) ? user?.bio : `No bio yet`} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}
                    >
                    </FormField>
                    <Button className='w-[100%]' type='submit'>Submit</Button>
            </form>
        </Form>
    </>
    )
}

export default EditForm