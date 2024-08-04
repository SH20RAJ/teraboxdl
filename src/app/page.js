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
      {/* download chrome extension */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
        <h1 className="text-3xl font-bold mb-6">
          Download TeraBox Player Chrome Extension
        </h1>
        <img
          src="https://github.com/SH20RAJ/terabox-player-chrome-extension/blob/main/logo.png?raw=true"
          alt="TeraBox Player Logo"
          className="mb-4 w-32 h-32"
        />
        <a
          href="https://github.com/SH20RAJ/terabox-player-chrome-extension/archive/refs/heads/main.zip"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Download Latest
        </a>
        
        <h2 className="text-2xl font-semibold mt-8">How to Install</h2>
        <ol className="list-decimal mt-4 text-left">
          <li>Download the extension using one of the links above.</li>
          <li>
            Extract the downloaded ZIP file to a location on your computer.
          </li>
          <li>
            Open Chrome and navigate to <code>chrome://extensions/</code>.
          </li>
          <li>
            Enable "Developer mode" by clicking the toggle switch in the top
            right corner.
          </li>
          <li>
            Click the "Load unpacked" button and select the folder where you
            extracted the ZIP file.
          </li>
          <li>
            Ensure the extension is enabled by checking the toggle switch.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8">Requirements</h2>
        <ul className="list-disc mt-4 text-left">
          <li>Google Chrome browser</li>
          <li>Internet connection for downloading the extension</li>
        </ul>

        <a
          href="https://t.me/terasop_bot"
          className="mt-8 bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 transition-colors"
        >
          Open Telegram Bot
        </a>
      </div>

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
