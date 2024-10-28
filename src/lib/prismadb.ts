import { PrismaClient } from "@prisma/client";

// Declare global variable without using 'namespace' or 'var'
declare global {
  // Use 'let' instead of 'var' for better scope control
  var prisma: PrismaClient | undefined;
}

const client = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  // Assign the client to global.prisma only if it's not in production
  global.prisma = client;
}

export default client;
