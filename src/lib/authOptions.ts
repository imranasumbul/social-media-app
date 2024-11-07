import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { SessionStrategy } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";
const authOptions = {
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
        strategy: 'jwt' as SessionStrategy,
    },
    pages: {
        signIn: "/login",
        signOut: "/logout"
    },
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     async jwt({ token, user }: any) {
    //         if (user) {
    //             token.userId = user.id; // Assuming the user object has an `id` field
    //         }
    //         console.log(user, "hi")
    //         console.log(token, "hi")
    //         return token;
    //     },
    //     // session: ({ session, token }: {session: Session, token: typeof JWT}) => {
    //     //     // if(session && token && session.user){
                
    //     //     // }
    //     //     return session
    //     // }
    // }

}

export default authOptions;