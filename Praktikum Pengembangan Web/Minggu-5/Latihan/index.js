const http = require('http');
const fs = require('fs'); 

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.statusCode = 200;

    let data = fs.readFileSync("author.html");
    res.end(data);
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}`);
});