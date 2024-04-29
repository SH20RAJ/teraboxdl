import prisma from "../../../prisma"

export default async function page() {

    let videocount = await prisma.video.count({});
    let videos = await prisma.video.findMany({
        take: 10000,
        orderBy: {
            updated_at: "desc"
        }
    });
  return (
    <>
    <div className=" text-center ">
      All Videos... {videocount}+ Videos || <a href="/">Go Back</a>
      {
        videos.map((video,i) => <Comp key={i} video={video}/> )
      }

    </div>
    </>
  )
}


export async function Comp({video}){
    return <a href={"/watch/"+video.tera_id}>
        {/* {JSON.stringify(video)} */}
        <h3>{video.title || "Video"}</h3>
    </a>
}