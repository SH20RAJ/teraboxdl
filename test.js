const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    const url = 'https://i.imgur.com/QDiiVbb.jpeg';
    req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});
