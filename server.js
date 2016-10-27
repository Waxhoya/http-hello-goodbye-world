const http = require('http');
const server = require('./lib/httpServer');



server.listen(port, () => {
    console.log('server started on port: ', server.address().port);
})