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
  test('Verifica se getOpeningHours retorna "The zoo is closed" ao receber "Wednesday" e "09:00-AM" como parâmetros', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('Verifica se getOpeningHours retorna "The zoo is open" ao receber "Wednesday" e "09:00-AM" como parâmetros', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Verifica se getOpeningHours retorna um erro ao receber ao receber uma string no parâmetro hour', () => {
    expect(() => { getOpeningHours('Tuesday', '9 horas'); }).toThrow('The hour should represent a number');
    // https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
  });
  test('Verifica se getOpeningHours retorna um erro ao receber ao receber uma abreviação de hora diferente de AM ou PM', () => {
    expect(() => { getOpeningHours('Tuesday', '09:00-SM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
