//import NextAuth from "next-auth"
import { Session } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
        id?: string,
        profileImage: null|string,
        email: string,
        emailVerified: null|Date,
        username: string,
        name: string,
        bio?: string
    }
  }
  interface JWT {
    userId: string;
    email: string;
    username: string;
    
  }
}
