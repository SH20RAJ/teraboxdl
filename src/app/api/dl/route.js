import CryptoJS from "crypto-js";

export async function GET(req, res) {
  let url = new URL(req.url);
  var id = url.searchParams.get("id");

  url = "https://teraboxapp.com/s/" + id;

  const apiUrl = "https://teraboxdownloader.in/api/video-downloader";
  const encryptedLink = encryptString(url); // Assuming you have the encryptString function from earlier

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Pragma: "no-cache",
      "Sec-Ch-Ua":
        '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Ch-Ua-Platform": '"macOS"',
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "X-Requested-With": "XMLHttpRequest",
    },
    referrer: `https://teraboxdownloader.in/video-downloader?link=${encodeURIComponent(
      url
    )}`,
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({ link: encryptedLink }),
    credentials: "include",
  });

  return Response.json(await response.json());
}

function encryptString(input) {
  const encryptionKey = "website:teraboxdownloader.in"; // Replace with your actual encryption key
  return CryptoJS.AES.encrypt(input, encryptionKey).toString();
}
