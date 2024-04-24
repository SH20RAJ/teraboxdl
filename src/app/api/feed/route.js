import { getfeed } from "./getfeed"




export async function GET(){
    let data = await getfeed()
    return Response.json({
        success: true,
        data
    })
}


