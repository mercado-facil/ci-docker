const { soma } = require('../src/index');

describe('Função soma', () => {
  test('deve somar 2 + 3 corretamente', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('deve somar números negativos', () => {
    expect(soma(-1, -2)).toBe(-3);
  });

  test('deve somar positivo e negativo', () => {
    expect(soma(10, -3)).toBe(7);
  });

  test('deve somar zero corretamente', () => {
    expect(soma(0, 0)).toBe(0);
  });
});