import prisma from "../../../../prisma";

export async function GET() {
    let videocount = await prisma.video.count({});

  return Response.json({
    count: videocount
  })
}
