import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeraDL - Terabox Downloader | 100% working | Download Terabox videos",
  description: "Watch and download terabox Videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  );
}
