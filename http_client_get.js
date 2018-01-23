const http = require('http');

const options = {
    hostname: "localhost",
    port: "3000",
    method: "get"
};
const request = http.request(options, (res) => {
    let serverData = '';
    res.on('data', (data) => {
        serverData += data;
    });
    res.on('end', () => {
        console.log("Response Status:", res.statusCode);
        console.log("Response Headers:", res.headers);
        console.log(serverData);
    });
});
request.end();