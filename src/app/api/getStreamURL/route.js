import { redirect } from "next/navigation";
import { generateStreamUrl } from "./getStreamURL.js";

export const GET = async (req, res) => {

  let id = req.nextUrl.searchParams.get('id')
  const url = await generateStreamUrl(id);


  if(req.nextUrl.searchParams.get('redirect')) {
    redirect(url);
  }

  return Response.json({
    url: url
  });
};
