

import prisma from "@/lib/prismadb"
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, { params }: { params: { userId: string } }){
    try{
        const { userId } = params;

        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                hashedPassword: false,
                followingIds: true,
                name: true,
                username: true,
                bio: true,
                profileImage: true
            }
        })
        const followersCount = await prisma.user.count({
            where: {
                followingIds: {
                    has: userId
                }
            }
        })
        const followingCount = existingUser?.followingIds.length;
        return NextResponse.json({...existingUser, followersCount, followingCount}, {status: 200});

    }catch(e){
        console.log(e);
        return NextResponse.json({error: "something went wrong"}, {status: 400})
    }
}