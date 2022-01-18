'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const swaggerUi = require('swagger-ui-express');;
const swaggerFile = require('../swagger_output.json');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



// carrega rotas
const formula_route = require('./routes/formula-route');



app.use('/', formula_route);

module.exports = app;