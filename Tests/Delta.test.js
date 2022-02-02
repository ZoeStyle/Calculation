const delta = require('../Domain/ValuObjects/Delta');

test('Return Value Must Be 80', () => {
    const valid = delta(1, 10, 5);
    expect(valid).toBe(80);
});

test('Return Value Must Be 2420', () => {
    const valid = delta(2, 50, 10);
    expect(valid).toBe(2420);
});