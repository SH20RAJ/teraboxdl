import Downloader from "@/components/downloader";
import { Header } from "@/components/Header";
import SrOnly from "@/components/SrOnly";

export default function Home() {
  return (
    <>
    {/* <New/> */}
    <Header/>
    <Downloader/>
    <SrOnly/>
    </>
  );
}
