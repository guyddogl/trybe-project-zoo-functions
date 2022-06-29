const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('Verifica se ao receber undefined como parâmetro a função handlerElephants retorna undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  test('Verifica se ao receber count como parâmetro a função handlerElephants retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verifica se ao receber names como parâmetro a função handlerElephants retorna um array com os nomes dos elefantes', () => {
    const elephantsNames = ['Ilana', 'Orval', 'Bea', 'Jefferson']
    expect(handlerElephants('names')).toEqual(elephantsNames);
  });
  test('Verifica se ao receber averageAge como parâmetro a função handlerElephants retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Verifica se ao receber location como parâmetro a função handlerElephants retorna a a localização dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
