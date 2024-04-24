import prisma from "../../../../prisma";

export async function Upload(id) {
  console.log(id);
  let slug = id;
  if (!(id.length > 20 && id.length < 25)){
    return false
  }

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
      slug,
    },
  });

  console.log(result);
  return result;
}
