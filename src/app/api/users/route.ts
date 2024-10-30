
import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";
export async function GET(){
    try{
        const recommendedUsers = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            select: {
                username: true,
                profileImage: true,
                name: true,
                id: true
                
            }
        })
        
        return NextResponse.json(recommendedUsers, {status: 200});
    }catch(e){
        console.log("error", e);
        return NextResponse.json({error: "some error occured"}, {status: 400})
    }
}
