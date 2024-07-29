"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

const Downloader = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoContainerVisible, setVideoContainerVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get("url");
    if (url) {
      setInputUrl(url);
      fetchVideoDetails(url);
    }
  }, []);

  const fetchVideoDetails = async (url) => {
    const id = url.split("/s/")[1];
    const apiUrl = `/api/yttera?id=${id}`;
    setVideoContainerVisible(true);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const videoData = data.response[0];

      setVideoDetails(videoData);
      window.history.pushState(null, null, `?url=${encodeURIComponent(url)}`);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  const switchVideoSource = (source) => {
    let url;
    switch (source) {
      case "fast":
        url = `https://teradl.shraj.workers.dev/?url=${videoDetails.resolutions["Fast Download"]}`;
        break;
      case "hd":
        url = `https://teradl.shraj.workers.dev/?url=${videoDetails.resolutions["HD Video"]}`;
        break;
      case "watch":
        url = `https://teradl.shraj.workers.dev/?url=${encodeURIComponent(
          videoDetails.resolutions["HD Video"]
        )}`;
        break;
      default:
        return;
    }
    document.getElementById("video").src = url;
  };

  const copyShareLink = () => {
    const shareUrl = `${window.location.origin}${
      window.location.pathname
    }?url=${encodeURIComponent(inputUrl)}`;
    navigator.clipboard
      .writeText(shareUrl)
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
    )}" width="700px" height="600px" frameborder="0"></iframe>`;
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
      Terabox.tech Player, Embed, Download Terabox videos
      </h1>
      
      <input
        id="input-url"
        placeholder="Enter Terabox URL"
        type="text"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        className="p-3 w-full max-w-lg border border-gray-300 rounded mb-4"
      />
      <button
        onClick={() => fetchVideoDetails(inputUrl)}
        className="p-3 bg-blue-600 text-white rounded hover:bg-blue-500 mb-2 w-full max-w-lg"
      >
        Fetch Video
      </button>
      <div className="embedder w-full flex flex-col justify-center items-center mt-4">
        <iframe
          onContextMenu={(e) => e.preventDefault()}
          id="iframe"
          className="w-full max-w-3xl h-[600px] border-0 mb-4"
          src={`/play.html?url=${encodeURIComponent(inputUrl)}`}
          allowFullScreen
        />
        <div className="w-full max-w-3xl">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Embed Link
          </h3>
          <input
            type="text"
            value={`<iframe src="${"https://www.terabox.tech"}/play.html?url=${encodeURIComponent(
              inputUrl
            )}" width="700px" height="600px" frameborder="0"></iframe>`}
            className="p-3 w-full border border-gray-300 rounded mb-4"
            readOnly
          />
          <button
            className="p-3 bg-green-600 text-white rounded hover:bg-green-500 w-full"
            onClick={copyEmbedCode}
          >
            Copy Embed Code
          </button>
        </div>
      </div>
      {videoContainerVisible && videoDetails && (
        <div
          id="video-container"
          className="flex flex-col items-center mt-8 w-full max-w-3xl"
        >
          <h2
            id="video-title"
            className="text-2xl font-semibold text-blue-600 mb-4 text-center"
          >
            {videoDetails.title}
          </h2>
          <video
            controls
            id="video"
            className="w-full max-w-3xl border border-gray-300 rounded mb-4"
            src={`https://teradl.shraj.workers.dev/?url=${encodeURIComponent(
              videoDetails.resolutions["Fast Download"]
            )}`}
            poster={videoDetails.thumbnail}
          />
          <div id="source-buttons" className="flex gap-4 mb-4">
            <button
              onClick={() => switchVideoSource("fast")}
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Fast Download
            </button>
            <button
              onClick={() => switchVideoSource("hd")}
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              HD Video
            </button>
            <button
              onClick={() => switchVideoSource("watch")}
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Watch Link
            </button>
          </div>
          <div className="text-center mb-4 w-full">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Download Links
            </h3>
            <a
              href={videoDetails.resolutions["Fast Download"]}
              id="fast-download"
              rel="noopener noreferrer"
              target="_blank"
              className="block text-blue-600 hover:text-blue-800 mb-2"
            >
              Fast Download
            </a>
            <a
              href={videoDetails.resolutions["HD Video"]}
              id="hd-video"
              rel="noopener noreferrer"
              target="_blank"
              className="block text-blue-600 hover:text-blue-800 mb-2"
            >
              HD Video
            </a>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Watch Link
            </h3>
            <a
              href={`https://teradl.shraj.workers.dev/?url=${videoDetails.resolutions["Fast Download"]}`}
              id="watch-link"
              rel="noopener noreferrer"
              target="_blank"
              className="block text-blue-600 hover:text-blue-800 mb-2"
            >
              Watch Here
            </a>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Thumbnail
            </h3>
            <a
              href={videoDetails.thumbnail}
              id="thumbnail-link"
              target="_blank"
              className="block text-blue-600 hover:text-blue-800 mb-2"
            >
              Thumbnail
            </a>
          </div>
          <button
            id="share-link"
            className="p-3 bg-green-600 text-white rounded hover:bg-green-500 w-full max-w-lg"
            onClick={copyShareLink}
          >
            Copy Share Link
          </button>
        </div>
      )}

      <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fwww.terabox.tech">
        <img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fwww.terabox.tech&countColor=%23263759&style=plastic" />
      </a>
    </div>
  );
};

export default Downloader;
