const http = require('http');
const server = require('./lib/httpServer');

var port = 8080
server.listen(port, () => {
    console.log('server started on port: ', server.address().port);
})