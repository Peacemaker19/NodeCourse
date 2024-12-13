const http = require('http');

const appRoutes = require('./app_routes');
const server = http.createServer(appRoutes.handler);

server.listen(3000);