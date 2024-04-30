import prisma from "../../../../prisma";

export async function Upload(id,user) {
  console.log(id);
  let slug = id;
  if (!(id.length == 23)){
    return false
  }

  // async function CheckID(id){
  //   let data = await fetch(process.env.URL+'/api/tera?data=https://teraboxapp.com/s/'+id)
  //   data = await data.json()
  //   return data.file_name
  // }
  // let title = await CheckID()

  // if(!title){
  //   return false
  // }

  // Check if a video with the given tera_id already exists
  const existingVideo = await prisma.video.findUnique({
    where: {
      tera_id: id,
    },
  });

  if (existingVideo) {
    console.log("Video with the given tera_id already exists. Skipping creation.");
    return existingVideo;
  }

  // If video doesn't exist, create a new one
  const result = await prisma.video.create({
    data: {
      tera_id: id,
      authorId: 1,
      user : user || null,
      // title,
      slug,
    },
  });

  console.log(result);
  return result;
}
