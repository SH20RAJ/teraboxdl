"use client"; // Use this directive to enable client-side features

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Downloader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputUrl, setInputUrl] = useState("");

  useEffect(() => {
    // Check URL parameters on client side
    const url = searchParams.get("url");
    if (url) {
      setInputUrl(decodeURIComponent(url)); // Decode the URL parameter
    }
  }, [searchParams]);

  const handleUrlChange = (e) => {
    const url = e.target.value;
    if (isValidUrl(url)) {
      setInputUrl(url);
      // Update the URL with the input URL parameter
      const newUrl = `${window.location.pathname}?url=${encodeURIComponent(
        url
      )}`;
      router.push(newUrl);
      let id = url.split("/")[4];
      fetch("https://www.terabox.tech/api/upload?id=" + id + "&user=1");
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const copyShareLink = () => {
    const currentUrl = `${window.location.origin}${
      window.location.pathname
    }?url=${encodeURIComponent(inputUrl)}`;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Share link copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying share link:", err);
      });
  };

  const copyEmbedCode = () => {
    const embedCode = `<iframe src="${
      window.location.origin
    }/play.html?url=${encodeURIComponent(
      inputUrl
    )}" width="700px" height="600px" frameborder="0" allowfullscreen scrolling="no"></iframe>`;
    navigator.clipboard
      .writeText(embedCode)
      .then(() => {
        alert("Embed code copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying embed code:", err);
      });
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-white text-blue-600 rounded-lg shadow-lg p-4">
        Terabox.tech Player, Embed, Download Terabox Videos
      </h1>

      <input
        id="input-url"
        placeholder="Enter Terabox URL"
        type="text"
        value={inputUrl}
        onChange={handleUrlChange}
        className="p-4 w-full max-w-md border border-gray-300 rounded-lg mb-4 shadow-lg text-gray-800"
      />

      <div className="embedder w-full flex flex-col justify-center items-center mt-4 p-6 rounded-lg shadow-lg">
        {inputUrl && (<>
          <iframe
            onContextMenu={(e) => e.preventDefault()}
            id="iframe"
            className="w-full max-w-3xl h-[600px] border-0 mb-4 rounded-lg shadow-lg"
            src={`/play.html?url=${encodeURIComponent(inputUrl)}`}
            allowFullScreen
            scrolling="no"
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
            />
          
          <a
            className="p-4 text-center block mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 w-full shadow-lg transition-all duration-300 ease-in-out"
            href={`/play.html?url=${encodeURIComponent(inputUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            Open Video
          </a>
           

        
        <div className="w-full max-w-3xl mt-4">
          <h3 className="text-2xl font-semibold mb-2">Embed Link</h3>
          <input
            type="text"
            value={`<iframe src="${
              window.location.origin
            }/play.html?url=${encodeURIComponent(
              inputUrl
            )}" width="700px" height="600px" frameborder="0" allowfullscreen></iframe>`}
            className="p-4 w-full border border-gray-300 rounded-lg mb-4 shadow-lg text-gray-800"
            readOnly
          />
          <button
            className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-500 w-full shadow-lg transition-all duration-300 ease-in-out"
            onClick={copyEmbedCode}
          >
            Copy Embed Code
          </button>
          <button
            className="p-4 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 w-full shadow-lg transition-all duration-300 ease-in-out"
            onClick={copyShareLink}
          >
            Copy Share Link
          </button>

          <a
            className="p-4 text-center block mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 w-full shadow-lg transition-all duration-300 ease-in-out"
            href={
              "https://apis.forn.fun/tera/data.php?id=" + inputUrl.split("/")[4]
            }
          >
            Download Video
          </a>

          <a
            className="p-4 text-center block mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 w-full shadow-lg transition-all duration-300 ease-in-out"
            href={`/play.html?url=${encodeURIComponent(inputUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Video
          </a>
        </div> </>)}
      </div>

      <TeraboxScriptSection/>

      <a
        href="https://visitorbadge.io/status?path=https%3A%2F%2Fwww.terabox.tech"
        className="mt-6"
      >
        <img
          src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fwww.terabox.tech&countColor=%23263759&style=plastic"
          alt="Visitor Count"
          className="shadow-lg"
        />
      </a>

      

      {/* create list of other tools */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Other Tools</h2>
        <ul className=" flex  justify-center gap-2 p-2 m-2">
          <li>
            <a
              className=" bg-white p-2 text-blue-600 shadow-xl rounded-sm outline-dashed hover:bg-black hover:"
              href="https://insta.terabox.tech/"
            >
              Instagram Reels Downloader
            </a>
          </li>
          <li>
            <a
              className=" bg-white p-2 text-blue-600 shadow-xl rounded-sm outline-dashed hover:bg-black hover:"
              href="https://player.terabox.tech/ads"
            >
              TikTok Video Downloader
            </a>
          </li>
          <li>
            <a
              className=" bg-white p-2 text-blue-600 shadow-xl rounded-sm outline-dashed hover:bg-black hover:"
              href="https://tagsgen.terabox.tech/"
            >
              YouTube Tags Generator
            </a>
          </li>
        </ul>
      </div>
      <DisqusComments/>
    </div>
  );
};

export default Downloader;

export function DisqusComments() {
  return (
    <div>
      <div id="disqus_thread" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var disqus_config = function () {
            this.page.url = window.location.href;
            this.page.identifier = window.location.pathname;
          };
          (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://terabox-1.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
        `,
        }}
      />
      <noscript>
        Please enable JavaScript to view the &lt;a
        href="https://disqus.com/?ref_noscript"&gt;comments powered by
        Disqus.&lt;/a&gt;
      </noscript>
      <script
        id="dsq-count-scr"
        src="//terabox-1.disqus.com/count.js"
        async
      ></script>
    </div>
  );
}
import React from 'react';

const TeraboxScriptSection = () => {
  return (
    <section className="py-16  text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">🎥 Terabox Video Player/Downloader Script</h1>
        <p className="text-lg text-gray-700 mb-8">
          Simplify your workflow with our Terabox script! Easily play, embed, and download Terabox videos directly from your website or application. Ideal for content creators and developers looking to enhance video integration seamlessly. contact us for more information. jokes4ush@gmail.com
        </p>
        <button
          onClick={() =>
            window.open(
              'https://buymeacoffee.com/sh20raj/e/335508',
              '_blank'
            )
          }
          className="px-6 py-3 text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Buy Now 🚀
        </button>
      </div>
    </section>
  );
};

