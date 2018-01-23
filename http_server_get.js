const http = require('http');
const messages = [
    'Hello World',
    'From a basic Node.js server',
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write('<html><head><title>Server</title></head>');
    res.write('<body>');
    for (const m of messages) {
        res.write('\n<h1>' + m + '</h1>');
    }
    res.end('\n</body></html>');
});
server.listen(3000);