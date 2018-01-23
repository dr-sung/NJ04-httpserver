const http = require('http');

const s = http.createServer((req, res) => {
    const contents = `
        <html><head><title>secondserver.js</title></head>
        <body>
        <h1 style="color:red;">Thank you for calling!</h1>
        </body></html>
        `;
    res.writeHead(200, {
        'Content-Length': contents.length,
        'Content-Type': 'text/html'
    });
    res.end(contents);
});
s.listen(3000);