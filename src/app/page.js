import Downloader from "@/components/downloader";
import Footer from "@/components/Footer";
import { Header, links } from "@/components/Header";
import SrOnly from "@/components/SrOnly";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <New/> */}
      <Header />
      <Downloader />
      <SrOnly />
      <Footer/>
    </>
  );
}
