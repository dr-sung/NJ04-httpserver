const http = require('http');

const s = http.createServer((req, res) => {
    const contents = '<h1>Thank you for calling!</h1>';
    res.writeHead(200, {
        'Content-Length': contents.length,
        'Content-Type': 'text/plain'
    });
    res.end(contents);
});
s.listen(3000);