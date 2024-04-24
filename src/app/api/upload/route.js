import prisma from "../../../../prisma"
import { Upload } from "./upload";

export async function GET(req){
    let url = new URL(req.url);
    let id = url.searchParams.get("id");
    let data = await Upload(id)


    return Response.json({sucess:true})
}

