'use strict'

const fastify = require('fastify')({ logger: true });
const logger = require('../Logger/logger');

fastify.register(require('./routes/Calculation.route'));
fastify.register(require('./routes/healthCheck.route'));

const start = async () => {
    try {
        const port = normalize_port(process.env.PORT || 40100);

        await fastify.listen(port);
        logger.info('The api is running in the door' + port);
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