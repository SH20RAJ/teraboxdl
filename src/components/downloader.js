'use client'

import { useEffect, useState } from 'react';
import Head from 'next/head';

const Downloader = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoContainerVisible, setVideoContainerVisible] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    if (url) {
      setInputUrl(url);
      fetchVideoDetails(url);
    }
  }, []);

  const fetchVideoDetails = async (url) => {
    const id = url.split('/s/')[1];
    const apiUrl = `https://wholly-api.skinnyrunner.com/get/website-data.php?get_html=https://teraboxdl-3xv9.onrender.com/api/yttera?id=${id}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const videoData = data.response[0];

      setVideoDetails(videoData);
      setVideoContainerVisible(true);
      window.history.pushState(null, null, `?url=${encodeURIComponent(url)}`);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const switchVideoSource = (source) => {
    let url;
    switch (source) {
      case 'fast':
        url = `https://teradl.shraj.workers.dev/?url=${videoDetails.resolutions['Fast Download']}`;
        break;
      case 'hd':
        url = `https://teradl.shraj.workers.dev/?url=${videoDetails.resolutions['HD Video']}`;
        break;
      case 'watch':
        url = `https://teradl.shraj.workers.dev/?url=${encodeURIComponent(videoDetails.resolutions['HD Video'])}`;
        break;
      default:
        return;
    }
    document.getElementById('video').src = url;
  };

  const copyShareLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?url=${encodeURIComponent(inputUrl)}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Share link copied to clipboard');
    }).catch(err => {
      console.error('Error copying share link:', err);
    });
  };

  const goBack = () => {
    setInputUrl('');
    setVideoContainerVisible(false);
    setVideoDetails(null);
    window.history.pushState(null, null, window.location.pathname);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Terabox Downloader - 100% working solution to download videos from Terabox easily." />
        <meta name="keywords" content="Terabox, Terabox Downloader, Video Downloader, Download Terabox videos" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shashwat Raj" />
        <title>Terabox Downloader | 100% working | Download Terabox videos</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Video Fetcher</h1>
      <input
        id="input-url"
        placeholder="Enter Terabox URL"
        type="text"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        className="p-3 w-4/5 max-w-md border border-gray-300 rounded mb-4"
      />
      <button onClick={() => fetchVideoDetails(inputUrl)} className="p-3 bg-blue-600 text-white rounded hover:bg-blue-500 mb-2">Fetch Video</button>
      <button onClick={goBack} className="p-3 bg-red-600 text-white rounded hover:bg-red-500">Go Back</button>
      {videoContainerVisible && videoDetails && (
        <div id="video-container" className="flex flex-col items-center mt-8 w-full">
          <h2 id="video-title" className="text-2xl font-semibold text-gray-700 mb-4">{videoDetails.title}</h2>
          <iframe id="iframe" className="w-1/2 h-[600px] border-0 mb-4" src={`https://teraboxdownloader.top/c/botview/?q=${encodeURIComponent(inputUrl)}`} allowFullScreen />
          <video controls id="video" className="w-4/5 max-w-lg border border-gray-300 rounded mb-4" src={`https://teradl.shraj.workers.dev/?url=${encodeURIComponent(videoDetails.resolutions['Fast Download'])}`} poster={videoDetails.thumbnail} />
          <div id="source-buttons" className="flex gap-4 mb-4">
            <button onClick={() => switchVideoSource('fast')} className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500">Fast Download</button>
            <button onClick={() => switchVideoSource('hd')} className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500">HD Video</button>
            <button onClick={() => switchVideoSource('watch')} className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500">Watch Link</button>
          </div>
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Download Links</h3>
            <a href={videoDetails.resolutions['Fast Download']} id="fast-download" rel="noopener noreferrer" target="_blank" className="block text-blue-600 hover:text-blue-800 mb-2">Fast Download</a>
            <a href={videoDetails.resolutions['HD Video']} id="hd-video" rel="noopener noreferrer" target="_blank" className="block text-blue-600 hover:text-blue-800 mb-2">HD Video</a>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Watch Link</h3>
            <a href={`https://teradl.shraj.workers.dev/?url=${videoDetails.resolutions['Fast Download']}`} id="watch-link" rel="noopener noreferrer" target="_blank" className="block text-blue-600 hover:text-blue-800 mb-2">Watch Here</a>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Thumbnail</h3>
            <a href={videoDetails.thumbnail} id="thumbnail-link" target="_blank" className="block text-blue-600 hover:text-blue-800 mb-2">Thumbnail</a>
          </div>
          <button id="share-link" className="p-3 bg-green-600 text-white rounded hover:bg-green-500" onClick={copyShareLink}>Copy Share Link</button>
        </div>
      )}
    </div>
  );
};

export default Downloader;
