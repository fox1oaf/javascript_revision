//using the module require - npm is a package manager
const http = require('node:http');
//importing the file (our own module)
const user = require('../user');

//everything you sun on web is held by a port
// seting up path - environment / local host IP address / because you are access this in your own server, hence 127
const hostname = '127.0.0.1';
const port = 3000;

//create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello All I am backkkkk.\n');
});

//create the event
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});