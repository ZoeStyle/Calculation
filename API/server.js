'use strict'

const fastify = require('fastify')({ logger: true });
const logger = require('../Logger/logger');

fastify.register(require('./routes/Calculation.route'));
fastify.register(require('./routes/healthCheck.route'));

const start = async () => {
    try {
        const port = 3000;
        await fastify.listen(port);
        logger.info('The api is running in the pota' + port);
    } catch (err) {
        fastify.log.error(err);
        logger.error(err);
        process.exit(1);
    }
}

start()