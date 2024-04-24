import { getfeed } from "./getfeed"
let prisma = new PrismaClient()





export async function GET(){
    let data = await getfeed()
    return Response.json({
        success: true,
        data
    })
}


