import { get } from 'request';

const CryptoJS = require('crypto-js');

export function toHex(str) {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    let hexCode = str.charCodeAt(i).toString(16);
    hex += ('00' + hexCode).slice(-2);
  }
  return hex;
}

export function encrypt(data) {
  const key = CryptoJS.enc.Utf8.parse("json".padEnd(32, "\0"));
  const iv = CryptoJS.enc.Utf8.parse("json".padEnd(16, "\0"));
  const encrypted = CryptoJS.AES.encrypt(data, key, { iv: iv });
  return toHex(encrypted.toString());
}

export async function generateStreamUrl(id) {
//   const urlParams = new URL(url).searchParams;

let options = await getOptions(id);

  const fsId = options.fs_id || '';
  const shareId = options.shareid || '';
  const userId = options.uk || '';

  

  const streamData = {
    shareid: shareId,
    uk: userId,
    fs_id: fsId
  };

  const encryptedData = encrypt(JSON.stringify(streamData));
  const streamUrl = `https://terabox-downloader-api-src.onrender.com/stream.m3u8?data=${encryptedData}`;
  
  return streamUrl;
}


export async function getOptions(id) {
  let data = await fetch(
    "https://terabox.hnn.workers.dev/api/get-info?shorturl="+id,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8",
        "cache-control": "no-cache",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      referrer: "https://terabox.hnn.workers.dev/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  );

  data = await data.json();
  let options = {
    shareid: data.shareid,
    uk: data.uk,
    sign:(data.sign),
    timestamp: data.timestamp,
    fs_id: data.list[0].fs_id,
  };

  return options;
}

// // Example usage
// const exampleUrl = 'https://example.com?fs_id=example_fs_id&share_id=example_share_id&uk=example_user_id';
// try {
//   const streamUrl = generateStreamUrl(exampleUrl);
//   console.log(streamUrl);
// } catch (error) {
//   console.error(error.message);
// }

//https://terabox.hnn.workers.dev/