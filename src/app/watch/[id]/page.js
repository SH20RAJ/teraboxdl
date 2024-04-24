// http://localhost:3000/api/tera?data=https://teraboxapp.com/s/1SHCpjQSUyq1RRHrJXi9G7A

import { Header } from "@/components/video-feeds";
import { VideoWatch } from "@/components/video-watch";

export default async function page({params}) {
    let id = params.id;
    let data = await fetch('http://localhost:3000/api/tera?data=https://teraboxapp.com/s/'+id)
    data = await data.json()
  return (
    <>
    <Header/>
    <VideoWatch data={data}/>

    </>
  )
}
