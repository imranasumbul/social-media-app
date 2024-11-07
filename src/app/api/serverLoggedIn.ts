// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]/route"; // Import your NextAuth options
// import { NextRequest, NextResponse } from "next/server";

// export default async function handler(req: NextRequest, res: NextResponse) {
//   // Retrieve the session object
//   const session = await getServerSession(req, res, authOptions);

//   // Check if there is a session
//   if (session) {
//     return NextResponse.json({
//       content:
//         "This is protected content. You can access this content because you are signed in.",
//     });
//   } else {
//     return NextResponse.json({
//       error: "You must be signed in to view the protected content on this page.",
//     });
//   }
// }
