// addEventListener('fetch', event => {
//   event.respondWith(handleRequest(event.request))
// })

// async function handleRequest(request) {
//   // Set the video file URL
//   const url = new URL(request.url);
//   const videoUrl = url.searchParams.get('url') || 'https://d3.terabox.app/file/65c13933d931bce11e6b245ff5393283?fid=4398611968669-250528-437587508794748&dstime=1713981139&rt=sh&sign=FDtAER-DCb740ccc5511e5e8fedcff06b081203-RuIqxdY2OvTTBZ3y7ApVksYRQ7g%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=363140781451312707&dp-callid=0&r=420631788&sh=1&region=jp';

//   try {
//     // Make a GET request to the video file URL
//     const response = await fetch(videoUrl);
//     const contentLength = response.headers.get('Content-Length');
//     const contentType = response.headers.get('Content-Type');

//     const headers = {
//       'Content-Type': contentType,
//       'Content-Length': contentLength,
//       'Accept-Ranges': 'bytes',
//     };

//     const newResponse = new Response(response.body, { headers });

//     // Create a writable stream
//     const writableStream = new WritableStream({
//       write(chunk) {
//         return new Promise(resolve => {
//           (writableStream as any).write(chunk, () => resolve());
//         });
//       },
//       close() {
//         return newResponse.body.close();
//       },
//       abort(reason) {
//         return newResponse.body.cancel(reason);
//       },
//     });

//     // Create a readable stream from the response and pipe it to the writable stream
//     const readableStream = response.body;
//     const reader = readableStream.getReader();

//     function pump() {
//       return reader.read().then(({ done, value }) => {
//         if (done) {
//           (readableStream as any).close();
//           return;
//         }
//         return writableStream.write(value).then(() => pump());
//       });
//     }

//     await pump();

//     return newResponse;
//   } catch (error) {
//     console.error(error);
//     return new Response('Error fetching video file', { status: 500 });
//   }
// }


// // or 


// // async function handleRequest(request) {
// //   // Set the video file URL
// //   const url = new URL(request.url);
// //   const videoUrl = url.searchParams.get('url') || 'https://d3.terabox.app/file/65c13933d931bce11e6b245ff5393283?fid=4398611968669-250528-437587508794748&dstime=1713981139&rt=sh&sign=FDtAER-DCb740ccc5511e5e8fedcff06b081203-RuIqxdY2OvTTBZ3y7ApVksYRQ7g%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=363140781451312707&dp-callid=0&r=420631788&sh=1&region=jp';

// //   try {
// //     // Make a GET request to the video file URL
// //     const response = await fetch(videoUrl);
// //     const contentLength = response.headers.get('Content-Length');
// //     const contentType = response.headers.get('Content-Type');

// //     const headers = {
// //       'Content-Type': contentType,
// //       'Content-Length': contentLength,
// //       'Accept-Ranges': 'bytes',
// //     };

// //     const newResponse = new Response(response.body, { headers });

// //     // Stream the video file content to the client
// //     const streamedResponse = new Response(newResponse.body, newResponse);
// //     delete streamedResponse.headers['content-length'];
// //     return new Response(streamedResponse.body, streamedResponse);
// //   } catch (error) {
// //     console.error(error);
// //     return new Response('Error fetching video file', { status: 500 });
// //   }
// // }

// // addEventListener('fetch', event => {
// //   event.respondWith(handleRequest(event.request));
// // });
