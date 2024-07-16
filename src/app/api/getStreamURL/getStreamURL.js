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

export function generateStreamUrl(url) {
//   const urlParams = new URL(url).searchParams;
  const fsId = '440150518260032';
  const shareId = '8284705867';
  const userId = '3003392469';

  if (!fsId || !shareId || !userId) {
    throw new Error('Missing required URL parameters');
  }

  const streamData = {
    shareid: shareId,
    uk: userId,
    fs_id: fsId
  };

  const encryptedData = encrypt(JSON.stringify(streamData));
  const streamUrl = `https://terabox-downloader-api-71h9.onrender.com/stream.m3u8?data=${encryptedData}`;
  
  return streamUrl;
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