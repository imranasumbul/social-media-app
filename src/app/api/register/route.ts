
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb"

import { uniqueNamesGenerator, adjectives, animals, names , colors } from "unique-names-generator";
import { NextRequest, NextResponse } from "next/server";


async function generateUniqueUsername() {
    let isUnique = false;
    let username = "";
  
    while (!isUnique) {
      username = uniqueNamesGenerator({
        dictionaries: [colors, animals], // E.g., 'BraveLion'
        length: 2,
        separator: '_',
        style: "lowerCase",
      });
      const randomNumber = Math.floor(Math.random() * 100000); // 0-99999
      username = `${username}_${randomNumber}`;
      const existingUser = await prisma.user.findUnique({
        where: { username },
      });
  
      if (!existingUser) isUnique = true;
    }
    return username;
  }

export async function POST(req: NextRequest){
    try{
        const {email, password} = await req.json();
        const userExists = await prisma.user.findUnique({
          where: {
            email
          }
        })
        if(userExists){
          
          return NextResponse.json({error: "User already exists. Login to your account"}, {status: 400})
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const username = await generateUniqueUsername();
        const user = await prisma.user.create({
            data: {
                email,
                hashedPassword,
                username,
                name: uniqueNamesGenerator({
                    dictionaries: [adjectives, names],
                    length:2,
                    separator: " ",
                    style: "capital"

                })
            }
        })

        return NextResponse.json({
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          bio: user.bio,
          profileImage: user.profileImage
        }, {status: 200});
    }catch(e){
        console.log("error", e);
        return NextResponse.json({error: "Some error happened"}, {status: 400})
    }
}