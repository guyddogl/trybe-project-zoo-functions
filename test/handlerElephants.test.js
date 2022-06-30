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
    const elephantsNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(elephantsNames);
  });
  test('Verifica se ao receber averageAge como parâmetro a função handlerElephants retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Verifica se ao receber location como parâmetro a função handlerElephants retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Verifica se ao receber popularity como parâmetro a função handlerElephants retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Verifica se ao receber availability como parâmetro a função handlerElephants retorna um array com a relação de dias em que é possível visitar elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('availability')).not.toEqual(['Friday', 'Saturday', 'Sunday']);
  });
  test('Verifica se retorna "Parâmetro inválido, é necessário uma string" ao identificar que o parâmetro recebido não é uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Verifica se ao receber sex como parâmetro a função handlerElephants retorna null', () => {
    expect(handlerElephants('sex')).toBeNull();
  });
});
