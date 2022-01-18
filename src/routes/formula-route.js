'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/formula-controller')

router.post('/formula', controller.post);

module.exports = router;