
import prisma from "@/lib/prismadb"
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest){
    try{
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(users, {status: 200});
    }catch(e){
        console.log("error", e);
        return NextResponse.json({error: "some error occured"}, {status: 400})
    }
}