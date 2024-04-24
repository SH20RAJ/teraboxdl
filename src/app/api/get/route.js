


export async function GET(req,res){

    let url = new URL(req.url);
    let id = url.searchParams.get("id");


//     let responce = await fetch("https://ytshorts.savetube.me/api/v1/terabox-downloader", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_ga=GA1.1.2110759286.1711701275; _ga_3Q4D9SLPKL=GS1.1.1713935259.2.1.1713935259.0.0.0; cf_clearance=O3BlIAjou_NPQyTDcqhmTmbCG_sP8PV1nVKN.NN1gB4-1713935259-1.0.1.1-It3ToZiREGFrSnQxaJ9jENX.2lTPL2BPWxmTcsvK_N7xrQ4mGhBqIJqak5T0WB0LVwmWWHJmt0S1rsc1mGpLtQ"
//   },
//   "referrerPolicy": "no-referrer",
//   "body": "{\"url\":\"https://teraboxapp.com/s/".id."\"}",
//   "method": "POST"
// });

        let response = await fetch("https://ytshorts.savetube.me/api/v1/terabox-downloader", {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,hi;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "_ga=GA1.1.2110759286.1711701275; _ga_3Q4D9SLPKL=GS1.1.1713935259.2.1.1713935259.0.0.0; cf_clearance=O3BlIAjou_NPQyTDcqhmTmbCG_sP8PV1nVKN.NN1gB4-1713935259-1.0.1.1-It3ToZiREGFrSnQxaJ9jENX.2lTPL2BPWxmTcsvK_N7xrQ4mGhBqIJqak5T0WB0LVwmWWHJmt0S1rsc1mGpLtQ"
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ url: `https://teraboxapp.com/s/${id}` }),
        method: "POST"
        });



    return Response.json({
        success: true,
        data: await response.json()
    })
}