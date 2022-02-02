'use strict'

function Raiz(valueA, valueB, delta) {
    return {
        'x1': calculateX1(valueA, valueB, delta),
        'x2': calculateX2(valueA, valueB, delta)
    };
}

function calculateX1(valueA, valueB, delta) {
    return (-valueB + Math.sqrt(delta)) / (2 * valueA);
}

function calculateX2(valueA, valueB, delta) {
    return (- valueB - Math.sqrt(delta)) / (2 * valueA);
}

module.exports = Raiz;