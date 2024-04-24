import prisma from "../../../../prisma"




export async function GET(){
    let data = await getfeed()
    return Response.json({
        success: true,
        data
    })
}


export async function getfeed(){
    let response = await prisma.video.findMany({
        take: 100,
        orderBy: {
            updated_at: "desc"
        }
    })
    return response
}