import { VideoFeeds } from "@/components/video-feeds";
import Image from "next/image";
import New from "./new/page";
import Downloader from "@/components/downloader";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
    {/* <New/> */}
    <Header/>
    <Downloader/>
    </>
  );
}

