'use strict'

const bhaskaraHandler = require('../../Domain/Handlers/BhaskaraHandler')
const logger = require('../../Logger/logger');

async function CalculationRoute(fastify, options) {
    fastify.post('/001/Bhaskara', async (request, reply) => {
        const req = request.body;
        logger.info('The request was received in the route /001/Bhaskara: ' + req)
        return bhaskaraHandler(req);
    });
};

module.exports = CalculationRoute;