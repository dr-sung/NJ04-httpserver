const http = require('http');

const options = {
    hostname: 'cs3.uco.edu',
    path: '/',
    port: '80',
    method: 'GET'
};
const req = http.request(options, (response) => {
    let str = '';
    response.on('data', (data) => {
        str += data;
    });
    response.on('end', () => {
        console.log(str);
    });
});
req.end();