//import NextAuth from "next-auth"
import { Session } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
        id: string,
        image: null|string,
        email: string,
        emailVerified: null|Date,
        username: string,
        name: string
    }
  }
}
