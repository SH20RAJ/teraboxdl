import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeraDL - Terabox Downloader | 100% working | Download Terabox videos",
  description: "Watch and download terabox Videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
      
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
     crossorigin="anonymous"></Script>
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  );
}
