const cat = require('cat-me');

console.log(cat());

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World Created By Hariom');
});

server.listen(3000)

