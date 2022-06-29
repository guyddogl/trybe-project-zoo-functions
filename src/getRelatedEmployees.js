const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return console.log(managerId);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
