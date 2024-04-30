import prisma from "../../../../prisma"
import { Upload } from "./upload";

export async function GET(req){
    let url = new URL(req.url);
    let id = url.searchParams.get("id");
    let user = url.searchParams.get("user") || null;
    let data = await Upload(id,user)


    return Response.json({sucess:true})
}

