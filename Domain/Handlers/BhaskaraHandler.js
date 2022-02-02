'use strict'

const Equation = require('../Entities/Equation');
const logger = require('../../Logger/logger');

function BhaskaraHandler(request) {
    if (isValidRequest(request)) {
        const err = {
            date: new Date(),
            message: "It is necessary to inform something in the request"
        };
        logger.error(err);
        return err;
    }

    const valueA = request?.valueA;
    const valueB = request?.valueB;
    const valueC = request?.valueC;

    if (isValidParameters(valueA, valueB, valueC)) {
        const err = {
            date: new Date(),
            message: "It is mandatory to inform the valueA and valueB and valueC"
        };
        logger.error(err);
        return err;
    }

    return AssembleEquation(valueA, valueB, valueC);
}

function isValidRequest(request) {
    return request === null || request === undefined
}

function isValidParameters(valueA, valueB, valueC) {
    return valueA === null || valueA === undefined || valueB === null || valueB === undefined || valueC === null || valueC === undefined
}

function AssembleEquation(valueA, valueB, valueC) {
    const equation = Equation(valueA, valueB, valueC);
    logger.info({
        date: new Date(),
        message: equation
    });
    return equation;
}

module.exports = BhaskaraHandler;