'use strict'

const fastify = require('fastify')({ logger: true });
const rawBody = require('raw-body')

fastify.addContentTypeParser('*', (req, done) => {
    rawBody(req, {
        length: req.headers['content-length'],
        limit: '1mb',
        encoding: 'utf8', // Remove if you want a buffer
    }, (err, body) => {
        if (err) return done(err)
        done(null, parse(body))
    })
});

fastify.register(require('./routes/Calculation.route'));

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()