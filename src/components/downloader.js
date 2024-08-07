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
      const newUrl = `${window.location.pathname}?url=${encodeURIComponent(url)}`;
      router.push(newUrl);
      let id = url.split("/")[4];
      fetch("https://www.terabox.tech/api/upload?id=" + id + "&user=1");

    } else {
      alert("Please enter a valid URL.");
    }
  };

  const copyShareLink = () => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?url=${encodeURIComponent(inputUrl)}`;
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
    const embedCode = `<iframe src="${window.location.origin}/play.html?url=${encodeURIComponent(
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
        {inputUrl && (
          <iframe
            onContextMenu={(e) => e.preventDefault()}
            id="iframe"
            className="w-full max-w-3xl h-[600px] border-0 mb-4 rounded-lg shadow-lg"
            src={`/play.html?url=${encodeURIComponent(inputUrl)}`}
            allowFullScreen
            scrolling="no"
          />
        )}
        <div className="w-full max-w-3xl mt-4">
          <h3 className="text-2xl font-semibold mb-2">Embed Link</h3>
          <input
            type="text"
            value={`<iframe src="${window.location.origin}/play.html?url=${encodeURIComponent(
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
            className="p-4 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 w-full shadow-lg transition-all duration-300 ease-in-out"
            href={"https://apis.forn.fun/tera/data.php?id=" + inputUrl.split("/")[4]}
          >
            Download Video
          </a>
        </div>
      </div>

      <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fwww.terabox.tech" className="mt-6">
        <img
          src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fwww.terabox.tech&countColor=%23263759&style=plastic"
          alt="Visitor Count"
          className="shadow-lg"
        />
      </a>
    </div>
  );
};

export default Downloader;
