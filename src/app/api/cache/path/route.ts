import { revalidatePath, revalidateTag } from "next/cache";
import { env } from "process";

export async function POST( request: Request){
    const body = await request.json();
    const {path ,token} = body

    if(!path || !token){
        return Response.json({error: "missing tag or token"}, {status:404});
    }

    if(token !== env.CACHE_TOKEN){
        return Response.json({error: "Invalid Token"}, {status:401});   
    }

    revalidatePath(path)
    return Response.json({ success : true })
}