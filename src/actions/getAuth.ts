"use server"

import authOptions  from "@/lib/authOptions";
import { getServerSession } from "next-auth"

export default async function getAuth (){
    const session = await getServerSession(authOptions);
    
    return (session)
}