'use strict'


exports.resolve_equacao_segundo_grau = (a, b, c) => {
    if (a !== 0 && isNumber(a) && isNumber(b) && isNumber(c)) {
        const delta = b * b - (4 * a * c);
        let raiz = 0;
        if (delta < 0)
            return {
                'error': 'Nao raizes reais'
            };
        else if (b === 0 && c === 0)
            return {
                'error': '0 0'
            };
        else
            raiz = Math.sqrt(delta);

        const x1 = (-b + raiz) / (2 * a);
        const x2 = (-b - raiz) / (2 * a);

        return {
            'x1': x1,
            'x2': x2
        }
    }
    else
        return {
            'error': 'Nao e uma equacao de segundo grau!'
        };
};

function isNumber(str) {
    return !isNaN(str);
}