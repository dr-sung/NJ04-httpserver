const http = require('http');

function process_request(req, res) {
    let jsonData = '';
    req.on('data', (chunk) => {
        jsonData += chunk;
    });
    req.on('end', () => {
        if (jsonData == null || jsonData.trim() == '') {
            console.log("No JSON data received by the server");
            res.writeHead(400);
            res.end("No JSON data received by the server");
            return;
        }
        const reqObj = JSON.parse(jsonData);
        const resObj = {
            message: "Hello " + reqObj.name + "!",
            question: "Are you a good " + reqObj.occupation + "?"
        };
        res.writeHead(200);
        res.end(JSON.stringify(resObj));
    });
}

const server = http.createServer(process_request);
server.listen(3000);