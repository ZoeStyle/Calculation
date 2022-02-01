'use strict'

function Delta(valueA, valueB, valueC) {
    return (valueB * valueB) - (4 * valueA * valueC);
}

module.exports = Delta;