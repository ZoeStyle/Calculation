'use strict'

const bhaskaraHandler = require('../../Domain/Handlers/BhaskaraHandler')

async function CalculationRoute(fastify, options) {
    fastify.post('/001/Bhaskara', async (request, reply) => {
        return bhaskaraHandler(request.body);
    });
};

module.exports = CalculationRoute;