import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== "GET"){
        return res.status(405);
    }
    try{
        const currentUser = await serverAuth(req);
        return res.status(200).json(currentUser);

    }catch(e){
        console.log(e);
    }
}