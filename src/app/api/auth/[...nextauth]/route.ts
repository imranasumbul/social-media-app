import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";


const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                }, 
                password : {
                    label: "password",
                    type: "password"
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Entered credentials are invalid");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!user){
                    console.log("no user exists")
                    throw new Error("No such user exists. Try registering first");
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )
                if(!isCorrectPassword){
                    console.log("incorrect password")
                    throw new Error("Entered credentials are invalid");
                }
                console.log(user)
                return {
                    id: user.id,
                    image: user.image,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    username: user.username,
                    name: user.name
                }

            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/login",
        signOut: "/logout"
    },
    secret: process.env.NEXTAUTH_SECRET

})
export { handler as GET, handler as POST };

