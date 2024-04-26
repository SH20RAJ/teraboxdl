import { getfeed } from "./getfeed"





export async function GET(req,res){
    let url = new URL(req.url);
    if(url.searchParams.has("random")){
        var random = true
    }


    let data = await getfeed(random)
    return Response.json({
        success: true,
        data
    })
}


