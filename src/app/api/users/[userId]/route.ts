

import prisma from "@/lib/prismadb"
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest){
    try{
        const userId = req.nextUrl.searchParams.get("userId");
        if(!userId){
            throw new Error("Invalid Id");
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        return NextResponse.json(existingUser, {status: 200});

    }catch(e){
        console.log(e);
        return NextResponse.json({error: "something went wrong"}, {status: 400})
    }
}