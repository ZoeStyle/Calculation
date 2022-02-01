const raiz = require('../Domain/ValuObjects/Raiz');

test('Return Value From X1 Must Be -0.5278640450004204', () => {
    const valid = raiz(1, 10, 80);
    expect(valid?.x1).toBe(-0.5278640450004204);
});

test('Return Value From X2 Must Be -9.47213595499958', () => {
    const valid = raiz(1, 10, 80);
    expect(valid?.x2).toBe(-9.47213595499958);
});