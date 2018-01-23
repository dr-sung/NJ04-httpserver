const http = require('http');

const options = {
    host: 'localhost',
    path: '/',
    port: '3000',
    method: 'POST'
};
const req = http.request(options, (res) => {
    let resData = '';
    res.on('data', (data) => {
        resData += data;
    });
    res.on('end', () => {
        const dataObj = JSON.parse(resData);
        console.log("Raw Response: " + resData);
        console.log("Message: " + dataObj.message);
        console.log("Question: " + dataObj.question);
    });
});
req.write('{"name": "John", "occupation": "student"}');
req.end();