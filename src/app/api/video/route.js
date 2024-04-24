// pages/api/video.js

export default function handler(req, res) {
  // Set the appropriate content type header
  res.setHeader('Content-Type', 'video/mp4');

  // Pipe the video file stream to the response object
  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4';
  const videoStream = fetch(videoUrl);

  // Check if the video stream is valid
  if (!videoStream.ok) {
    res.status(500).end('Error fetching video file');
    return;
  }

  // Pipe the video stream to the response
  videoStream.body.pipe(res);
}
