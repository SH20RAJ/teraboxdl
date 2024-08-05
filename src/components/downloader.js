"use client";

import { useState, useEffect } from "react";

const Downloader = () => {
  const [inputUrl, setInputUrl] = useState("");

  useEffect(() => {
    // Extract URL parameter from the query string
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get("url");
    if (url) {
      setInputUrl(decodeURIComponent(url)); // Decode the URL parameter
    }
  }, []);

  const copyEmbedCode = () => {
    const embedCode = `<iframe src="${window.location.origin}/play.html?url=${encodeURIComponent(
      inputUrl
    )}" width="700px" height="600px" frameborder="0" allowfullscreen scrolling="none"></iframe>`;
    navigator.clipboard
      .writeText(embedCode)
      .then(() => {
        alert("Embed code copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying embed code:", err);
      });
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
        onChange={(e) => setInputUrl(e.target.value)}
        className="p-4 w-full max-w-md border border-gray-300 rounded-lg mb-4 shadow-lg text-gray-800"
      />

      <div className="embedder w-full flex flex-col justify-center items-center mt-4 bg-white p-6 rounded-lg shadow-lg">
        {inputUrl && (
          <iframe
            onContextMenu={(e) => e.preventDefault()}
            id="iframe"
            className="w-full max-w-3xl h-[600px] border-0 mb-4 rounded-lg shadow-lg"
            src={`/play.html?url=${encodeURIComponent(inputUrl)}`}
            allowFullScreen
            scrolling="none"
          />
        )}
        <div className="w-full max-w-3xl mt-4">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">
            Embed Link
          </h3>
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
          <a
            className="p-4 mt-4 block text-center bg-green-100 text-black rounded-lg hover:bg-green-200 w-full shadow-lg transition-all duration-300 ease-in-out"
            href="https://t.me/terasop_bot?start=2"
          >
            Telegram Bot
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
