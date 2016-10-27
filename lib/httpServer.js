const http = require('http');
const fs = require('fs');
const parseURL = require('url').parse;
const figlet = require('figlet');



module.exports = http.createServer((req, res) => {
    const url = parseURL(req.url);
    if (url.pathname === '/test') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write('You\'ve hit the test loop!');
        res.end()
    }

    if (url.pathname === '/hello') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write('hello');
        res.end()
    }

    if (url.pathname === '/goodbye') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write('You\'ve hit the goodbye! Nice Seeing you!.');
        res.end()
    }    
    console.log('URL request was made to: ' , url.pathname, req.method);

    console.log('Query as a string', url.query);

    // const query = qs.parse(url.query);
    // console.log('Query as an Object', query);
    // const contentType = query.format === 'text' ? 'text/plain' : 'application/json';
    //  res.setHeader('Content-Type', contentType);
    res.end('ended'); // stringify json data output
});