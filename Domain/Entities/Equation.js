'use strict'

const Delta = require('../ValuObjects/Delta');
const Raiz = require('../ValuObjects/Raiz');
const logger = require('../../Logger/logger');

function Equation(valueA, valueB, valueC) {
    if (isValid(valueA, valueB, valueC)) {
        const delta = calculateDelta(valueA, valueB, valueC);

        if (validateIfDeltaIsLessThan0(delta)) {
            const err = {
                date: new Date(),
                message: 'The values ​​entered are not real roots'
            };
            logger.error(err);
            return err;
        }
        else if (validateIfValueAAndValueBAreEqualTo0(valueB, valueC)) {
            const err = {
                date: new Date(),
                message: 'ValueB and valueC are set to zero'
            };
            logger.error(err);
            return err;
        }
        else {
            return calculateRaiz(valueA, valueB, delta);
        }
    }
    else {
        const err = {
            date: new Date(),
            message: 'The values ​​entered are not a 2nd degree equation'
        };
        logger.error(err);
        return err;
    }
}

function validateIfValueAAndValueBAreEqualTo0(valueB, valueC) {
    return valueB === 0 && valueC === 0;
}

function validateIfDeltaIsLessThan0(delta) {
    return delta < 0;
}

function calculateRaiz(valueA, valueB, delta) {
    const raiz = Raiz(valueA, valueB, delta);
    logger.info({
        date: new Date(),
        message: 'success',
        data: raiz
    })
    return raiz;
}

function calculateDelta(valueA, valueB, valueC) {
    return Delta(valueA, valueB, valueC);
}

function isValid(valueA, valueB, valueC) {
    return valueA !== 0 && !isNaN(valueA) && !isNaN(valueB) && !isNaN(valueC);
}

module.exports = Equation;