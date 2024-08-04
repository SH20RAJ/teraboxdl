import Downloader from "@/components/downloader";
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
      <div className="gap-4 hidden lg:flex ">
        {links.map(({ name, slug }, j) => (
          <Link key={j} href={slug}>
            {name}{" "}
          </Link>
        ))}
      </div>
    </>
  );
}
