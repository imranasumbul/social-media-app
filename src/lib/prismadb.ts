import { PrismaClient } from "@prisma/client";

declare global {
  // Extend NodeJS.Global interface to include the prisma property
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

const client = (global as typeof global & { prisma?: PrismaClient }).prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  (global as typeof global & { prisma?: PrismaClient }).prisma = client;
}

export default client;
