

//app/api/yttera/route.js



export async function GET(req,res) {
    let url = new URL(req.url);
    var id = url.searchParams.get("id")

    let data = await fetch("https://ytshorts.savetube.me/api/v1/terabox-downloader", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.1.2110759286.1711701275; cf_clearance=eFMbte6QfMoBae06j5lQt96bfSv2Rj3RR5EMzkcAdXw-1714195749-1.0.1.1-aMUdX4.NxrjaEu7JHpb0SHNFjmNMPafnZu0Gi7AiaMU.jDZW3DROQTwVbOvu1fwyev__XB5nZOTc8YsB99Cv2A; FCNEC=%5B%5B%22AKsRol9AEBYqsxFEeKI7ZfmIA6z6Kdr8jEVx3wLHKuXQjRTyy-TGf-Uq8vNhpew0dbd4KB04eejgrTAQEbdvA0CSC8nEvs-ZYssal2zC841o5adBmM9WkRQ2SVR0Tt2TqFw5gfxD3z0WN0eGYE4U-g62A_4yKalr3g%3D%3D%22%5D%5D; _ga_3Q4D9SLPKL=GS1.1.1714198861.4.0.1714198957.0.0.0"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"url\":\"https://teraboxapp.com/s/"+id+"\"}",
  "method": "POST"
});

    return Response.json(await data.json())
    
}


