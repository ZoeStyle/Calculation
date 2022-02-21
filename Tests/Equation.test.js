'use strict'

const equation = require('../Domain/Entities/Equation');

test('validating the value of x1', () => {
    const valid = equation(1, 10, 5);
    expect(valid?.x1).toBe('-0.53');
});

test('validating the value of x2', () => {
    const valid = equation(1, 10, 5);
    expect(valid?.x2).toBe('-9.47');
});

test('validating if there is an error when informing the valueA zeroed', () => {
    const valid = equation(0, 10, 5);
    expect(valid?.message).toBe('The values ​​entered are not a 2nd degree equation');
});

test('validating if there is an error when informing the valueB and C zeroed', () => {
    const valid = equation(1, 0, 0);
    expect(valid?.message).toBe('ValueB and valueC are set to zero');
});

test('Delta result is negative', () => {
    const valid = equation(10, 1, 5);
    expect(valid?.message).toBe('The values ​​entered are not real roots');
});