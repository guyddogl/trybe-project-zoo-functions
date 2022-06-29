const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
