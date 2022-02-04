'use strict'

const fastify = require('fastify')({ logger: true });
const logger = require('../Logger/logger');

fastify.register(require('fastify-cors'), {
    origin: 'https://app.swaggerhub.com/apis/ZoeStyle/Hernandes/0.0.1#/Calculation/post_Bhaskara',
    methods: ['POST', 'OPTIONS', 'GET']
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
