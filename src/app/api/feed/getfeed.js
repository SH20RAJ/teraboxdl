import prisma from "../../../../prisma"

export async function getfeed(random){
    if(!random){
        let response = await prisma.video.findMany({
            take: 100,
            orderBy: {
                updated_at: "desc"
            }
        })
        return response
    } else {
        const randomVideos = await prisma.$queryRaw`
        SELECT * FROM Video
        ORDER BY RAND()
        LIMIT 100;
      `;
      
        return randomVideos
    }

}