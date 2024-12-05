import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session, SessionStrategy } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import { JWT } from "next-auth/jwt";
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
                
                return {
                    id: user.id,
                    profileImage: user.profileImage,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    username: user.username,
                    name: user.name,
                    bio: user.bio,
                    createdAt: user.createdAt
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
    callbacks: {
        async jwt({ token, user }: {token: JWT, user: any}) {
            
            if (user) {
                console.log(token, 'lala');
                token.userId = user.id;
                
                token.username = user.username;
                token.profileImage = user.profileImage;
                token.bio = user.bio;
                console.log(token, 'lala');
            }
            return token;
        },

        async session({ session, token }: {session: Session, token: JWT}) {
            
            if (session.user && token.userId) {
                session.user.id = token.userId as string;
                session.user.username = token.username as string;
                session.user.profileImage = token.profileImage as string|null;
                session.user.bio = token.bio as string;
                
            }
            
        
            return session;
        }
    },

}

export default authOptions;