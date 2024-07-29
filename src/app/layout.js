import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terabox.tech Player, Embed, Download Terabox videos",
  description: "Watch, Embed and download terabox Videos | 100% working | Download Terabox videos with TeraDL",
  keywords: "terabox, downloader, videos",
  author: "Your Name",
  robots: "index, follow",
  ogTitle: "Terabox.tech Player, Embed, Download Terabox videos",
  ogDescription: "Watch, Embed and download terabox Videos | 100% working | Download Terabox videos with TeraDL",
  ogType: "website",
  ogImage: "./og.png",
  twitterTitle: "Terabox.tech Player, Embed, Download Terabox videos",
  twitterDescription: "Watch, Embed and download terabox Videos | 100% working | Download Terabox videos with TeraDL",
  twitterImage: "./og.png",
  // Additional SEO tags
  ogUrl: "https://terabox.tech",
  ogSiteName: "Terabox.tech",
  twitterCard: "summary_large_image",
  twitterSite: "@microsoft",
};

let analytics = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-12EDBKJZQ3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-12EDBKJZQ3');
</script>`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <div className="analytics">
          <div dangerouslySetInnerHTML={{__html: analytics}}></div>
        </div>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossorigin="anonymous"></Script>
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  );
}
