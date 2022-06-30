const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('Verifica se getOpeningHours retorna um objeto com todos os horários de funcionamento caso não receba parâmetro', () => {
    const noParam = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    }
    expect(getOpeningHours()).toEqual(noParam);
  });
  test('Verifica se getOpeningHours retorna "The zoo is closed" ao receber "Monday" e "09:00-AM" como parâmetros', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
});
