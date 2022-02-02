'use strict'

const BhaskaraHandler = require('../Domain/Handlers/BhaskaraHandler');

test('empty or null past request', () => {
    const valid = BhaskaraHandler();
    expect(valid?.message).toBe('It is necessary to inform something in the request');
});

test('do not inform the valueA', () => {
    const request = { 'valueB': 10, 'valueC': 5 }
    const valid = BhaskaraHandler(request);
    expect(valid?.message).toBe('It is mandatory to inform the valueA and valueB and valueC');
});

test('inform the null valueA', () => {
    const request = { 'valueA': null, 'valueB': 10, 'valueC': 5 }
    const valid = BhaskaraHandler(request);
    expect(valid?.message).toBe('It is mandatory to inform the valueA and valueB and valueC');
});

test('do not inform the valueB', () => {
    const request = { 'valueA': 1, 'valueC': 5 }
    const valid = BhaskaraHandler(request);
    expect(valid?.message).toBe('It is mandatory to inform the valueA and valueB and valueC');
});

test('inform the null valueB', () => {
    const request = { 'valueA': 1, 'valueB': null, 'valueC': 5 }
    const valid = BhaskaraHandler(request);
    expect(valid?.message).toBe('It is mandatory to inform the valueA and valueB and valueC');
});

test('do not inform the valueC', () => {
    const request = { 'valueA': 1, 'valueB': 10 }
    const valid = BhaskaraHandler(request);
    expect(valid?.message).toBe('It is mandatory to inform the valueA and valueB and valueC');
});

test('inform the null valueC', () => {
    const request = { 'valueA': 1, 'valueB': 10, 'valueC': null }
    const valid = BhaskaraHandler(request);
    expect(valid?.message).toBe('It is mandatory to inform the valueA and valueB and valueC');
});

test('Return Value From X1 Must Be -0.5278640450004204', () => {
    const request = { 'valueA': 1, 'valueB': 10, 'valueC': 5 }
    const valid = BhaskaraHandler(request);
    expect(valid?.x1).toBe(-0.5278640450004204);
});

test('Return Value From X2 Must Be -9.47213595499958', () => {
    const request = { 'valueA': 1, 'valueB': 10, 'valueC': 5 }
    const valid = BhaskaraHandler(request);
    expect(valid?.x2).toBe(-9.47213595499958);
});