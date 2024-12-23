import Downloader from "@/components/downloader";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-10">
        <Downloader />
      </main>
      <Footer />
    </>
  );
}
