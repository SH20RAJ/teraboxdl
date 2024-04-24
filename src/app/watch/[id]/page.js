// http://localhost:3000/api/tera?data=https://teraboxapp.com/s/1SHCpjQSUyq1RRHrJXi9G7A

import { Upload } from "@/app/api/upload/upload";
import { Header } from "@/components/video-feeds";
import { VideoWatch } from "@/components/video-watch";
import Reccomendations from "./Reccomendations";



export default async function page(req,res) {

  // console.log("wddwqdwq",res);
    let id = req.params.id;
    
    let data = await fetch(process.env.URL+'/api/tera?data=https://teraboxapp.com/s/'+id)
    data = await data.json()
    let upload = await Upload(id)
  return (
    <>
    <Header/>
    <VideoWatch data={data}/>
    <Reccomendations/>
    </>
  )
}
