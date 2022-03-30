const { a, b } = require('../../1-intro/tipos-de-datos');

describe('Tipos de datos', () => {
  const resultA = typeof a;
  const resultB = typeof b;

  test('A es de tipo "string"', () => {
    expect(resultA).toBe('string');
  });

  test('B es de tipo "number"', () => {
    expect(resultB).toBe('number');
  });
});
