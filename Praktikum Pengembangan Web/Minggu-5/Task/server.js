const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
    // Pastikan hanya root (/) yang di-handle, file lain bisa dikembangkan sendiri
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else {
        // Untuk file statis lain (misal gambar sertifikat, profil, dll)
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('404 Not Found');
            } else {
                // Deteksi tipe konten sederhana
                let contentType = 'text/plain';
                if (req.url.endsWith('.jpg') || req.url.endsWith('.jpeg')) contentType = 'image/jpeg';
                else if (req.url.endsWith('.png')) contentType = 'image/png';
                else if (req.url.endsWith('.css')) contentType = 'text/css';
                else if (req.url.endsWith('.js')) contentType = 'application/javascript';
                res.statusCode = 200;
                res.setHeader('Content-Type', contentType);
                res.end(data);
            }
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
    console.log('PORT:', port);
});