'use strict'

const fastify = require('fastify')({ logger: true });
const logger = require('../Logger/logger');

fastify.register(require('./routes/Calculation.route'));
fastify.register(require('./routes/healthCheck.route'));

const start = async () => {
    try {
        const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
        const server_host = process.env.YOUR_HOST || '0.0.0.0';
        await fastify.listen(server_port, server_host);
        logger.info('The api is running in the pota' + port);
    } catch (err) {
        fastify.log.error(err);
        logger.error(err);
        process.exit(1);
    }
}

function normalize_port(val) {
    const port = parseInt(val, 10);

    if (isNaN(port))
        return val;

    if (port >= 0)
        return port;

    return false;
}

start()