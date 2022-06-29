const data = require('../data/zoo_data');
const { employees } = data;
// console.log(employees);
function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // const responsibleFor = employees.find((manager) => manager.id === managerId).responsibleFor;
  // console.log(responsibleFor);
  const responsibleFor2 = employees.filter((employee) => employee.managers.includes(managerId));
  return responsibleFor2.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
