const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('Testa se ao receber undefined como parâmetro a função handlerElephants retorna undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
});
