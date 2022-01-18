'use strict'

const model = require('../models/formula-model');

exports.post = (req, res, next) => {

    const a = req.body?.a;
    const b = req.body?.b;
    const c = req.body?.c;

    if (a === null || b === null || c === null) {
        req.status(400).send({
            Error: "E necessario informar todos os parametros a,b,c"
        });
    }
    else {
        var result = model.resolve_equacao_segundo_grau(a, b, c);
        res.status(200).send(result);
    }
};

function resolve_funcao_segundo_grau(a, b, c) {

}

function isNumber(value) {
    return !isNaN(value)
}