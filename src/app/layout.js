import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Terabox.tech Player, Embed, Download Terabox videos",
  description: "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
  keywords: ["terabox", "terabox direct download", "terabox downloader", "terabox online downloader", "terabox player", "terabox online player", "terabox links", "terabox link converter", "terabox direct link", "terabox direct videos", "terabox direct files", "terabox bypass", "terabox link bypass", "terabox video downloader", "terabox video download", "terabox link downloader", "terabox downloader online"],
  authors: [{ name: "Terabox.tech" }],
  robots: "index, follow",
  openGraph: {
    title: "Terabox.tech Player, Embed, Download Terabox videos",
    description: "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
    type: "website",
    images: "./og.png",
    url: "https://terabox.tech",
    siteName: "Terabox.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terabox.tech Player, Embed, Download Terabox videos",
    description: "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
    images: "./og.png",
    site: "@microsoft",
  },
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

const jsonld = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Terabox.tech",
  "url": "https://terabox.tech",
  "description": "Watch, Embed and download Terabox Videos 🔥 100% working ✅ Download Terabox videos with TeraDL",
  "publisher": {
    "@type": "Organization",
    "name": "Terabox.tech"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "100"
  }
}
</script>`;

export default function RootLayout({ children }) {
  postToIndexNow();
  postToIndexNow2()
  postToIndexNow3()
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <div className="analytics">
          <div dangerouslySetInnerHTML={{__html: analytics}}></div>
        </div>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossorigin="anonymous"></Script>
        <div dangerouslySetInnerHTML={{ __html: jsonld }}></div>
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  );
}


async function postToIndexNow() {
  const url = 'https://api.indexnow.org/IndexNow';
  const data = {
    "host": "www.terabox.tech",
    "key": "67b1059e89d04c82981cbee130ae538f",
    "keyLocation": "https://www.terabox.tech/67b1059e89d04c82981cbee130ae538f.txt",
    "urlList": [
      "https://www.terabox.tech/",
      "https://www.terabox.tech/about",
      "https://www.terabox.tech/contact",
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function postToIndexNow2() {
  const url = 'https://api.indexnow.org/IndexNow';
  const data = {
    "host": "terabox.tech",
    "key": "67b1059e89d04c82981cbee130ae538f",
    "keyLocation": "https://terabox.tech/67b1059e89d04c82981cbee130ae538f.txt",
    "urlList": [
      "https://terabox.tech/",
      "https://terabox.tech/about",
      "https://terabox.tech/contact",
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function postToIndexNow3() {
  const url = 'https://api.indexnow.org/IndexNow';
  const data = {
    "host": "devart.terabox.tech",
    "key": "67b1059e89d04c82981cbee130ae538f",
    "keyLocation": "https://devart.terabox.tech/67b1059e89d04c82981cbee130ae538f.txt",
    "urlList": [
      "https://devart.terabox.tech/",
      "https://devart.terabox.tech/devteam/top-7-featured-dev-posts-of-the-week-2751",
      "https://devart.terabox.tech/debapriyadas/cloning-and-running-llama-31-model-from-hugging-face-using-python-3m80"
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}