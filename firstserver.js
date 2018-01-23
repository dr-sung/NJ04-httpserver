const http = require('http');

const s = http.createServer((req, res) => {
    const contents = 'Thank you for calling!\n';
    res.writeHead(200, {
        'Content-Length': contents.length,
        'Content-Type': 'text/plain'
    });
    res.end(contents);
});
s.listen(3000);