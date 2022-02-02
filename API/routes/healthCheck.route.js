'use strict'

async function HealthCheckRoute(fastify, options) {
    fastify.get('/001/healthCheck', async (request, reply) => {
        return {
            "ok": {
                uptime: process.uptime(),
                message: 'Ok',
                date: new Date()
            }
        }
    });
};

module.exports = HealthCheckRoute;