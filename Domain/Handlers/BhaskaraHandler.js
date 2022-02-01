'use strict'

const Equation = require('../Entities/Equation');

function BhaskaraHandler(request) {
    if (isValidRequest(request))
        return {
            "error": "It is necessary to inform something in the request"
        };

    const valueA = request?.valueA;
    const valueB = request?.valueB;
    const valueC = request?.valueC;

    if (isValidParameters(valueA, valueB, valueC))
        return {
            "error": "It is mandatory to inform the valueA and valueB and valueC"
        };

    return AssembleEquation(valueA, valueB, valueC);
}

function isValidRequest(request) {
    return request === null || request === undefined
}

function isValidParameters(valueA, valueB, valueC) {
    return valueA === null || valueA === undefined || valueB === null || valueB === undefined || valueC === null || valueC === undefined
}

function AssembleEquation(valueA, valueB, valueC) {
    return Equation(valueA, valueB, valueC);
}

module.exports = BhaskaraHandler;