import authOptions from "@/lib/authOptions";
import NextAuth from "next-auth";
//import JWT, { Session } from "next-auth" 


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

