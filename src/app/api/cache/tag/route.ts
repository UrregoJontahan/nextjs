import { revalidateTag } from "next/cache";
import { env } from "process";

export async function POST( request: Request){
    const body = await request.json();
    const {tag,token} = body

    if(!tag || !token){
        return Response.json({error: "missing tag or token"}, {status:404});
    }

    if(token !== env.CACHE_TOKEN){
        return Response.json({error: "Invalid Token"}, {status:401});   
    }

    revalidateTag(tag)
    return Response.json({ success : true })
}