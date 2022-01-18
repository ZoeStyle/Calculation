const app = require('../src/app')
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalize_port(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', on_error);
server.on('listening', on_listening);
console.log('API rodando na porta ' + port);

function normalize_port(val) {
    const port = parseInt(val, 10);

    if (isNaN(port))
        return val;

    if (port >= 0)
        return port;

    return false;
}

function on_error(error) {
    if (error.syscall !== 'listen')
        throw error;

    const bind = typeof port == 'string' ?
        'Pipe' + port :
        'Port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires eleved privileges');
            process.exit(1);
            break;
        case 'EADDRNUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function on_listening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}