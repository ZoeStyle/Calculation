'use strict'

const logger = require('../../Logger/logger');

function isValid(valueA, valueB, valueC) {
    return valueA !== 0 && !isNaN(valueA) && !isNaN(valueB) && !isNaN(valueC);
}

function validateIfValueAAndValueBAreEqualTo0(valueB, valueC) {
    return valueB === 0 && valueC === 0;
}

function validateIfDeltaIsLessThan0(delta) {
    return delta < 0;
}

function getDelta(valueA, valueB, valueC) {
    return (valueB * valueB) - (4 * valueA * valueC);
}

function getDivisor(valueA) {
    return (2 * valueA);
}

function getRaiz(delta) {
    return Math.sqrt(delta)
}

function roundOffFunction(value) {
    return value.toFixed(2);
}

function calculateX(valueA, valueB, delta) {
    const raiz = getRaiz(delta);
    const divisor = getDivisor(valueA);

    let x1 = (-valueB + raiz) / divisor;
    let x2 = (-valueB - raiz) / divisor;

    x1 = roundOffFunction(x1)
    x2 = roundOffFunction(x2)

    return {
        'x1': x1,
        'x2': x2
    }
}


function Equation(valueA, valueB, valueC) {
    if (isValid(valueA, valueB, valueC)) {
        const delta = getDelta(valueA, valueB, valueC);

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
            return calculateX(valueA, valueB, delta);
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

module.exports = Equation;