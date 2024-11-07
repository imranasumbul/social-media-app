
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb"

import { uniqueNamesGenerator, adjectives, animals, names , colors } from "unique-names-generator";



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
      const randomNumber = Math.floor(Math.random() * 10000); // 0-99999
      username = `${username}_${randomNumber}`;
      const existingUser = await prisma.user.findUnique({
        where: { username },
      });
  
      if (!existingUser) isUnique = true;
    }
    return username;
  }

export async function register(email: string, password : string){
    try{
        
        const userExists = await prisma.user.findUnique({
          where: {
            email
          }
        })
        if(userExists){
          
          return {message: "User already exists. Try logging in"}
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const username = await generateUniqueUsername();
        await prisma.user.create({
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

        return {message: "User created successfully"}
    }catch(e){
        console.log("error", e);
        return {message: "An unexpected error occured. Please try later"}
    }
}