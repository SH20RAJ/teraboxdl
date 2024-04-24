// pages/api/video.js

import axios from 'axios';
import { parse } from 'url';
import { pipeline } from 'stream';
import { promisify } from 'util';

async function handler(req, res) {
  // Set the video file URL
  const videoUrl = 'https://d3.terabox.app/file/9dacb1c8abbf63d009bc89b3fb2635ca?fid=4398695749924-250528-192479985264184&dstime=1713978501&rt=sh&sign=FDtAER-DCb740ccc5511e5e8fedcff06b081203-9r5j4D11r9riyXkaFUAsBXcnVZ4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=362432651244128910&dp-callid=0&r=410749650&sh=1&region=jp';

  try {
    // Make a GET request to the video file URL
    const response = await axios.get(videoUrl, {
      responseType: 'stream',
    });

    // Set the response headers for the video file
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', response.headers['content-length']);
    res.setHeader('Accept-Ranges', 'bytes');

    // Pipe the video file content to the client
    const promisifiedPipeline = promisify(pipeline);
    await promisifiedPipeline(response.data, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching video file' });
  }
}

export default handler;
