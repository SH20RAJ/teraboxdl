'use client'
import { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [videoBlob, setVideoBlob] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        // Fetch the video file from its original URL
        const response = await fetch('https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4');
        const blob = await response.blob();
        setVideoBlob(blob);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    }

    fetchVideo();
  }, []);

  return (
    <div>
      {videoBlob && (
        <video controls>
          <source src={URL.createObjectURL(videoBlob)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
