'use strict'

const Delta = require('../ValuObjects/Delta');
const Raiz = require('../ValuObjects/Raiz');

function Equation(valueA, valueB, valueC) {
    if (isValid(valueA, valueB, valueC)) {
        const delta = calculateDelta(valueA, valueB, valueC);

        if (validateIfDeltaIsLessThan0(delta))
            return {
                'error': 'The values ​​entered are not real roots'
            };
        else if (validateIfValueAAndValueBAreEqualTo0(valueB, valueC))
            return {
                'error': 'ValueB and valueC are set to zero'
            };
        else {
            return calculateRaiz(valueA, valueB, delta);
        }
    }
    else
        return {
            'error': 'The values ​​entered are not a 2nd degree equation'
        };
}

function validateIfValueAAndValueBAreEqualTo0(valueB, valueC) {
    return valueB === 0 && valueC === 0;
}

function validateIfDeltaIsLessThan0(delta) {
    return delta < 0;
}

function calculateRaiz(valueA, valueB, delta) {
    return Raiz(valueA, valueB, delta);
}

function calculateDelta(valueA, valueB, valueC) {
    return Delta(valueA, valueB, valueC);
}

function isValid(valueA, valueB, valueC) {
    return valueA !== 0 && !isNaN(valueA) && !isNaN(valueB) && !isNaN(valueC);
}

module.exports = Equation;