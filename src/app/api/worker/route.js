export const GET = async (req, res) => {
  let url = new URL(req.url);
  var id = url.searchParams.get("id");

  let data = await fetch(
    "https://terabox.hnn.workers.dev/api/get-info?shorturl=1EWkWY66FhZKS2WfxwBgd0Q",
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

  let downloaddata = await fetch(
    "https://terabox.hnn.workers.dev/api/get-download",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8",
        "cache-control": "no-cache",
        "content-type": "application/json",
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
      body: JSON.stringify(options),
      method: "POST",
      mode: "cors",
      credentials: "omit",
    }
  );

  downloaddata = await downloaddata.json();

  return Response.json({ downloaddata,  options,  data});
};
