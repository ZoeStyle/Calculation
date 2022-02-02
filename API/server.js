'use strict'

const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/Calculation.route'));
fastify.register(require('./routes/healthCheck.route'));

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()