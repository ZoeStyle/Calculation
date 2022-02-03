'use strict'

const fastify = require('fastify')({ logger: true });
const logger = require('../Logger/logger');

fastify.register(require('fastify-cors'), {
    origin: 'https://sandbox-calc.herokuapp.com/',
    methods: ['POST']
});

fastify.register(require('./routes/Calculation.route'));
fastify.register(require('./routes/healthCheck.route'));

const start = async () => {
    try {
        const port = process.env.PORT;

        await fastify.listen(port);
        logger.info('The api is running in the door' + port);
    } catch (err) {
        fastify.log.error(err);
        logger.error(err);
        process.exit(1);
    }
}

start()
