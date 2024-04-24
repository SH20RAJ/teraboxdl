<?php



// Set the video file URL
$video_url = 'https://d3.terabox.app/file/9dacb1c8abbf63d009bc89b3fb2635ca?fid=4398695749924-250528-192479985264184&dstime=1713978501&rt=sh&sign=FDtAER-DCb740ccc5511e5e8fedcff06b081203-9r5j4D11r9riyXkaFUAsBXcnVZ4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=362432651244128910&dp-callid=0&r=410749650&sh=1&region=jp';

// Set the request headers
$headers = array(
  'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
);

// Create a new cURL resource
$ch = curl_init();

// Set the cURL options
curl_setopt($ch, CURLOPT_URL, $video_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute the cURL request and get the response
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
  echo 'Error: ' . curl_error($ch);
  exit;
}

// Close the cURL resource
curl_close($ch);

// Set the response headers for the video file
header('Content-Type: video/mp4');
header('Content-Length: ' . strlen($response));
header('Accept-Ranges: bytes');

// Output the video file content
echo $response;

?>
