const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('Testa se ao receber undefined como parâmetro a função handlerElephants retorna undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  test('Testa se ao receber count como parâmetro a função handlerElephants retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se ao receber names como parâmetro a função handlerElephants retorna um array com os nomes dos elefantes', () => {
    const elephantsNames = ['Ilana', 'Orval', 'Bea', 'Jefferson']
    expect(handlerElephants('names')).toEqual(elephantsNames);
  });
});
